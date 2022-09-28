const React = require('react')
const Layout = require('../layouts/layout')

class Edit extends React.Component {
  render() {
    console.log(this.props)
    let { _id, name, type } = this.props.meat

    return (
      <Layout title="edit page" group="meats">
        <div className="wrapper form">
          <h3>edit fruit</h3>
          <form action={`/meats/${_id}?_method=PUT`} method="POST">
            <label htmlFor="name">name:</label>
            <input type="text" id="name" name="name" defaultValue={name} />
            <label htmlFor="color">type:</label>
            <input type="text" id="color" name="color" defaultValue={type} />
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
