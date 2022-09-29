const React = require('react')
const Layout = require('../layouts/layout')

class Index extends React.Component {
  render() {
    const { spices } = this.props

    return (
      <Layout title="all spice" group="spices">
        <div className="wrapper">
          <h1>all spices</h1>
          <div className="items">
            {spices.map(spice => {
              const { name, color, _id } = spice

              return (
                <ul key={_id} className="item">
                  <li>
                    <span className="bold">name: </span>
                    {name}
                  </li>
                  <li>
                    <span className="bold">color: </span>
                    {color}
                  </li>
                  <a href={`/spices/${_id}`}>details</a>
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
