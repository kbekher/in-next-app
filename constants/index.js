import systems from "/images/systems.svg";
import graphic from "/images/graphic.svg";
import ux from "/images/ux.svg";
import prototyping from "/images/prototyping.svg";
import illustration from "/images/illustration.svg";
import ui from "/images/ui.svg";

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
    assetsUrls: ["ace_tate.mp4", "ace_tate_mobile.mp4"], 
    behanceUrl: "https://www.behance.net/gallery/199572029/Ace-Tate-UXUI-Design" 
  },
  { 
    name: "xtrafit", 
    assetsUrls: ["xtrafit.mp4", "xtrafit_mobile.mp4"], 
    behanceUrl: "https://www.behance.net/gallery/200658231/Xtrafit-Gym-Mobile-App-Design" 
  },
  { 
    name: "flowtech", 
    assetsUrls: ["fl1", "fl2", "fl3", "fl4", "fl5", "fl6"], 
    behanceUrl: "https://www.behance.net/gallery/203295061/Flowtech-Brand-Identity" 
  },
  { 
    name: "paysera", 
    assetsUrls: ["pa1", "pa2", "pa3", "pa4", "pa5", "pa6"], 
    behanceUrl: "https://www.behance.net/gallery/204500631/Paysera-Bank-brand-identity" 
  },
]


export { navLinks, skills, reviews, projects };
