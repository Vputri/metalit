interface Testimonial {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Jacqueline Wright',
    role: 'Quality Assurance At Tokopedia',
    quote:
      'Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci.',
    imageUrl: 'https://placehold.co/60x60/d1d5db/4b5563?text=JW',
  },
  {
    name: 'Jacqueline Wright',
    role: 'UI/UX Di Eureka Bookhouse',
    quote:
      'Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci.',
    imageUrl: 'https://placehold.co/60x60/d1d5db/4b5563?text=JW',
  },
];
