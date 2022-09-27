const React = require('react')

class New extends React.Component {
  render() {
    const displayBlock = {
      display: 'block',
    }

    return (
      <>
        <h3>create new veggie</h3>
        <form action="/veggies" method="POST">
          <label htmlFor="name" style={displayBlock}>
            name:
          </label>
          <input type="text" id="name" name="name" />
          <label htmlFor="color" style={displayBlock}>
            color:
          </label>
          <input type="text" id="color" name="color" />
          <button type="submit" style={displayBlock}>
            submit
          </button>
        </form>
      </>
    )
  }
}

module.exports = New
