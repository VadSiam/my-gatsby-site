import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import {Icon} from 'react-fa'


export default class WhoAmI extends React.Component {
  render() {
    return (
      <div>
        <Link to={prefixLink('/')}>&#8592; Go back to the homepage</Link>
        <h1 style={{ fontWeight: 300, marginTop: 50 }}>
          Hi! My name is Vadim and I'm Frontend Developer
        </h1>
        <img src='../img/me2.jpg' />
        <h3> My skills :
          Javascript: React JS (Mobx, Redux - less), Jquery; CSS: Sass, PostCss; HTML: Jade, BEM;
        </h3>
        <h3 style={{ fontWeight: 300 }}>
          I am a sociable web developer who enjoys the simple life. I currently reside in Russia, South Ural and am always
            pushing myself to learn and develop my skills further.
        </h3>
        <h4>Contact me: </h4>
        <h4 style={{ fontWeight: 300 }}>
          <Icon name={"envelope"} />
          &nbsp;: nevod80@gmail.com</h4>
        <h4 style={{ fontWeight: 300 }}>
          <Icon name={"skype"} />
          &nbsp;: vadnevod</h4>
      </div>
    )
  }
}
