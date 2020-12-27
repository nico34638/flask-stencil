import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-product-add',
  styleUrl: 'app-product-add.css',
  shadow: true,
})
export class AppProductAdd {

  @State() titre: string;
  @State() description: string;
  @State() price: number;


  saveProduct(product)
  {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(product)
    };

    console.log(JSON.stringify(product))

  fetch("http://localhost:5000/products", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
  

  handleSubmit(e) {
    e.preventDefault()
    // send data to our backend

    let product = {
      'title': this.titre,
      'description': this.description,
      'price': this.price
    }

    console.log(product)

    this.saveProduct(product)


  }

  handleChangeTitre(event) {
    this.titre = event.target.value;
    
  }

  handleChangeDescription(event) {
    this.description = event.target.value;
  }

  handleChangePrice(event) {
    this.price = event.target.value;
  }
 
  render() {
    return (
      <div class="container">
        <div class="row">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div class="form-group">
              <label>
              Titre:
              <input type="text" value={this.titre} onInput={(event) => this.handleChangeTitre(event)} class="form-control"/>
              </label>
            </div>

            <div class="form-group">
              <label>
              Description:
              <input type="text" value={this.description} onInput={(event) => this.handleChangeDescription(event)} class="form-control"/>
              </label>
            </div>

            <div class="form-group">
              <label>
              Prix:
              <input type="number" value={this.price} onInput={(event) => this.handleChangePrice(event)} class="form-control"/>
              </label>
            </div>

            <input type="submit" value="Submit"  class="btn btn-primary"/>
          </form>
        </div>
       </div>
    );
  }

}
