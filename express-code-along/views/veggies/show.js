const React = require('react')

class Show extends React.Component {
  render() {
    const { name, color } = this.props.veggie
    const route = `/veggies/${this.props.index}/edit`
    return (
      <>
        <h1>{name}</h1>
        <h3>Color: {color}</h3>
        <a href={route} style={{ display: 'block' }}>
          edit veggie
        </a>
        <a href="/veggies">back home</a>
      </>
    )
  }
}

module.exports = Show
