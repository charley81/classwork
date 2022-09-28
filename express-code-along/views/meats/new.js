const React = require('react')
const Layout = require('../layouts/layout')

class New extends React.Component {
  render() {
    return (
      <Layout title="create new meat" group="meats">
        <div className="wrapper form">
          <h1>create new meat</h1>
          <form action="/meats" method="POST">
            <div className="form-input">
              <label htmlFor="name">name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="enter name..."
              />
            </div>
            <div className="form-input">
              <label htmlFor="type">type:</label>
              <input
                type="text"
                id="type"
                name="type"
                placeholder="enter color..."
              />
            </div>

            <button type="submit" className="btn">
              submit
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = New
