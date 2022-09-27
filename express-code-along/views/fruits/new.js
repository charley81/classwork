const React = require('react')
const Layout = require('../layouts/layout')

class New extends React.Component {
  render() {
    const displayBlock = {
      display: 'block',
    }

    return (
      <Layout title="create new fruit" group="fruits">
        <h3>create new fruit</h3>
        <form action="/fruits" method="POST">
          <label htmlFor="name" style={displayBlock}>
            name:
          </label>
          <input type="text" id="name" name="name" />
          <label htmlFor="color" style={displayBlock}>
            color:
          </label>
          <input type="text" id="color" name="color" />
          <label htmlFor="readyToEat" style={displayBlock}>
            ready:
          </label>
          <input type="checkbox" id="readyToEat" name="readyToEat" />
          <button type="submit" style={displayBlock}>
            submit
          </button>
        </form>
      </Layout>
    )
  }
}

module.exports = New
