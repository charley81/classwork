const React = require('react')
const Layout = require('../layouts/layout')

class Show extends React.Component {
  render() {
    const { name, color } = this.props.fruit

    return (
      <Layout title={`Fruit: ${name}`} group="fruits">
        <div className="wrapper show">
          <h1>
            <span className="dark">name:</span> {name}
          </h1>
          <h3>
            <span className="dark">color:</span> {color}
          </h3>
          <form
            className="show-buttons"
            action={`/fruits/${this.props._id}`}
            method="DELETE"
          >
            <a href={`/fruits/${this.props._id}/edit`}>edit fruit</a>
            <button className="delete" type="submit">
              delete fruit
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = Show
