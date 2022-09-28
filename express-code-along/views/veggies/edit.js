const React = require('react')
const Layout = require('../layouts/layout')

class Edit extends React.Component {
  render() {
    console.log(this.props)
    let { _id, name, color } = this.props.veggie

    return (
      <Layout title="edit page" group="veggies">
        <div className="wrapper form">
          <h3>edit veggie</h3>
          <form action={`/veggies/${_id}?_method=PUT`} method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" defaultValue={name} />
            <label htmlFor="color">Color:</label>
            <input type="text" id="color" name="color" defaultValue={color} />
            <button type="submit" value="edit veggie" className="btn">
              update
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = Edit
