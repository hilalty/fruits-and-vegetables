const React = require("react");

class Show extends React.Component {
  render() {
    const vegetable = this.props.vegetable;

    return (
      <div>
        <h1>Vegetables show page</h1>
        <nav>
          <a href="/vegetables">Back</a>
        </nav>
        The {this.props.vegetable.name} is {this.props.vegetable.color} {" - "}
        {this.props.vegetable.readyToEat
          ? `It is ready to eat`
          : `It is not ready to eat`}
      </div>
    );
  }
}

module.exports = Show;
