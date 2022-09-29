const React = require('react')
const Layout = require('../layouts/layout')

class Edit extends React.Component {
  render() {
    const { name, color, _id } = this.props.spice

    return (
      <Layout title="edit spice" group="spices">
        <div className="wrapper form">
          <h1>edit spices</h1>
          <form action={`/spices/${_id}?_method=PUT`} method="POST">
            <label htmlFor="name">name:</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              required
            />
            <label htmlFor="color">color:</label>
            <input
              type="text"
              id="color"
              name="color"
              defaultValue={color}
              required
            />
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
