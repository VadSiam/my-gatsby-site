import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
// import Helmet from 'react-helmet'
// import { config } from 'config'
import PropTypes from 'prop-types'
import {Icon} from 'react-fa'

import css_icon from '../img/icons/css.png'
import html_icon from '../img/icons/html.png'
import jquery_icon from '../img/icons/jquery.png'
import js_icon from '../img/icons/js.png'
import react_icon from '../img/icons/react.png'


export default class ButtonNoLink extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  state = {
    showContent: true
  }

  showAnimate = () => this.setState({ showContent: true })

  hideAnimate = () => this.setState({ showContent: false })

  render() {
    const { title, icon } = this.props
    const { showContent } = this.state
    const iconStyle = {height: '7vh', margin: '0 10px'}

    return (
      <div>
        {showContent
          ? <div
              style={{
                width: '100%',
                height: '29vh',
                borderRadius: '10%',
                backgroundColor: 'white',
                border: '1px solid black',
                margin: `0 0 2vh`,
                cursor: 'pointer',
                outlineColor: 'white'
              }}
              onMouseLeave={this.hideAnimate}
            >
              <div>
                <img src={js_icon} style={ iconStyle }/>
                <img src={jquery_icon} style={ iconStyle } />
              </div>
              <div>
                <img src={react_icon} style={ {height: '12vh', margin: '0 10px'} } />
              </div>
              <div>
                <img src={html_icon} style={ iconStyle } />
                <img src={css_icon} style={ iconStyle } />
              </div>
            </div>
          : <button
              style={{
                width: '100%',
                height: '29vh',
                borderRadius: '10%',
                backgroundColor: 'white',
                border: '1px solid black',
                margin: `0 0 2vh`,
                cursor: 'pointer',
                outlineColor: 'white'
              }}
              onMouseEnter={this.showAnimate}
              >
                <div><Icon size="2x" name={icon} /></div>
                <h3>{title}</h3>
            </button>
        }
      </div>
    )
  }
}
