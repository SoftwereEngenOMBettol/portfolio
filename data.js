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
    "Software Engineering student building full-stack, AI-powered and mobile products.",
  bio:
    "I'm a software engineering student who enjoys taking a product from a rough idea to a working system — front end, back end, or the interface in between. My final year project paired an AI assistant with a live university system, and outside of coursework I build small full-stack apps, mobile apps, and UX case studies to keep learning by shipping. I'm currently looking for opportunities as a frontend, backend, full-stack, or UI/UX-focused developer.",
  email: "your.email@example.com", // TODO: replace with your real email
  github: "https://github.com/SoftwereEngenOMBettol",
  linkedin: "https://linkedin.com/in/your-profile", // TODO: replace
  resumeFile: "assets/resume/Zamared_AlShabibi_CV.pdf", // drop your CV PDF here with this exact name
  location: "ALMudhaibi, Oman",
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
  { name: "Figma", category: "Design & Tools" },
  { name: "UX Research", category: "Design & Tools" },
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
    description: "A full-stack social media application with posts, profiles and state managed via Redux.",
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

/* ---------------- CERTIFICATES ----------------
   category -> matches the filter tabs on the Certificates section.
   file -> path to the actual PDF. Put your PDFs in
   assets/certificates/ using these file names (or edit the paths
   below to match whatever you name them). */
const certificates = [
  // ---- Huawei ICT Academy (2) ----
{ title: "Cangjie Programming", issuer: "Huawei ICT Academy", category: "Huawei", file: "assets/certificates/huawei-cangjie-programming.pdf" },
{ title: "Overview of IoT Technologies", issuer: "Huawei ICT Academy", category: "Huawei", file: "assets/certificates/huawei-iot-overview.pdf" },

  // ---- Udacity (5) ----
  { title: "AWS AI Practitioner Challenge", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity-aws-ai-practitioner.pdf" },
  { title: "Introduction to Gen AI Studio with Google Cloud", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity-genai-studio.pdf" },
  { title: "Encoder-Decoder Architecture with Google Cloud", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity-encoder-decoder.pdf" },
  { title: "Responsible AI: Applying AI Principles with Google Cloud", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity-responsible-ai.pdf" },
  { title: "Introduction to Generative AI with Google Cloud", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity-intro-genai.pdf" },

  // ---- Google / Coursera — UX Design (8) ----
  { title: "Build Dynamic User Interfaces (UI) for Websites", issuer: "Google / Coursera", category: "Google & Coursera", file: "assets/certificates/coursera-dynamic-ui.pdf" },
  { title: "Start the UX Design Process: Empathize, Define, and Ideate", issuer: "Google / Coursera", category: "Google & Coursera", file: "assets/certificates/coursera-ux-process.pdf" },
  { title: "Conduct UX Research and Test Early Concepts", issuer: "Google / Coursera", category: "Google & Coursera", file: "assets/certificates/coursera-ux-research.pdf" },
  { title: "Foundations of User Experience (UX) Design", issuer: "Google / Coursera", category: "Google & Coursera", file: "assets/certificates/coursera-ux-foundations.pdf" },
  { title: "Create High-Fidelity Designs and Prototypes in Figma", issuer: "Google / Coursera", category: "Google & Coursera", file: "assets/certificates/coursera-figma-prototypes.pdf" },
  { title: "Build Wireframes and Low-Fidelity Prototypes", issuer: "Google / Coursera", category: "Google & Coursera", file: "assets/certificates/coursera-wireframes.pdf" },
  { title: "Google UX Design Professional Certificate (7 Courses)", issuer: "Google / Coursera", category: "Google & Coursera", file: "assets/certificates/coursera-ux-professional-cert.pdf" },
  { title: "Design a User Experience for Social Good & Prepare for Jobs", issuer: "Google / Coursera", category: "Google & Coursera", file: "assets/certificates/coursera-ux-social-good.pdf" },

  // ---- Oracle Academy (2) ----
  { title: "Java Foundations", issuer: "Oracle Academy", category: "Oracle", file: "assets/certificates/oracle-java-foundations.pdf" },
  { title: "Database Programming with SQL", issuer: "Oracle Academy", category: "Oracle", file: "assets/certificates/oracle-database-sql.pdf" },

  // ---- Cisco Networking Academy (12) ----
  { title: "C++ Essentials 1", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco-cpp-essentials-1.pdf" },
  { title: "Creating Compelling Reports", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco-compelling-reports.pdf" },
  { title: "Data Analytics Essentials", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco-data-analytics-essentials.pdf" },
  { title: "Digital Awareness", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco-digital-awareness.pdf" },
  { title: "Ethical Hacker", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco-ethical-hacker.pdf" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco-intro-cybersecurity.pdf" },
  { title: "Introduction to Data Science", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco-intro-data-science.pdf" },
  { title: "Introduction to IoT", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco-intro-iot.pdf" },
  { title: "Linux Essentials", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco-linux-essentials.pdf" },
  { title: "Networking Basics", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco-networking-basics.pdf" },
  { title: "Networking Basics (2nd cohort)", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco-networking-basics-2.pdf" },
  { title: "Python Essentials 1", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/cisco-python-essentials-1.pdf" },

  // ---- UTAS-Ibra — University Workshops & Training (29) ----
  { title: "Breaking Password — Competition Participation", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-breaking-password.pdf" },
  { title: "Identity Workshop (هويتي)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-identity-workshop.pdf" },
  { title: "University Workshop", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-workshop-1191378753.pdf" },
  { title: "AI Applications in Training (تطبيقات الذكاء الاصطناعي في التدريب)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-ai-applications-training.pdf" },
  { title: "5th National Symposium on English Language Teaching", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-english-teaching-symposium.pdf" },
  { title: "Intellectual Forum (المنبر الفكري)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-intellectual-forum.pdf" },
  { title: "Database Normalization", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-database-normalization.pdf" },
  { title: "Resource Speaker — Linux Workshop", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-linux-workshop-speaker.pdf" },
  { title: "Workshop on Data Visualization", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-data-visualization.pdf" },
  { title: "ISACA Webinar — IT Audit, Risk, Security & Cybersecurity", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-isaca-webinar.pdf" },
  { title: "Between Study and Job (مابين الدراسة والوظيفة)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-study-and-job.pdf" },
  { title: "Self Marketing (أنت براند - التسويق الذاتي)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-self-marketing.pdf" },
  { title: "Hands-on Pandas Library — Advanced Python", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-pandas-advanced-python.pdf" },
  { title: "GSM Architecture", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-gsm-architecture.pdf" },
  { title: "Oman Vision 2040 Exhibition (معرض عمان الثالث)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-oman-vision-2040-exhibition.pdf" },
  { title: "Eternal Language Exhibition (معرض اللغة الخالدة)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-eternal-language-exhibition.pdf" },
  { title: "University Workshop", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-workshop-6820816325.pdf" },
  { title: "AI for University Students (الذكاء الاصطناعي للطالب الجامعي)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-ai-for-university-students.pdf" },
  { title: "Advanced 3D Part Modeling — AutoDesk Inventor", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-3d-modeling-inventor.pdf" },
  { title: "Photography (التصوير الفوتوغرافي)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/photography.pdf" },
  { title: "GIMP — Open Source Image Editor", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-gimp.pdf" },
  { title: "Oman Vision 2040 Research Alignment", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-oman-vision-2040-research.pdf" },
  { title: "Transformers Workshop", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-transformers-workshop.pdf" },
  { title: "Innovative Business Ideas", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-innovative-business-ideas.pdf" },
  { title: "From Lecture Hall to Business World (من قاعة المحاضرات إلى عالم الأعمال)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-lecture-to-business.pdf" },
  { title: "Using LinkedIn in Job Search (استخدام LinkedIn في البحث عن الوظائف)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-linkedin-job-search.pdf" },
  { title: "Dean's Honor List — Semester 1, 2022/23", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-deans-honor-list.pdf" },
  { title: "Poster Presentation Competition", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-poster-presentation.pdf" },
  { title: "Innovative Financing (آليات التمويل المبتكر)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/utas-innovative-financing.pdf" },
];
