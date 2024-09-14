type DescriptionSection = {
  title: string;
  paragraph: string;
};

type ResearchArticle = {
  Name: string;
  ConferenceOrJournalName: string;
  ConferenceLocation: string;
  Abstract: string;
  Type: "Conferences" | "Journal" | "Article";
  Selected: boolean;
  Date: Date;
  AuthorName: string[];
  PaperLink: string;
  Description: DescriptionSection[];
};
  
  const conferences: ResearchArticle[] = [
    {
      Name: "Blockchain Technology in Supply Chain Management",
      ConferenceOrJournalName: "Blockchain Technology Conference",
      ConferenceLocation: "NEW YORK - USA",
      Abstract: `The research highlights the application of blockchain technology in improving transparency, security, and efficiency in supply chain management.`,
      Type: "Conferences",
      Selected: true,
      Date: new Date("2023-07-18"),
      AuthorName: ["Emily Davis", "Robert Green"],
      PaperLink: "https://example.com/paper-link-3",
      Description: [
        {
          title: "Introduction",
          paragraph: "The advent of technology has transformed the way we work, ushering in an era of unprecedented connectivity and collaboration."
        },
        {
          title: "Evolution of Communication Technologies",
          paragraph: "This section delves into the historical progression of communication tools in the workplace, from traditional methods to the digital innovations that have become integral to modern business operations."
        },
        {
          title: "The Impact of Technology on Workplace Dynamics",
          paragraph: "Examining the profound influence of technology on team structures, collaboration models, and organizational hierarchies."
        },]
    },
    {
      Name: "The Role of Machine Learning in Predictive Analytics",
      ConferenceOrJournalName: "Analytics and Data Science Journal",
      ConferenceLocation: "TOKYO - JAPAN",
      Abstract: `This article discusses the role of machine learning in predictive analytics, focusing on its applications in finance, marketing, and healthcare sectors.`,
      Type: "Article",
      Selected: false,
      Date: new Date("2024-01-22"),
      AuthorName: ["David Wilson", "Emma Clark"],
      PaperLink: "https://example.com/paper-link-4",
      Description: [
        {
          title: "Introduction",
          paragraph: "The advent of technology has transformed the way we work, ushering in an era of unprecedented connectivity and collaboration."
        },
        {
          title: "Evolution of Communication Technologies",
          paragraph: "This section delves into the historical progression of communication tools in the workplace, from traditional methods to the digital innovations that have become integral to modern business operations."
        },
        {
          title: "The Impact of Technology on Workplace Dynamics",
          paragraph: "Examining the profound influence of technology on team structures, collaboration models, and organizational hierarchies."
        },]
    },
    {
      Name: "Sustainable Energy Solutions for a Greener Future",
      ConferenceOrJournalName: "Journal of Renewable Energy",
      ConferenceLocation: "PARIS - FRANCE",
      Abstract: `This journal article examines various sustainable energy solutions, including solar, wind, and bioenergy, to combat climate change and reduce carbon footprints.`,
      Type: "Journal",
      Selected: true,
      Date: new Date("2022-09-30"),
      AuthorName: ["Laura White", "Paul Harris"],
      PaperLink: "https://example.com/paper-link-5",
      Description: [
        {
          title: "Introduction",
          paragraph: "The advent of technology has transformed the way we work, ushering in an era of unprecedented connectivity and collaboration."
        },
        {
          title: "Evolution of Communication Technologies",
          paragraph: "This section delves into the historical progression of communication tools in the workplace, from traditional methods to the digital innovations that have become integral to modern business operations."
        },
        {
          title: "The Impact of Technology on Workplace Dynamics",
          paragraph: "Examining the profound influence of technology on team structures, collaboration models, and organizational hierarchies."
        },]
    },
    {
      Name: "Cybersecurity in the Age of the Internet of Things (IoT)",
      ConferenceOrJournalName: "International IoT Security Symposium",
      ConferenceLocation: "BERLIN - GERMANY",
      Abstract: `This paper analyzes the growing cybersecurity challenges posed by the rise of the Internet of Things (IoT) and offers recommendations for improving security standards.`,
      Type: "Conferences",
      Selected: false,
      Date: new Date("2023-04-10"),
      AuthorName: ["Sophia Turner", "James Evans", "Oliver Walker"],
      PaperLink: "https://example.com/paper-link-6",
      Description: [
        {
          title: "Introduction",
          paragraph: "The advent of technology has transformed the way we work, ushering in an era of unprecedented connectivity and collaboration."
        },
        {
          title: "Evolution of Communication Technologies",
          paragraph: "This section delves into the historical progression of communication tools in the workplace, from traditional methods to the digital innovations that have become integral to modern business operations."
        },
        {
          title: "The Impact of Technology on Workplace Dynamics",
          paragraph: "Examining the profound influence of technology on team structures, collaboration models, and organizational hierarchies."
        },]
    }
  ];


  const journals: ResearchArticle[] = [
    {
      Name: "A Study of the Relationship between Personality Traits and Leadership Style",
      ConferenceOrJournalName: "International Leadership Conference",
      ConferenceLocation: "VANCOUVER - CANADA",
      Abstract: `Within the educational landscape, our research endeavors to unravel the multifaceted role of technology in shaping modern learning experiences. 
                 The first segment scrutinizes the integration of technology in educational settings, examining its influence on pedagogical approaches and classroom dynamics.`,
      Type: "Conferences",
      Selected: true,
      Date: new Date("2024-09-11"),
      AuthorName: ["John Doe", "Jane Smith", "Alice Brown"],
      PaperLink: "https://example.com/paper-link-1",
      Description: [
        {
          title: "Introduction",
          paragraph: "The advent of technology has transformed the way we work, ushering in an era of unprecedented connectivity and collaboration."
        },
        {
          title: "Evolution of Communication Technologies",
          paragraph: "This section delves into the historical progression of communication tools in the workplace, from traditional methods to the digital innovations that have become integral to modern business operations."
        },
        {
          title: "The Impact of Technology on Workplace Dynamics",
          paragraph: "Examining the profound influence of technology on team structures, collaboration models, and organizational hierarchies."
        },]
    },
    {
      Name: "Artificial Intelligence in Healthcare: Ethical Considerations",
      ConferenceOrJournalName: "Journal of Healthcare and Technology",
      ConferenceLocation: "LONDON - UK",
      Abstract: `This paper explores the ethical implications of artificial intelligence in healthcare, focusing on patient privacy, decision-making processes, and accountability.`,
      Type: "Journal",
      Selected: false,
      Date: new Date("2023-11-05"),
      AuthorName: ["Sarah Lee", "Michael Thompson"],
      PaperLink: "https://example.com/paper-link-2",
      Description: [
        {
          title: "Introduction",
          paragraph: "The advent of technology has transformed the way we work, ushering in an era of unprecedented connectivity and collaboration."
        },
        {
          title: "Evolution of Communication Technologies",
          paragraph: "This section delves into the historical progression of communication tools in the workplace, from traditional methods to the digital innovations that have become integral to modern business operations."
        },
        {
          title: "The Impact of Technology on Workplace Dynamics",
          paragraph: "Examining the profound influence of technology on team structures, collaboration models, and organizational hierarchies."
        },]
    },
    {
      Name: "Sustainable Energy Solutions for a Greener Future",
      ConferenceOrJournalName: "Journal of Renewable Energy",
      ConferenceLocation: "PARIS - FRANCE",
      Abstract: `This journal article examines various sustainable energy solutions, including solar, wind, and bioenergy, to combat climate change and reduce carbon footprints.`,
      Type: "Journal",
      Selected: true,
      Date: new Date("2022-09-30"),
      AuthorName: ["Laura White", "Paul Harris"],
      PaperLink: "https://example.com/paper-link-5",
      Description: [
        {
          title: "Introduction",
          paragraph: "The advent of technology has transformed the way we work, ushering in an era of unprecedented connectivity and collaboration."
        },
        {
          title: "Evolution of Communication Technologies",
          paragraph: "This section delves into the historical progression of communication tools in the workplace, from traditional methods to the digital innovations that have become integral to modern business operations."
        },
        {
          title: "The Impact of Technology on Workplace Dynamics",
          paragraph: "Examining the profound influence of technology on team structures, collaboration models, and organizational hierarchies."
        },]
    },
  ];


  const articles: ResearchArticle[] = [
    {
      Name: "A Study of the Relationship between Personality Traits and Leadership Style",
      ConferenceOrJournalName: "International Leadership Conference",
      ConferenceLocation: "VANCOUVER - CANADA",
      Abstract: `Within the educational landscape, our research endeavors to unravel the multifaceted role of technology in shaping modern learning experiences. 
                 The first segment scrutinizes the integration of technology in educational settings, examining its influence on pedagogical approaches and classroom dynamics.Within the educational landscape, our research endeavors to unravel the multifaceted role of technology in shaping modern learning experiences. 
                 The first segment scrutinizes the integration of technology in educational settings, examining its influence on pedagogical approaches and classroom dynamics.Within the educational landscape, our research endeavors to unravel the multifaceted role of technology in shaping modern learning experiences. 
                 The first segment scrutinizes the integration of technology in educational settings, examining its influence on pedagogical approaches and classroom dynamics.`,
      Type: "Conferences",
      Selected: true,
      Date: new Date("2024-09-11"),
      AuthorName: ["John Doe", "Jane Smith", "Alice Brown"],
      PaperLink: "https://example.com/paper-link-1",
      Description: [
        {
          title: "Introduction",
          paragraph: "The advent of technology has transformed the way we work, ushering in an era of unprecedented connectivity and collaboration."
        },
        {
          title: "Evolution of Communication Technologies",
          paragraph: "This section delves into the historical progression of communication tools in the workplace, from traditional methods to the digital innovations that have become integral to modern business operations."
        },
        {
          title: "The Impact of Technology on Workplace Dynamics",
          paragraph: "Examining the profound influence of technology on team structures, collaboration models, and organizational hierarchies."
        },]
    },
    {
      Name: "Artificial Intelligence in Healthcare: Ethical Considerations",
      ConferenceOrJournalName: "Journal of Healthcare and Technology",
      ConferenceLocation: "LONDON - UK",
      Abstract: `Within the educational landscape, our research endeavors to unravel the multifaceted role of technology in shaping modern learning experiences. 
                 The first segment scrutinizes the integration of technology in educational settings, examining its influence on pedagogical approaches and classroom dynamics.Within the educational landscape, our research endeavors to unravel the multifaceted role of technology in shaping modern learning experiences. 
                 The first segment scrutinizes the integration of technology in educational settings, examining its influence on pedagogical approaches and classroom dynamics.This paper explores the ethical implications of artificial intelligence in healthcare, focusing on patient privacy, decision-making processes, and accountability.`,
      Type: "Journal",
      Selected: false,
      Date: new Date("2023-11-05"),
      AuthorName: ["Sarah Lee", "Michael Thompson"],
      PaperLink: "https://example.com/paper-link-2",
      Description: [
        {
          title: "Introduction",
          paragraph: "The advent of technology has transformed the way we work, ushering in an era of unprecedented connectivity and collaboration."
        },
        {
          title: "Evolution of Communication Technologies",
          paragraph: "This section delves into the historical progression of communication tools in the workplace, from traditional methods to the digital innovations that have become integral to modern business operations."
        },
        {
          title: "The Impact of Technology on Workplace Dynamics",
          paragraph: "Examining the profound influence of technology on team structures, collaboration models, and organizational hierarchies."
        },]
    },
    {
      Name: "Blockchain Technology in Supply Chain Management",
      ConferenceOrJournalName: "Blockchain Technology Conference",
      ConferenceLocation: "NEW YORK - USA",
      Abstract: `Within the educational landscape, our research endeavors to unravel the multifaceted role of technology in shaping modern learning experiences. 
                 The first segment scrutinizes the integration of technology in educational settings, examining its influence on pedagogical approaches and classroom dynamics.Within the educational landscape, our research endeavors to unravel the multifaceted role of technology in shaping modern learning experiences. 
                 The first segment scrutinizes the integration of technology in educational settings, examining its influence on pedagogical approaches and classroom dynamics.The research highlights the application of blockchain technology in improving transparency, security, and efficiency in supply chain management.`,
      Type: "Conferences",
      Selected: true,
      Date: new Date("2023-07-18"),
      AuthorName: ["Emily Davis", "Robert Green"],
      PaperLink: "https://example.com/paper-link-3",
      Description: [
        {
          title: "Introduction",
          paragraph: "The advent of technology has transformed the way we work, ushering in an era of unprecedented connectivity and collaboration."
        },
        {
          title: "Evolution of Communication Technologies",
          paragraph: "This section delves into the historical progression of communication tools in the workplace, from traditional methods to the digital innovations that have become integral to modern business operations."
        },
        {
          title: "The Impact of Technology on Workplace Dynamics",
          paragraph: "Examining the profound influence of technology on team structures, collaboration models, and organizational hierarchies."
        },]
    },
    {
      Name: "The Role of Machine Learning in Predictive Analytics",
      ConferenceOrJournalName: "Analytics and Data Science Journal",
      ConferenceLocation: "TOKYO - JAPAN",
      Abstract: `Within the educational landscape, our research endeavors to unravel the multifaceted role of technology in shaping modern learning experiences. 
                 The first segment scrutinizes the integration of technology in educational settings, examining its influence on pedagogical approaches and classroom dynamics.Within the educational landscape, our research endeavors to unravel the multifaceted role of technology in shaping modern learning experiences. 
                 The first segment scrutinizes the integration of technology in educational settings, examining its influence on pedagogical approaches and classroom dynamics.This article discusses the role of machine learning in predictive analytics, focusing on its applications in finance, marketing, and healthcare sectors.`,
      Type: "Article",
      Selected: false,
      Date: new Date("2024-01-22"),
      AuthorName: ["David Wilson", "Emma Clark"],
      PaperLink: "https://example.com/paper-link-4",
      Description: [
        {
          title: "Introduction",
          paragraph: "The advent of technology has transformed the way we work, ushering in an era of unprecedented connectivity and collaboration."
        },
        {
          title: "Evolution of Communication Technologies",
          paragraph: "This section delves into the historical progression of communication tools in the workplace, from traditional methods to the digital innovations that have become integral to modern business operations."
        },
        {
          title: "The Impact of Technology on Workplace Dynamics",
          paragraph: "Examining the profound influence of technology on team structures, collaboration models, and organizational hierarchies."
        },]
    },
   
  ];
  

  export type {ResearchArticle, DescriptionSection}
  export {conferences, journals,articles}