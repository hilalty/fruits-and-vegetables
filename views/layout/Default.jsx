const React = require('react');
const DefaultLayout = require('../layout/Default.jsx')


class DefaultLayout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <title> {this.props.title}</title>
                    <link rel="stylesheet" href={this.props.cssPath ?? "/css/app.css"} />
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;