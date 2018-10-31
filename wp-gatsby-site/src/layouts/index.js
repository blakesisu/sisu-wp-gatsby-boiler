import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const containerStyle = {
  maxWidth: 700,
  margin: `0 auto`,
  padding: '20px',
}

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <div
          css={{
            background: `rgb(207, 58, 62)`,
            marginBottom: `50px`,
            padding: `50px 0px`,
            "@media screen and (min-width: 500px)": {
              padding: `100px 0px`,
            },
          }}
        >
          <div css={containerStyle}>
            <h1
              css={{
                margin: 0,
                fontSize: '24px',
                lineHeight: 1,
                "@media screen and (min-width: 500px)": {
                  fontSize: '30px',
                  lineHeight: 1,
                },
              }}
            >
              <Link
                css={{
                  color: `rgb(224,203,144)`,
                  ":hover": {
                    color: `rgb(224,203,144)`,
                    textDecoration: `none`,
                  },
                }}
                to="/"
              >
                Gatsby + Wordpress!!
              </Link>
            </h1>
          </div>
        </div>
        <div css={containerStyle}>{this.props.children}</div>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  location: PropTypes.object.isRequired,
}

export default DefaultLayout
