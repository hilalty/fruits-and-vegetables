const React = require("react");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;

    return (
      <div>
        <h1>Vegetables index page</h1>
        <nav>
          <a href="/vegetables/new">Create a New Vegetable</a>
        </nav>
        <ul>
          {this.props.vegetables.map((vegetable, i) => {
            return (
              <li key={i}>
                The <a href={`/vegetables/${vegetable.id}`}> {vegetable.name} </a> is{" "}
                {vegetable.color}
                {" - "}
                {vegetable.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                  <form
                  action={`/vegetables/${vegetable._id}?_method=DELETE`}
                  method="POST"
                  >
                    <input type="submit" value="DELETE" />
                  </form>
                  <form action={`/vegetables/${vegetable._id}/edit`} method="GET">
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







