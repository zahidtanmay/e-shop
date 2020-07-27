export const state = () => ({
  navLinks: [
    {
      text: 'Popular',
      link: 'popular',
      child: []
    },

    {
      text: 'Foods',
      link: 'foods',
      child: [
        {
          text: 'Breakfast',
          link: 'breakfast',
          child: [
            {
              text: 'Local',
              link: 'local',
            },
            {
              text: 'Energy',
              link: 'energy-snacks'
            },
          ]
        },
        {
          text: 'Snacks',
          link: 'snacks',
          child: [
            {
              text: 'Noodles',
              link: 'noodles',
            },
            {
              text: 'Soup',
              link: 'soup'
            },
            {
              text: 'Biscuits',
              link: 'biscuits'
            },
            {
              text: 'Sauces',
              link: 'sauces'
            },
          ]
        },
        {
          text: 'Dairy',
          link: 'dairy',
          child: []
        },
      ]
    },

    {
      text: 'Foods1',
      link: 'foods1',
      child: [
        {
          text: 'Breakfast',
          link: 'breakfast',
          child: [
            {
              text: 'Local',
              link: 'local',
            },
            {
              text: 'Energy',
              link: 'energy-snacks'
            },
          ]
        },
        {
          text: 'Snacks',
          link: 'snacks',
          child: [
            {
              text: 'Noodles',
              link: 'noodles',
            },
            {
              text: 'Soup',
              link: 'soup'
            },
            {
              text: 'Biscuits',
              link: 'biscuits'
            },
            {
              text: 'Sauces',
              link: 'sauces'
            },
          ]
        },
        {
          text: 'Dairy',
          link: 'dairy',
          child: []
        },
      ]
    },


    {
      text: 'Home Appliances',
      link: 'home-appliances',
    }
  ],
  currentNav: {},
  breadCrumb: []
})

export const getters = {
  getNavLinks: state => state.navLinks,
  getCurrentNav: state => state.currentNav,
}

export const mutations = {
  setCurrentNav: (state, value) => { state.currentNav = Object.assign({}, value) },
}

export const actions = {
  async bootstrapNav ({commit}) {
    const currentNav = await localStorage.getItem('currentNav') ? JSON.parse(localStorage.getItem('currentNav')) : {}
    await commit('setCurrentNav', currentNav)
    return true
  }

}
