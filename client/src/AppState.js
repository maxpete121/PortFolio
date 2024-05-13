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
      link: "",
      info: ""
    },
    {
      name: "KeeprCo",
      link: "https://keeprco-e543ed6d4443.herokuapp.com/#/",
      info: "An app that allows users to create Posts they can share with others. Users can also create vaults for their profile page, that posts can be stored inside. Posts can have tags that help users find content they enjoy."
    },
    {
      name: "All Spice",
      link: "https://allspice-d30a0e30877c.herokuapp.com/#/",
      info: "An app that allows people to save and share recipes with others."
    }
  ]
})
