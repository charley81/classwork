const React = require('react')

class Index extends React.Component {
  render() {
    const { veggies } = this.props

    return (
      <>
        <div>
          <h3>veggies</h3>
          {veggies.map((veggie, i) => {
            const { name, color } = veggie
            const route = `/veggies/${i}/edit`

            return (
              <ul style={{ margin: '2rem 0', paddingLeft: '0' }} key={name}>
                <li style={{ listStyle: 'none' }}>name: {name}</li>
                <li style={{ listStyle: 'none' }}>color: {color}</li>
                <a href={route}>edit</a>
              </ul>
            )
          })}
          <a
            href="/veggies/new"
            style={{ display: 'block', marginTop: '1rem' }}
          >
            create a new veggie
          </a>
          <a href="/meats" style={{ display: 'block', marginTop: '1rem' }}>
            go to meats
          </a>
          <a href="/fruits" style={{ display: 'block', marginTop: '1rem' }}>
            go to fruits
          </a>
        </div>
      </>
    )
  }
}

module.exports = Index
