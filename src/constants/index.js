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
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
       },
      {
        id: 2,
        name: "Azure",
       },
      {
        id: 3,
        name: "Stripe",
       },
      {
        id: 4,
        name: "TailwindCSS",
       },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
