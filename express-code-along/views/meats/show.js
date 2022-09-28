const React = require('react')
const Layout = require('../layouts/layout')

class Show extends React.Component {
  render() {
    const { name, type, _id } = this.props.meat

    return (
      <Layout title={`Meat: ${name}`} group="meats">
        <div className="wrapper show">
          <h1>
            <span className="dark">name:</span> {name}
          </h1>
          <h3>
            <span className="dark">type:</span> {type}
          </h3>

          <form action={`/meats/${_id}?_method=DELETE`} method="POST">
            <a href={`/meats/${_id}/edit`}>edit meat</a>
            <button className="delete" type="submit" value="Delete">
              delete meat
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = Show
