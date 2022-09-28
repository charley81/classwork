const React = require('react')
const Layout = require('../layouts/layout')

class Show extends React.Component {
  render() {
    const { name, type, _id } = this.props.meat

    return (
      <Layout title={`Meat: `} group="meats">
        <div className="wrapper show">
          <h1>
            <span className="dark">name:</span> {name}
          </h1>
          <h3>
            <span className="dark">type:</span> {type}
          </h3>
          <form
            className="show-buttons"
            action={`/meats/${this.props._id}`}
            method="DELETE"
          >
            <a href={`/meats/${_id}/edit`}>edit fruit</a>
            <button className="delete" type="submit">
              delete meat
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = Show
