import {
    javascript,
    typescript,
    css,
    reactjs,
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
    rovisys,
    Elevator,
    precharge
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
        "Scaled-down elevator in a group of 3",
      tags: [
        {
          name: "VEX",
          color: "blue-text-gradient",
        },
        {
          name: "Mechanical Pulley System",
          color: "green-text-gradient",
        },
      ],
      image: Elevator,
      source_code_link: "https://youtu.be/ZlkWH7CBNBE",
    },
    {
      name: "PreCharge Board",
      description:
        "Made a PCB for the precharge cylce in an electric car",
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
      image: precharge,
      source_code_link: "https://solarracing.gatech.edu/",
    },
    {
      name: "PicPurge",
      description:
        "A tool to remove duplicate photos from a designated folder",
      tags: [
        {
          name: "ReactJS",
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
      image: precharge,
      source_code_link: "https://github.com/Logan-Fouts/PicPurge",
    },
  ];
  
  export { services, technologies, experiences, projects };