export type Locale = "en" | "ms";

export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "ms", label: "Bahasa Melayu", short: "MS" },
];

export const DEFAULT_LOCALE: Locale = "en";

export interface NavItem {
  key: string;
  label: string;
}

export type Page = keyof LocaleContent;

export interface LocaleContent {
  nav: {
    brand: string;
    items: NavItem[];
  };
  footer: {
    tagline: string;
    projectTitle: string;
    connectTitle: string;
    rights: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    missionQuote: string;
    approachTitle: string;
    approachSubtitle: string;
    highlights: { title: string; description: string }[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    communitiesTitle: string;
    communitiesSubtitle: string;
    communityLabel: string;
    communities: string[];
  };
  about: {
    headerTitle: string;
    headerSubtitle: string;
    problemTitle: string;
    problemParagraphs: string[];
    statBigNumber: string;
    statBigLabel: string;
    statBigSub: string;
    statSmallNumber: string;
    statSmallLabel: string;
    statSmallSub: string;
    approachTitle: string;
    approachSubtitle: string;
    approachItems: { title: string; description: string }[];
    communitiesTitle: string;
    communitiesSubtitle: string;
    communities: { name: string; subtitle: string; description: string }[];
  };
  research: {
    headerTitle: string;
    headerSubtitle: string;
    area1Badge: string;
    area1Title: string;
    area1Intro: string;
    area1Cards: { title: string; description: string }[];
    area2Badge: string;
    area2Title: string;
    area2Intro: string;
    area2Body: string;
    area2Stats: { stat: string; label: string; description: string }[];
    area3Badge: string;
    area3Title: string;
    area3Intro: string;
    area3PrinciplesTitle: string;
    area3Principles: { title: string; description: string }[];
  };
  resources: {
    headerTitle: string;
    headerSubtitle: string;
    dictionariesTitle: string;
    dictionariesSubtitle: string;
    dictionaryCardLabel: string;
    dictionaryButton: string;
    statusActive: string;
    statusInProgress: string;
    dictionaries: { language: string; words: string; status: string }[];
    corporaTitle: string;
    corporaSubtitle: string;
    corporaRestricted: string;
    corporaButton: string;
    corpora: { title: string; description: string; tags: string[] }[];
    publicationsTitle: string;
    publicationsSubtitle: string;
    publications: { title: string; type: string; venue: string; status: string }[];
    toolsTitle: string;
    toolsSubtitle: string;
    toolsButton: string;
    tools: { initial: string; title: string; description: string }[];
  };
  people: {
    headerTitle: string;
    headerSubtitle: string;
    piTitle: string;
    piSubtitle: string;
    principalInvestigators: { name: string; role: string; affiliation: string; bio: string }[];
    researchTeamTitle: string;
    researchers: { name: string; role: string; focus: string }[];
    partnersTitle: string;
    partnersSubtitle: string;
    partnersIntro: string;
    communityPartners: { name: string; community: string; role: string }[];
    collaboratorsTitle: string;
    collaboratorsSubtitle: string;
    collaborators: { name: string; type: string; fullName: string }[];
  };
  blogs: {
    headerTitle: string;
    headerSubtitle: string;
    readMore: string;
    loadMore: string;
    newsletterTitle: string;
    newsletterSubtitle: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    categories: { name: string; count: number }[];
    posts: { id: number; title: string; category: string; date: string; excerpt: string }[];
  };
  contact: {
    headerTitle: string;
    headerSubtitle: string;
    infoTitle: string;
    infoIntro: string;
    contactInfo: { title: string; details: string[] }[];
    formTitle: string;
    formFirstName: string;
    formLastName: string;
    formEmail: string;
    formSubject: string;
    formSubjectPlaceholder: string;
    formSubjectOptions: string[];
    formMessage: string;
    formMessagePlaceholder: string;
    formButton: string;
    teamTitle: string;
    teamSubtitle: string;
    teamLocations: { name: string; role: string; location: string; email: string }[];
    mapTitle: string;
    mapSubtitle: string;
    mapPlaceholderTitle: string;
    mapPlaceholderSubtitle: string;
  };
}

export type SiteContent = Record<Locale, LocaleContent>;
