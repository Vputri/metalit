interface Program {
  id: string;
  title: string;
  imageUrl: string;
  startDate: string;
  price: string;
}
export const featuredPrograms: Program[] = [
  {
    id: 'full-stack-web-dev',
    title: 'Full-Stack Development',
    imageUrl: '/dummy-program/program-1.svg',
    startDate: 'November 15, 2024',
    price: 'Rp 2,000,000',
  },
  {
    id: 'data-science-ml',
    title: 'Data Science & Machine Learning',
    imageUrl: '/dummy-program/program-2.svg',
    startDate: 'November 24, 2024',
    price: 'Rp 1,500,000',
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    imageUrl: '/dummy-program/program-3.svg',
    startDate: 'November 15, 2024',
    price: 'Rp 2,000,000',
  },
  {
    id: 'it-project-management',
    title: 'IT Project Management',
    imageUrl: '/dummy-program/program-4.svg',
    startDate: 'November 15, 2024',
    price: 'Rp 2,000,000',
  },
  {
    id: 'software-testing-qa',
    title: 'Software Testing & Quality Assurance',
    imageUrl: '/dummy-program/program-5.svg',
    startDate: 'November 24, 2024',
    price: 'Rp 1,500,000',
  },
  {
    id: 'cloud-computing-devops',
    title: 'Cloud Computing & DevOps',
    imageUrl: '/dummy-program/program-6.svg',
    startDate: 'November 15, 2024',
    price: 'Rp 2,000,000',
  },
];
