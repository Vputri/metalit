export interface JobVacancy {
  id: string;
  title: string;
  salary: string;
  employmentType: string;
  responsibilities: string[];
}

// Dummy data for job vacancies
export const jobVacancies = ref<JobVacancy[]>([
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    salary: 'Rp 6,000,000 - Rp 9,000,000',
    employmentType: 'Full Time',
    responsibilities: [
      'Developing data pipeline with python.',
      'Querying with sql.',
      'Presenting data according to business needs.',
    ],
  },
  {
    id: 'react-developer',
    title: 'React Developer',
    salary: 'Rp 5,000,000 - Rp 10,000,000',
    employmentType: 'Full Time',
    responsibilities: [
      'Developing front end with next.js framework.',
      'Slicing design Figma.',
      'Logic implementation on front end side.',
    ],
  },
  {
    id: 'golang-developer',
    title: 'Golang Developer',
    salary: 'Rp 6,000,000 - Rp 9,000,000',
    employmentType: 'Full Time',
    responsibilities: [
      'Develop backend applications with golang.',
      'Create Rest API.',
      'Integration with cloud features (AWS, GCP, etc.).',
    ],
  },
  {
    id: 'python-developer',
    title: 'Python Developer',
    salary: 'Rp 5,000,000 - Rp 10,000,000',
    employmentType: 'Full Time',
    responsibilities: [
      'Developing fullstack applications.',
      'Using Django Framework.',
      'Implementing business logic.',
    ],
  },
  {
    id: 'flutter-developer',
    title: 'Flutter Developer',
    salary: 'Rp 6,000,000 - Rp 9,000,000',
    employmentType: 'Full Time',
    responsibilities: [
      'Develop mobile applications.',
      'Integration with backend.',
      'Export iOS and Android applications.',
    ],
  },
  {
    id: 'it-support',
    title: 'IT Support',
    salary: 'Rp 5,000,000 - Rp 10,000,000',
    employmentType: 'Full Time',
    responsibilities: [
      'Running scripts in Production.',
      'Creating Documentation.',
      'Cross Department Communication for IT needs.',
    ],
  },
]);
