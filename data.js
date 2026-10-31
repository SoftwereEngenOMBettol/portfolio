/* ============================================================
   PORTFOLIO DATA
   ------------------------------------------------------------
   This is the ONLY file you should need to edit to keep your
   portfolio up to date.

   - Add a skill      -> push a new object into `skills`
   - Add a project     -> push a new object into `projects`
   - Add a certificate -> push a new object into `certificates`

   Nothing else in the site needs to change. index.html reads
   these arrays through script.js and builds the page for you.
   ============================================================ */

/* ---------------- PROFILE ----------------
   Replace the placeholder contact details below with your real
   ones. This is the only personal info you need to touch. */
const profile = {
  name: "Zamared Al Shabibi",
  roles: [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
  ],
  tagline:
    "Software Engineering graduate building full-stack, AI-powered and mobile products.",
  bio:
    "I'm a Software Engineering graduate who enjoys taking a product from a rough idea to a working system — front end, back end, or the interface in between. My final year project paired an AI assistant with a live university system, and outside of coursework I build small full-stack apps, mobile apps, and UX case studies to keep learning by shipping. I'm currently looking for opportunities as a frontend, backend, full-stack, or UI/UX-focused developer.",
  email: "zumurudalshabibi@gmail.com",
  github: "https://github.com/SoftwereEngenOMBettol",
  linkedin: "https://linkedin.com/in/zamared-alshabibi",
  resumeFile: "assets/resume/ZAMAERD_ALSHBIBI_CV.pdf",
  location: "Al Mudaibi, Muscat, Oman",
};

/* ---------------- SKILLS ----------------
   category is used to group the pills on the Skills section.
   Edit freely — add, remove, rename categories as you like. */
const skills = [
  // Languages
  { name: "JavaScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "PHP", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "Dart", category: "Languages" },
  { name: "SQL", category: "Languages" },

  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Figma", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "JWT Auth", category: "Backend" },

  // Databases
  { name: "MongoDB", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "Firebase Firestore", category: "Databases" },

  // Mobile
  { name: "Flutter", category: "Mobile" },

  // AI / Cloud
  { name: "Google Gemini AI", category: "AI & Cloud" },
  { name: "Google Cloud AI", category: "AI & Cloud" },
  { name: "AWS AI Practitioner", category: "AI & Cloud" },

  // Design & Tools
  { name: "UX Research", category: "Design & Tools" },
  { name: "Agile / Scrum", category: "Design & Tools" },
  { name: "Arduino", category: "Design & Tools" },
  { name: "Git / GitHub", category: "Design & Tools" },
  { name: "Linux", category: "Design & Tools" },
];

/* ---------------- PROJECTS ----------------
   tags -> used by the filter buttons on the Projects section.
   github -> leave "" if a project has no public repo. */
const projects = [
  {
    title: "AI-Powered Virtual Assistant",
    tags: ["AI/ML", "Full-Stack"],
    stack: ["React", "FastAPI", "Gemini AI", "PostgreSQL", "JWT"],
    description:
      "Final year project: a bilingual (Arabic/English) AI assistant integrated with the university's CIMS system, letting students fetch GPA, schedule and attendance. Includes an admin dashboard with AI-generated FAQs.",
    highlight: "92% user satisfaction",
    github: "",
  },
  {
    title: "Stock Price Predictor",
    tags: ["AI/ML"],
    stack: ["Python", "Machine Learning"],
    description:
      "A machine-learning powered web application that predicts stock prices from historical market data.",
    highlight: "",
    github: "https://github.com/SoftwereEngenOMBettol/stock-price-predictor",
  },
  {
    title: "Sales Forecasting App",
    tags: ["AI/ML"],
    stack: ["Python"],
    description:
      "Helps businesses predict future revenue and optimize sales strategy from historical sales data.",
    highlight: "",
    github: "https://github.com/SoftwereEngenOMBettol/sales-forecasting-app",
  },
  {
    title: "Health Risk Assessor",
    tags: ["AI/ML"],
    stack: ["Python"],
    description: "A tool that evaluates health risk factors from user input data.",
    highlight: "",
    github: "https://github.com/SoftwereEngenOMBettol/health-risk-assessor",
  },
  {
    title: "Weather Predictor",
    tags: ["AI/ML"],
    stack: ["Python"],
    description: "A Python application for predicting weather conditions.",
    highlight: "",
    github: "https://github.com/SoftwereEngenOMBettol/weather-predictor",
  },

  {
    title: "Online Library Books",
    tags: ["Full-Stack", "Web"],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    description:
      "Full-stack MERN application for managing an online library, including book records and borrowing.",
    highlight: "",
    github: "https://github.com/SoftwereEngenOMBettol/onlineLibraryBooks",
  },
  {
    title: "Social Media App",
    tags: ["Full-Stack", "Web"],
    stack: ["React", "Redux", "Node.js"],
    description:
      "A full-stack social media application with posts, profiles and state managed via Redux.",
    highlight: "",
    github: "https://github.com/SoftwereEngenOMBettol/social-media-app",
  },

  {
    title: "Caffeine — Cafe Shop Website",
    tags: ["Web"],
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    description:
      "A complete e-commerce platform for a coffee shop: user registration, an automated ordering pipeline, and an admin panel.",
    highlight: "",
    github: "",
  },
  {
    title: "QUTAS — University Queue Management System",
    tags: ["Web", "Systems"],
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    description:
      "A virtual ticketing system built for the Student Affairs department to manage queues, with real-time status updates and an admin control panel.",
    highlight: "",
    github: "",
  },

  {
    title: "Tablet Store — E-commerce App",
    tags: ["Mobile"],
    stack: ["Flutter", "Dart", "Firebase Firestore", "Firebase Auth"],
    description:
      "Cross-platform mobile app for tablet sales, with an interactive shopping cart, secure checkout, and persistent order history.",
    highlight: "",
    github: "",
  },
  {
    title: "Electronic Store System — UX Design",
    tags: ["UI/UX"],
    stack: ["Figma", "UX Research"],
    description:
      "A UX design project focused on creating a usable, intuitive interface for an electronic store, from research through high-fidelity prototype.",
    highlight: "",
    github: "",
  },
];


/* ---------------- FREELANCE CLIENT PROJECTS ----------------
   Each item is one client engagement. coverIndex selects its
   matching thumbnail from assets/freelance/project-thumbnails.webp.
   ---------------------------------------------------------- */
const freelanceProjects = [
  {
    coverIndex: 1,
    slug: "ai-recommendation-engine",
    image: "assets/freelance/ai-recommendation-engine/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/ai-recommendation-engine",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/ai-recommendation-engine",
    linkLabel: "view project folder ↗",
    title: "AI Recommendation Engine",
    category: "AI & Data",
    tags: ["Machine Learning", "Personalization"],
    clientNeed: "The client wanted to help users discover relevant films, books, or products without having to search through large catalogues manually.",
    delivered: "Designed a hybrid recommendation approach that combines collaborative filtering with content-based matching, using rating and item information to produce more relevant suggestions.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "MovieLens", "Goodreads"],
  },
  {
    coverIndex: 2,
    slug: "university-ai-assistant",
    image: "assets/freelance/university-ai-assistant/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/university-ai-assistant",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/university-ai-assistant",
    linkLabel: "view project folder ↗",
    title: "AI-Powered University Assistant",
    category: "Web & Systems",
    tags: ["AI Assistant", "Bilingual", "Education"],
    clientNeed: "The university needed a bilingual assistant that could answer students' everyday questions using their actual academic records rather than generic answers.",
    delivered: "Built an Arabic/English assistant connected to the CIMS environment, with authenticated student access to GPA, schedules and attendance, plus an admin dashboard, usage analytics, FAQ support and PDF reports.",
    stack: ["React", "FastAPI", "Gemini 2.5 Flash", "PostgreSQL", "JWT"],
  },
  {
    coverIndex: 3,
    slug: "qutas-queue-management",
    image: "assets/freelance/qutas-queue-management/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/qutas-queue-management",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/qutas-queue-management",
    linkLabel: "view project folder ↗",
    title: "QUTAS — University Queue Management",
    category: "Web & Systems",
    tags: ["Queue Management", "Administration"],
    clientNeed: "Student Affairs needed a clearer way to manage student waiting lines and reduce the need for students to stand in a crowded corridor just to follow their turn.",
    delivered: "Developed a virtual ticketing and queue-status experience with a live view of the waiting list and an administrative interface for managing the service.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    coverIndex: 4,
    slug: "online-library-management-portal",
    image: "assets/freelance/online-library-management-portal/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/online-library-management-portal",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/online-library-management-portal",
    linkLabel: "view project folder ↗",
    title: "Online Library Management Portal",
    category: "Web & Systems",
    tags: ["Full-Stack", "Library"],
    clientNeed: "The client wanted a public-facing library catalogue and a simple way for staff to maintain book records.",
    delivered: "Built a MERN-based portal with book browsing, an administrator sign-in area, and create, edit and manage workflows backed by a Node/Express API and MongoDB.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    coverIndex: 5,
    slug: "tablet-store-mobile-commerce-app",
    image: "assets/freelance/tablet-store-mobile-commerce-app/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/tablet-store-mobile-commerce-app",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/tablet-store-mobile-commerce-app",
    linkLabel: "view project folder ↗",
    title: "Tablet Store — Mobile Commerce App",
    category: "Web & Systems",
    tags: ["Mobile App", "E-commerce"],
    clientNeed: "The retailer wanted customers to browse tablet products and complete purchases through a dedicated mobile shopping experience.",
    delivered: "Created a Flutter shopping app with customer authentication, a Firestore-backed catalogue, product administration, cart and checkout flows, and purchase history.",
    stack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
  },
  {
    coverIndex: 6,
    slug: "online-courses-website",
    image: "assets/freelance/online-courses-website/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/online-courses-website",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/online-courses-website",
    linkLabel: "view project folder ↗",
    title: "Online Courses Website",
    category: "Web & Systems",
    tags: ["Website", "Education"],
    clientNeed: "The training provider needed a simple website to introduce its courses, help visitors browse available options and collect enrolment or payment details.",
    delivered: "Designed a multi-page course website covering the home page, course catalogue and payment/enrolment form.",
    stack: ["HTML", "CSS", "Web Design"],
  },
  {
    coverIndex: 7,
    slug: "weather-prediction-ml",
    image: "assets/freelance/weather-prediction-ml/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/weather-prediction-ml",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/weather-prediction-ml",
    linkLabel: "view project folder ↗",
    title: "Weather Prediction Using Machine Learning",
    category: "AI & Data",
    tags: ["Prediction", "Machine Learning"],
    clientNeed: "The client wanted to estimate the likelihood of rain from historical weather measurements and make the prediction process accessible through a simple interface.",
    delivered: "Prepared weather data, trained and compared MLP and SVM classifiers, saved the model assets and built a Gradio interface for entering weather conditions and viewing predictions.",
    stack: ["Python", "Pandas", "Scikit-learn", "MLP", "SVM", "Gradio"],
  },
  {
    coverIndex: 8,
    slug: "store-sales-forecasting",
    image: "assets/freelance/store-sales-forecasting/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/store-sales-forecasting",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/store-sales-forecasting",
    linkLabel: "view project folder ↗",
    title: "Store Sales Forecasting & Analysis",
    category: "AI & Data",
    tags: ["Data Analysis", "Forecasting"],
    clientNeed: "The business needed to understand which products, regions, discounts and customer segments were influencing sales and profitability.",
    delivered: "Performed exploratory analysis, prepared visual summaries of sales and profit patterns, and explored regression-based forecasting using the supplied sales dataset.",
    stack: ["Python", "Pandas", "Data Visualization", "Linear Regression"],
  },
  {
    coverIndex: 9,
    slug: "online-shopping-database-design",
    image: "assets/freelance/online-shopping-database-design/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/online-shopping-database-design",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/online-shopping-database-design",
    linkLabel: "view project folder ↗",
    title: "Online Shopping Database Design",
    category: "Web & Systems",
    tags: ["Database", "SQL"],
    clientNeed: "The client needed a structured database foundation for an online shopping workflow, with reliable relationships between customers, orders and related records.",
    delivered: "Designed the relational schema and documented SQL table creation, data insertion and query operations with data-integrity considerations.",
    stack: ["SQL", "Relational Database Design"],
  },
  {
    coverIndex: 10,
    slug: "future-home-rental-calculator",
    image: "assets/freelance/future-home-rental-calculator/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/future-home-rental-calculator",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/future-home-rental-calculator",
    linkLabel: "view project folder ↗",
    title: "Future Home — Rental Cost Calculator",
    category: "Web & Systems",
    tags: ["Python", "Automation"],
    clientNeed: "The client wanted a quick way to estimate rental costs based on property features and the tenant's preferences.",
    delivered: "Created a Python calculator that factors in property type, view, neighbourhood noise, furniture, rental duration and payment option to calculate the expected rent.",
    stack: ["Python", "Jupyter Notebook"],
  },
  {
    coverIndex: 11,
    slug: "blockchain-bus-reservation-model",
    image: "assets/freelance/blockchain-bus-reservation-model/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/blockchain-bus-reservation-model",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/blockchain-bus-reservation-model",
    linkLabel: "view project folder ↗",
    title: "Blockchain Bus Reservation Model",
    category: "Web & Systems",
    tags: ["Blockchain", "System Design"],
    clientNeed: "The client wanted to explore how a bus reservation process could use a distributed ledger to improve the traceability of passenger and booking records.",
    delivered: "Prepared a blockchain-based reservation model and supporting chain examples to demonstrate passenger and booking data operations. This is presented as a technical model, not a production deployment.",
    stack: ["Blockchain", "Distributed Ledger", "System Design"],
  },
  {
    coverIndex: 12,
    slug: "food-delivery-system-design",
    image: "assets/freelance/food-delivery-system-design/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/food-delivery-system-design",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/food-delivery-system-design",
    linkLabel: "view project folder ↗",
    title: "Food Delivery System — OOAD",
    category: "Web & Systems",
    tags: ["UML", "System Design"],
    clientNeed: "The client needed a clear system design for a food delivery service connecting customers, restaurants, delivery staff and administrators.",
    delivered: "Produced an object-oriented analysis and design package with UML views and workflows that explain the main roles, order lifecycle and system interactions.",
    stack: ["OOAD", "UML", "Requirements Analysis"],
  },
  {
    coverIndex: 13,
    slug: "web-application-security-assessment",
    image: "assets/freelance/web-application-security-assessment/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/web-application-security-assessment",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/web-application-security-assessment",
    linkLabel: "view project folder ↗",
    title: "Web Application Security Assessment",
    category: "Web & Systems",
    tags: ["Cybersecurity", "Security Testing"],
    clientNeed: "The client wanted an initial review of a web server to identify potentially exposed files, outdated software and common configuration weaknesses.",
    delivered: "Conducted and documented a Nikto-based web server scan, explaining the findings and the security checks that should be addressed.",
    stack: ["Nikto", "Web Security", "Security Assessment"],
  },
  {
    coverIndex: 14,
    slug: "laghatti-language-learning-ux",
    image: "assets/freelance/laghatti-language-learning-ux/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/laghatti-language-learning-ux",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/laghatti-language-learning-ux",
    linkLabel: "view project folder ↗",
    title: "LAGHATTI — Language Learning UX Platform",
    category: "Design & UX",
    tags: ["UX Research", "Figma"],
    clientNeed: "The client wanted a more engaging way for learners to study languages using multimedia, games and opportunities to interact with teachers and other learners.",
    delivered: "Developed the UX research and design direction, including personas, user journeys, user flows, storyboards, wireframes and a high-fidelity prototype concept.",
    stack: ["UX Research", "Figma", "User Flows", "Wireframes", "Prototyping"],
  },
  {
    coverIndex: 15,
    slug: "sadaf-abaya-brand-identity",
    image: "assets/freelance/sadaf-abaya-brand-identity/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/sadaf-abaya-brand-identity",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/sadaf-abaya-brand-identity",
    linkLabel: "view project folder ↗",
    title: "Sadaf — Abaya Brand Identity",
    category: "Design & UX",
    tags: ["Brand Identity", "Fashion"],
    clientNeed: "The fashion brand needed a recognisable visual identity suitable for presenting its abaya collection and communicating with customers.",
    delivered: "Created a coordinated identity package with logo artwork, fashion-focused brand visuals and supporting customer-facing materials such as a thank-you card and QR elements.",
    stack: ["Brand Identity", "Logo Design", "Graphic Design"],
  },
  {
    coverIndex: 16,
    slug: "mavi-shopping-brand-logo",
    image: "assets/freelance/mavi-shopping-brand-logo/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/mavi-shopping-brand-logo",
    github: "https://raw.githubusercontent.com/SoftwereEngenOMBettol/portfolio/main/assets/freelance/mavi-shopping-brand-logo/cover.webp",
    linkLabel: "view image ↗",
    title: "Mavi — Shopping Brand Logo",
    category: "Design & UX",
    tags: ["Logo", "Branding"],
    clientNeed: "The client wanted a clear, memorable logo for a shopping brand that communicates retail and delivery at a glance.",
    delivered: "Designed a blue-toned wordmark incorporating a shopping-cart symbol to make the brand purpose immediately recognisable.",
    stack: ["Logo Design", "Branding", "Visual Design"],
  },
  {
    coverIndex: 17,
    slug: "ruwahi-weekly-transport-ad",
    image: "assets/freelance/ruwahi-weekly-transport-ad/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/ruwahi-weekly-transport-ad",
    github: "https://raw.githubusercontent.com/SoftwereEngenOMBettol/portfolio/main/assets/freelance/ruwahi-weekly-transport-ad/cover.webp",
    linkLabel: "view image ↗",
    title: "Ruwahi Transport — Weekly Transfer Ad",
    category: "Design & UX",
    tags: ["Advertising", "Social Media"],
    clientNeed: "The transport provider needed a promotional graphic that communicates its weekly transfer service, route and price clearly to prospective customers.",
    delivered: "Designed an Arabic promotional advertisement featuring the bus, service information, price and contact details in a direct social-media-ready layout.",
    stack: ["Graphic Design", "Advertising", "Arabic Layout"],
  },
  {
    coverIndex: 18,
    slug: "hospital-trainee-id-cards",
    image: "assets/freelance/hospital-trainee-id-cards/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/hospital-trainee-id-cards",
    github: "https://raw.githubusercontent.com/SoftwereEngenOMBettol/portfolio/main/assets/freelance/hospital-trainee-id-cards/cover.webp",
    linkLabel: "view image ↗",
    title: "Hospital Trainee ID Cards",
    category: "Design & UX",
    tags: ["Identity Design", "Print"],
    clientNeed: "The hospital needed trainee identification cards that make the holder's name, department and trainee status easy to recognise.",
    delivered: "Prepared a set of hospital trainee ID card layouts with institutional identification, department and individual details.",
    stack: ["ID Card Design", "Print Design", "Layout"],
  },
  {
    coverIndex: 19,
    slug: "ibn-manzur-arabic-cultural-poster",
    image: "assets/freelance/ibn-manzur-arabic-cultural-poster/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/ibn-manzur-arabic-cultural-poster",
    github: "https://raw.githubusercontent.com/SoftwereEngenOMBettol/portfolio/main/assets/freelance/ibn-manzur-arabic-cultural-poster/cover.webp",
    linkLabel: "view image ↗",
    title: "Ibn Manzur — Arabic Cultural Poster",
    category: "Design & UX",
    tags: ["Poster", "Arabic Typography"],
    clientNeed: "The client wanted an informative visual piece introducing the Arabic scholar Ibn Manzur in an engaging and culturally appropriate style.",
    delivered: "Designed an Arabic-language cultural poster combining a portrait, editorial text and a clear visual hierarchy.",
    stack: ["Poster Design", "Arabic Typography", "Editorial Layout"],
  },
  {
    coverIndex: 20,
    slug: "arabic-wedding-invitation",
    image: "assets/freelance/arabic-wedding-invitation/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/arabic-wedding-invitation",
    github: "https://raw.githubusercontent.com/SoftwereEngenOMBettol/portfolio/main/assets/freelance/arabic-wedding-invitation/cover.webp",
    linkLabel: "view image ↗",
    title: "Arabic Wedding Invitation",
    category: "Design & UX",
    tags: ["Invitation", "Print Design"],
    clientNeed: "The client wanted an elegant Arabic wedding invitation that presents the event details in a refined, celebratory style.",
    delivered: "Created an invitation layout with Arabic typography, ornamental floral details and the supplied date and venue information.",
    stack: ["Invitation Design", "Arabic Typography", "Graphic Design"],
  },
  {
    coverIndex: 21,
    slug: "remote-work-productivity-research",
    image: "assets/freelance/remote-work-productivity-research/cover.webp",
    folder: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/remote-work-productivity-research",
    github: "https://github.com/SoftwereEngenOMBettol/portfolio/tree/main/assets/freelance/remote-work-productivity-research",
    linkLabel: "view project folder ↗",
    title: "Remote Work & Software Team Productivity Research",
    category: "Research",
    tags: ["Research", "Machine Learning"],
    clientNeed: "The client wanted to examine how remote and office-based work relate to productivity, collaboration, satisfaction and stress in software development teams.",
    delivered: "Prepared a research analysis using a 5,000-response dataset and compared six machine-learning approaches. The report also documents the limitations of using synthetic data.",
    stack: ["Python", "Machine Learning", "Statistical Analysis", "Research"],
  },
];

/* ---------------- CERTIFICATES ----------------
   ✅ All file paths now match the actual file names in your certificates folder.
   ============================================================ */
const certificates = [

  // ---- Coursera / Google (8) ----
  { title: "Google UX Design Professional Certificate", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/google-ux-design-professional-certificate.pdf", verify: "https://coursera.org/verify/professional-cert/XDFY44DVY70Y", featured: true },
  { title: "Foundations of User Experience (UX) Design", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/foundations-of-user-experience-ux-design.pdf", verify: "https://coursera.org/verify/NR8P2QJ1ZJJD" },
  { title: "Start the UX Design Process: Empathize, Define, Ideate", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/start-the-ux-design-process-empathize-define-ideate.pdf", verify: "https://coursera.org/verify/3LFEBGNNJ0H9" },
  { title: "Build Wireframes and Low-Fidelity Prototypes", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/build-wireframes-and-low-fidelity-prototypes.pdf", verify: "https://coursera.org/verify/UGZ2G28UKOT5" },
  { title: "Conduct UX Research and Test Early Concepts", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/conduct-ux-research-and-test-early-concepts.pdf", verify: "https://coursera.org/verify/EY6RPYUYT5PG" },
  { title: "Create High-Fidelity Designs and Prototypes in Figma", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/create-high-fidelity-designs-and-prototypes-in-figma.pdf", verify: "https://coursera.org/verify/RZQTVE8PVOMX" },
  { title: "Build Dynamic User Interfaces (UI) for Websites", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/build-dynamic-user-interfaces-ui-for-websites.pdf", verify: "https://coursera.org/verify/2PE4K53E9JM3" },
  { title: "Design a User Experience for Social Good & Prepare for Jobs", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/design-a-user-experience-for-social-good-and-prepare-for-jobs.pdf", verify: "https://coursera.org/verify/Z3G8B6D82GS5" },

  // ---- Oracle (2) ----
  { title: "Java Foundations", issuer: "Oracle Academy", category: "Oracle", file: "assets/certificates/oracle/java-foundations.pdf", featured: true },
  { title: "Database Programming with SQL", issuer: "Oracle Academy", category: "Oracle", file: "assets/certificates/oracle/database-programming-with-sql.pdf", featured: true },

  // ---- Edraak (6) ----
  { title: "User Interface Design Principles", issuer: "Edraak", category: "Edraak", file: "assets/certificates/edraak/user-interface-design-principles.pdf" },
  { title: "Arduino Programming Fundamentals", issuer: "Edraak", category: "Edraak", file: "assets/certificates/edraak/arduino-programming-fundamentals.pdf" },
  { title: "Agile Project Management", issuer: "Edraak", category: "Edraak", file: "assets/certificates/edraak/agile-project-management.pdf" },
  { title: "Advanced Excel", issuer: "Edraak", category: "Edraak", file: "assets/certificates/edraak/advanced-excel.pdf" },
  { title: "The Digital Transformation Journey", issuer: "Edraak", category: "Edraak", file: "assets/certificates/edraak/the-digital-transformation-journey.pdf" },
  { title: "How to Start and Manage a Successful Business", issuer: "Edraak", category: "Edraak", file: "assets/certificates/edraak/how-to-start-and-manage-a-successful-business.pdf" },
  // ---- Huawei ICT Academy (2) ----
  { title: "Cangjie Programming", issuer: "Huawei ICT Academy", category: "Huawei", file: "assets/certificates/huawei/cangjie-programming.png" },
  { title: "Overview of IoT Technologies", issuer: "Huawei ICT Academy", category: "Huawei", file: "assets/certificates/huawei/overview-of-iot-technologies.pdf" },

  // ---- Udacity (5) ----
  { title: "AWS AI Practitioner Challenge", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity/aws-ai-practitioner-challenge.pdf" , featured: true },
  { title: "Introduction to Gen AI Studio with Google Cloud", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity/introduction-to-gen-ai-studio-with-google-cloud.pdf" },
  { title: "Encoder-Decoder Architecture with Google Cloud", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity/encoder-decoder-architecture-with-google-cloud.pdf" },
  { title: "Responsible AI: Applying AI Principles with Google Cloud", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity/responsible-ai-applying-ai-principles-with-google-cloud.pdf" },
  { title: "Introduction to Generative AI with Google Cloud", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity/introduction-to-generative-ai-with-google-cloud.pdf" , featured: true },

  // ---- Cisco Networking Academy (12) ----
  { title: "C++ Essentials 1", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco/c-essentials-1.pdf" , featured: true },
  { title: "Creating Compelling Reports", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco/creating-compelling-reports.pdf" },
  { title: "Data Analytics Essentials", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco/data-analytics-essentials.pdf" , featured: true },
  { title: "Digital Awareness", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco/digital-awareness.pdf" },
  { title: "Ethical Hacker", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco/ethical-hacker.pdf" , featured: true },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco/introduction-to-cybersecurity.pdf" },
  { title: "Introduction to Data Science", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco/introduction-to-data-science.pdf" },
  { title: "Introduction to IoT", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco/introduction-to-iot.pdf" },
  { title: "Linux Essentials", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco/linux-essentials.pdf" , featured: true },
  { title: "Networking Basics", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco/networking-basics.pdf" },
  { title: "Networking Basics (2nd cohort)", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco/networking-basics-2nd-cohort.pdf" },
  { title: "Python Essentials 1", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco/python-essentials-1.pdf" , featured: true },

  // ---- Competitions & Research (6) ----
  { title: "1st Place — Oman Collegiate Programming Contest, 2nd Sub-Regional (2026)", issuer: "Oman Collegiate Programming Contest / UTAS-Ibra", category: "Awards", file: "assets/certificates/awards/1st-place-oman-collegiate-programming-contest-2nd-sub-regional-2026.jpg", featured: true },
  { title: "3rd Prize — NextGen Coders: The Innovation Challenge", issuer: "UTAS-Ibra", category: "Awards", file: "assets/certificates/awards/3rd-prize-nextgen-coders-the-innovation-challenge.jpg", featured: true },
  { title: "NextGen: Innovators 2026 — Paper: AI-Powered Virtual Assistant for UTAS Ibra", issuer: "College of Computing and Information Sciences, UTAS-Ibra", category: "Awards", file: "assets/certificates/awards/nextgen-innovators-2026-paper-ai-powered-virtual-assistant-for-utas-ib.pdf", featured: true },
  { title: "UTAS Coding Challenge Competition 2026", issuer: "UTAS Al-Mussanah", category: "Awards", file: "assets/certificates/awards/utas-coding-challenge-competition-2026.pdf" },
  { title: "AIAER Research Talk — From Errors to Insights", issuer: "All India Association for Educational Research, Oman Chapter", category: "University", file: "assets/certificates/university/aiaer-research-talk-from-errors-to-insights.pdf" },
  { title: "Your Gateway to Employment: CV Writing and Seizing Opportunities", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/your-gateway-to-employment-cv-writing-and-seizing-opportunities.pdf" },

  // ---- UTAS-Ibra — University Workshops & Training (29) ----
  { title: "5th National Symposium on English Language Teaching", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/5th-national-symposium-on-english-language-teaching.pdf" },
  { title: "AI for University Students (الذكاء الاصطناعي للطالب الجامعي)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/ai-for-university-students.pdf" },
  // TODO missing file — re-upload the PDF, then uncomment this line:
  //  { title: "AI Applications in Training (تطبيقات الذكاء الاصطناعي في التدريب)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/ai-applications-in-training.pdf" },
  // TODO missing file — re-upload the PDF, then uncomment this line:
  //  { title: "Advanced 3D Part Modeling — AutoDesk Inventor", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/advanced-3d-part-modeling-autodesk-inventor.pdf" },
  // TODO missing file — re-upload the PDF, then uncomment this line:
  //  { title: "Between Study and Job (مابين الدراسة والوظيفة)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/between-study-and-job.pdf" },
  { title: "Breaking Password — Competition Participation", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/breaking-password-competition-participation.pdf" },
  { title: "Database Normalization", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/database-normalization.pdf" },
  { title: "Dean's Honor List — Semester 1, 2022/23", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/dean-s-honor-list-semester-1-2022-23.pdf" , featured: true },
  { title: "Eternal Language Exhibition (معرض اللغة الخالدة)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/eternal-language-exhibition.pdf" },
  { title: "From Lecture Hall to Business World (من قاعة المحاضرات إلى عالم الأعمال)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/from-lecture-hall-to-business-world.pdf" },
  { title: "GIMP — Open Source Image Editor", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/gimp-open-source-image-editor.pdf" },
  { title: "GSM Architecture", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/gsm-architecture.pdf" },
  { title: "Hands-on Pandas Library — Advanced Python", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/hands-on-pandas-library-advanced-python.pdf" , featured: true },
  { title: "Identity Workshop (هويتي)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/identity-workshop.pdf" },
  // TODO missing file — re-upload the PDF, then uncomment this line:
  //  { title: "Innovative Business Ideas", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/innovative-business-ideas.pdf" },
  { title: "Innovative Financing (آليات التمويل المبتكر)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/innovative-financing.jpg" },
  { title: "Intellectual Forum (المنبر الفكري)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/intellectual-forum.pdf" },
  { title: "ISACA Webinar — IT Audit, Risk, Security & Cybersecurity", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/isaca-webinar-it-audit-risk-security-and-cybersecurity.pdf" },
  { title: "Oman Vision 2040 Exhibition (معرض عمان الثالث)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/oman-vision-2040-exhibition.pdf" },
  { title: "Oman Vision 2040 Research Alignment", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/oman-vision-2040-research-alignment.pdf" },
  { title: "Photography (التصوير الفوتوغرافي)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/photography.pdf" },
  { title: "Poster Presentation Competition", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/poster-presentation-competition.pdf" },
  { title: "Resource Speaker — Linux Workshop", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/resource-speaker-linux-workshop.pdf" , featured: true },
  { title: "Self Marketing (أنت براند - التسويق الذاتي)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/self-marketing.pdf" },
  { title: "Transformers Workshop", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/transformers-workshop.pdf" },
  { title: "University Workshop", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/university-workshop.pdf" },
  // TODO missing file — re-upload the PDF, then uncomment this line:
  //  { title: "University Workshop", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/university-workshop-2.pdf" },
  { title: "Using LinkedIn in Job Search (استخدام LinkedIn في البحث عن الوظائف)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/using-linkedin-in-job-search-linkedin.pdf" },
  { title: "Workshop on Data Visualization", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/university/workshop-on-data-visualization.pdf" },
];
