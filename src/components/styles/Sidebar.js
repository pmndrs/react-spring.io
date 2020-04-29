import React from 'react'
import styled from '@emotion/styled'

export const Sidebar = styled('aside')`
  width: 100%;
  height: 100vh;
  overflow: auto;

  position: fixed;
  position: sticky;
  top: 0;

  .rightSideTitle {
    font-size: 10px;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    padding: 7px 24px 7px 16px;
    border-left: 1px solid #e6ecf1;
    border-left-color: rgb(230, 236, 241);

    color: ${props => props.theme.colors.text};
  }

  .rightSideBarUL {
    margin-top: 32px;
  }

  .rightSideBarUL li {
    list-style-type: none;
    border-left: 1px solid #e6ecf1;
    border-left-color: rgb(230, 236, 241);
  }

  .rightSideBarUL li a {
    display: block;
    position: relative;
    width: 100%;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    padding: 6px;
    padding-left: 16px;

    color: ${props => props.theme.colors.text};
  }

  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`
