const React = require('react')

class Show extends React.Component {
  render() {
    const { name, color, readyToEat } = this.props.fruit

    return (
      <>
        <h1>{name}</h1>
        <h3>Color: {color}</h3>
        <h3>Ready To Eat: {readyToEat.toString().toUpperCase()}</h3>
        <p>{readyToEat ? 'Is ready to eat.' : 'Is NOT ready to eat.'}</p>
        <a href="/fruits">back home</a>
      </>
    )
  }
}

module.exports = Show
