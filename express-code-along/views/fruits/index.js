const React = require('react')
const Layout = require('../layouts/layout')

class Index extends React.Component {
  render() {
    const { fruits } = this.props

    return (
      <Layout title="all fruit" group="fruits">
        <div className="wrapper">
          <h1>all fruits</h1>
          <div className="items">
            {fruits.map(fruit => {
              const { name, color } = fruit

              return (
                <ul key={fruit._id} className="item">
                  <li>
                    <span className="bold">name:</span> {name}
                  </li>
                  <li>
                    <span className="bold">color:</span> {color}
                  </li>
                  <a href={`/fruits/${fruit._id}`}>details</a>
                </ul>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

module.exports = Index
