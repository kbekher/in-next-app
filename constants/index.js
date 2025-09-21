import systems from "/images/systems.svg";
import graphic from "/images/graphic.svg";
import ux from "/images/ux.svg";
import prototyping from "/images/prototyping.svg";
import illustration from "/images/illustration.svg";
import ui from "/images/ui.svg";

const DOMAIN = 'https://d3bxg96r07nwt6.cloudfront.net/';
// const DOMAIN_NEW = 'https://d282ut73jdj7fd.cloudfront.net/';

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

const skills = [
  { name: "systems", icon: systems },
  { name: "graphic", icon: graphic },
  { name: "ux", icon: ux },
  { name: "prototyping", icon: prototyping },
  { name: "illustration", icon: illustration },
  { name: "ui", icon: ui },
];

const reviews = [
  { id: 1, imgUrl: "reviewer1.jpg" },
  { id: 2, imgUrl: "reviewer2.jpg" },
];

const projects = [
  {
    name: "ace-and-tate",
    assetsUrls: ["ace_and_tate.mov"],
    behanceUrl: "https://www.behance.net/gallery/199572029/Ace-Tate-UXUI-Design"
  },
  {
    name: "xtrafit",
    assetsUrls: ["xtrafit_mobile.mov", "xtrafit.mov"],
    behanceUrl: "https://www.behance.net/gallery/200658231/Xtrafit-Gym-Mobile-App-Design"
  },
  {
    name: "flowtech",
    assetsUrls: ["fl1.jpg", "fl2.jpg", "fl3.jpg", "fll4.jpg", "fl5.jpg", "fl6.jpg"],
    behanceUrl: "https://www.behance.net/gallery/203295061/Flowtech-Brand-Identity"
  },
  {
    name: "paysera",
    assetsUrls: ["pa1.jpg", "paa2.jpg", "pa3.jpg", "pa4.jpg", "pa5.jpg", "pa6.jpg"],
    behanceUrl: "https://www.behance.net/gallery/204500631/Paysera-Bank-brand-identity"
  }
]

const illustrations = [
  {
    name: "fatboy",
    behanceUrl: "https://www.behance.net/gallery/188116553/Illustrative-World-of-Fatboy"
  },
  {
    name: "people",
  },
  {
    name: "grinch",
  },

  {
    name: "books",
  },
  {
    name: "christmas",
  },
]

export {DOMAIN, navLinks, skills, reviews, projects, illustrations };
