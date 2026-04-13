export const hero = {
  title: "IT Infrastructure, CCTV & Smart Monitoring for Businesses",
  subtitle:
    "Secure your sites, stabilize your networks, and monitor operations with practical B2B solutions.",
} as const;

/** Hero slider — paths under /public/images */
export const heroSlides = [
  {
    id: "network-setup",
    slug: "network-setup",
    image: "/images/hero-infrastructure.png",
    title: "Network Infrastructure",
    subtitle:
      "Stable, secure connectivity for your business—cabling, switches, Wi‑Fi, and expert troubleshooting.",
  },
  {
    id: "cctv-installation",
    slug: "cctv-installation",
    image: "/images/hero-cctv.png",
    title: "CCTV & Surveillance",
    subtitle:
      "Protect your premises with professional cameras, recording, and remote access you can trust.",
  },
  {
    id: "it-support",
    slug: "it-support",
    image: "/images/hero-it-support.png",
    title: "IT Support",
    subtitle:
      "Responsive technical support so your team and systems keep running without interruption.",
  },
] as const;

export const trustStrip = {
  items: [
    "B2B only — We serve businesses, not individuals",
    "Based in Alexandria, Egypt",
    "Network · CCTV · IT Support · Monitoring",
    "Request Service · Book Site Visit",
  ],
} as const;

export const servicesOverview = {
  title: "Our Services",
  subtitle: "Infrastructure and security solutions for businesses—explore the highlights below.",
  viewAllServices: "View all services",
} as const;

export const networkInfrastructure = {
  title: "Network Infrastructure",
  subtitle: "Technical expertise in business networking.",
  items: ["Office networking", "Router and switch configuration", "WiFi coverage optimization"],
} as const;

export const cctvSection = {
  title: "CCTV & Surveillance Solutions",
  subtitle: "Security and visibility for your premises.",
  items: ["Camera installation", "Security monitoring", "Recording systems"],
} as const;

export const businessMonitoringSection = {
  title: "Business Systems & Monitoring Tools",
  subtitle:
    "Dashboards and tools to track networks, cameras, and alerts—built for business operations.",
} as const;

export const smartMonitoringDashboard = {
  title: "Smart Monitoring Dashboard",
  subtitle: "One place to see devices, cameras, and alerts as we roll out the product.",
  comingSoon:
    "Under development: soon you’ll monitor infrastructure and security from one client dashboard.",
} as const;

export const dashboardFeatures = {
  title: "Dashboard Capabilities",
  subtitle: "Planned highlights for the monitoring experience.",
  features: [
    { title: "Online / Offline Device Monitoring", icon: "device" },
    { title: "Camera Access", icon: "camera" },
    { title: "Alerts & Notifications", icon: "alert" },
  ],
} as const;

export const technologyPartners = {
  title: "Technology Partners",
  subtitle: "We work with trusted brands for infrastructure and security.",
  partners: ["Hikvision", "Cisco", "MikroTik", "TP-Link", "D-Link"],
} as const;

export const howItWorks = {
  title: "How It Works",
  subtitle: "Three steps from first contact to a working solution.",
  steps: [
    { number: 1, title: "Request Service", description: "Reach us by form, WhatsApp, or phone." },
    { number: 2, title: "Site Visit", description: "We assess your site and agree on scope." },
    { number: 3, title: "Install & Support", description: "We install, configure, and stay available for support." },
  ],
} as const;

export const industriesServed = {
  title: "Industries we serve",
  subtitle: "Clinics, offices, warehouses, retail, and more—B2B across sectors.",
  seeHowWeHelp: "See how we help",
  viewAllIndustries: "View all industries",
} as const;

export const whyChooseUs = {
  title: "Why choose TechRoom",
  subtitle: "Technical depth with a practical, business-first mindset.",
  points: [
    {
      title: "Business-focused",
      description: "B2B only—solutions for clinics, offices, warehouses, and retail, not home use.",
    },
    {
      title: "Reliable support",
      description: "One point of contact and predictable response when issues arise.",
    },
    {
      title: "Transparent process",
      description: "Clear scope and pricing from assessment through installation.",
    },
  ],
} as const;

export const projectsPreview = {
  title: "Recent projects",
  subtitle: "Snapshots of CCTV, network, and IT work for businesses like yours.",
  viewAllProjects: "View all projects",
} as const;

export const faqSection = {
  title: "Frequently asked questions",
  subtitle: "Quick answers about our services and how we work.",
} as const;

export const contactSection = {
  title: "Request a Free Consultation",
  subtitle: "WhatsApp, email, phone, or a site visit—we reply quickly.",
  formTitle: "Send us your details",
  formSubtitle: "We use this to prepare a tailored proposal.",
  contactMethods: "Contact methods",
  whatsApp: "WhatsApp",
  email: "Email",
  phone: "Phone",
  bookSiteVisit: "Book Site Visit",
} as const;

export const ctaAfterServices = {
  title: "Ready to get started?",
  subtitle: "Request a service or book a site visit.",
} as const;
