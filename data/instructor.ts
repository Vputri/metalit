interface Instructor {
  name: string;
  title: string;
  imageUrl: string;
  role: string;
  bio: string;
  linkedinUrl: string;
}

export const instructors: Instructor[] = [
  {
    name: 'Natasha Aurelia',
    title: 'Tech Lead UI/UX Design EY',
    role: 'Lead Instructor',
    bio: 'Natasha leads design teams and focuses on user-centric product development.',
    imageUrl: 'https://placehold.co/80x80/d1d5db/4b5563?text=NA',
    linkedinUrl: 'https://linkedin.com/in/natashaaurelia',
  },
  {
    name: 'Mike Darsono',
    title: 'Lead UI/UX Design Traveloka',
    role: 'Technical Instructor',
    bio: 'Mike is a seasoned developer with expertise in scalable web architectures.',
    imageUrl: 'https://placehold.co/80x80/d1d5db/4b5563?text=MD',
    linkedinUrl: 'https://linkedin.com/in/mikedarsono',
  },
  {
    name: 'Sandra Willson',
    title: 'Senior UI/UX Design Deloitte',
    role: 'UX Specialist',
    bio: 'Sandra has a passion for uncovering user insights and translating them into impactful designs.',
    imageUrl: 'https://placehold.co/80x80/d1d5db/4b5563?text=SW',
    linkedinUrl: 'https://linkedin.com/in/sandrawillson',
  },
];
