import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', title: 'home' },
  { id: 2, href: '#about', title: 'about' },
  { id: 3, href: '#services', title: 'services' },
  { id: 4, href: '#tours', title: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://squarespace.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Maximize efficiency, reduce costs, and enhance financial health sustainably.',
  },

  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Explore boundless trails with unmatched scenic beauty and diversity.',
  },

  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Experience unparalleled luxury and relaxation in every aspect.',
  },
]

export const tours = [
  {
    id: 1,
    imgUrl: tour1,
    date: 'august 26th, 2024',
    title: 'Tibet Adventure',
    price: '$2100',
    location: 'china',
    duration: 6,
    cost: 2100,
    info: 'Journey through Tibets spiritual heart, experience nomadic life, and stand in awe of Everests majestic peak.',
  },

  {
    id: 2,
    imgUrl: tour2,
    date: 'october 1th, 2024',
    title: 'best of java',
    price: '$2100',
    location: 'indonesia',
    duration: 11,
    cost: 1400,
    info: 'Delve into Java history at Borobudur, encounter its natural wonders, and savor the local cuisine and vibrant nightlife.',
  },

  {
    id: 3,
    imgUrl: tour3,
    date: 'september 15th, 2024',
    title: 'Tibet Adventure',
    price: '$2100',
    location: 'hong kong',
    duration: 8,
    cost: 3500,
    info: 'Embrace the serenity of Tibetan plateaus, visit historic Potala Palace, and engage with monks in ancient monasteries.',
  },

  {
    // const { id, title, price, location, days, info, imgUrl } = tours

    id: 4,
    imgUrl: tour4,
    date: 'december 5th, 2024',
    title: 'kenya highlights',
    price: '$2100',
    location: 'china',
    duration: 20,
    cost: 3300,
    info: 'Witness the Great Migration, explore Maasai Mara, relax on pristine beaches, and connect with diverse wildlife and cultures.',
  },
]
