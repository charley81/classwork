const React = require('react')

class New extends React.Component {
  render() {
    const displayBlock = {
      display: 'block',
    }

    return (
      <>
        <h3>Create new meat</h3>
        <form action="/meats" method="POST">
          <label htmlFor="name" style={displayBlock}>
            Name:
          </label>
          <input type="text" id="name" name="name" />
          <label htmlFor="name" style={displayBlock}>
            Type:
          </label>
          <input type="text" id="type" name="type" />
          <button type="submit" style={displayBlock}>
            Submit
          </button>
        </form>
      </>
    )
  }
}

module.exports = New
