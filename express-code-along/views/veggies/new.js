const React = require('react')
const Layout = require('../layouts/layout')

class New extends React.Component {
  render() {
    return (
      <Layout title="create new veggie" group="veggies">
        <div className="wrapper form">
          <h1>create new veggie</h1>
          <form action="/veggies" method="POST">
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
              <label htmlFor="color">color:</label>
              <input
                type="text"
                id="color"
                name="color"
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
