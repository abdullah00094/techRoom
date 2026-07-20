"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function DirManager() {
  const pathname = usePathname();

  useEffect(() => {
    const isAr = pathname.startsWith("/ar");
    const dir = isAr ? "rtl" : "ltr";
    const lang = isAr ? "ar" : "en";
    
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.style.direction = dir;
    document.body.dir = dir;
  }, [pathname]);

  return null;
}
