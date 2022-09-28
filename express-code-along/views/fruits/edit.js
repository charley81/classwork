const React = require('react')
const Layout = require('../layouts/layout')

class Edit extends React.Component {
  render() {
    let { _id, name, color } = this.props.fruit

    return (
      <Layout title="edit page" group="fruits">
        <div className="wrapper form">
          <h3>edit fruit</h3>
          <form action={`/fruits/${_id}?_method=PUT`} method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" defaultValue={name} />
            <label htmlFor="color">Color:</label>
            <input type="text" id="color" name="color" defaultValue={color} />
            <button type="submit" value="edit fruit" className="btn">
              update
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = Edit
