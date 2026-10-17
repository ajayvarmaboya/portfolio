/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Edit this single file to update your projects, skills, contact links,
 * and social profiles in the future without touching any UI code.
 */

export const portfolioData = {
  personal: {
    name: "Boya Ajay Varma",
    shortName: "Ajay",
    role: "Backend & AI Engineer | Open-Source Contributor",
    headline: "Building resilient backends, distributed APIs, and Agentic AI workflows with open-source rigor.",
    subheadline: "Computer Science (AI & ML) graduate with hands-on experience orchestrating LangGraph RAG systems, Java layered architectures, and high-performance Python APIs.",
    location: "Bengaluru, India",
    openToRelocate: true,
    email: "ajayvarmaboya@gmail.com",
    phone: "+91 9010413027",
    isOpenToWork: true,
    
    // Social & Professional Profiles
    github: "https://github.com/ajayvarmaboya",
    leetcode: "https://leetcode.com/u/ajayvarmab/",
    neetcodeSubmissions: "https://github.com/ajayvarmaboya/neetcode-submissions",
    
    // LINKEDIN STATUS:
    // Once your LinkedIn account is restored by support, simply replace `null` with your profile URL:
    // e.g., linkedin: "https://www.linkedin.com/in/ajayvarmaboya",
    linkedin: null,

    // Profile photo: Defaults to your live GitHub avatar.
    // If you wish to use a local photo, put photo.jpg inside public/ and change this to "/photo.jpg"
    avatarUrl: "https://github.com/ajayvarmaboya.png",
    initials: "AV"
  },

  // Tech banner items (replaces client logos from Figma design)
  techStackMarquee: [
    { name: "Java 17/21", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "FastAPI", category: "Backend" },
    { name: "LangGraph / RAG", category: "AI / GenAI" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Spring Boot", category: "Backend" },
    { name: "Pinecone", category: "Vector DB" },
    { name: "REST APIs", category: "Architecture" }
  ],

  // 4 Core Competency Cards (Matching Figma's 4-card service grid)
  competencies: [
    {
      id: "genai",
      title: "GenAI & Agentic RAG",
      description: "LangGraph StateGraph orchestration, document chunking, Pinecone vector indexing, and context-grounded Q&A pipelines.",
      icon: "Sparkles",
      highlights: ["StateGraph Routing", "Pinecone & FAISS", "Sentence Transformers", "Automated Evals"]
    },
    {
      id: "backend",
      title: "Backend & API Design",
      description: "FastAPI and Java/Spring Boot microservices, Pydantic validation, layered DAO pattern, and OAuth2 authentication flows.",
      icon: "Terminal",
      highlights: ["FastAPI & Uvicorn", "Spring Boot 3", "Layered Architecture", "OAuth 2.0 Workflows"]
    },
    {
      id: "database",
      title: "Data & Storage Systems",
      description: "Relational data modeling with PostgreSQL & MySQL, JDBC connection handling, PreparedStatement safety, and indexing.",
      icon: "Database",
      highlights: ["PostgreSQL & MySQL", "JDBC & Connection Pools", "Vector Embeddings", "Relational Modeling"]
    },
    {
      id: "devops",
      title: "DevOps & Open-Source",
      description: "Docker containerization, Compose multi-service setups, CI/CD pipelines, and contributing PRs to open-source agentic applications.",
      icon: "Boxes",
      highlights: ["Docker & Compose", "Open-Source PRs", "Git Collaboration", "Linux Systems"]
    }
  ],

  // Featured Hero Projects (Curated top 4 for recruiters)
  featuredProjects: [
    {
      id: "legixo-rag",
      title: "Legixo RAG — Document-Grounded GenAI Application",
      category: "GenAI / Agentic RAG",
      badge: "12/12 Evals Passed",
      badgeColor: "emerald",
      description: "Orchestrated a question-answering pipeline using LangGraph StateGraph with conditional routing for relevance filtering, source reporting, and hallucination reduction. Integrated Pinecone vector database with Sentence Transformers for semantic chunk retrieval and exposed via high-throughput FastAPI endpoints.",
      tech: ["Python", "FastAPI", "LangGraph", "Pinecone", "Groq LLM", "Sentence Transformers", "Pydantic"],
      github: "https://github.com/ajayvarmaboya",
      liveDemo: null, // Add URL if hosted
      highlights: [
        "StateGraph with conditional routing between relevance filtering & source citation",
        "Ingests Markdown documents with custom chunking and semantic vector embeddings",
        "FastAPI /ask endpoint backed by strict Pydantic request/response schema validation"
      ]
    },
    {
      id: "leetcode-sync",
      title: "LeetCode GitHub Sync — Extension & Spring Boot Service",
      category: "Backend & Extension",
      badge: "Manifest V3",
      badgeColor: "blue",
      description: "Engineered an automated browser extension workflow detecting accepted LeetCode submissions and committing structured solutions to GitHub via REST API. Implemented GitHub OAuth token exchange through a Spring Boot microservice, Monaco editor extraction, and wrong-answer duplicate prevention.",
      tech: ["Java", "Spring Boot", "JavaScript", "Manifest V3", "GitHub REST API", "OAuth 2.0"],
      github: "https://github.com/ajayvarmaboya",
      liveDemo: null,
      highlights: [
        "Secure GitHub OAuth token exchange handled via Spring Boot backend service",
        "Extracts source code, language, and problem metadata directly from Monaco editor",
        "UTF-8-safe Base64 encoding with wrong-answer protection & sync error logging"
      ]
    },
    {
      id: "jobprep-os",
      title: "JobPrep OS & StockFlow Backend",
      category: "Backend & Distributed Systems",
      badge: "Docker Compose",
      badgeColor: "purple",
      description: "Designed relational database schemas and indexed PostgreSQL tables for tracking interview preparation and order/inventory workflows. Built with layered Spring Boot 3 architecture, containerized with Docker Compose, and backed by comprehensive database migrations.",
      tech: ["Java 17", "Spring Boot 3", "PostgreSQL", "Docker Compose", "Maven", "REST APIs"],
      github: "https://github.com/ajayvarmaboya",
      liveDemo: null,
      highlights: [
        "Multi-container setup using Docker Compose for app and PostgreSQL persistence",
        "Layered service-DAO pattern with explicit entity validation and custom exceptions",
        "Relational schemas optimized for tracking DSA, system design, and job applications"
      ]
    },
    {
      id: "openwork-contribution",
      title: "OpenWork — Open-Source Agentic AI Contribution",
      category: "Open Source",
      badge: "Active Contributor",
      badgeColor: "amber",
      description: "Contributing to an open-source desktop application that powers guided agentic workflows. Involved in Docker container execution, testing, and Git collaboration workflows following standard open-source contribution guidelines.",
      tech: ["Open Source", "Docker", "Git/GitHub", "Agentic AI", "Linux"],
      github: "https://github.com/ajayvarmaboya",
      liveDemo: null,
      highlights: [
        "Collaborated on PR reviews, issue triage, and testing in containerized environments",
        "Hands-on Docker orchestration for local desktop agent execution workflows"
      ]
    }
  ],

  // Secondary Project Archive (viewable in an expandable section or modal)
  archivedProjects: [
    {
      title: "Student Management System (Console CRUD)",
      tech: ["Java 21", "JDBC", "PostgreSQL", "DAO Pattern"],
      description: "Built a console CRUD application using raw JDBC and PostgreSQL without ORMs. Implemented presentation, service, and DAO layers with constructor dependency injection and PreparedStatement safety."
    },
    {
      title: "GitHub User Explorer",
      tech: ["React", "Vite", "JavaScript", "GitHub API", "CSS"],
      description: "Interactive profile search web application featuring 500 ms debounced API querying (reducing unnecessary network requests by ~40%), loading skeletons, and theme switching."
    },
    {
      title: "Customer Churn Prediction",
      tech: ["Python", "Pandas", "NumPy", "scikit-learn"],
      description: "End-to-end classification pipeline for telecom churn analysis with missing value imputation, standard scaling, logistic regression modeling, and comprehensive F1/recall evaluations."
    },
    {
      title: "Activity Tracker",
      tech: ["React", "Vite", "Hooks", "Event Listeners"],
      description: "Idle-time tracking web application utilizing mouse/keyboard event listeners, cleanup effects, and derived state calculation."
    }
  ],

  // Education & Credentials
  education: {
    degree: "Bachelor of Technology, Computer Science (AI & ML)",
    college: "Sri Venkateswara Engineering College",
    location: "Tirupati, India",
    year: "2025 Graduate",
    cgpa: "8.2 / 10",
    honors: "NPTEL Certified — Fundamentals of Cloud, Edge, IoT & ML (Top 5% National Rank)"
  }
};
