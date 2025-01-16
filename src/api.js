const diplomas = [
  {
    name: "Information Tehcnology",
    id: "R47",
    sessions: [
      {
        name: "UI/UX Design for Apps",
        id: "C218",
        desc:"Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module. Students will also gain the skills to offer users an intuitive and responsive experience as they design UI for software platforms on both web and mobile devices. Through this module, students will also learn how to create interactive prototypes using prototyping tools.",
        speaker: {
          name: "Geoff Leffler"
        },
      },
      {
        name: "Mobile App Development",
        id: "C346",
        desc:"In this module, students will learn the basics of creating Android Applications. They will learn about user interface implementation issues such as layout, notifications and dialogues as well as the logic and data management (databases, services, GPS, multi-threading, etc.) using the Java programming language.",
        speaker: {
          name: "Griffin Snow"
        },
      },
    ],
  },
  {
    name: "Applied AI and Analytics",
    id: "R13",
    sessions: [
      {
        name: "Data Wrangling and Automation",
        id: "C230",
        desc:"This module introduces the concepts, tools and techniques of data wrangling. Through building an automated data wrangling pipeline, data from diverse sources are collected, stored, explored, cleansed, enriched, and optimised and be readied for the downstream visualisation, analytics, and applied AI activities.",
        speaker: {
          name: "Ally Bode",
          title: "UX Designer",
          org: "Globe Bank International",
          bio: "Ally Bode believes in humans, and spends her time utilizing ai and robotics to make products more human-manageable.",
        },
      },
      {
        name: "Data Analytics with GenAI",
        id: "C245",
        desc:"This module aims to equip students with the knowledge and skills to analyse and visualise data for more informed and timely business decision-making. Students will be trained to conduct data analysis, interpret results, design visualisation presentations, apply visualisation techniques, outline data stories, and create dashboards to support data-driven business evaluations and decisions.",
        speaker: {
          name: "Daniel Rohan",
          title: "Cyber Security Specialist",
          org: "Hansel & Petal",
          bio: "Daniel Rohan has been with Hansel & Petal for six years. His leadership in AI security is well-documented in his many articles for top security publications.",
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "R18",
    sessions: [
      {
        name: "Financial Technologies",
        id: "C369",
        desc:"This module provides an overview of the financial technologies that are being used in the financial services industry today. Students will explore the impact of these financial technologies on various industry segments using case studies. Students will apply the various technological advancements in financial technology (FinTech) that are disrupting the industry in solving business problems.",
        speaker: {
          name: "Dixie Russel",
          title: "Art Director",
          org: "Red30 Design",
          bio: "Dixie Russel has run a successful side business selling her paintings for the last seven years, and founded the local arts-makerspace in her neighborhood. We have no idea how she finds time to work for us, we're just glad she does.",
        },
      },
      {
        name: "Enterprise Solution for Business",
        id: "C360",
        desc:"This module introduces students to enterprise systems and how such solutions support any organisation in the business processes of sales, customer relationship management, planning, supply chain management from material acquisition to delivery and integration to finance. Students will have hands-on practices using industry flagship enterprise solution such as Systems, Applications and Products (SAP) Systems and issues such as information integration and visibility for better decisionmaking, increased productivity and service levels will be explored.",
        speaker: {
          name: "Anna Rossi",
          title: "Product Development Specialist",
          org: "Two Trees Olive Oil",
          bio: "Anna Rossi's favorite part of her job is getting to invent things with people and companies from all over the world. She also heads up the annual customer maker contest, featuring people who make amazing things with Two Trees Olive Oil.",
        },
      },
    ],
  },
  {
    name: "Cybersecurity & Digital Forensics",
    id: "R55",
    sessions: [
      {
        name: "Security Design and Architecture",
        id: "C350",
        desc: "The module covers the design and evaluation of secure systems, focusing on principles like security-by-design defence-in-depth, least privilege, zero-trust and secure communication channels. Industry standards such as TOGAF and SABSA will also be introduced in this module. Through hands-on exercises and case studies, students will learn to apply secure practices in real-world scenarios and understand the importance of robust security architecture in protecting systems. ",     
        speaker: {
          name: "Mrs Jenny"
        },
      },
    ],
  },
  {
    name: "Enterprise Cloud Computing & Management",
    id: "R12",
    sessions: [
      {
        name: "Cloud Data Centre Management",
        id: "C322",
        desc:"Students will develop competencies required to support and administer data centre and cloud computing services. The training includes impact assessment of governance, risk and compliance (GRC) in the cloud computing environment, and students will also study cloud computing orchestration, service accounting and service cataloguing. The module also prepares students to be industry ready for job opportunities such as system administrators in enterprise data centres or hosting service providers and as cloud computing end-users.",
        speaker: {
          name: "Aran Row",
        },
      },
      {
        name: "Intelligent Networks",
        id: "C328",
        desc:"This module equips students with the skills to implement and manage enterprise Layer 2 network infrastructure. Taking a hands-on approach, students will build competency in installing, configuring and managing wired and wireless enterprise networks. Implementing services such as Layer 2 network security services, authentication services, remote access, and network with the use of intelligent network controllers utilizing Artificial Learning combined with machine learning. In the process, students will strengthen their understanding of the concepts and techniques found in the subject.",
        speaker: {
          name: "Jacky Low",
        },
      },
    ],
  },
  {
    name: "Common ICT Programme",
    id: "R58",
    sessions: [
      {
        name: "Mathematics for Computing",
        id: "E123",
        desc: "Code your destiny with the Common ICT Programme. Gain a solid foundation and turn your tech passions into a rewarding journey. Join us to unlock your potential and make a splash in the exciting world of ICT!",
        speaker: {
          name: "John Eng"
        },
      },
    ],
  },
];

export function getSession({ sessionId, moduleId }) {
  return diplomas
    .find(({ id }) => id === moduleId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getModule(moduleId) {
  return diplomas.find(({ id }) => id === moduleId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}
