export interface JobVacancy {
  id: string;
  title: string;
  salary: string;
  employmentType: string;
  responsibilities: string[];
  location: string;
  descriptionDetail: string;
  qualifications: string[];
  additionalSkills?: string[];
}

export const allJobVacancies: JobVacancy[] = [
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    salary: 'Rp 6,000,000 - Rp 9,000,000',
    employmentType: 'Full Time',
    location: 'Jakarta, Indonesia',
    descriptionDetail:
      'The ideal candidate will have strong technical skills in developing data pipelines and have experience in processing and presenting data according to business needs.',
    responsibilities: [
      'Develop and maintain data pipelines using Python.',
      'Write and optimize SQL queries to access and process data.',
      'Present relevant and useful data according to business needs.',
      'Collaborate with data and business teams to understand data needs and implement appropriate solutions.',
      'Perform debugging and troubleshooting to identify and fix issues in data pipelines.',
      'Ensure the quality and integrity of data presented.',
      'Collaborate with other development teams to design and develop new features.',
    ],
    qualifications: [
      '1 to 2 years of experience as a Data Engineer.',
      'Deep understanding of Python and SQL programming languages.',
      'Experience in developing and maintaining data pipelines.',
      'Knowledge of relational and non-relational databases.',
      'Ability to work in a team and communicate well.',
      'Experience with version control systems such as Git.',
      'Ability to troubleshoot and debug.',
    ],
    additionalSkills: [
      'Experience with big data technologies such as Hadoop, Spark, or equivalent.',
      'Knowledge of cloud platforms such as AWS, GCP, or Azure.',
      'Experience with ETL tools and data warehousing.',
      'Ability to learn and adapt to new technologies quickly.',
    ],
  },
  {
    id: 'react-developer',
    title: 'React Developer',
    salary: 'Rp 5,000,000 - Rp 10,000,000',
    employmentType: 'Full Time',
    location: 'Bandung, Indonesia',
    descriptionDetail:
      'We are seeking a talented React Developer to join our front-end team. You will be responsible for developing and implementing user interface components using React.js and Next.js framework.',
    responsibilities: [
      'Developing front end with next.js framework.',
      'Slicing design Figma.',
      'Logic implementation on front end side.',
      'Optimizing components for maximum performance across a vast array of web-capable devices and browsers.',
      'Building reusable components and front-end libraries for future use.',
    ],
    qualifications: [
      '1 to 3 years of experience as a React Developer.',
      'Proficiency in JavaScript, HTML5, and CSS3.',
      'Strong understanding of React.js and its core principles.',
      'Experience with Next.js is a plus.',
      'Familiarity with RESTful APIs.',
      'Knowledge of modern front-end build pipelines and tools.',
    ],
  },
  {
    id: 'golang-developer',
    title: 'Golang Developer',
    salary: 'Rp 6,000,000 - Rp 9,000,000',
    employmentType: 'Full Time',
    location: 'Yogyakarta, Indonesia',
    descriptionDetail:
      'We are looking for an experienced Golang Developer to join our backend team. You will be responsible for developing and maintaining robust and scalable backend services.',
    responsibilities: [
      'Develop backend applications with golang.',
      'Create Rest API.',
      'Integration with cloud features (AWS, GCP, etc.).',
      'Implementing scalable and high-performance microservices.',
      'Writing clean, maintainable, and efficient Go code.',
    ],
    qualifications: [
      '2+ years of experience in Golang development.',
      'Strong understanding of Go programming language, paradigms, and idioms.',
      'Experience with RESTful API design and development.',
      'Familiarity with cloud platforms (AWS, GCP, Azure).',
      'Knowledge of database systems (SQL and NoSQL).',
    ],
  },
  {
    id: 'python-developer',
    title: 'Python Developer',
    salary: 'Rp 5,000,000 - Rp 10,000,000',
    employmentType: 'Full Time',
    location: 'Surabaya, Indonesia',
    descriptionDetail:
      'We are seeking a versatile Python Developer to work on our full-stack applications, with a focus on Django Framework.',
    responsibilities: [
      'Developing fullstack applications.',
      'Using Django Framework.',
      'Implementing business logic.',
      'Designing and implementing robust APIs.',
      'Managing database interactions.',
    ],
    qualifications: [
      '1-3 years of experience as a Python Developer.',
      'Strong proficiency in Python.',
      'Hands-on experience with Django Framework.',
      'Knowledge of front-end technologies (HTML, CSS, JavaScript) is a plus.',
      'Familiarity with database systems (e.g., PostgreSQL, MySQL).',
    ],
  },
  {
    id: 'flutter-developer',
    title: 'Flutter Developer',
    salary: 'Rp 6,000,000 - Rp 9,000,000',
    employmentType: 'Full Time',
    location: 'Remote',
    descriptionDetail:
      'We are looking for a skilled Flutter Developer to build high-performance mobile applications for both iOS and Android platforms.',
    responsibilities: [
      'Develop mobile applications.',
      'Integration with backend.',
      'Export iOS and Android applications.',
      'Collaborating with cross-functional teams to define, design, and ship new features.',
      'Ensuring the performance, quality, and responsiveness of applications.',
    ],
    qualifications: [
      '1-2 years of experience in Flutter development.',
      'Proficiency in Dart programming language.',
      'Experience with mobile app development lifecycle.',
      'Familiarity with RESTful APIs and integration.',
      'Ability to write clean and maintainable code.',
    ],
  },
  {
    id: 'it-support',
    title: 'IT Support',
    salary: 'Rp 5,000,000 - Rp 10,000,000',
    employmentType: 'Full Time',
    location: 'Jakarta, Indonesia',
    descriptionDetail:
      'We are seeking an IT Support Specialist to provide technical assistance and support to our internal teams and ensure smooth operation of our IT infrastructure.',
    responsibilities: [
      'Running scripts in Production.',
      'Creating Documentation.',
      'Cross Department Communication for IT needs.',
      'Providing technical assistance and support for incoming queries and issues related to computer systems, software, and hardware.',
      'Maintaining daily performance of computer systems.',
    ],
    qualifications: [
      '1+ years of experience in IT support or a similar role.',
      'Basic knowledge of operating systems (Windows, macOS, Linux).',
      'Familiarity with network troubleshooting and hardware components.',
      'Excellent communication and problem-solving skills.',
      'Ability to create clear and concise technical documentation.',
    ],
  },
];
