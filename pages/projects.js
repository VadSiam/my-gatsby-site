import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <Link to={prefixLink('/')}>&#8592; Go back to the homepage</Link>
        <h1 style={{ fontWeight: 300, marginTop: 50 }}>
          I have several projects done, but many of them are closed. Just contact me
        </h1>
        <Link to={prefixLink('/who_am_i/')}>Contact me</Link>
      </div>
    )
  }
}
