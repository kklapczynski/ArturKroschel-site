import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Container = styled.header`
  background: rebeccapurple;
  marginBottom: 1.45rem;
`
const SiteTitleWrapper = styled.div`
  margin: 0 auto;
  maxWidth: 960;
  padding: 1.45rem 1.0875rem;
`
const SiteTitle = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const Header = ({ siteTitle }) => (
  <Container>
    <SiteTitleWrapper>
      <SiteTitle>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </SiteTitle>
    </SiteTitleWrapper>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
