import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
// import Helmet from 'react-helmet'
// import { config } from 'config'
import PropTypes from 'prop-types'


export default class Letter extends React.Component {

  static propTypes = {
    letter: PropTypes.string.isRequired,
    paddingTop: PropTypes.number.isRequired
  }

  render() {
    const { letter, paddingTop } = this.props;

    return (
      <div
        style={{
          fontSize: '14vw',
          width: '20%',
          height: '30vh',
          paddingTop: `${paddingTop}vh`,
      }}>{letter}</div>
    )
  }
}
