import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'

import Letter from 'pages/components/letter'
import Line from 'pages/components/line'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: 'inline-flex',
            width: '100%',
            textAlign: 'center',
            marginTop: 100,
        }}>
          <Letter letter={'H'} paddingTop={20}/>

          <Line deg={140} />

          <Letter letter={'O'} paddingTop={0} />

          <Line deg={40} />

          <Letter letter={'H'} paddingTop={20} />
        </div>
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
