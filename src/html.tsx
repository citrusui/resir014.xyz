import * as React from 'react'

let styles: string
if (process.env.NODE_ENV === 'production') {
  try {
    styles = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

interface HtmlProps {
  body: any
  preBodyComponents: any
  postBodyComponents: any
  headComponents: any
}

module.exports = class HTML extends React.Component<HtmlProps, void> {
  render() {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      )
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={process.env.__PATH_PREFIX__ || '' + '/android-touch-icon.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="180x180"
            href={process.env.__PATH_PREFIX__ || '' + '/apple-touch-icon.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="144x144"
            href={process.env.__PATH_PREFIX__ || '' + '/windows-tile-icon.png'}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={process.env.__PATH_PREFIX__ || '' + '/apple-touch-icon.png'}
          />
          <link rel="shortcut icon" href={process.env.__PATH_PREFIX__ || '' + '/favicon.png'} />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={'body'}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
