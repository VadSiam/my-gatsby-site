import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Hobby extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hi people
        </h1>
        <p>Welcome to page Hobby</p>
        <Link to={prefixLink('/')}>Go back to the homepage</Link>
      </div>
    )
  }
}
