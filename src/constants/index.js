import {
  angular,
  asdc,
  backend,
  cloud,
  creator,
  css,
  foodhub,
  git,
  gspann,
  hpe,
  html,
  java,
  javascript,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  typescript,
  web,
  webproject,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    title: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Hewlett Packard Enterprise",
    icon: hpe,
    iconBg: "#383E56",
    date: "November 2020 - June 2022",
    points: [
      "Collaborated with a group of 4 members to automate report generation by using Python and Pandas libraries reducing time spent from 7 hours to 5 minutes, resulting in a 98 percent reduction in time for the client saving around $117,000 per year",
      "Created and tested Python scripts to automate email alerts, boosting the efficiency of taking action by over 30% through the timely delivery of summary reports to clients.",
      "Developed and refined technical documentation to improve clarity and comprehension for new team members.",
    ],
  },
  {
    title: "Sofware Engineer",
    company_name: "FoodHub",
    icon: foodhub,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Nov 2020",
    points: [
      "Improved user experience by creating intuitive user interfaces, and designing and implementing mobile animations, resulting in a significant 40% increase in user experience using React, React Native, Redux, and JavaScript.",
      "Leveraged Google Firebase, geolocation, and geofencing libraries to create a feature that displayed nearby restaurants to users, while utilizing push notifications to increase user retention by 20%",
      "Collaboratively worked with team members in an agile environment, providing constructive feedback during pull requests and code reviews to optimize code quality and productivity..",
    ],
  },
  {
    title: "Big Data Intern",
    company_name: "GSPANN Technologies",
    icon: gspann,
    iconBg: "#383E56",
    date: "June 2018 - July 2018",
    points: [
      "Involved in processing terabytes of data, applying data modeling and mining techniques using Hadoop, Hive, and MapReduce to extract meaningful insights and drive actionable outcomes for the company.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had mentored Rituraj while his tenure at HPE. Rituraj is a hard worker & quick learner. He has very good Python scripting skills and contributed significantly with his Python skills in loading various domain specific data of RAN/Transmission/Microwave/DWDM inventories. He was very sincere to the tasks assigned and gave his best of efforts to complete the task with quality. He is somebody every manager would love to have in his team. Thanks Rituraj for your contribution is project.",
    designation: "Systems Architect",
    company: "Hewlett Packard Enterprise",
    image: "https://i.ibb.co/c3LVjhn/hardeep.jpg",
  },
  {
    testimonial:
      "Rituraj Kadamati is amazing at his job! He knows his way around people, he is good with the clients, does whatever it takes to help colleagues and gets things done. I have worked with Rituraj in the same team for about an year at HPE. he is great colleague with expertise in Python Development and Analytical skills. his problem solving skills are amazing and helped to automate many repetitive tasks. i would highly recommend Rituraj for Python Software development.Rituraj Kadamati is a great professional!",
    name: "Naveen Kumar",
    designation: "Application Developer",
    company: "Oracle",
    image: "https://i.ibb.co/DDj8hVV/blank.png",
  },
];

const projects = [
  {
    name: "Blog Application",
    description:
      "This academic project involved the design and development of a full-stack blog application, which utilized AWS services such as Lambda, API Gateway, and DynamoDB to create the backend API, and React.js for the front end. Demonstrated proficiency in CloudFormation for infrastructure automation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: cloud,
    source_code_link:
      "https://github.com/rituraj567/CSCI5409-CloudComputing-Project",
  },
  {
    name: "Ecommerce Web Application",
    description:
      "This Ecommerce project involved developing and implementing a full-stack ecommerce web application using ReactJS and Node.js. I developed features for product details and cart management, as well as the creation of RESTful APIs for seamless data retrieval for cart management and product details",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: webproject,
    source_code_link: "https://github.com/rituraj567/CSCI5709-Web-Project",
  },
  {
    name: "Food Delivery Web Application",
    description:
      "The Food Delivery Web App is a group academic project built using Java, Spring Boot, and SQL. Involved in developing features such as restaurant management, cart management, and restaurant search functionality. In addition, implemented industry-standard software development techniques, SOLID principles, clean code, and design patterns to ensure high-quality software delivery. ",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: asdc,
    source_code_link: "https://github.com/rituraj567/CSCI5308-ASDC-Project",
  },
];

export { services, technologies, experiences, testimonials, projects };
