export const myProjects = [
  {
    id: 1,
    title: "ML Based Inventory Management",
    description:
      "This Project demonstrates a machine learning pipeline for Demand Prediction and Inventory Management",
    subDescription: [
      "This project demonstrates a comprehensive machine learning solution for inventory optimization, focusing on predicting future demand (units sold) through regression.",
      "Key ML concepts include feature engineering to extract 'day', 'month', and 'year' from date data, and categorical encoding (one-hot encoding) for store_id and sku_id.",
      "An ensemble method, RandomForestRegressor, is employed for robust predictions, showcasing a complete data pipeline from raw data to model output.",
      "The application of these predictions for inventory optimization highlights a crucial business concept.",
      "Finally, the project emphasizes an interactive ML application, making the predictive model accessible and user-friendly for practical business decision-making."
    ],
    href: "https://github.com/Ujjwal3115/Inventory_management_using_ML",
    logo: "",
    image: "/assets/projects/inventory_manager.png",
    tags: [
      {
        id: 1,
        name: "Python",
       },
      {
        id: 2,
        name: "Numpy",
       },
      {
        id: 3,
        name: "Pandas",
       },
      {
        id: 4,
        name: "Scikit-Learn",
       },
      {
        id: 5,
        name: "Streamlit",
       },
    ],
  },
  {
    id: 2,
    title: "Volume Control Using Hand Gestures",
    description:
      "This project allows you to control your system volume using hand gestures detected via your webcam. It uses OpenCV, MediaPipe, and Pycaw for hand tracking and volume control.",
    subDescription: [
      "This Python based program provides an intuitive, OpenCV-based volume controller that allows users to adjust their system's audio using simple hand gestures captured by a webcam.",
      "It leverages hand tracking to identify the thumb and index finger, calculates the distance between them, and maps this distance to the system's master volume via the pycaw library, all while providing real-time visual feedback with a volume bar and FPS display directly on the camera feed."
    ],
    href: "https://github.com/Ujjwal3115/Volume_Control_using_hand_gestures",
    logo: "",
    image: "/assets/projects/vol_control.png",
    tags: [
      {
        id: 1,
        name: "OpenCv",
       },
      {
        id: 2,
        name: "Mediapipe",
       },
      {
        id: 3,
        name: "Python",
       },
      {
        id: 4,
        name: "Pycaw",
       },
       {
        id: 5,
        name: "comtypes",
       },
    ],
  },
  {
    id: 3,
    title: "ATS Resume Classifier",
    description:
      "This tool allows HR professionals and job seekers to quickly analyze resumes against specific job descriptions for various tech roles.",
    subDescription: [
      "The ATS Resume Classifier is an intelligent web application that uses Google's Generative AI (Gemini 1.5 Flash) to revolutionize the hiring process.",
      "This tool allows users to upload a resume in PDF format and provide a job description for various tech roles (Data Science, Full Stack, DevOps, etc.).",
      "It then provides a professional evaluation of the candidate's alignment with the role, offers constructive feedback for skill improvement, and calculates a precise percentage match with contributing keywords, simulating an Applicant Tracking System (ATS).",
      "Built with Streamlit, it offers a user-friendly interface for efficient resume analysis and helps streamline recruitment decisions.",
    ],
    href: "https://github.com/Ujjwal3115/ATS_Resume_Tracker/tree/main",
    logo: "",
    image: "/assets/projects/ATS_resume_classifier.png",
    tags: [
      {
        id: 1,
        name: "Python",
       },
      {
        id: 2,
        name: "Streamlit",
       },
      {
        id: 3,
        name: "Google Generativeai",
       },
      {
        id: 4,
        name: "dotnev",
       },
    ],
  },
  {
    id: 4,
    title: "MCP Server Model Twitter",
    description:
      "This project demonstrates a simple client-server application using the Model Context Protocol (MCP) with Google Gemini AI and Twitter API integration.",
    subDescription: [
      "This Node.js application serves as a demonstration of an MCP (Model Context Protocol) server that integrates with Google's Gemini API to facilitate automated Twitter (X) posting.",
      "It exposes an SSE (Server-Sent Events) endpoint for real-time communication and defines two tools: addTwoNumbers for a basic arithmetic operation, and more importantly, createPost.",
      "The createPost tool leverages the Gemini API to generate tweet content based on user input, enabling the server to programmatically create and publish posts on X, showcasing how an MCP server can orchestrate AI-powered actions.",
    ],
    href: "https://github.com/Ujjwal3115/MCP_Server_Model_Twitter",
    logo: "",
    image: "/assets/projects/mcp_server.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
       },
      {
        id: 2,
        name: "Google Gemini Api",
       },
      {
        id: 3,
        name: "Twitter Developer credentials",
       },
    ],
  },
  {
    id: 5,
    title: "Minimlistic Portfolio",
    description:
      "My Old Portfolio showcasing my skills in web-dev and also some information about me.",
    subDescription: [
      "Made this portfolio using only HTML, CSS, Javascript. You can check this one out by clicking the url form the github, as its hosted too.😊"
    ],
    href: "https://github.com/Ujjwal3115/Portfolio1",
    logo: "",
    image: "/assets/projects/one_of_the_portfolio.png",
    tags: [
      {
        id: 1,
        name: "HTML",
       },
      {
        id: 2,
        name: "CSS",
       },
      {
        id: 3,
        name: "Javascript",
       }
    ],
  },
  {
    id: 6,
    title: "Main Portfolio",
    description:
      "My Main Portfolio made using React.js and TailwindCSS.",
    subDescription: [
      "Contains All the info About Me.",
    ],
    href: "https://github.com/Ujjwal3115/Main_portfolio",
    logo: "",
    image: "/assets/projects/Main_portfolio.png",
    tags: [
      {
        id: 1,
        name: "React",
       },
      {
        id: 2,
        name: "TailwindCSS",
       },
      {
        id: 3,
        name: "Gsap",
       }
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/Ujjwal3115",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ujjwalverma3115/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "twitter",
    href: "https://twitter.com/ujjwal3115",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png",
  },
];

export const experiences = [
  {
    title: "JCB India Headquaters",
    job: "ML Developer",
    date: "Jun - Jul 2025",
    contents: [
      "Worked as Ml Developer in the IT department of JCB India HQ, Faridabad.",
      "Contributed in the development of ML Models for the Inventory Management.",
      "Learned Working on Power Platform.",
      "Made PowerApps for the department."
    ],
  },
  {
    title: "Microsoft & SAP Collaboration, Edunet Foundation Initiative",
    job: "Trainee in TechSaksham Training Program",
    date: "Feb - Mar 2025",
    contents: [
      "Participated in the TechSaksham Training Program, a joint CSR initiative by Microsoft and SAP, facilitated by Edunet Foundation. Over 100 hours (Feb - Mar 2025).",
      "I completed a certification in IR4.0 Technologies, mastering Linux, Advanced Python, SQL, and Data Analysis.",
      "The program included real-world project implementations and industry mentorship, significantly enhancing my data analytics skills and preparing me for practical tech applications."
    ],
  },
];

export const certifications = [
  {
    name: "Programing in Java",
    issuer: "NPTEL with IIT Kharagpur Collaboration",
    date: "April 2025",
    link: "https://drive.google.com/file/d/1kTS-XPEO7RcINrIRymD0SD3cQ36Lz9gR/view?usp=sharing"
  },
  {
    name: "TechSaksham Training Program",
    issuer: "Edunet with Microsoft & SAP Collaboration",
    date: "March 2025",
    link: "https://drive.google.com/file/d/1Wv1lUooc_MNDVeydgRk0J9tmvtr_PuLa/view?usp=sharing"
  },
  {
    name: "Introduction to python",
    issuer: "Infosys Springboard",
    date: "April 2024",
    link: "https://drive.google.com/file/d/1JXXti4hoj8QFSkYZq-kjJTrAUoYBo8T3/view?usp=sharing"
  },
  {
    name: "C Certification",
    issuer: "Spoken Tutorial Project at IIT Bombay",
    date: "December 2023",
    link: "https://drive.google.com/file/d/1pIpRPXozDhJGlLuLy1ozQALmtbQmkIUE/view?usp=sharing"
  },

];
