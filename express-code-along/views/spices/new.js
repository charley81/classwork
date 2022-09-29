const React = require('react')
const Layout = require('../layouts/layout')

class New extends React.Component {
  render() {
    return (
      <Layout title="create new spice" group="spices">
        <div className="wrapper form">
          <h1>new spice</h1>
          <form action="/spices" method="POST">
            <div className="form-inupt">
              <label htmlFor="">name:</label>
              <input
                type="text"
                placeholder="enter name..."
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-inupt">
              <label htmlFor="">color:</label>
              <input
                type="text"
                placeholder="enter color..."
                id="color"
                name="color"
                required
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
