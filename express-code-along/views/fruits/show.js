const React = require('react')
const Layout = require('../layouts/layout')

class Show extends React.Component {
  render() {
    const { name, color, _id } = this.props.fruit

    return (
      <Layout title={`Fruit: ${name}`} group="fruits">
        <div className="wrapper show">
          <h1>
            <span className="dark">name:</span> {name}
          </h1>
          <h3>
            <span className="dark">color:</span> {color}
          </h3>

          <form action={`/fruits/${_id}?_method=DELETE`} method="POST">
            <a href={`/fruits/${_id}/edit`}>edit fruit</a>
            <button className="delete" type="submit" value="Delete">
              delete fruit
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = Show
