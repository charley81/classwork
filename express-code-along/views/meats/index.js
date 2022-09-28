import React from 'react'
import Layout from '../layouts/layout'

class Index extends React.Component {
  render() {
    const { meats } = this.props

    return (
      <Layout title="all meat" group="meats">
        <div className="wrapper">
          <h1>all meats</h1>
          <div className="items">
            {meats.map(meat => {
              const { name, type } = meat

              return (
                <ul key={meat._id} className="item">
                  <li>
                    <span className="bold">name:</span> {name}
                  </li>
                  <li>
                    <span className="bold">type:</span> {type}
                  </li>
                  <a href={`/meats/${meat._id}`}>details</a>
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
