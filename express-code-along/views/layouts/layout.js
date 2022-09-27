const React = require('react')

class Layout extends React.Component {
  render() {
    const { title } = this.props

    return (
      <div>
        <html>
          <head>
            <title>{title}</title>
            <link rel="stylesheet" href="/css/styles.css" />
          </head>
          <body>
            <nav>
              <a href={`/${this.props.group}`}>home</a>
            </nav>
            {this.props.children}
          </body>
        </html>
      </div>
    )
  }
}

module.exports = Layout
