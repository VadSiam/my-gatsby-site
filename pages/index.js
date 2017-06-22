import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'
import face from './img/me.jpg'

import Button from 'pages/components/button'
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
            marginTop: 50,
          }}>
          <div
            style={{
              width: '30%',
              height: '60vh',
              padding: `0 2vh`,
            }}>
            <Button title={"Experience"} icon={"icon"}/>
            <Button title={"Projects"} icon={"icon"}/>
          </div>
          <div
            style={{
              width: '40%',
              background: `url('./img/me.jpg') no-repeat center`,
              backgroundSize: 'cover',
              borderRadius: '10%',
              height: '60vh'
            }}>

            </div>
            <div
              style={{
                width: '30%',
                height: '60vh',
                padding: `0 2vh`,
              }}>
              <Button title={"Who am I"} icon={"icon"}/>
              <Button title={"Hobby"} icon={"icon"}/>
            </div>
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
