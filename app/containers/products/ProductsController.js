export default class ProductsController {
  constructor(context) {
    this.getCategoryProducts = this.getCategoryProducts.bind(context);
    this.addToCart = this.addToCart.bind(context);
    this.removeFromCart = this.removeFromCart.bind(context);
  }

  async getCategoryProducts(category, page) {
    let result;
    try {
      result = await fetch(`http://staging.zaitt3.zaittgroup.com/api/v1/stores/1/items?page=${page}&words=${category}`);
    } catch(err) {
      console.log(err);
    }
    return this.props.setProductsAction(JSON.parse(result._bodyText));
  }

  async addToCart(item) {
    const { addedItems } = this.props.cart;
    if(addedItems.length) {
      const itemIndex = addedItems.findIndex(({ id }) => id == item.id);
      if(itemIndex > -1) addedItems[itemIndex].amount++;
      else addedItems.push({ amount: 1, ...item });
    } else addedItems.push({ amount: 1, ...item });
    await this.props.setProductsAction(addedItems);
  }

  async removeFromCart(productId, quantity) {
    const { addedItems } = this.props.cart;
    if(addedItems.length) {
      const itemIndex = addedItems.findIndex(({ id }) => id == productId);
      if(itemIndex > -1) {
        if(addedItems[itemIndex].amount == quantity) addedItems.splice(itemIndex, 1);
        else addedItems[itemIndex].amount = addedItems[itemIndex].amount - quantity;
      }
    }
    await this.props.setProductsAction(addedItems);
  }
}
