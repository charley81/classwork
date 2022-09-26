const React = require('react')

class New extends React.Component {
  render() {
    return (
      <>
        <h1>Create New Fruit</h1>
        <form action="/fruits" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="color">Color:</label>
          <input type="text" id="color" name="color" />
          <label htmlFor="ready">Ready To Eat:</label>
          <input type="checkbox" id="ready" name="ready" />
          <button type="submit">submit</button>
        </form>
      </>
    )
  }
}

module.exports = New
