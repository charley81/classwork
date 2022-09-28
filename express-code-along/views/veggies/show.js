const React = require('react')
const Layout = require('../layouts/layout')

class Show extends React.Component {
  render() {
    const { name, color, _id } = this.props.veggie

    return (
      <Layout title={`Veggie: ${name}`} group="veggies">
        <div className="wrapper show">
          <h1>
            <span className="dark">name:</span> {name}
          </h1>
          <h3>
            <span className="dark">color:</span> {color}
          </h3>

          <form action={`/veggies/${_id}?_method=DELETE`} method="POST">
            <a href={`/veggies/${_id}/edit`}>edit veggie</a>
            <button className="delete" type="submit" value="Delete">
              delete veggie
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = Show
