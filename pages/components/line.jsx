import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
// import Helmet from 'react-helmet'
// import { config } from 'config'
import PropTypes from 'prop-types'


export default class Line extends React.Component {

  static propTypes = {
    deg: PropTypes.number.isRequired
  }

  render() {
    const { deg } = this.props;

    return (
      <hr
        style={{
          transform: `rotate(${deg}deg)`,
          height: 3,
          width: '20%',
          marginTop: '12vh',
      }} />
    )
  }
}
