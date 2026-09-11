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
  resumeFile: "assets/resume/Zamared_AlShabibi_CV.pdf",
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
  { title: "Google UX Design Professional Certificate", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/google-ux-professional-certificate.pdf", verify: "https://coursera.org/verify/professional-cert/XDFY44DVY70Y", featured: true },
  { title: "Foundations of User Experience (UX) Design", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/ux-foundations.pdf", verify: "https://coursera.org/verify/NR8P2QJ1ZJJD" },
  { title: "Start the UX Design Process: Empathize, Define, Ideate", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/ux-empathize-define-ideate.pdf", verify: "https://coursera.org/verify/3LFEBGNNJ0H9" },
  { title: "Build Wireframes and Low-Fidelity Prototypes", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/ux-wireframes-lofi.pdf", verify: "https://coursera.org/verify/UGZ2G28UKOT5" },
  { title: "Conduct UX Research and Test Early Concepts", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/ux-research-testing.pdf", verify: "https://coursera.org/verify/EY6RPYUYT5PG" },
  { title: "Create High-Fidelity Designs and Prototypes in Figma", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/ux-hifi-figma.pdf", verify: "https://coursera.org/verify/RZQTVE8PVOMX" },
  { title: "Build Dynamic User Interfaces (UI) for Websites", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/ui-dynamic-interfaces.pdf", verify: "https://coursera.org/verify/2PE4K53E9JM3" },
  { title: "Design a User Experience for Social Good & Prepare for Jobs", issuer: "Google (Coursera)", category: "Google", file: "assets/certificates/coursera/ux-social-good.pdf", verify: "https://coursera.org/verify/Z3G8B6D82GS5" },

  // ---- Oracle (2) ----
  { title: "Java Foundations", issuer: "Oracle Academy", category: "Oracle", file: "assets/certificates/oracle/java-foundations.pdf", featured: true },
  { title: "Database Programming with SQL", issuer: "Oracle Academy", category: "Oracle", file: "assets/certificates/oracle/database-programming-sql.pdf", featured: true },

  // ---- Edraak (6) ----
  { title: "User Interface Design Principles", issuer: "Edraak", category: "Edraak", file: "assets/certificates/edraak/ui-design-principles.pdf" },
  { title: "Arduino Programming Fundamentals", issuer: "Edraak", category: "Edraak", file: "assets/certificates/edraak/arduino-fundamentals.pdf" },
  { title: "Agile Project Management", issuer: "Edraak", category: "Edraak", file: "assets/certificates/edraak/agile-project-management.pdf" },
  { title: "Advanced Excel", issuer: "Edraak", category: "Edraak", file: "assets/certificates/edraak/advanced-excel.pdf" },
  { title: "The Digital Transformation Journey", issuer: "Edraak", category: "Edraak", file: "assets/certificates/edraak/digital-transformation.pdf" },
  { title: "How to Start and Manage a Successful Business", issuer: "Edraak", category: "Edraak", file: "assets/certificates/edraak/start-manage-business.pdf" },
  // ---- Huawei ICT Academy (2) ----
  { title: "Cangjie Programming", issuer: "Huawei ICT Academy", category: "Huawei", file: "assets/certificates/Cangjie Programming.png" },
  { title: "Overview of IoT Technologies", issuer: "Huawei ICT Academy", category: "Huawei", file: "assets/certificates/huawei-iot-overview.pdf" },

  // ---- Udacity (5) ----
  { title: "AWS AI Practitioner Challenge", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity/aws-ai-practitioner.pdf" , featured: true },
  { title: "Introduction to Gen AI Studio with Google Cloud", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity/gen-ai-studio-google-cloud.pdf" },
  { title: "Encoder-Decoder Architecture with Google Cloud", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity/encoder-decoder-architecture.pdf" },
  { title: "Responsible AI: Applying AI Principles with Google Cloud", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity/responsible-ai.pdf" },
  { title: "Introduction to Generative AI with Google Cloud", issuer: "Udacity", category: "Udacity", file: "assets/certificates/udacity/intro-generative-ai.pdf" , featured: true },

  // ---- Cisco Networking Academy (12) ----
  { title: "C++ Essentials 1", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/C--_Essentials_1_certificate_36s2023-utas-edu-om_85019036-c4f5-4f8e-8f83-15041123fc15.pdf" , featured: true },
  { title: "Creating Compelling Reports", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/Creating_Compelling_Reports_Badge20241005-8-u174m6.pdf" },
  { title: "Data Analytics Essentials", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/Data_Analytics_Essentials_certificate_36s2023-utas-edu-om_e67eacd6-8f00-4333-bcf9-c6fef8fc22ef.pdf" , featured: true },
  { title: "Digital Awareness", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/Digital_Awareness_certificate_36s2023-utas-edu-om_9c6eec09-5e5e-486a-949f-f466500f0f4a.pdf" },
  { title: "Ethical Hacker", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/Ethical_Hacker_Badge20241122-28-rj8ir3.pdf" , featured: true },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/Introduction_to_Cybersecurity_Badge20241122-28-gctr1a.pdf" },
  { title: "Introduction to Data Science", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/Introduction_to_Data_Science_Badge20241005-7-ldjbun.pdf" },
  { title: "Introduction to IoT", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/Introduction_to_IoT_Badge20241122-28-yuf15v.pdf" },
  { title: "Linux Essentials", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/Linux_Essentials_certificate_36s2023-utas-edu-om_5835e0d2-b475-425a-a038-fec9aa4a9a53.pdf" , featured: true },
  { title: "Networking Basics", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/Networking_Basics_Badge20241005-7-pj540z.pdf" },
  { title: "Networking Basics (2nd cohort)", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/Networking_Basics_Badge20241122-28-w3mvfu.pdf" },
  { title: "Python Essentials 1", issuer: "Cisco Networking Academy", category: "Cisco", file: "assets/certificates/Python_Essentials_1_certificate_36s2023-utas-edu-om_50e2dc25-bb66-48c9-8b01-e1eba18322e9.pdf" , featured: true },

  // ---- UTAS-Ibra — University Workshops & Training (29) ----
  { title: "5th National Symposium on English Language Teaching", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/1383607954ZA.pdf" },
  { title: "AI for University Students (الذكاء الاصطناعي للطالب الجامعي)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/6838110622ZA.pdf" },
  // TODO missing file — re-upload the PDF, then uncomment this line:
  //  { title: "AI Applications in Training (تطبيقات الذكاء الاصطناعي في التدريب)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/1316981026ZA[1].pdf" },
  // TODO missing file — re-upload the PDF, then uncomment this line:
  //  { title: "Advanced 3D Part Modeling — AutoDesk Inventor", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/7062889741ZA[1].pdf" },
  // TODO missing file — re-upload the PDF, then uncomment this line:
  //  { title: "Between Study and Job (مابين الدراسة والوظيفة)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/4776185608ZA[1].pdf" },
  { title: "Breaking Password — Competition Participation", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/36s2023 Certificate of Participation_Breaking Password_04-12-2023 4.pdf" },
  { title: "Database Normalization", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/2960888539ZA.pdf" },
  { title: "Dean's Honor List — Semester 1, 2022/23", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/Dean's Honor List Certificate_Sem 1_2022-23 50.pdf" , featured: true },
  { title: "Eternal Language Exhibition (معرض اللغة الخالدة)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/6353686948ZA.pdf" },
  { title: "From Lecture Hall to Business World (من قاعة المحاضرات إلى عالم الأعمال)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/9445265075ZA.pdf" },
  { title: "GIMP — Open Source Image Editor", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/8322278051ZA.pdf" },
  { title: "GSM Architecture", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/5847798362ZA.pdf" },
  { title: "Hands-on Pandas Library — Advanced Python", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/5379022054ZA.pdf" , featured: true },
  { title: "Identity Workshop (هويتي)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/0289680785ZA.pdf" },
  // TODO missing file — re-upload the PDF, then uncomment this line:
  //  { title: "Innovative Business Ideas", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/8984417418ZA[1].pdf" },
  { title: "Innovative Financing (آليات التمويل المبتكر)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/innovative-financing.jpg" },
  { title: "Intellectual Forum (المنبر الفكري)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/1650860714ZA.pdf" },
  { title: "ISACA Webinar — IT Audit, Risk, Security & Cybersecurity", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/4768365696ZA.pdf" },
  { title: "Oman Vision 2040 Exhibition (معرض عمان الثالث)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/6230588739ZA.pdf" },
  { title: "Oman Vision 2040 Research Alignment", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/8592118425ZA.pdf" },
  { title: "Photography (التصوير الفوتوغرافي)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/7192243035ZA.pdf" },
  { title: "Poster Presentation Competition", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/Zamarad Certificate of Participation_Poster Presentation_10-12-2023 55.pdf" },
  { title: "Resource Speaker — Linux Workshop", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/3509654818ZA.pdf" , featured: true },
  { title: "Self Marketing (أنت براند - التسويق الذاتي)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/5122766001ZA.pdf" },
  { title: "Transformers Workshop", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/8751174199ZA.pdf" },
  { title: "University Workshop", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/1191378753ZA.pdf" },
  // TODO missing file — re-upload the PDF, then uncomment this line:
  //  { title: "University Workshop", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/6820816325ZA[1].pdf" },
  { title: "Using LinkedIn in Job Search (استخدام LinkedIn في البحث عن الوظائف)", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/9729757156ZA.pdf" },
  { title: "Workshop on Data Visualization", issuer: "UTAS-Ibra", category: "University", file: "assets/certificates/4122692113ZA.pdf" },
];
