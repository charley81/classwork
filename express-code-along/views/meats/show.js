const React = require('react')

class Show extends React.Component {
  render() {
    const { name, type } = this.props.meat
    const route = `/meats/${this.props.index}/edit`

    return (
      <>
        <>
          <h1>{name}</h1>
          <h3>type: {type}</h3>
          <a href={route} style={{ display: 'block' }}>
            edit meat
          </a>
          <a href="/meats">back home</a>
        </>
      </>
    )
  }
}

module.exports = Show
