import React from "react";

export default class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "orange", price: 300 },
      { id: 2, name: "banana", price: 200 },
      { id: 3, name: "apple", price: 100 }
    ]
  };

  add = () => {
    let id = this.state.items.length + 1;
    this.setState({
      items: [
        ...this.state.items,
        { id, name: `Item ${id}`, price: (0.01 * id).toFixed(2) }
      ]
    });
  };

  render() {
    return (
      <div className="">
        <h1 class="font-stretch-50%"> Shopping Cart</h1>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.id}>
              {item.name} : ${item.price}
            </li>
          ))}
        </ul>
        <button onClick={this.add}>Add Item</button>
      </div>
    );
  }
}
