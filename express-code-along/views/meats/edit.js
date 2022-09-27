const React = require('react')

class Edit extends React.Component {
  render() {
    const displayBlock = {
      display: 'block',
    }

    return (
      <>
        <h3>edit meat</h3>
        <form action="/meats" method="PUT">
          <label htmlFor="name" style={displayBlock}>
            name:
          </label>
          <input type="text" id="name" name="name" />
          <label htmlFor="type" style={displayBlock}>
            type:
          </label>
          <input type="text" id="type" name="type" />

          <button type="submit" style={displayBlock}>
            update
          </button>
        </form>
      </>
    )
  }
}

module.exports = Edit
