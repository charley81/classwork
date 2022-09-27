const React = require('react')
const Layout = require('../layouts/layout')

class New extends React.Component {
  render() {
    const displayBlock = {
      display: 'block',
    }

    return (
      <Layout title="create new fruit" group="fruits">
        <div className="wrapper form">
          <h1>create new fruit</h1>
          <form action="/fruits" method="POST">
            <div className="form-input">
              <label htmlFor="name" style={displayBlock}>
                name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="enter name..."
              />
            </div>
            <div className="form-input">
              <label htmlFor="color" style={displayBlock}>
                color:
              </label>
              <input
                type="text"
                id="color"
                name="color"
                placeholder="enter color..."
              />
            </div>

            <button type="submit" style={displayBlock} className="btn">
              submit
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = New
