export default class ProductsController {
  constructor(context) {
    this.getCategoryProducts = this.getCategoryProducts.bind(context);
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
}
