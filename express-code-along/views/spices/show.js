const React = require('react')
const Layout = require('../layouts/layout')

class Show extends React.Component {
  render() {
    const { name, color, _id } = this.props.spice
    return (
      <Layout title="edit spice" group="spices">
        <div className="wrapper show">
          <h1>
            <span className="dark">name: </span> {name}
          </h1>
          <h3>
            <span className="dark">color: </span> {color}
          </h3>

          <form action={`/spices/${_id}?_method=DELETE`} method="POST">
            <a href={`/spices/${_id}/edit`}>edit spice</a>
            <button className="delete" type="submit">
              delete
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = Show
