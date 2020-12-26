import { Component, h, Method, State  } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {

  @State() products: {};
  @State() counter: number;


  constructor()
  {
    this.counter = 0;
    this.handleCLick = this.handleCLick.bind(this)

  }

  componentWillLoad() {
    this.counter = this.counter + 1
    console.log(this.counter)

    console.log('Component has been rendered');
    this.products = {
      "tet": "birtoute"
    }
    console.log(this.products)
    this.fetchProducts()
    
  }


  @Method()
  async fetchProducts()
  {
    var myHeaders = new Headers();

    var myInit = {
      method: 'GET',
      headers: myHeaders
    };

    return await fetch('http://localhost:5000/products', myInit)
      .then(response => response.json())
      .then((result) => {
          console.log(this.products)
          console.log(result)
        this.products = result
        console.log(this.products)
      });
  }

  handleCLick(event: Event)
  {
    console.log(this.products) 
  }

  render() {


    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <button onClick={ this.handleCLick }>Mon gros ziziz</button>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
