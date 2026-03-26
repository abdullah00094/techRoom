const fs = require("fs");
const path = require("path");
const vm = require("vm");
const ts = require("typescript");

const repoRoot = process.cwd();
const contentDir = path.join(repoRoot, "content");
const enDir = path.join(contentDir, "en");
const arDir = path.join(contentDir, "ar");

const outputFile = path.join(repoRoot, "website contet");

function loadTsModuleExports(tsFile) {
  const source = fs.readFileSync(tsFile, "utf8");

  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2019,
      esModuleInterop: true,
      isolatedModules: true,
    },
  }).outputText;

  // Execute the compiled CommonJS code in a sandbox and collect `exports`.
  const context = vm.createContext({
    exports: {},
    module: { exports: {} },
    require,
    __dirname: path.dirname(tsFile),
    __filename: tsFile,
    console,
  });

  const wrapped = `(function (require, exports, module) { ${compiled}\n; return module.exports; })`;
  const fn = vm.runInContext(wrapped, context);

  const moduleShim = { exports: {} };
  fn(require, context.exports, moduleShim);

  return moduleShim.exports && Object.keys(moduleShim.exports).length > 0 ? moduleShim.exports : context.exports;
}

function isSerializableExportValue(value) {
  if (value === undefined) return false;
  if (value === null) return true;
  if (typeof value === "function") return false;
  if (typeof value === "object") return true;
  return true; // strings, numbers, booleans
}

function getExportKeys(exportsObj) {
  return Object.entries(exportsObj)
    .filter(([k, v]) => k !== "__esModule" && isSerializableExportValue(v))
    .map(([k]) => k);
}

function main() {
  const result = {};

  const enFiles = fs
    .readdirSync(enDir)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => path.basename(f, ".ts"));

  for (const baseName of enFiles) {
    const enPath = path.join(enDir, `${baseName}.ts`);
    const arPath = path.join(arDir, `${baseName}.ts`);

    if (!fs.existsSync(arPath)) {
      // Skip missing pairs.
      continue;
    }

    const enExports = loadTsModuleExports(enPath);
    const arExports = loadTsModuleExports(arPath);

    const keys = new Set([...getExportKeys(enExports), ...getExportKeys(arExports)]);
    result[baseName] = {};

    for (const key of keys) {
      // Only include keys that exist in both locales to match the requested output pattern.
      if (!(key in enExports) || !(key in arExports)) continue;

      result[baseName][key] = {
        contentar: arExports[key],
        contenten: enExports[key],
      };
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(result, null, 2), "utf8");
  // eslint-disable-next-line no-console
  console.log(`Exported website content to: ${outputFile}`);
}

main();

