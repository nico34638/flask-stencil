import {Component, State, h, Method} from '@stencil/core';
import {Product} from '../../model/product'

@Component({
  tag: 'app-list-product',
  styleUrl: 'app-list-product.css',
  shadow: true,
})

export class AppListProduct {


  @State() products: Array<Product> = [];

  constructor() {
    this.returnComponent = this.returnComponent.bind(this);
    this.products = [];
  }

  componentWillLoad() {
    if (this.products.length == 0) {
      this.fetchProducts()
    }
  }

  @Method()
  async fetchProducts() {
    const headers = new Headers();

    const param = {
      method: 'GET',
      headers: headers
    };

    return await fetch('http://localhost:5000/products', param)
      .then(response => response.json())
      .then((result) => {
        this.products = result
      });
  }

  returnComponent() {
    if (this.products.length != 0) {
      console.log(this.products)
      this.products.forEach(product => {
        console.log(product)
        return (
          <app-product title={product.title} price={product.price}/>
        );
      });
    }
  }

  render() {
    return (
      <div>
        {this.products.map((todo) =>
          <div>
            <app-product tiles={todo.title} price={todo.price}/>
          </div>
        )}
      </div>
    )
  }

}
