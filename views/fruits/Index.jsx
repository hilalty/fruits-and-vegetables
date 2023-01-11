const React = require("react");

class Index extends React.Component {
  render() {
    const { fruits } = this.props;

    return (
      <div>
        <h1>Fruits index page</h1>
        <nav>
          <a href="/fruits/new">Create a New Fruit</a>
        </nav>
        <ul>
          {this.props.fruits.map((fruit, i) => {
            return (
              <li key={i}>
                The <a href={`/fruits/${fruit.id}`}> {fruit.name} </a> is{" "}
                {fruit.color}
                {" - "}
                {fruit.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                    <form
                  action={`/fruits/${fruit._id}?_method=DELETE`}
                  method="POST"
                  >
                    <input type="submit" value="DELETE" />
                  </form>
                  <form action={`/fruits/${fruit._id}/edit`} method="GET">
                    <input type="submit" value="UPDATE" />
                  </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
