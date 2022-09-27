const React = require('react')
const Layout = require('../layouts/layout')

class Index extends React.Component {
  render() {
    const { fruits } = this.props

    const liStyles = {
      listStyle: 'none',
      margin: '2rem 0',
    }

    return (
      <Layout title="All Fruit" group="fruits">
        <div>
          <h3>fruits</h3>
          {fruits.map(fruit => {
            const { name, color, readyToEat } = fruit

            return (
              <ul
                style={{ margin: '2rem 0', paddingLeft: '0' }}
                key={fruit._id}
              >
                <li style={{ listStyle: 'none' }}>name: {name}</li>
                <li style={{ listStyle: 'none' }}>color: {color}</li>
                <li style={{ listStyle: 'none' }}>
                  ready to eat: {readyToEat ? 'yep' : 'naw'}
                </li>
                <a href={`/fruits/${fruit._id}`} style={{ display: 'block' }}>
                  view
                </a>
                <a href={`/fruits/${fruit._id}/edit`}>edit</a>
              </ul>
            )
          })}
          <a href="/fruits/new" style={{ display: 'block', marginTop: '1rem' }}>
            create a new fruit
          </a>
          <a href="/meats" style={{ display: 'block', marginTop: '1rem' }}>
            go to meats
          </a>
          <a href="/veggies" style={{ display: 'block', marginTop: '1rem' }}>
            go to veggies
          </a>
        </div>
      </Layout>
    )
  }
}

module.exports = Index
