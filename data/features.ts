export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: 'Expert Mentorship',
    description:
      'Learn from seasoned professionals with extensive industry experience who guide you every step of the way.',
    icon: '/dummy-icon/icon-feature-1.svg',
  },
  {
    title: 'Job-Ready Skills',
    description:
      "Gain in-demand skills in programming, data analysis, and more, tailored to today's tech job market.",
    icon: '/dummy-icon/icon-feature-2.svg',
  },
  {
    title: 'Affordable and Accessible Education',
    description:
      'Our bootcamp offers competitive pricing and financing options to make quality tech education accessible to everyone.',
    icon: '/dummy-icon/icon-feature-3.svg',
  },
  {
    title: 'Career-Focused Projects',
    description:
      'Work on real-world projects that showcase your skills in a practical relatable way.',
    icon: '/dummy-icon/icon-feature-4.svg',
  },
];
