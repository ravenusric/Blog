import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 1em 0;

  a {
    color: #000;
  }

  span,
  img {
    display: inline-block;
    vertical-align: middle;
  }

  img {
    margin: 0 4px 0 0;
    border-radius: 50%;
  }

  small {
    color: #999;
    font-size: 90%;
  }
`;

const Bio = () => (
  <Wrapper>
    <a
      href="https://github.com/ravenusric"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        src="https://avatars3.githubusercontent.com/u/39242730?s=400&u=5a5d91138e6c4a4e787586f232c72a5ea9b690ab&v=4"
        width="48"
        height="48"
        alt=""
      />
      <span>
        RavenusRic Roney
        <br />
        <small>
          RavenusRic Blog
        </small>
      </span>
    </a>
  </Wrapper>
);

export default Bio;
