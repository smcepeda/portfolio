// Skills Icons
import tailwindIcon from "./images/tailwind-icon.png"
import flutterIcon from "./images/flutter.svg"
import linkedinIcon from "./images/linkedin.webp"
import dockerIcon from "./images/docker-icon.svg"
import reactIcon from "./images/reactjs.svg"
import jsIcon from "./images/javascript.svg"
import graphqlIcon from "./images/graphql-icon.svg"
import typescriptIcon from "./images/typescript.svg"
import ionicIcon from "./images/ionic.svg"
import elasticIcon from "./images/elastic-icon.png"
import nodeIcon from "./images/node-icon.png"
import elixirIcon from "./images/elixir-icon.png"
import gatsbyIcon from "./images/gatsby-icon.png"
import santiago from "./images/santiago2.jpg"
import vevel from "./images/vevel.png"
import floom from "./images/floom.png"
import aha from "./images/aha.png"
import pokemon from "./images/pokemon.png"

// Social Icon
import githubIcon from "./images/github.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Santiago",
  headerTagline: [
    //Line 1 For Header
    "I love building",
    //Line 2 For Header
    "digital products",
    //Line 3 For Header
    "&  experiences",
  ],
  //   Header Paragraph
  //   headerParagraph:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "smcepeda@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Project 1: Vevel", //Project Title - Add Your Project Title Here
      //   para: "Vevel is an application to trade stocks and cryptocurrencies.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: vevel,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/smcepeda/vevel",
    },
    {
      title: "Project 2: PokeTrader", //Project Title - Add Your Project Title Here
      //   para: "PokeTrader is a Pokemon card collectibles trading app.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: pokemon,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/smcepeda/poketrader",
    },
    {
      title: "Project 3: Aha! App", //Project Title - Add Your Project Title Here
      //   para: "Crypto Education App made with Flutter. Code is not public.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: aha,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/smcepeda/",
    },
    {
      title: "Project 4: Floom", //Project Title - Add Your Project Title Here
      //   para: "Meditation app made with ReactJS, Ionic, Typescript and Firebase.",
      //Project Image - Add Your Project Image Here
      imageSrc: floom,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/smcepeda/floom",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am passionate about developing and designing mobile and web applications. I also have more than five years of programming experience and have successfully completed several projects both as an employee at Simplificator and as a freelancer. I really enjoy bringing ideas to life from start to finish, whether it's using Figma for high fidelity prototyping or ReactJS, NodeJS & Docker for implementation.",
  //   aboutParaTwo:
  // "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   aboutParaThree:
  // "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage: santiago,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: reactIcon,
      para: "ReactJS",
    },
    {
      img: typescriptIcon,
      para: "Typescript",
    },
    {
      img: ionicIcon,
      para: "Ionic",
    },
    {
      img: jsIcon,
      para: "Javascript",
    },
    {
      img: tailwindIcon,
      para: "Tailwind CSS",
    },
    {
      img: graphqlIcon,
      para: "GraphQL",
    },
    {
      img: flutterIcon,
      para: "Flutter",
    },
    {
      img: dockerIcon,
      para: "Docker",
    },
    {
      img: nodeIcon,
      para: "NodeJS",
    },
    {
      img: elasticIcon,
      para: "Elastic Search",
    },
    {
      img: elixirIcon,
      para: "Elixir",
    },
    {
      img: gatsbyIcon,
      para: "GatsbyJS",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next web/mobile application together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/smcepeda" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/santiago-m-cepeda-64757970/",
    },
  ],

  // End Contact Section ---------------
}
