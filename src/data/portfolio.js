export const personalInfo = {
  name: "Vasanthi Kondreddy",
  tagline: "Full Stack Developer & ML Engineer",
  subtitle: "Building scalable web apps and intelligent ML systems",
  location: "Kadapa, Andhra Pradesh",
  email: "k.vasanthi882005@gmail.com",
  phone: "8019862137",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  cgpa: "9.0",
  bio: "I'm a passionate Full Stack Developer and GATE-qualified Data Science learner with hands-on experience building scalable web applications and predictive ML models. I've completed internships at SURE Trust and Infosys Springboard, delivering real-world projects including a volunteer logistics platform and an earthquake alert prediction system.",
};

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "accent",
    items: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend & Cloud",
    icon: "⚡",
    color: "lime",
    items: ["Node.js", "Flask", "AWS EC2", "Nginx", "Vercel", "Render"],
  },
  {
    category: "Data Science & ML",
    icon: "🧠",
    color: "accent",
    items: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Random Forest"],
  },
  {
    category: "Languages",
    icon: "💻",
    color: "lime",
    items: ["Python", "Java", "C", "JavaScript"],
  },
  {
    category: "Tools & DevOps",
    icon: "🔧",
    color: "accent",
    items: ["Git", "VS Code", "Jupyter Notebook", "MySQL", "PM2", "Ubuntu"],
  },
  {
    category: "Computer Vision",
    icon: "👁️",
    color: "lime",
    items: ["Image Processing", "CNN Basics", "OpenCV "],
  },
];

export const projects = [
  {
  title: "Personal Portfolio Website",
  description:
    "A modern, responsive developer portfolio built from scratch with React, Vite, and Tailwind CSS. Features scroll-reveal animations, dark theme with dual-accent design, and a clean startup-style UI.",
  tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "CSS Animations"],
  category: "Frontend",
  highlights: [
    "Custom scroll-reveal hook using IntersectionObserver",
    "Responsive dark theme with cyan + lime dual accents",
    "Shimmer gradient animations & floating orb effects",
  ],
  github: "https://github.com/vasanthikondreddy/portfolio",  
  live: "https://portfolio-vasanthikondreddy.vercel.app/",                
  featured: false,
  gradient: "from-sky-500/20 to-indigo-600/10",
},
  {
    title: "Community Event Volunteer & Logistics Platform",
    description:
      "A full-stack platform to coordinate rural youth participation in social initiatives. Features real-time event updates, role-based access control, and secure JWT authentication.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "AWS EC2", "Nginx"],
    category: "Full Stack",
    highlights: [
      "Role-based access: Admin / Coordinator / Volunteer",
      "Real-time updates via Socket.io",
      "Deployed on AWS EC2 with SSL & PM2",
    ],
    github: "https://github.com/vasanthikondreddy/CommunityUnity",
    live: "http://13.220.86.201:5174/",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-600/10",
  },
  {
    title: "Earthquake Alert Prediction System",
    description:
      "ML-powered dashboard integrating real-time seismic data analysis, chart visualization, and automated alert generation using Random Forest and boosting algorithms.",
    tech: ["Python", "Flask", "Random Forest", "XGBoost", "Pandas", "Vercel"],
    category: "Machine Learning",
    highlights: [
      "ML models: Random Forest + Boosting",
      "Real-time chart visualization",
      "Deployed on Vercel",
    ],
    github: "https://github.com/vasanthikondreddy/AI-ImpactSense",
    live: "https://ai-impact-sense-3pyi.vercel.app/",
    featured: true,
    gradient: "from-lime-500/20 to-green-600/10",
  },
  {
    title: "Smart AI Transport Occupancy Prediction",
    description:
      "AI/ML system to predict transport vehicle occupancy, enabling smarter fleet management and route optimization using advanced regression and classification models.",
    tech: ["Python", "Scikit-learn", "Pandas", "TensorFlow", "Jupyter"],
    category: "AI / ML",
    highlights: [
      "Occupancy prediction with ML models",
      "Feature engineering & data preprocessing",
      "End-to-end pipeline",
    ],
    github: "https://github.com/vasanthikondreddy/SmartAI-Transport-Occupancy",
    live: "https://smart-ai-transport-occupancy.vercel.app/",
    featured: false,
    gradient: "from-purple-500/20 to-pink-600/10",
  },
  // {
  //   title: "Titanic Survival Prediction",
  //   description:
  //     "Classic data science project exploring feature engineering, EDA, and classification models on the Titanic dataset to predict passenger survival with high accuracy.",
  //   tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
  //   category: "Data Science",
  //   highlights: [
  //     "Exploratory data analysis",
  //     "Feature engineering",
  //     "Multiple classifier comparison",
  //   ],
  //   github: "https://github.com",
  //   live: null,
  //   featured: false,
  //   gradient: "from-orange-500/20 to-red-600/10",
  // },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "SURE Trust (IERY)",
    period: "Apr 2025 – Sept 2025",
    type: "Internship",
    color: "accent",
    points: [
      "Designed and deployed a Community Event Volunteer & Logistics Platform for rural youth social initiatives.",
      "Built with MERN stack featuring role-based access control (admin/coordinator/volunteer) and Socket.io for real-time event updates.",
      "Deployed on AWS EC2 with Ubuntu 22.04, PM2 process manager, Nginx reverse proxy, and automated SSL renewal.",
      "Implemented secure JWT-based authentication and real-time data handling.",
    ],
  },
  {
    role: "Virtual Intern – Machine Learning",
    company: "Infosys Springboard",
    period: "Nov 2025 – Jan 2026",
    type: "Internship",
    color: "lime",
    points: [
      "Developed an earthquake alert dashboard integrating real-time prediction, chart visualization, and dataset preview.",
      "Implemented ML models (Random Forest, boosting algorithms) for seismic data analysis and alert generation.",
      "Designed backend logic with Flask and deployed the application on Vercel.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech – Computer Science Engineering",
    institution: "Rajiv Gandhi University of Knowledge and Technologies (IIIT)",
    period: "2023 – Present",
    cgpa: "9.0",
    note: "GATE-qualified | Data Science specialization",
  },
  {
    degree: "Pre-University Course (PUC)",
    institution: "Rajiv Gandhi University of Knowledge and Technologies (IIIT)",
    period: "2021 – 2023",
    cgpa: "9.92",
    note: null,
  },
  {
    degree: "SSC",
    institution: "AP Model School",
    period: "2020 – 2021",
    cgpa: "10.0",
    note: "Perfect score",
  },
];

export const certifications = [
  { name: "Python", issuer: "Great Learning, Infosys Springboard, GeeksforGeeks" },
  { name: "AI Fundamentals", issuer: "IBM" },
  { name: "Java", issuer: "Edx" },
  { name: "CSS", issuer: "HackerRank" },
  { name: "Full Stack Development Internship", issuer: "SURE Trust" },
  { name: "Machine Learning Internship", issuer: "Infosys Springboard" },
];

export const codingProfiles = [
  { name: "GeeksforGeeks", url: "https://geeksforgeeks.org", icon: "GFG" },
  { name: "LeetCode", url: "https://leetcode.com", icon: "LC" },
  { name: "HackerRank", url: "https://hackerrank.com", icon: "HR" },
  { name: "Unstop", url: "https://unstop.com", icon: "US" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
