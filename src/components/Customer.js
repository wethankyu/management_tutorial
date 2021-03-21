import React from "react";

class Customer extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.image} alt="img" />
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    )
  };
}

export default Customer;