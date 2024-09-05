type AcademicRecord = {
  startYear: number;
  endYear: number;
  subjectOrPosition: string;
  type: 'Education' | 'Academic Position';
  university: string;
  description: string;
};

const academicRecords: AcademicRecord[] = [
  {
    startYear: 2015,
    endYear: 2019,
    subjectOrPosition: 'Computer Science',
    type: 'Education',
    university: 'University of Example',
    description: 'Studied core concepts of computer science, including algorithms, data structures, and software development, while engaging in collaborative projects and research.'
  },
  {
    startYear: 2020,
    endYear: 2022,
    subjectOrPosition: 'Assistant Professor',
    type: 'Academic Position',
    university: 'Institute of Technology',
    description: 'As a Student Researcher, I conducted impactful investigations, showcasing a commitment to rigorous inquiry and contributing to advancements in programming. My work reflects a blend of analytical acumen and collaborative problem-solving.'
  },
  {
    startYear: 2023,
    endYear: 2025,
    subjectOrPosition: 'PhD in Artificial Intelligence',
    type: 'Education',
    university: 'Research University',
    description: 'Pursuing a PhD with a focus on AI, engaging in advanced research and contributing to cutting-edge developments in machine learning and artificial intelligence.'
  },
  {
    startYear: 2023,
    endYear: 2025,
    subjectOrPosition: 'PhD in Artificial Intelligence',
    type: 'Education',
    university: 'Research University',
    description: 'Pursuing a PhD with a focus on AI, engaging in advanced research and contributing to cutting-edge developments in machine learning and artificial intelligence.'
  },
];

export { academicRecords };
export type { AcademicRecord };


//ProjectData

type ProjectDescription = {
  initialPara: string;
  points: {
    pointName: string;
    description: string;
  }[];
};

type ProjectData = {
  imagePath: string;
  name: string;
  category: string;
  clientName: string;
  date: string;
  description: ProjectDescription;
};


const latestProjects: ProjectData[] = [
  {
    imagePath: '/res/image/project-restaurent.jpg',
    name: 'Restaurant Web Application',
    category: 'UI / UX',
    clientName: 'Paul',
    date: 'SEPTEMBER 2, 2023',
    description: {
      initialPara:
        'Step into the culinary digital domain, where the convergence of culinary mastery and cutting-edge technology unfolds. Explore the core of our Restaurant Web Application – a groundbreaking platform meticulously crafted to revolutionize the dining experience. Here are the key features that define our innovative approach:',
      points: [
        {
          pointName: 'Intuitive User Interface',
          description:
            "Immerse users in a seamlessly navigable interface, providing effortless access to the restaurant's offerings with simplicity and elegance.",
        },
        {
          pointName: 'Dynamic Menu Showcase',
          description:
            'Present a visually appealing menu with vibrant images and detailed descriptions, creating an enticing virtual dining experience.',
        },
        {
          pointName: 'Effortless Reservations',
          description:
            'Streamline the reservation process with a user-friendly booking system, allowing customers to plan their dining experiences with ease.',
        },
        {
          pointName: 'Online Ordering and Delivery',
          description:
            'Enable customers to place orders conveniently online, choosing between home delivery and curbside pickup, and ensuring a smooth and secure transaction process.',
        },
        {
          pointName: 'Personalized User Accounts',
          description:
            'Enhance customer loyalty through personalized accounts, allowing users to save favorite orders and access exclusive offers.',
        },
        {
          pointName: 'Real-time Updates',
          description:
            'Keep patrons informed with real-time updates on special events, promotions, and menu additions through push notifications and email alerts.',
        },
        {
          pointName: 'Responsive Design',
          description:
            'Ensure a seamless experience across various devices with a responsive design, adapting to the preferences of a tech-savvy audience.',
        },
        {
          pointName: 'Secure Payment Gateway',
          description:
            'Prioritize security with a robust payment gateway, offering multiple payment options to instill confidence in users during transactions.',
        },
      ],
    },
  },
  {
    imagePath: '/res/image/project-nft.jpg',
    name: 'E-commerce Platform',
    category: 'Full Stack Development',
    clientName: 'Sophia',
    date: 'AUGUST 15, 2023',
    description: {
      initialPara:
        'Our E-commerce Platform is designed to provide a seamless and efficient online shopping experience. This robust platform is built to handle high traffic and offers a wide range of features that cater to both customers and administrators. Here are the standout features:',
      points: [
        {
          pointName: 'Customizable Product Listings',
          description:
            'Allow sellers to create and manage product listings with ease, including options for multiple images, detailed descriptions, and pricing tiers.',
        },
        {
          pointName: 'Advanced Search and Filtering',
          description:
            'Enable customers to find products quickly with advanced search options and filtering based on categories, price range, and customer ratings.',
        },
        {
          pointName: 'Secure Payment Integration',
          description:
            'Integrate with multiple payment gateways to provide customers with secure and flexible payment options, ensuring a smooth checkout process.',
        },
        {
          pointName: 'User Reviews and Ratings',
          description:
            'Allow customers to leave reviews and ratings on products, helping build trust and provide feedback to sellers.',
        },
        {
          pointName: 'Order Tracking and Management',
          description:
            'Provide customers with real-time order tracking and a comprehensive order management system for administrators.',
        },
        {
          pointName: 'Promotions and Discounts',
          description:
            'Support various promotional campaigns and discount codes to attract more customers and increase sales.',
        },
        {
          pointName: 'Mobile-Responsive Design',
          description:
            'Ensure the platform is fully responsive, providing an optimal shopping experience on mobile devices.',
        },
      ],
    },
  },
  {
    imagePath: '/res/image/project-travel.png',
    name: 'Fitness Tracking App',
    category: 'Mobile App Development',
    clientName: 'John',
    date: 'JULY 25, 2023',
    description: {
      initialPara:
        'Our Fitness Tracking App empowers users to monitor their health and fitness goals with ease. This app is designed to provide a comprehensive set of tools for tracking workouts, diet, and overall wellness. Key features include:',
      points: [
        {
          pointName: 'Workout Logging',
          description:
            'Allow users to log their workouts, including exercises, sets, reps, and weights, with personalized workout plans and progress tracking.',
        },
        {
          pointName: 'Dietary Tracking',
          description:
            'Provide tools for users to track their daily food intake, with calorie counting, macro tracking, and personalized meal plans.',
        },
        {
          pointName: 'Goal Setting and Progress Monitoring',
          description:
            'Enable users to set fitness goals and monitor their progress with detailed charts and statistics.',
        },
        {
          pointName: 'Integration with Wearable Devices',
          description:
            'Support integration with popular fitness trackers and smartwatches to sync activity data seamlessly.',
        },
        {
          pointName: 'Social Sharing and Challenges',
          description:
            'Allow users to share their achievements on social media and participate in challenges with friends for motivation.',
        },
        {
          pointName: 'Personalized Recommendations',
          description:
            'Offer personalized workout and diet recommendations based on user data and preferences.',
        },
        {
          pointName: 'Health Insights',
          description:
            'Provide users with insights into their health metrics, such as heart rate, sleep patterns, and overall wellness, using data from connected devices.',
        },
      ],
    },
  },
];

export {latestProjects}
export type {ProjectDescription, ProjectData}


//SkillsData 

type Skill = {
  id: number;
  skill: string;
  subskills: string[];
  exp_percentage: number; // 0-100
  exp_level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  experience: string; // e.g., '3 Years'
  description: string;
}


const skills: Skill[] = [
  {
      id: 1,
      skill: 'Web Development',
      subskills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
      exp_percentage: 85,
      exp_level: 'Intermediate',
      experience: '3 Years',
      description: 'In web development, my skills shine through with proficiency in front-end technologies like HTML, CSS, and JavaScript. I also excel in frameworks like React and Next.js, enabling the creation of dynamic and responsive web applications.'
  },
  {
      id: 2,
      skill: 'Backend Development',
      subskills: ['Node.js', 'Express', 'PHP', 'ASP.NET'],
      exp_percentage: 75,
      exp_level: 'Intermediate',
      experience: '2 Years',
      description: 'With backend development, I have hands-on experience in building scalable and efficient server-side applications using Node.js, Express, and other technologies like PHP and ASP.NET.'
  },
  {
      id: 3,
      skill: 'Database Management',
      subskills: ['MySQL', 'MongoDB', 'PostgreSQL'],
      exp_percentage: 80,
      exp_level: 'Advanced',
      experience: '4 Years',
      description: 'I specialize in database management with strong expertise in relational and non-relational databases such as MySQL, MongoDB, and PostgreSQL, ensuring data integrity and optimized performance.'
  },
  {
      id: 4,
      skill: 'DevOps',
      subskills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
      exp_percentage: 65,
      exp_level: 'Intermediate',
      experience: '1.5 Years',
      description: 'My DevOps skills include experience with containerization using Docker and Kubernetes, implementing CI/CD pipelines, and deploying applications on cloud platforms like AWS.'
  }
];


export type {Skill}
export {skills}
