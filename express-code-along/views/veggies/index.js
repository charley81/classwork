const React = require('react')
const Layout = require('../layouts/layout')

class Index extends React.Component {
  render() {
    const { veggies } = this.props

    return (
      <Layout title="all veggies" group="veggies">
        <div className="wrapper">
          <h1>all veggies</h1>
          <div className="items">
            {veggies.map(veg => {
              const { name, color, _id } = veg

              return (
                <ul key={_id} className="item">
                  <li>
                    <span className="bold">name:</span> {name}
                  </li>
                  <li>
                    <span className="bold">color:</span> {color}
                  </li>
                  <a href={`/veggies/${_id}`}>details</a>
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
