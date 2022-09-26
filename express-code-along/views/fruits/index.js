const React = require('react')

class Index extends React.Component {
  render() {
    const { fruits } = this.props

    const liStyles = {
      listStyle: 'none',
      margin: '2rem 0',
    }

    return (
      <>
        <ul>
          {fruits.map((fruit, i) => {
            const { name, color, fruitReadyToEat } = fruit

            return (
              <li key={name} style={liStyles}>
                The
                <a href={`/fruits/${i}`}>{name}</a>
                is {color}
                <br />
                {fruitReadyToEat ? 'Is ready to eat' : 'Is NOT ready to eat'}
              </li>
            )
          })}
          <a href="/fruits/new">create a new fruit</a>
        </ul>
      </>
    )
  }
}

module.exports = Index
