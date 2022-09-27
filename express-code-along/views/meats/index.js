import React from 'react'

class Index extends React.Component {
  render() {
    const { meats } = this.props

    return (
      <>
        <div>
          <h3>meats</h3>
          {meats.map((meat, i) => {
            const { name, type } = meat
            const route = `/meats/${i}/edit`

            return (
              <ul style={{ margin: '2rem 0', paddingLeft: '0' }} key={name}>
                <li style={{ listStyle: 'none' }}>name: {name}</li>
                <li style={{ listStyle: 'none' }}>type: {type}</li>
                <a href={route}>edit</a>
              </ul>
            )
          })}
          <a href="/meats/new" style={{ display: 'block', marginTop: '1rem' }}>
            create a new meat
          </a>
          <a href="/fruits" style={{ display: 'block', marginTop: '1rem' }}>
            go to fruits
          </a>
          <a href="/veggies" style={{ display: 'block', marginTop: '1rem' }}>
            go to veggies
          </a>
        </div>
      </>
    )
  }
}

module.exports = Index
