import { Component, h, Method, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome
{

  @State() products: {};


  constructor()
  {
    this.handleCLick = this.handleCLick.bind(this)

  }

  componentWillLoad()
  {
    this.products = 'undefined'
    this.fetchProducts()

  }


  @Method()
  async fetchProducts()
  {
    const myHeaders = new Headers();

    const myInit = {
      method: 'GET',
      headers: myHeaders
    };

    return await fetch('http://localhost:5000/products', myInit)
      .then(response => response.json())
      .then((result) =>
      {
        this.products = result
      });
  }

  handleCLick()
  {
    console.log(this.products)
  }

  render()
  {


    return (
      <div class="container">
        <div class="jumbotron">
            <h1 class="display-3">Bienvenue</h1>
            <p class="lead">This is a Stencil sample application - Demonstrating the power of pure web components!</p>
            <button class="btn btn-primary">Learning Resources for Web Developers</button>
        </div>

        <div class="row">
          <div class="col-md-4">
            <button onClick={this.handleCLick} class="btn btn-success">Charger les produits</button>
          </div>

          <div class="col-md-4">
            <stencil-route-link url="/websocket">
              <button class="btn btn-primary">Test websocket</button>
            </stencil-route-link>
          </div>


          <app-list-product/>
        </div>


      </div>
    );
  }
}
