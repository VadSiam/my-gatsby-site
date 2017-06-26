import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Hobby extends React.Component {
  render() {
    return (
      <div>
        <Link to={prefixLink('/')}>&#8592; Go back to the homepage</Link>
        <img style={{ marginTop: 50 }} src='../img/hobby.jpg' />
      </div>
    )
  }
}
