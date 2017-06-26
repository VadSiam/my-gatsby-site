import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'
import face from './img/me.jpg'

import Button from 'pages/components/button'
import ButtonNoLink from 'pages/components/button_no_link'

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
            <ButtonNoLink title={"Experience"} icon={"book"}/>
            <Button link={'/who_am_i/'} title={"Who am I"} icon={"smile-o"}/>
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
              <Button link={'/projects/'} title={"Projects"} icon={"cubes"}/>
              <Button link={'/hobby/'} title={"Hobby"} icon={"motorcycle"}/>
            </div>
        </div>
      </div>
    )
  }
}
