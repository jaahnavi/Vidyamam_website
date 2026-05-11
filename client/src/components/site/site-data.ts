export type NavLinkItem = {
  href: string;
  label: string;
};

export type ChakraItem = {
  name: string;
  meaning: string;
  color: string;
  tone: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
};

export type TrustSignal = {
  label: string;
  value: string | number;
  description?: string;
};

export type Certification = {
  title: string;
  issuer: string;
};

export const navLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export const chakras: ChakraItem[] = [
  {
    name: "Crown Chakra",
    meaning: "Supports clarity, spiritual connection, and a wider sense of calm.",
    color: "#7B2CBF",
    tone: "Spiritual Awareness",
  },
  {
    name: "Third Eye Chakra",
    meaning: "Encourages intuition, reflection, and mental steadiness.",
    color: "#3A0CA3",
    tone: "Inner Insight",
  },
  {
    name: "Throat Chakra",
    meaning: "Helps with honest expression and a more relaxed communication flow.",
    color: "#0077B6",
    tone: "Clear Expression",
  },
  {
    name: "Heart Chakra",
    meaning: "Brings emotional softness, compassion, and harmony within relationships.",
    color: "#2D6A4F",
    tone: "Compassion",
  },
  {
    name: "Solar Plexus Chakra",
    meaning: "Strengthens confidence, steadiness, and a grounded sense of self.",
    color: "#F4A261",
    tone: "Inner Strength",
  },
  {
    name: "Sacral Chakra",
    meaning: "Supports emotional flow, creativity, and a healthier connection to joy.",
    color: "#E76F51",
    tone: "Vital Flow",
  },
  {
    name: "Root Chakra",
    meaning: "Encourages stability, security, and a calm connection with the body.",
    color: "#D62828",
    tone: "Grounding",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote: "For my health issues she has treated & guided me very effectively.",
    author: "Rashmi Pasarkar",
  },
  {
    quote: "Vidya's energy is soothing, strong and healing in nature.",
    author: "Saritha Nayak",
  },
  {
    quote: "I wish her success in healing more people.",
    author: "Veena Raina",
  },
];

export const clinicDetails = {
  name: "Vidya's Holistic Healing",
  phone: "+1(469)468-5711",
  phoneHref: "tel:+1(469)468-5711",
  whatsappHref: "9401 Meadow Grounds PL, Frisco, Tx, 75035",
  address: "H-4, Soba Savera Apartment, Bibwewadi, , Maharashtra 411037, India",
  hours: "Opens 11 AM - 5pm CST",
};

export const whyChooseUs = [
  "Compassionate guidance focused on emotional ease and everyday balance.",
  "Gentle, non-technical explanations that help you feel informed and comfortable.",
  "A calm clinic setting designed for clarity, trust, and personal attention.",
  "Supportive healing sessions that respect your pace and wellbeing goals.",
];

export const trustSignals: TrustSignal[] = [
  {
    label: "Years of Experience",
    value: "15+",
    description: "Dedicated to holistic healing and Pranic Healing practice",
  },
  {
    label: "Clients Supported",
    value: "2000+",
    description: "People who have experienced healing and transformation",
  },
  {
    label: "Session Success Rate",
    value: "95%",
    description: "Clients report improved calm and emotional clarity",
  },
];

export const certifications: Certification[] = [
  {
    title: "Certified Pranic Healer",
    issuer: "Institute of Pranic Healing",
  },
  {
    title: "Advanced Chakra Balancing Specialist",
    issuer: "International Holistic Healing Association",
  },
  {
    title: "Certified Wellness Counselor",
    issuer: "Holistic Health Institute",
  },
];
