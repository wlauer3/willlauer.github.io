import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    css,
    reactjs,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    AutoCAD,
    iFix,
    Kicad,
    Fusion360,
    VisualBasic,
    chemical,
    pcb,
    threedmodel,
    frontend,
    sirnas,
    troy,
    rovisys
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
      title: "PCB Design",
      icon: pcb,
    },
    {
      title: "3D-Modeling",
      icon: threedmodel,
    },
    {
      title: "Frontend Development",
      icon: frontend,
    },
    {
      title: "Chemical Compounding",
      icon: chemical,
    },
  ];
  
  const technologies = [
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "VisualBasic",
      icon: VisualBasic,
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
      name: "Kicad",
      icon: Kicad,
    },
    {
      name: "AutoCAD",
      icon: AutoCAD,
    },
    {
      name: "Proficy iFix",
      icon: iFix,
    },
    {
      name: "Fusion360",
      icon: Fusion360,
    },
  ];
  
  const experiences = [
    {
      title: "Pizza Chef",
      company_name: "Sirna's",
      icon: sirnas,
      iconBg: "#383E56",
      date: "August 2019 - May 2022",
      points: [
        "Made lotsa pizza",
        "Trained people to make lotsa pizza.",
        "Cooked 15 pizza simultaneously at maximum output."
      ],
    },
    {
      title: "Chemical Compounder",
      company_name: "Troy Chemical",
      icon: troy,
      iconBg: "#E6DEDD",
      date: "May 2022 - Aug 2022",
      points: [
        "Compounded lotsa chemicals.",
        "Listened closely to Brendan's instructions.",
        "Carefully planned a complex mystery.",
        "Ate a hotdog.",
      ],
    },
    {
      title: "Systems Co-op",
      company_name: "Rovisys",
      icon: rovisys,
      iconBg: "#383E56",
      date: "May 2023 - Aug 2023",
      points: [
        "Collaborated in AutoCAD projects.",
        "Collaborated in iFix HMI projects.",
        "Utilized VBcode to produce userforms and costomer graphics.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Elevator",
      description:
        "Made a floor go up and down with lights.",
      tags: [
        {
          name: "VEX KIT",
          color: "blue-text-gradient",
        },
        {
          name: "VEX Cortex Coding",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://youtube.com/",
    },
    {
      name: "PreCharge Board",
      description:
        "Made a PCB that precharged an electric car",
      tags: [
        {
          name: "Kicad",
          color: "blue-text-gradient",
        },
        {
          name: "GitHub",
          color: "green-text-gradient",
        },
        {
          name: "Circuit Design",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "PicPurge",
      description:
        "A tool to remove duplicate photos from a designated photo",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Collaboration",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };