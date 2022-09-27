const React = require('react')

class Edit extends React.Component {
  render() {
    const displayBlock = {
      display: 'block',
    }

    return (
      <>
        <h3>edit veggie</h3>
        <form action="/veggies" method="PUT">
          <label htmlFor="name" style={displayBlock}>
            Name:
          </label>
          <input type="text" id="name" name="name" />
          <label htmlFor="color" style={displayBlock}>
            Color:
          </label>
          <input type="text" id="color" name="color" />
          <button type="submit" style={displayBlock}>
            update
          </button>
        </form>
      </>
    )
  }
}

module.exports = Edit
