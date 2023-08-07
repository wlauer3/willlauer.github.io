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
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume",
    }
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
      description:[
        "[Date: May 2021] ",
        "In this project, I was assigned to create a scaled-down ",
        "elevator with two other classmates. We built it from scratch ", 
        "with limited parts from a VEX kit and used a VEX Cortex to ",
        "code logic into it. ",
        "    ",
        "Our elevator stood at about 1 meter tall ",
        "and was equipped with 3 floors, each with call buttons and ",
        "LED indicators for the position of the elevator. We had to ",
        "come up with a series of pulleys to hoist the floor of the ",
        "elevator up, as well as a dual-motor system to allow for a ",
        "higher carrying capacity. ",
        "     ",
        "See link for more information."
      ],
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
      description: [
        "[Date: Feb-Apr 2023] ", 
        "This project is part of a much larger whole that is the SR4 ",
        "project of Georgia Tech Solar Racing. The SR4 is a ",
        "solar-powered 4-person vehicle that is set to race in a ",
        "1500+ mile race Summer of 2024. ",
        "    ",
        "The work I did on this project pertains to the precharge cycle. ",
        "In a team of 4, we created a precharge PCB that controls this ",
        "precharge cycle. We used KiCad PCB software to design a schematic ",
        "and PCB for the board before printing it and integrating it into ",
        "the SR4. ",
        "     ",
        "The first step in creating this PCB was simulating and ",
        "calculating. We used Falstad circuit simulator to see test ",
        "different resistances and charging times. Next, we compiled ",
        "our data into a spreadsheet to test different resistor ",
        "combinations and see the energy dissipation across them. ",
        "Finally, we designed the schematic and PCB in KiCad before the ",
        "arduous real-world testing phase. ",
        "     ",
        "See link for more information."
      ],
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
      description:[
        "[Date: Jul-Aug 2023] ",
        "This project is my first international collaboration. I worked ",
        "with Logan Fouts, who lives in Sweden, to develop the frontend of ",
        "his application, PicPurge. The Purpose of PicPurge is to remove ",
        "duplicate photots from a folder automatically. The app was ",
        "initially developed for Logan's mother to use for her library of ",
        "1000's of photos. I joined the project in July to help develope ",
        "the frontend (UI). ",
        "      ",
        "PicPurge utiltizes an open-source python api ",
        "to determine what is a duplicate. This api measures the hamming ",
        "distance of 2 photos and if they are too similar per the level ",
        "decided by the user, it is deemed a duplicate and moved into a ",
        "folder labeled 'duplicates'. The api uses machine-learning so ",
        "that it is able to compare all different photo sizes. ",
        "     ",
        "To make the UI, we used ReactJS. After we developed the UI in ",
        "React, we packaged it all up in Electron. Electron is a tool ",
        "that converts webpages into applications for desktop computers. ",
        "*We used a Figma page to come up with design ideas*",
        "    ",
        "See link for more information."
      ],
      tags: [
        {
          name: "Collaboration",
          color: "pink-text-gradient",
        },
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Frontend Development",
          color: "green-pink-gradient",
        }
      ],
      image: precharge,
      source_code_link: "https://github.com/Logan-Fouts/PicPurge",
    },
  ];
  
  export { services, technologies, experiences, projects };