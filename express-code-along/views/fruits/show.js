const React = require('react')
const Layout = require('../layouts/layout')

class Show extends React.Component {
  render() {
    const { name, color, readyToEat } = this.props.fruit
    const route = `/fruits/${this.props.index}/edit`
    return (
      <Layout title={`Fruit: ${name}`} group="fruits">
        <div className="wrapper show">
          <h1>
            <span className="dark">name:</span> {name}
          </h1>
          <h3>
            <span className="dark">color:</span> {color}
          </h3>
          <h3>
            <span className="dark">ready:</span>{' '}
            {readyToEat ? 'Is ready to eat.' : 'Is NOT ready to eat.'}
          </h3>
          <a href={route}>edit fruit</a>
        </div>
      </Layout>
    )
  }
}

module.exports = Show
