const React = require('react')
const Layout = require('react')

class Edit extends React.Component {
  render() {
    const displayBlock = {
      display: 'block',
    }
    console.log(this.props)
    return (
      <Layout title="edit page" group="fruits">
        <h3>edit fruit</h3>
        <form action="/fruits" method="PUT">
          <label htmlFor="name" style={displayBlock}>
            Name:
          </label>
          <input type="text" id="name" name="name" />
          <label htmlFor="color" style={displayBlock}>
            Color:
          </label>
          <input type="text" id="color" name="color" />
          <label htmlFor="readyToEat" style={displayBlock}>
            Ready To Eat:
          </label>
          <input type="checkbox" id="readyToEat" name="readyToEat" />
          <button type="submit" style={displayBlock}>
            update
          </button>
        </form>
      </Layout>
    )
  }
}

module.exports = Edit
