const {
  ewsThumbnail,
  ewsProducts,
  ewsSingle,
  ewsCheckout,
  ewsAdmin,
  ewsEdit,
} = require("./assets/elite-web-services");
const {
  arcadeThumbnail,
  arcadeHome,
  arcadeHighscores,
  arcadeSettings,
  arcadeNew,
  arcadeGame,
  arcadeTitle,
} = require("./assets/retro-arcade-snake");
const {
  fitnessThumbnail,
  fitnessHome,
  fitnessRoutines,
  fitnessEdit,
} = require("./assets/fitness-tracker");

const portfolioData = [
  // ------------ Elite Web Services start --------------
  {
    route: "elite-web-services",
    title: "Elite Web Services",
    siteUrl: "https://elite-web-services.herokuapp.com/",
    codeUrl: "https://github.com/Elite-Web-Services/Elite-Web-Services",
    img: {
      src: ewsThumbnail,
      alt: "Elite Web Services",
    },
    carousel: [
      {
        src: ewsProducts,
        alt: "Products Page",
      },
      {
        src: ewsSingle,
        alt: "Single Product View",
      },
      {
        src: ewsCheckout,
        alt: "Checkout",
      },
      {
        src: ewsAdmin,
        alt: "Admin Functionality",
      },
      {
        src: ewsEdit,
        alt: "Editing a Product",
      },
    ],
    description: [
      "This was a group project completed as part of my Fullstack Academy curriculum. It is a react app which utilizes a PostgreSQL database. Along with two partners, I helped create a template e-commerce site with a fully functioning backend that allows users to create accounts, view products, and add them to their carts for checkout.",
      "My personal responsibilities were focused on the products and searchbar, along with some contributions to cart functionality. I built out the products database, as well as the front-end functionality of adding, editing, and removing products on the site. And of course, all CSS styling involving products.",
    ],
  },
  // ------------ Elite Web Services end --------------

  // ------------ Retro Arcade Snake start --------------
  {
    route: "retro-arcade-snake",
    title: "Retro Arcade Snake",
    siteUrl: "https://retro-arcade-snake.herokuapp.com/",
    codeUrl: "https://github.com/mdanieldev05/react_profitly",
    img: {
      src: arcadeThumbnail,
      alt: "Profitly Retro",
    },
    carousel: [
      {
        src: arcadeHome,
        alt: "Main Menu",
      },
      {
        src: arcadeHighscores,
        alt: "View All Highscores",
      },
      {
        src: arcadeSettings,
        alt: "Game Settings",
      },
      {
        src: arcadeNew,
        alt: "New Highscore Pop Up",
      },
      {
        src: arcadeGame,
        alt: "Playing the Game",
      },
      {
        src: arcadeTitle,
        alt: "Title Art",
      },
    ],
    description: [
      "This was a fun solo project made using HTML canvas, React, and PostgreSQL. Users can play either by using the arrow keys or the buttons provided at the bottom of the screen.",
      "If a user gets a highscore while playing on normal settings, they can add their name to the database for all users to see. Users can also play on customized settings by clicking the cog in the top right. All of the visuals were created using CSS and I drew background using Procreate.",
    ],
  },
  // ------------ Retro Arcade Snake end --------------

  // ------------ Fitness Tracker start --------------
  {
    route: "fitness-tracker",
    title: "Fitness Tracker",
    siteUrl: "https://fitness-tracker-react-app.herokuapp.com/",
    codeUrl: "https://github.com/mdanieldev05/ReactNative_Health",
    img: {
      src: fitnessThumbnail,
      alt: "Fitness Tracker",
    },
    carousel: [
      {
        src: fitnessHome,
        alt: "Home Page",
      },
      {
        src: fitnessRoutines,
        alt: "View Other User's Routines",
      },
      {
        src: fitnessEdit,
        alt: "Edit Your Own Routines",
      },
    ],
    description: [
      "This project started as a pair-programming exercise as part of my Fullstack Academy curriculum. I created a functioning backend with one partner using PostgreSQL and JavaScript. And later created a functioning front-end with another partner, using React and CSS. I decided to revisit these two projects and put them together to create a full-stack app. This is end result.",
      "This is simply a site that allows users to create fitness routines and post them for others to see. Users can also create and post individual activities which other users can incorporate into their own routines.",
    ],
  },
  // ------------ Fitness Tracker end --------------
];

module.exports = portfolioData;
