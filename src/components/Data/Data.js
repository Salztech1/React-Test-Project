//Card
import Image from '/images/Mountain-4.jpg';
import Image1 from '/images/Mountain-5.jpg';
import Image2 from '/images/Mountain.jpg';
import Image3 from '/images/Mountain-2.jpg';

//News
import newsImage1 from "/images/Mountain.jpg";
import newsImage2 from "/images/Mountain-2.jpg";

//Followers
import person from "/images/Salome.png";
import person1 from "/images/Boris.jpeg";
import person2 from "/images/Fabiola.png";
import person3 from "/images/Cyril.jpeg";
import person4 from "/images/Suzzy.jpeg";
import person5 from "/images/Petite-Jesus.jpeg";

//Suggestions
import suggestedImage from "/images/The-Tetons.jpg";
import suggestedImage1 from "/images/Mountain-5.jpg";




//Card
export const hikeData = [
  {
    id: 1,
    title: "DEC 24",
    image: Image,
    distance: "106 ml",
    elevation: "4.884 m",
    difficulty: "Hard",
    cardData: [
      {
        id: 1,
        time: "THU 07:30 AM",
        name: "Mount Semeru",
        location: "Location . Lumajang, East Java",
      },
    ],
  },
  {
    id: 2,
    title: "DEC 28",
    image: Image1,
    distance: "62 ml",
    elevation: "2.228 m",
    difficulty: "Medium",
    cardData: [
      {
        id: 2,
        time: "WED 10:00 AM",
        name: "Mount Kosciuszko",
        location: "Location. Australia",
      },
    ],
  },
  {
    id: 3,
    title: "JAN 02",
    image: Image2,
    distance: "138 ml",
    elevation: "5.895 m",
    difficulty: "Hard",
    cardData: [
      {
        id: 3,
        time: "FRI 6:30 AM",
        name: "Mount Kilimanjaro",
        location: "Location . Tanzania",
      },
    ],
  },
  {
    id: 4,
    title: "JAN 14",
    image: Image3,
    distance: "26 ml",
    elevation: "2.063 m",
    difficulty: "Easy",
    cardData: [
      {
        id: 4,
        time: "MON 11:20 AM",
        name: "Mount Crab",
        location: "Location . Andes, Peru",
      },
    ],
  },
];

//News
export const newsData = [
  {
    id: 1,
    description: "Five questions that you should answer truthfully.",
    image: newsImage1,
  },
  {
    id: 2,
    description: "Ten unbelievable facts about mountains.",
    image: newsImage2,
  },
];

//Followers
export const initialFollowSuggestions = [
  {
    id: 1,
    name: "Salome Njinda",
    person: person,
    username: "@salome04",
  },
  {
    id: 2,
    name: "Ashu Boris",
    person: person1,
    username: "@boris34",
  },
  {
    id: 3,
    name: "Foletia Fabiola",
    person: person2,
    username: "@fabiola09",
  },
];

export const moreFollowSuggestions = [
  {
    id: 4,
    name: "Nkwi Cyril",
    person: person3,
    username: "@cyril224",
  },
  {
    id: 5,
    name: "Kenne Suzy",
    person: person4,
    username: "@suzy45",
  },
  {
    id: 6,
    name: "Petite Jesus",
    person: person5,
    username: "@jesus778",
  },
];

//Suggested Pages
  export const suggestedPages = [
    {
      id: 1,
      name: 'World of Mountains',
      image: suggestedImage,
    },
    {
      id: 2,
      name: 'Mountain of Life',
      image: suggestedImage1,
    },
    {
      id: 3,
      name: 'Mountain of the Earch',
      image: suggestedImage,
    },
    {
        id: 4,
        name: 'Mountain of Fire',
        image: suggestedImage1,
      },
  ];


  //NavItem
  export const navItems = [
    { to: "/feed", icon: "bi-house", label: "Feed" },
    { to: "/friends", icon: "bi-people-fill", label: "Friends" },
    { to: "/hikes", icon: "bi-list-nested", label: "Hikes" },
    { to: "/videos", icon: "bi-film", label: "Videos" },
    { to: "/pictures", icon: "bi-image-fill", label: "Photos" },
    { to: "/maps", icon: "bi-map", label: "Maps" },
  ];