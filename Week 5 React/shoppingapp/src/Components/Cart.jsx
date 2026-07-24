/*------------ Hands-on 7 ------------------------*/

import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <table border="1" cellPadding="8" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {this.props.item.map((product, index) => (
            <tr key={index}>
              <td>{product.itemname}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Cart;