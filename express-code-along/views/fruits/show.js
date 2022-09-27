const React = require('react')
const Layout = require('../layouts/layout')

class Show extends React.Component {
  render() {
    const { name, color, readyToEat } = this.props.fruit
    const route = `/fruits/${this.props.index}/edit`
    return (
      <Layout title={`Fruit: ${name}`} group="fruits">
        <h1>{name}</h1>
        <h3>Color: {color}</h3>
        <h3>Ready To Eat: {readyToEat.toString().toUpperCase()}</h3>
        <p>{readyToEat ? 'Is ready to eat.' : 'Is NOT ready to eat.'}</p>
        <a href={route} style={{ display: 'block' }}>
          edit fruit
        </a>
        <a href="/fruits">back home</a>
      </Layout>
    )
  }
}

module.exports = Show
