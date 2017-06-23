import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hi people
        </h1>
        <p>Welcome to page 3</p>
        <Link to={prefixLink('/')}>Go back to the homepage</Link>
      </div>
    )
  }
}
