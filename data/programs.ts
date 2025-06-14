export interface Program {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  category: string;
  imageUrl: string;
  skills: string[];
  curriculum: {
    title: string;
    description: string;
    topics: string[];
    isOpen: boolean;
  }[];
  tools?: string[];
  scheduleDetails?: string[];
}

export const programsData: Program[] = [
  {
    id: 'ui-ux-design',
    title: 'Bootcamp - UI/UX Design',
    description:
      'An intensive 16-week learning program guided by experienced industry professionals, designed to equip you with essential skills and prepare you for a thriving career as a UI/UX Designer.',
    price: 'Rp 2,000,000',
    duration: '5 Months',
    level: 'Beginner',
    category: 'Design',
    imageUrl: 'https://placehold.co/600x400/D1D5DB/1F2937?text=UI/UX+Design',
    skills: [
      'User Research & Persona Development',
      'Wireframing & Prototyping',
      'Usability Testing',
      'Information Architecture',
      'Visual Design & Branding',
      'Figma & Sketch Proficiency',
      'Design Systems',
      'Interaction Design',
    ],
    curriculum: [
      {
        title: 'Introduction to UI/UX Design',
        description:
          'Fundamentals of UI/UX design, design thinking, and user-centered design principles.',
        topics: ['What is UI/UX?', 'Design Thinking Process', 'User-Centered Design'],
        isOpen: false,
      },
      {
        title: 'User Research & Analysis',
        description:
          'Techniques for conducting user research, creating personas, and user journey mapping.',
        topics: ['User Interviews', 'Surveys', 'Persona Creation', 'User Journey Maps'],
        isOpen: false,
      },
      {
        title: 'UI Design & Prototyping',
        description:
          'Hands-on practice with wireframing and prototyping tools to build interactive designs.',
        topics: ['Low-Fidelity Wireframes', 'High-Fidelity Prototypes', 'Figma Basics'],
        isOpen: false,
      },
      {
        title: 'Research & Usability Testing',
        description: 'Learn to validate designs through various testing methods.',
        topics: ['Usability Heuristics', 'A/B Testing', 'User Feedback Analysis'],
        isOpen: false,
      },
      {
        title: 'UI Component Development',
        description: 'Focus on building reusable and accessible UI components.',
        topics: ['Design Systems', 'Component Libraries', 'Accessibility Guidelines'],
        isOpen: false,
      },
    ],
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Miro'], // Tools from the image
    scheduleDetails: [
      'Flexible learning hours (self-paced with live sessions)',
      'Weekly live Q&A sessions with instructors',
      'Project deadlines every two weeks',
    ],
  },
  {
    id: 'full-stack-web-dev',
    title: 'Full-Stack Web Development',
    description:
      'A comprehensive bootcamp to become a proficient full-stack developer, covering front-end and back-end technologies.',
    price: 'Rp 4,500,000',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    category: 'Computing & Dev',
    imageUrl: 'https://placehold.co/600x400/D1D5DB/1F2937?text=Full-Stack+Web+Dev',
    skills: [
      'HTML, CSS, JavaScript',
      'React.js / Vue.js',
      'Node.js / Python (Django/Flask)',
      'Database Management (SQL/NoSQL)',
      'API Development',
      'Version Control (Git)',
    ],
    curriculum: [
      {
        title: 'Front-End Fundamentals',
        description: 'Building interactive user interfaces.',
        topics: ['HTML5', 'CSS3 (Tailwind CSS)', 'JavaScript ES6+', 'DOM Manipulation'],
        isOpen: false,
      },
      {
        title: 'Modern Front-End Frameworks',
        description: 'In-depth look into React.js or Vue.js.',
        topics: ['Components', 'State Management', 'Routing', 'API Integration'],
        isOpen: false,
      },
    ],
    tools: ['VS Code', 'Git', 'Node.js', 'React', 'Vue', 'MongoDB'],
  },
  {
    id: 'data-science-ml',
    title: 'Data Science & Machine Learning',
    description:
      'Master data analysis, machine learning algorithms, and artificial intelligence concepts to solve real-world problems.',
    price: 'Rp 3,800,000',
    duration: '8 Months',
    level: 'Intermediate',
    category: 'Data Science',
    imageUrl: 'https://placehold.co/600x400/D1D5DB/1F2937?text=Data+Science+ML',
    skills: [
      'Python for Data Science',
      'Data Cleaning & Preprocessing',
      'Statistical Analysis',
      'Machine Learning (Supervised/Unsupervised)',
      'Deep Learning Fundamentals',
      'Data Visualization',
      'SQL for Data Analysis',
    ],
    curriculum: [
      {
        title: 'Python & Data Fundamentals',
        description: 'Introduction to Python for data science and basic data structures.',
        topics: ['Python Basics', 'Numpy', 'Pandas', 'Data Structures'],
        isOpen: false,
      },
      {
        title: 'Statistical Foundations',
        description: 'Understanding statistical concepts crucial for data analysis.',
        topics: ['Probability', 'Hypothesis Testing', 'Regression Analysis'],
        isOpen: false,
      },
    ],
    tools: ['Python', 'Jupyter', 'TensorFlow', 'Scikit-learn', 'SQL'],
  },
];
