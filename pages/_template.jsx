import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Water" },
            { name: "keywords", content: "Water, Life" },
          ]}
        />
        <div
          style={{
            background: `aqua`,
            marginBottom: rhythm(1),
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            }}
          >
            <h1 style={{ margin: 0, textAlign: "center" }}>
              <Link
                to={prefixLink("/")}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Water = Life
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
            // background: `url('https://userscontent2.emaze.com/images/99d28af9-27f7-47a9-9a99-e01a0cb9fd65/c9f7a113-1661-46d3-817d-c4bc9cbfdcc4.png') no-repeat center`,
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
