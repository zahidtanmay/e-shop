export const state = () => ({
  products: [],
  activeProduct: {},
})

export const getters = {
  getProducts: state => state.products,
  getActiveProduct: state => state.activeProduct
}

export const mutations = {
  SET_PRODUCTS: (state, value) => { state.products = value },
  SET_ACTIVE_PRODUCT: (state, { product, customFields }) => {
    let item = Object.assign({}, product)
    const itemCustomFields = product.customFields
    const id = itemCustomFields.findIndex(field => parseInt(field.typeId) === 4)
    item.discount = 0
    item.discountedPrice = 0
    if (id > -1) {
      item.discount = parseInt(itemCustomFields[id].value)
      item.discountedPrice = parseInt(item.price) - parseInt(itemCustomFields[id].value)
    }

    const convertedCustomFields = []
    itemCustomFields.forEach(field => {
      let convertedField = Object.assign({}, field)
      if (parseInt(field.typeId) === 2 && customFields[field.name]['valueType'] != 'Text' ) {
        const prefValues = customFields[field.name].prefValues
        const id = prefValues.findIndex(value => parseInt(value.id) === parseInt(field.value))
        convertedField.convertedValue = prefValues[id]['value']
        convertedCustomFields.push(convertedField)
        // console.log(field, customFields[field.name], prefValues, field.value, id, prefValues[id]['value'])
      } else {
        convertedField.convertedValue = convertedField.value
        convertedCustomFields.push(convertedField)
      }
    })

    item.customFields = convertedCustomFields
    state.activeProduct = Object.assign({}, item)
  }
}

export const actions = {

  async fetchProduct (context) {
    let {data} = await this.$axios.get('products?cols=*')
    context.commit('SET_PRODUCTS', data.data)
  },
}
