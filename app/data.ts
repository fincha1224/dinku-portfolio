// All site content lives here so it can be edited without touching layout code.
// Keep every claim verifiable. Client names are intentionally generalized.

export type Domain = 'security' | 'ai' | 'operations' | 'industrial';

export const domains: { id: Domain | 'all'; label: string }[] = [
  { id: 'all', label: 'All work' },
  { id: 'security', label: 'Security & enterprise' },
  { id: 'ai', label: 'AI platforms' },
  { id: 'operations', label: 'Business & operations' },
  { id: 'industrial', label: 'Chemical industries' },
];

export type Work = {
  domain: Domain;
  title: string;
  context: string;
  period: string;
  summary: string;
  outcome: string;
  details: string[];
  tools?: string;
  link?: { href: string; label: string };
};

export const work: Work[] = [
  {
    domain: 'security',
    title: 'Security policy and risk model for a state health-insurance marketplace',
    context: 'Accenture · state government healthcare program under federal (CMS) oversight',
    period: 'Go-live 2013 → 2017',
    summary:
      'Wrote the security policy and defined the risk-scoring model for a statewide marketplace serving more than 8 million insurance buyers.',
    outcome: 'Live on 1 October 2013 · recognized by team and leadership',
    details: [
      'Authored the program security policy against FISMA, NIST SP 800-53 and the HIPAA Security Rule.',
      'Defined the security risk-scoring model and severity levels using NIST SP 800-30 and FIPS 199.',
      'Delivered identity and access management with Oracle Unified Directory, plus OBIEE reporting.',
      'Supported the program from the October 2013 go-live and stayed with it for four years.',
    ],
    tools: 'IAM · Oracle Unified Directory · OBIEE · NIST RMF',
  },
  {
    domain: 'security',
    title: 'Global endpoint protection and data-loss prevention rollout',
    context: 'Accenture · supermajor oil & gas client',
    period: '2011 – 2014',
    summary:
      'Deployed endpoint protection and DLP across a global estate, coordinating with engineering teams on several continents.',
    outcome: '120 sites · 220 servers',
    details: [
      'Planned and coordinated deployment waves across regions and time zones.',
      'Worked with the client’s global infrastructure and security teams to keep operations running during cut-over.',
      'Supported trading-platform (Endur) work for a second energy major.',
    ],
    tools: 'Symantec Endpoint Protection · DLP',
  },
  {
    domain: 'security',
    title: 'Code-quality control for a 12-developer engineering team',
    context: 'Accenture · energy-sector application team',
    period: '2011 – 2014',
    summary:
      'Introduced structured code review into the development process and owned code quality for the team.',
    outcome: 'Fewer coding errors reaching release',
    details: [
      'Designed the review checkpoints and made them part of the normal delivery workflow.',
      'Acted as the quality gate for a 12-person development team.',
    ],
  },
  {
    domain: 'security',
    title: 'Oracle financial and operational reporting',
    context: 'Accenture · enterprise technology consulting',
    period: '2011 – 2017',
    summary:
      'Integrated Oracle performance, reporting and analytics systems to give finance and operations leaders clearer numbers.',
    outcome: 'Reported 10–15% OPEX and up to 20% DPO improvement',
    details: [
      'Connected reporting to operational and financial sources so leaders worked from one view.',
      'Improvements are as reported by the client program.',
    ],
    tools: 'Oracle · OBIEE',
  },
  {
    domain: 'security',
    title: 'Hybrid cryptography and steganography research',
    context: 'Master’s thesis · Howard University',
    period: '2011',
    summary:
      'Designed and built a MATLAB system that combines encryption and hidden-data techniques in both orders: crypto-steg and steg-crypto.',
    outcome: 'Award-recognized · published by ProQuest (UMI 1490521)',
    details: [
      '“Hybrid Information Security Models: Crypto-Steg and Steg-Crypto Systems.” Defended January 2011.',
      'Advisor: Wayne Patterson, Ph.D. Held at Howard University Library.',
    ],
    tools: 'MATLAB · cryptography · steganography',
  },
  {
    domain: 'ai',
    title: 'Risk Intelligence Engine (IDVerifyPro)',
    context: 'Atronus Technologies · enterprise document verification',
    period: '2025 – today',
    summary:
      'An AI platform that checks identity and financial documents for fraud and completeness, built for property managers and enterprise screening teams.',
    outcome: 'Rules for 5 jurisdictions: US, Canada, UK, Australia, UAE',
    details: [
      'Combines OCR, vision AI and biometric checks, then reasons across documents to catch inconsistencies.',
      'Multi-tenant design with tenant isolation and role-based access.',
      'Dashboard gives reviewers risk analytics and an affordability calculation for each applicant.',
    ],
    tools: 'n8n · Supabase · Claude · Google Vision',
  },
  {
    domain: 'ai',
    title: 'Aklil: consulting and funding intelligence',
    context: 'Atronus Technologies · aklil.app',
    period: '2026 – today',
    summary:
      'Software that guides consultants and grant teams from finding an opportunity to delivering the final document.',
    outcome: '33 workflows: 20 for consulting, 13 for funding',
    details: [
      'Every research claim is labelled verified, likely or unconfirmed, so users see what still needs checking.',
      'Includes win strategy, compliance review and reviewer simulation before anything is submitted.',
      'Exports finished documents to Word and PDF.',
    ],
    tools: 'React · Cloudflare Workers · Supabase · Stripe',
    link: { href: 'https://aklil.app', label: 'Visit aklil.app' },
  },
  {
    domain: 'ai',
    title: 'OmniBotX: multilingual customer assistant',
    context: 'Atronus Technologies · omnibotx.ai',
    period: 'Ongoing',
    summary:
      'A customer-service assistant that businesses brand as their own and that answers customers in their language.',
    outcome: 'Live with paying customers',
    details: [
      'Each business gets its own branded assistant on a shared engine.',
      'Built-in translation lets one assistant serve many language communities.',
      'Usage limits are enforced on actual cost so plans stay profitable.',
    ],
    tools: 'Cloudflare Workers · Stripe · Claude',
    link: { href: 'https://omnibotx.ai', label: 'Visit omnibotx.ai' },
  },
  {
    domain: 'ai',
    title: 'AI & Automation Assessment Agent',
    context: 'OmniServe Texas',
    period: '2026 – today',
    summary:
      'A conversational assessment that shows a business where AI and automation would save time, with a scored result and a paid detailed report.',
    outcome: 'Live at omniservetexas.com',
    details: [
      'Free self-assessment score shown immediately.',
      'Detailed report and review call available for businesses that want a plan.',
    ],
    link: { href: 'https://omniservetexas.com/assessment-agent', label: 'Take the assessment' },
  },
  {
    domain: 'ai',
    title: 'AtronusEcoChem: chemical R&D decision support',
    context: 'Atronus Technologies · internal platform',
    period: '2026 – today',
    summary:
      'An AI system that reviews formulation and scale-up decisions the way a senior chemistry and engineering team would.',
    outcome: 'Seven specialist reviewers and one decision lead',
    details: [
      'Each specialist covers one discipline: formulation, materials, scale-up, quality by design, experiment design, QC and regulatory.',
      'Evidence is graded from measured data down to assumption; assumptions cannot carry a production decision.',
      'Product knowledge is kept in separate modules so findings never leak between products.',
    ],
  },
  {
    domain: 'operations',
    title: 'Transportation company scale-up',
    context: 'Founder and General Manager · AscendFreight & Transportation Network',
    period: '2017 – 2023',
    summary:
      'Founded and ran a transportation company for six years, growing the fleet seven-fold while carrying freight for national logistics partners.',
    outcome: '2 → 14 trucks · about $1.2M revenue',
    details: [
      'Negotiated and managed contracts with C.H. Robinson, J.B. Hunt, XPO, FedEx and Amazon Freight.',
      'Kept safety, insurance, driver and compliance records ready for DOT and FMCSA audits.',
      'Selected and installed the dispatch, tracking and back-office software, experience that later shaped the Atronus products.',
    ],
  },
  {
    domain: 'operations',
    title: 'AfricaBridge Consulting Group',
    context: 'Atronus Technologies · advisory and research',
    period: '2026 – today',
    summary:
      'Management consulting and grant-writing practice serving organizations that work between North America and Africa.',
    outcome: 'Published the 2026 North America–East Africa corridor outlook',
    details: [
      'Fixed-fee engagements with published price ranges and a written scope before work begins.',
      'A research institute publishes market and investment briefs for investors and partners.',
    ],
    link: { href: 'https://africabridgeconsulting.com', label: 'Visit AfricaBridge' },
  },
  {
    domain: 'industrial',
    title: 'Accredited petroleum testing laboratory',
    context: 'Quality assurance manager · oil & gas testing',
    period: 'Earlier career',
    summary:
      'Set up a laboratory accredited to ISO 9001 and ISO/IEC 17025 and ran its quality system, including Jet A-1 aviation fuel testing.',
    outcome: 'ISO 9001 and ISO/IEC 17025 accreditation',
    details: [
      'Wrote and maintained procedures to ASTM and IP test methods.',
      'Ran equipment calibration, including in a jet fuel testing lab.',
      'This experience now feeds the ISO/IEC 17025 method kits sold through OmniServe Labs.',
    ],
  },
  {
    domain: 'industrial',
    title: 'ISO/IEC 17025 method kits for fuel laboratories',
    context: 'OmniServe Labs · labs.omniservetexas.com',
    period: '2026 – today',
    summary:
      'Turned my accredited-laboratory experience into ready-to-use ISO/IEC 17025 documentation kits for fuel and petroleum testing labs.',
    outcome: 'Jet A-1 and diesel kits live on Payhip',
    details: [
      'Jet A-1 Lab ISO/IEC 17025 Method Kit and Diesel Lab ISO/IEC 17025 Method Kit for labs preparing for or maintaining accreditation.',
      'ASTM D4052 density QC workbook, with a free version for lab quality managers.',
    ],
    link: { href: 'https://payhip.com/OmniServeTexas', label: 'View the kits on Payhip' },
  },
  {
    domain: 'industrial',
    title: 'Laboratory Equipment & Asset Solutions',
    context: 'AfricaBridge Consulting Group · africabridgeconsulting.com',
    period: '2026 – today',
    summary:
      'Sources, commissions and maintains testing equipment for non-clinical laboratories, universities, quality authorities and industry, end to end.',
    outcome: 'Sourcing · installation and calibration · asset recovery',
    details: [
      'Specification and sourcing: needs analysis, vendor-neutral specifications, budgeting, procurement, freight and customs coordination.',
      'Installation, calibration against traceable standards, and IQ/OQ/PQ validation for accreditation and audit readiness.',
      'Lifecycle and asset management: preventive maintenance, spares, operator training, calibration schedules, asset tracking and recovery of value from surplus equipment.',
    ],
    link: { href: 'https://africabridgeconsulting.com/lab-equipment.html', label: 'View the service' },
  },
  {
    domain: 'industrial',
    title: 'Alkyd resin and coatings production',
    context: 'Chemist and production manager',
    period: 'Earlier career',
    summary:
      'Led production of alkyd resins, paints and coatings, responsible for process control and product quality.',
    outcome: 'Plant-level production and QA ownership',
    details: ['Process oversight, batch quality control and technical problem-solving on the production floor.'],
  },
  {
    domain: 'industrial',
    title: 'Fuel standards, waste reduction and renewable energy',
    context: 'National standards and research institutions',
    period: 'Earlier career',
    summary:
      'Developed fuel and lubricant standards, ran factory waste-reduction workshops, and researched renewable energy.',
    outcome: 'Led government delegations to Brazil and Kenya',
    details: [
      'Fuel oil and lubricant specification work at the national quality and standards institute.',
      'Delivered World Bank-sponsored waste-reduction workshops for factories.',
      'National renewable-energy and biofuels research.',
    ],
  },
];

export type Venture = {
  name: string;
  what: string;
  status: 'Live' | 'In development' | 'Research';
  href?: string;
  mono: string;
  logo?: string;
};

export const ventures: Venture[] = [
  { name: 'Aklil', mono: 'Ak', logo: '/images/aklil-mark.png', what: 'Executive engagement and grant development software: 20 consulting and 13 funding workflows.', status: 'Live', href: 'https://aklil.app' },
  { name: 'OmniBotX', mono: 'OB', logo: '/images/omnibotx-mark.png', what: 'Multilingual AI customer-support platform, branded for each business, in 100+ languages.', status: 'Live', href: 'https://omnibotx.ai' },
  { name: 'Risk Intelligence Engine', mono: 'RI', logo: '/images/rie-mark.png', what: 'Risk intelligence and identity verification for documents and applicants (IDVerifyPro).', status: 'In development' },
  { name: 'OmniServe Texas', mono: 'OS', logo: '/images/omniserve-mark.png', what: 'AI-first professional services: notary, translation, bookkeeping, assessments.', status: 'Live', href: 'https://omniservetexas.com' },
  { name: 'OmniServe Labs', mono: 'OL', what: 'Lab compliance: ISO/IEC 17025 method kits for Jet A-1 and diesel testing labs, sold on Payhip.', status: 'Live', href: 'https://labs.omniservetexas.com' },
  { name: 'AfricaBridge Consulting', mono: 'AB', logo: '/images/africabridge-mark.png', what: 'Africa market entry and investment advisory, grant writing and research, plus laboratory equipment and asset solutions.', status: 'Live', href: 'https://africabridgeconsulting.com' },
  { name: 'AtronusEcoChem', mono: 'EC', what: 'Sustainable industrial chemistry solutions, starting with VerdeStripp, a bio-based coatings stripper.', status: 'In development' },
  { name: 'EvidenceFlow', mono: 'EF', logo: '/images/evidenceflow-mark.png', what: 'Transparent AI research: from data to evidence to decisions.', status: 'Research', href: 'https://github.com/fincha1224/evidenceflow_v2' },
  { name: 'Ascend Freight', mono: 'AF', what: 'Logistics, freight and supply operations.', status: 'Live', href: 'https://ascendfreight.com' },
];

export const experience = [
  {
    when: 'Nov 2023 – today',
    role: 'Enterprise AI Architect',
    org: 'Atronus Technologies · Houston, Texas',
    text: 'Designs, builds and runs a portfolio of AI platforms and professional-services businesses, owning architecture, security and go-to-market.',
  },
  {
    when: 'Sep 2017 – Oct 2023',
    role: 'Founder & General Manager',
    org: 'AscendFreight & Transportation Network · Houston, Texas',
    text: 'Grew a transportation company from 2 to 14 trucks and about $1.2M in revenue, working with C.H. Robinson, J.B. Hunt, XPO, FedEx and Amazon Freight.',
  },
  {
    when: 'Aug 2014 – Aug 2017',
    role: 'Technology Consulting – Security Consultant',
    org: 'Accenture · United States',
    text: 'Promoted from analyst. Security policy, risk modelling, IAM and analytics for a state health-insurance marketplace, plus a year of digital strategy work.',
  },
  {
    when: 'Jan 2011 – Jul 2014',
    role: 'Technology Consulting – Security Analyst',
    org: 'Accenture · United States',
    text: 'Global endpoint protection and DLP for oil & gas clients; code-quality control; marketplace go-live in 2013.',
  },
  {
    when: 'Jul 2009 – Dec 2010',
    role: 'Teaching Assistant and System Administrator',
    org: 'Howard University · Washington, DC',
    text: 'Taught alongside graduate study and administered Windows Server, Active Directory, DNS, DHCP and SQL Server for academic systems.',
  },
  {
    when: 'Earlier career',
    role: 'Quality Manager, Chemist and Researcher',
    org: 'Petroleum testing, coatings, crown cork manufacturing and standards institutions',
    text: 'Accredited laboratory leadership, alkyd resin and coatings production, crown cork production quality control, national fuel standards, and renewable-energy and biofuels research.',
  },
];

export type Insight = { kind: string; title: string; where: string; summary: string; href?: string; linkLabel?: string };

// Add new articles and blog posts to the top of this list.
export const insights: Insight[] = [
  {
    kind: 'Article',
    title: 'Your System Prompt Is a Security Control. Anthropic Just Proved It.',
    where: 'LinkedIn · August 2026',
    summary: 'Why the instructions given to an AI model belong in an organization’s security controls, drawing on Anthropic’s July 2026 disclosure from a cyber-evaluation.',
    href: 'https://www.linkedin.com/in/dinkuadale/recent-activity/articles/',
    linkLabel: 'Read on LinkedIn',
  },
  {
    kind: 'Thesis',
    title: 'Hybrid Information Security Models: Crypto-Steg and Steg-Crypto Systems',
    where: 'Howard University · 2011',
    summary: 'Master’s thesis combining encryption and steganography in both orders. Award-recognized; published by UMI/ProQuest (No. 1490521).',
  },
];
