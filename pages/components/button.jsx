import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
// import Helmet from 'react-helmet'
// import { config } from 'config'
import PropTypes from 'prop-types'


export default class Button extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.number.isRequired
  }

  render() {
    const { title, icon } = this.props;

    return (
      <button
        style={{
          width: '100%',
          height: '29vh',
          borderRadius: '10%',
          backgroundColor: 'white',
          border: '1px solid black',
          margin: `0 0 2vh`,

        }}>{title}</button>
    )
  }
}
