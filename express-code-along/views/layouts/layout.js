const React = require('react')

class Layout extends React.Component {
  render() {
    const { title, group } = this.props

    return (
      <div>
        <html>
          <head>
            <title>{title}</title>
            <link rel="stylesheet" href="/css/styles.css" />
          </head>
          <body>
            <nav className="main-nav">
              <div className="container">
                <a href={`/${group}`}>home</a>
                <a href={`/${group}/new`}>new {group}</a>
              </div>
            </nav>
            <div className="container">{this.props.children}</div>
          </body>
        </html>
      </div>
    )
  }
}

module.exports = Layout
