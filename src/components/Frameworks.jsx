import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
const skills = [
  {
    href: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    alt: "css3"
  },
  {
    href: "https://cdn.worldvectorlogo.com/logos/django.svg",
    alt: "django"
  },
  {
    href: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    alt: "docker"
  },
  {
    href: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    alt: "figma"
  },
  {
    href: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    alt: "html5"
  },
  {
    href: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    alt: "java"
  },
  {
    href: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "javascript"
  },
  {
    href: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    alt: "linux"
  },
  {
    href: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    alt: "mysql"
  },
  {
    href: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "nodejs"
  },
  {
    href: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
    alt: "opencv"
  },
  {
    href: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
    alt: "pandas"
  },
  {
    href: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    alt: "postman"
  },
  {
    href: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    alt: "python"
  },
  {
    href: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
    alt: "pytorch"
  },
  {
    href: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    alt: "scikit_learn"
  },
  {
    href: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
    alt: "seaborn"
  },
  {
    href: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    alt: "tailwind"
  },
  {
    href: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
    alt: "tensorflow"
  },
  {
    href: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    alt: "express"
  },
  {
    href: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    alt: "mongodb"
  },
  {
    href: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    alt: "react"
  },
  {
    href: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
    alt: "sqlite"
  }
];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={35} radius={190}>
        {skills.map((skill, index) => (
          <Icon key={index} src={skill.href} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={115} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} src={skill.href} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
