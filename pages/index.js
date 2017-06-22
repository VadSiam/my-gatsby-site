import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'



import New from 'pages/new'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div style={{
          fontSize: rhythm(3)
        }}>H</div>
        <hr style={{
          transform: `rotate(139deg)`
        }} />
        <div style={{
          fontSize: rhythm(3)
        }}>H</div>
        {/* <h1>
          Hi people
        </h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to={prefixLink('/page-2/')}>Go to page 2</Link>
        <New /> */}
      </div>
    )
  }
}
