import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-product',
  styleUrl: 'app-product.css',
  shadow: true,
})
export class AppProduct
{


  @Prop() tiles: string;
  @Prop() price: number;

  render()
  {
    return (
      <div class="col-md-4">
        <div class="card card-perso">
          <img src="https://via.placeholder.com/150" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">{this.tiles}</h5>
            <p class="card-text">{this.price}</p>
          </div>
        </div>
      </div>
    )
  }

}
