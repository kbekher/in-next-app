import figma from "/images/figma.svg";
import photoshop from "/images/photoshop.svg";
import illustrator from "/images/illustrator.svg";
import procreate from "/images/procreate.svg";

const DOMAIN = 'https://d282ut73jdj7fd.cloudfront.net';
const GA_ID = 'G-8RK07K6J66';

const navLinks = [
  {
    id: "about",
  },
  {
    id: "work",
  },
  {
    id: "skills",
  },
];

const mediaLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/inozemtsevco/' },
  { name: 'Behance', href: 'https://www.behance.net/ivaninozemcev' },
  { name: 'Dribbble', href: 'https://dribbble.com/Bluntcath23' },
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/inozemtsevco/' },
  { name: 'Threads', href: 'https://www.threads.net/@inozemtsevco' },
  { name: 'Youtube', href: 'https://www.youtube.com/@anderelab' }
];

const projects = [
  {
    id: 1,
    name: "andere-lab",
    year: 2025,
    type: "brand",
    assetsUrls: ["andere-lab-1", "andere-lab-2"],
    behanceUrl: "https://www.behance.net/gallery/224980497/andere-lab-Brand-Identity"
  },
  {
    id: 2,
    name: "photo-gallery",
    year: 2025,
    type: "ux",
    assetsUrls: ["photo-gallery-1"],
    behanceUrl: "https://www.behance.net/gallery/224544111/Virtual-Gallery-of-a-Film-Photographer-Website-Design"
  },
  {
    id: 3,
    name: "raum-studio",
    year: 2025,
    type: "brand",
    assetsUrls: ["raum-1", "raum-2", "raum-3"],
    behanceUrl: "https://www.behance.net/gallery/230235097/RAUM-STUDIO-RS-Architectural-bureau"
  },
  {
    id: 4,
    name: "xtrafit",
    year: 2024,
    type: "ux",
    assetsUrls: ["xtrafit-1", "xtrafit-2"],
    behanceUrl: "https://www.behance.net/gallery/200658231/Xtrafit-Gym-Mobile-App-Design"
  },
  { 
    id: 5,
    name: "ace-and-tate",
    year: 2024,
    type: "ux",
    assetsUrls: ["ace-and-tate-1", "ace-and-tate-2", "ace-and-tate-3"],
    behanceUrl: "https://www.behance.net/gallery/199572029/Ace-Tate-UXUI-Design"
  }
]

const logos = ["another", "kb", "douglas", "andere-lab", "henning-co", "mate-academy", "projector", "raum", "allclinical"];

const skillsAndTools = [
  { name: "Figma", icon: figma },
  { name: "Photoshop", icon: photoshop },
  { name: "Illustrator", icon: illustrator },
  { name: "Procreate", icon: procreate },
  { name: "graphic"},
  { name: "ux" },
  { name: "systems" },
  { name: "illustration" },
  { name: "photography" },
  { name: "typography" },
];

export { DOMAIN, GA_ID, navLinks, mediaLinks, projects, logos, skillsAndTools };
