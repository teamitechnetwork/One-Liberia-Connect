export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };
export const site = {
  name: "One Liberia Connect",
  tagline: "In the Community, Built by the Diaspora.",
  parent: "A division of One Liberia Enterprise Corporation",
  email: "Contact details are being finalized",
  phone: "Contact details are being finalized",
  whatsapp: "Contact details are being finalized",
  location: "Monrovia, Liberia",
  contactNote: "Contact details are placeholders and can be edited in content/site.ts.",
  socials: [
    { label: "LinkedIn", href: "" },
    { label: "Facebook", href: "" },
    { label: "X", href: "" },
    { label: "WhatsApp", href: "" },
  ],
};
export type PageHeroContent = {
  eyebrow: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  variant?: "standard" | "document";
  actions?: { label: string; href: string }[];
};

export const pageHeroes: Record<string, PageHeroContent> = {
  "About Us": {
    eyebrow: "Our story",
    intro: "We connect communities, schools, diaspora groups, and partners around practical plans for affordable internet access.",
    image: "/images/partners-tower.jpg",
    imageAlt: "Wireless equipment above a Liberian neighborhood",
    actions: [
      { label: "Explore our cause", href: "/our-cause" },
      { label: "Connect your community", href: "/connect-your-community" },
    ],
  },
  "Connect Your Community": {
    eyebrow: "Community action",
    intro: "Tell us where connectivity may be needed next.",
    image: "/images/mission.jpg",
    imageAlt: "One Liberia team speaking with residents at a local market",
    actions: [
      { label: "Request your community", href: "#request-form" },
      { label: "Explore our services", href: "/our-services" },
    ],
  },
  Contact: {
    eyebrow: "Start a conversation",
    intro: "Community request, school partnership, investor inquiry, or general question—start the conversation with the right team.",
    image: "/images/approach-meeting.jpg",
    imageAlt: "Community and project team members planning together on a video call",
    actions: [
      { label: "Community request", href: "/connect-your-community" },
      { label: "Partnership inquiry", href: "/partners-and-investors#partnership-form" },
    ],
  },
  "Our Cause": {
    eyebrow: "Why this work matters",
    intro: "Opportunity should not depend on where you live.",
    image: "/images/vision.jpg",
    imageAlt: "Two Liberians learning together with a laptop",
    actions: [
      { label: "Explore our services", href: "/our-services" },
      { label: "Share your community", href: "/connect-your-community" },
    ],
  },
  "Our Services": {
    eyebrow: "Connectivity, built for place",
    intro: "We are developing an approach to connectivity shaped by community requests, local engagement, and practical partnerships.",
    image: "/images/about-technician.jpg",
    imageAlt: "Communications tower against a clear blue sky",
    actions: [
      { label: "Explore school hubs", href: "#technology-hubs" },
      { label: "Partner with us", href: "/partners-and-investors#partnership-form" },
    ],
  },
  "Partners and Investors": {
    eyebrow: "Build with us",
    intro: "Build the relationships that make sustainable connectivity possible.",
    image: "/images/connect-hero.jpg",
    imageAlt: "Two Liberians sharing a moment while learning with a laptop",
    actions: [
      { label: "Start a partnership inquiry", href: "#partnership-form" },
      { label: "Explore our services", href: "/our-services" },
    ],
  },
  "Privacy Policy": {
    eyebrow: "Privacy and information",
    intro: "A clear overview of how information submitted through our forms is used.",
    variant: "document",
  },
  "Terms of Use": {
    eyebrow: "Using this website",
    intro: "A plain-language guide to the website and the inquiries you submit.",
    variant: "document",
  },
};
export const services = [
  { title: "Community broadband", text: "We develop internet access for communities where better connectivity can support daily life, learning, and local enterprise. Our expansion approach starts with community requests, local engagement, and a review of what is needed to establish and sustain service.", href: "/connect-your-community", icon: "signal" },
  { title: "Technology hubs in partner schools", text: "We are planning technology hubs in partner schools to bring internet access and practical digital learning closer to the communities we serve.", href: "/our-services#technology-hubs", icon: "school" },
  { title: "Connectivity partnerships", text: "We welcome schools, community organizations, and local businesses interested in working with us to improve internet access in line with local needs.", href: "/contact?type=general", icon: "handshake" },
];
export const steps = [
  { title: "Tell us about your community", text: "Share your community and county, your connection to the area, and the needs you would like us to understand. You can also suggest a school or introduce a local contact." },
  { title: "Bring your community into the conversation", text: "Invite your hometown association, school leaders, church, or alumni group to participate. Community champions help explain the local need and identify possible partners." },
  { title: "We review demand and feasibility", text: "We consider community interest alongside coverage needs, suitable sites, power, local partnerships, and the resources required to establish sustainable service. This information helps guide a review of whether a community coverage project or installation could proceed." },
];
