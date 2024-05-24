import {
    javascript,
    python,
    css,
    AutoCAD,
    iFix,
    Kicad,
    VisualBasic,
    chemical,
    pcb,
    threedmodel,
    frontend,
    sirnas,
    troy,
    rovisys,
    Elevator,
    precharge,
    saturn,
    Accordionboard,
    picpurge,
    asm,
    c,
    labview,
    wireshark,
    vhdl,
    Quartus,

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
      id: "works",
      title: "Works",
    },
    {
      id: "resume",
      title: "Resume",
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
      title: "PLC & HMI Programming",
      icon: threedmodel,
    },
    {
      title: "Emmbedded Systems",
      icon: frontend,
    },
    {
      title: "Chemical Compounding",
      icon: chemical,
    },
  ];
  
  const technologies = [
    {
      name: "VHDL",
      icon: vhdl,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Assembly",
      icon: asm,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "VisualBasic",
      icon: VisualBasic,
    },
    {
      name: "CSS",
      icon: css,
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
      name: "Quartus",
      icon: Quartus,
    },
    {
      name: "NI LabView",
      icon: labview,
    },
    {
      name: "Wireshark",
      icon: wireshark,
    },
    {
      name: "Proficy iFix",
      icon: iFix,
    },
    {
      name: "Saturn PCB",
      icon: saturn,
    },
  ];
  
  const experiences = [
    {
      title: "Pizza Chef",
      company_name: "Sirna's",
      icon: sirnas,
      iconBg: "#FFEAE5",
      date: "August 2019 - May 2022",
      points: [
        "Worked all-throughout high-school and summers part-time.",
        "Trained 8+ new employees how to properly make pizzas, calzones, and pastas.",
        "Operated pizza oven and other kitchen equipment safely to protect team members form harm and equipment damage."
      ],
    },
    {
      title: "Chemical Compounder",
      company_name: "Troy Chemical",
      icon: troy,
      iconBg: "#1CC843",
      date: "May 2022 - Aug 2022",
      points: [
        "Helped in raising shipping success rate to >90% for the end of Q1 and into Q2.",
        "Modified controls to regulate temperature, pressure, feed and flow of liquids and gases.",
        "Proficient in operating 4 different forklifts and other heavy machinery (gas & electric)",
        "Operated industrial mixing equipment.",
        "Worked 42 hours a week to pay for college expenses"
      ],
    },
    {
      title: "Systems Co-op",
      company_name: "Rovisys",
      icon: rovisys,
      iconBg: "#98FFF5",
      date: "May 2023 - Aug 2023",
      points: [
        "Collaborated on AutoCAD projects (Redline drawing updates for INEOS chemical plant).",
        "Collaborated on iFix HMI projects.",
        "Utilized VBcode to produce userforms and customer graphics.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Information Systems Co-op",
      company_name: "Rovisys",
      icon: rovisys,
      iconBg: "#98FFF5",
      date: "May 2024 - Aug 2024",
      points: [
        "Collaborated on AutoCAD projects (Redline drawing updates for INEOS chemical plant).",
        "Collaborated on iFix HMI projects.",
        "Utilized VBcode to produce userforms and customer graphics.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  const collabproj = [
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
      source_code_link: "https://github.gatech.edu/GTSR/board-precharge-board",
    },
    {
      name: "PicPurge",
      description:[
        "[Date: Jul-Sept 2023] ",
        "This project is my first international collaboration. I worked ",
        "with Logan Fouts, who lives in Sweden, to develop the frontend of ",
        "his application, PicPurge. The Purpose of PicPurge is to remove ",
        "duplicate photots from a folder automatically. The app was ",
        "initially developed for Logan's mother to use for her library of ",
        "1000's of photos. I joined the project in July to help develop ",
        "the frontend (UI). ",
        "      ",
        "PicPurge utiltizes an open-source python api ",
        "to determine what is a duplicate. This api measures the hamming ",
        "distance of 2 photos and if they are too similar, as per the level ",
        "decided by the user, it is deemed a duplicate and moved into a ",
        "folder labeled 'duplicates'. The api uses machine-learning so ",
        "that it is able to compare all different photo sizes. As of September 2023, we have introduced a new algorithm for comparing images. ",
        "Now the api frontloads the enitre image folder and uses mostly CPU to compare the hashes of each image. Before, we would retrieve each individual image from memory (RAM) in batches ",
        "which would not only take longer, but also use most of the RAM available in the system. For a folder with 10,000 files, our old algorithm would take ~24hours. Now it's just 2 minutes!",
        "We have also introduced a sort feature that uses TensorFlow AI to indentify what is in each image and put them into categorical folders.",
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
          name: "TensorFlow",
          color: "green-pink-gradient",
        },
        {
          name: "Frontend Development",
          color: "green-pink-gradient",
        }
      ],
      image: picpurge,
      source_code_link: "https://github.com/Logan-Fouts/PicPurge",
    },
  ];


  const indiproj = [
    {
      name: "Accordion Electric Skateboard [WIP]",
      description:[
        "Date: [WIP] The idea for this project was sparked by having to walk everywhere I wanted to go on my college campus. ",
        "I always saw people riding electric skaterboard and scooters around but could never justify buyingone myself. " ,
        "So I decided I was going to make one. After a lot of thought, I came up with a collapsible design that would ",
        "fit inside my backpack. The skateboard would function like one of those old plastic lightsabers that retracted. ",
        "This project is not finished as of now, but one of my early preliminary wireframe designs is at the top of the website! ",
        "I plan to continue working on this periodically throughout the nexty year or so, eventually welding the metal together ",
        "for a working prototype. ",
        "     ",
        "See link for more information."
      ],
      tags: [
        {
          name: "AutoCAD",
          color: "green-pink-gradient",
        },
        {
          name: "3D design",
          color: "green-text-gradient",
        },
        {
          name: "Welding",
          color: "pink-text-gradient",
        },
      ],
      image: Accordionboard,
      source_code_link: "https://github.com/wlauer3/AccordionBoard",
    },
  ];
  
  export { services, technologies, experiences, collabproj, indiproj };