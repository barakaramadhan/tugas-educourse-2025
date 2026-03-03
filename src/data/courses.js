export const courses = [
  { id: "1", title: "React Fundamental", description: "Belajar dasar React dari nol.", lessons: ["Component", "Props", "State"], featured: true, category: "frontend" },
  { id: "2", title: "React Router", description: "Routing di React.", lessons: ["Routes", "Outlet", "useParams"], featured: true, category: "frontend" },
  { id: "3", title: "Tailwind CSS", description: "Styling modern.", lessons: ["Flexbox", "Grid", "Responsive"], featured: false, category: "frontend" },
  { id: "4", title: "JavaScript ES6", description: "JS modern.", lessons: ["Arrow", "Async Await"], featured: false, category: "programming" },
  { id: "5", title: "UI Design", description: "Design interface.", lessons: ["Color", "Layout"], featured: true, category: "design" },
  { id: "6", title: "Deploy Website", description: "Deploy ke internet.", lessons: ["Build", "Hosting"], featured: false, category: "devops" },

  { id: "7", title: "Node.js Basic", description: "Belajar backend dengan Node.js.", lessons: ["NPM", "Module", "File System"], featured: true, category: "backend" },
  { id: "8", title: "Express.js", description: "Membuat REST API.", lessons: ["Routing", "Middleware", "Controller"], featured: false, category: "backend" },
  { id: "9", title: "MongoDB Database", description: "Database NoSQL modern.", lessons: ["Schema", "CRUD", "Atlas"], featured: false, category: "database" },
  { id: "10", title: "MySQL Fundamental", description: "Database relational.", lessons: ["Table", "Query", "Join"], featured: false, category: "database" },
  { id: "11", title: "Laravel Basic", description: "Framework PHP populer.", lessons: ["Routing", "Blade", "Eloquent"], featured: true, category: "backend" },
  { id: "12", title: "Python for Beginner", description: "Belajar Python dari nol.", lessons: ["Variable", "Loop", "Function"], featured: true, category: "programming" },
  { id: "13", title: "Django Web", description: "Framework Python untuk web.", lessons: ["Model", "View", "Template"], featured: false, category: "backend" },

  { id: "14", title: "Flutter Mobile App", description: "Membuat aplikasi Android/iOS.", lessons: ["Widget", "State", "Navigation"], featured: true, category: "mobile" },
  { id: "15", title: "UI/UX Design", description: "Dasar desain aplikasi.", lessons: ["Wireframe", "Prototype", "User Flow"], featured: true, category: "design" },
  { id: "16", title: "Figma Mastery", description: "Desain profesional di Figma.", lessons: ["Auto Layout", "Component", "Prototype"], featured: false, category: "design" },

  { id: "17", title: "HTML & CSS Basic", description: "Dasar membuat website.", lessons: ["Tag", "Flexbox", "Grid"], featured: false, category: "frontend" },
  { id: "18", title: "Bootstrap Framework", description: "Framework CSS cepat.", lessons: ["Grid System", "Component", "Utility"], featured: false, category: "frontend" },

  { id: "19", title: "Cyber Security Basic", description: "Keamanan sistem.", lessons: ["Encryption", "Firewall", "Phishing"], featured: true, category: "security" },
  { id: "20", title: "Ethical Hacking", description: "Belajar hacking legal.", lessons: ["Recon", "Scanning", "Testing"], featured: false, category: "security" },

  { id: "21", title: "Data Science Intro", description: "Analisis data dasar.", lessons: ["Pandas", "Numpy", "Visualization"], featured: true, category: "data" },
  { id: "22", title: "Machine Learning Basic", description: "AI & Machine Learning.", lessons: ["Regression", "Classification", "Model"], featured: true, category: "data" },

  { id: "23", title: "Git & GitHub", description: "Version control system.", lessons: ["Commit", "Branch", "Merge"], featured: true, category: "devops" },
  { id: "24", title: "Docker Container", description: "Belajar containerization.", lessons: ["Image", "Container", "Compose"], featured: false, category: "devops" },
  { id: "25", title: "Linux Command Line", description: "Dasar sistem Linux.", lessons: ["Terminal", "Permission", "Process"], featured: false, category: "devops" },

  { id: "26", title: "Cloud Computing", description: "Konsep cloud modern.", lessons: ["IaaS", "PaaS", "Deployment"], featured: true, category: "cloud" },
  { id: "27", title: "AWS Fundamental", description: "Cloud service Amazon.", lessons: ["EC2", "S3", "IAM"], featured: false, category: "cloud" },

  { id: "28", title: "Firebase Backend", description: "Backend as a Service.", lessons: ["Auth", "Firestore", "Hosting"], featured: true, category: "backend" },
  { id: "29", title: "GraphQL API", description: "API modern alternatif REST.", lessons: ["Query", "Mutation", "Schema"], featured: false, category: "backend" },

  { id: "30", title: "TypeScript Basic", description: "JavaScript dengan type.", lessons: ["Type", "Interface", "Enum"], featured: false, category: "programming" },

  { id: "31", title: "React Native", description: "Mobile app dengan React.", lessons: ["Component", "Navigation", "API"], featured: true, category: "mobile" },
  { id: "32", title: "Kotlin Android", description: "Aplikasi Android native.", lessons: ["Activity", "Intent", "RecyclerView"], featured: false, category: "mobile" },
  { id: "33", title: "Swift iOS", description: "Aplikasi iPhone.", lessons: ["UIView", "Navigation", "API"], featured: false, category: "mobile" },

  { id: "34", title: "UI Animation", description: "Animasi modern UI.", lessons: ["Transition", "Timing", "Effect"], featured: false, category: "design" },

  { id: "35", title: "SEO Website", description: "Optimasi mesin pencari.", lessons: ["Keyword", "Meta Tag", "Analytics"], featured: true, category: "marketing" },
  { id: "36", title: "Digital Marketing", description: "Promosi online.", lessons: ["Ads", "Content", "Strategy"], featured: false, category: "marketing" },
  { id: "37", title: "Content Creator", description: "Membangun personal branding.", lessons: ["Editing", "Script", "Branding"], featured: false, category: "marketing" },
  { id: "38", title: "Video Editing", description: "Editing video profesional.", lessons: ["Cut", "Color Grading", "Effect"], featured: false, category: "design" },
  { id: "39", title: "Graphic Design", description: "Desain visual kreatif.", lessons: ["Typography", "Color", "Layout"], featured: true, category: "design" },
  { id: "40", title: "Canva Design", description: "Desain cepat dan mudah.", lessons: ["Template", "Export", "Brand Kit"], featured: false, category: "design" },

  { id: "41", title: "C++ Programming", description: "Bahasa pemrograman dasar.", lessons: ["Variable", "Loop", "Function"], featured: false, category: "programming" },
  { id: "42", title: "Java Programming", description: "OOP dengan Java.", lessons: ["Class", "Object", "Inheritance"], featured: false, category: "programming" },
  { id: "43", title: "Spring Boot", description: "Backend Java modern.", lessons: ["Controller", "JPA", "Security"], featured: false, category: "backend" },

  { id: "44", title: "API Integration", description: "Menghubungkan frontend & backend.", lessons: ["Fetch", "Auth", "JSON"], featured: true, category: "backend" },
  { id: "45", title: "Testing Automation", description: "Testing otomatis aplikasi.", lessons: ["Unit Test", "Integration", "CI"], featured: false, category: "devops" },

  { id: "46", title: "Project Management", description: "Manajemen proyek IT.", lessons: ["Scrum", "Kanban", "Planning"], featured: false, category: "management" },
  { id: "47", title: "Agile Development", description: "Metode kerja agile.", lessons: ["Sprint", "Daily Standup", "Retrospective"], featured: false, category: "management" },

  { id: "48", title: "Blockchain Basic", description: "Teknologi blockchain.", lessons: ["Crypto", "Smart Contract", "Wallet"], featured: true, category: "programming" },
  { id: "49", title: "DevOps Fundamental", description: "Integrasi development & operation.", lessons: ["CI/CD", "Automation", "Monitoring"], featured: true, category: "devops" },
  { id: "50", title: "Fullstack Developer", description: "Frontend + Backend.", lessons: ["Frontend", "Backend", "Database"], featured: true, category: "backend" },
];