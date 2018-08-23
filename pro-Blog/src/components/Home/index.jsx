import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { flow, slice, map, includes, get, size, isEmpty, isArray, first } from 'lodash/fp';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import PortfolioCard from '~/components/Common/PortfolioCard';

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Kaushan+Script");
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  font-size: 48px;
  font-family: 'Kaushan Script';
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  background-image: url(https://raw.githubusercontent.com/ravenusric/Responsive-Portfolio/master/assets/images/waterric.jpg);
  background-size: 100% 100%;
`;

const Home = ({ portfolios }) => (
  <Fragment>
    <Wrapper isHome>
      <Title>
        I'm RavenusRic!
      </Title>
      <Helmet>
        <title>
          I'm RavenusRic!
        </title>
        <meta name="og:title" content="I'm RavenusRic!" />
      </Helmet>
    </Wrapper>
    {size(portfolios) >= 4 ? (
      <SimpleWrapper>
        {flow(
          slice(0, 4),
          map((edge) => {
            const portfolio = get('node.frontmatter')(edge);
            const { path, title, images } = portfolio;
            const image = isArray(images) ? first(images) : null;

            if (!isEmpty(image)) {
              return (
                <PortfolioCard key={path}>
                  <Link to={path}>
                    {includes('//')(image) ? (
                      <img src={image} alt="portfolio" />
                    ) : (
                      <img src={require(`~/resources/${image}`)} alt="portfolio" />
                    )}
                    <h6>
                      {title}
                    </h6>
                  </Link>
                </PortfolioCard>
              );
            }

            return (
              <PortfolioCard key={path}>
                <Link to={path}>
                  <h4>
                    {title}
                  </h4>
                </Link>
              </PortfolioCard>
            );
          })
        )(portfolios)}
      </SimpleWrapper>
    ) : null}
  </Fragment>
);

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;
