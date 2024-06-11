import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/ 
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  projectInfo: [
    {
      name: "PcPals",
      link: "https://github.com/maxpete121/PCpals",
      info: "This application allows users to create and purchase their own PC builds! Users can save builds for later or share their own builds with others.",
      languages: "HTML, CSS, Javascript, C#, MYSQL"
    },
    {
      name: "KeeprCo",
      link: "https://keeprco-e543ed6d4443.herokuapp.com/#/",
      info: "An app that allows users to create Posts they can share with others. Users can also create vaults for their profile page, that posts can be stored inside. Posts can have tags that help users find content they enjoy.",
      languages: "HTML, CSS, Javascript, C#, MYSQL"
    },
    {
      name: "All Spice",
      link: "https://allspice-d30a0e30877c.herokuapp.com/#/",
      info: "An app that allows people to create recipes and share them with others. Users can also save recipes for later or edit their current recipes they've created.",
      languages: "HTML, CSS, Javascript, C#, MYSQL"
    }
  ],

})
