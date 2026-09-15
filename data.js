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
