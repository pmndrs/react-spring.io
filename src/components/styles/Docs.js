import styled from '@emotion/styled'

export const StyledHeading = styled('h1')`
  font-size: 36px;
  line-height: 1.5;
  font-weight: 500;
  flex: 1;
  margin-top: 0;
  padding-top: 0;
  color: ${props => props.theme.colors.heading};
`

export const Edit = styled('div')`
  padding: 1rem 0;

  a {
    font-size: 14px;
    font-weight: 500;
    line-height: 1em;
    text-decoration: none;
    color: #555;
    border: 1px solid rgb(211, 220, 228);
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.2s ease-out 0s;
    text-decoration: none;
    color: rgb(36, 42, 49);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    height: 30px;
    padding: 5px 16px;
    &:hover {
      background-color: rgb(245, 247, 249);
    }
  }
`

export const StyledMainWrapper = styled.div`
  width: 100%;
  max-width: 750px;
  color: ${props => props.theme.colors.text};

  ul,
  ol {
    -webkit-padding-start: 40px;
    -moz-padding-start: 40px;
    -o-padding-start: 40px;
    margin: 18px 0px 24px;
    padding: 0px 0px 0px 2em;

    li {
      font-size: 16px;
      line-height: 1.8;
      font-weight: 400;
    }
  }

  a {
    transition: color 0.15s;
    font-weight: 600;
    color: hsl(216, 30%, 28%);
    padding-bottom: 2px;
    border-bottom: 1px solid hsl(216, 30%, 28%);
    border-bottom-style: dashed;
  }

  .autolink {
    display: inline-block;
    transform: translateY(1px);
    border: 0;
    padding: 0 8px;
  }

  small {
    font-style: italic;
  }

  code {
    color: hsl(216, 30%, 32%);
    background: hsl(218, 100%, 98%);
    border: 1px solid hsl(218, 70%, 90%);
    border-radius: 6px;
    padding: 2px 5px;
    margin: 0 1px;
    font-size: 0.875em;
    font-family: ${props => props.theme.fonts.mono};
    line-height: 1.375em;
  }

  pre {
    border-radius: 15px;
    font-size: 15px;
    font-family: ${props => props.theme.fonts.mono};
    line-height: 1.375em;
  }

  .pre {
    margin: 0px;
    padding: 12px;
    overflow: auto;
    border-radius: 0;
  }

  textarea {
    transition: border 200ms ease-out;
    border: 2px solid hsla(216, 30%, 86%, 0) !important;
    border-radius: 15px;
  }

  textarea:focus {
    outline: none;
    border: 2px solid hsla(216, 30%, 86%, 1) !important;
  }

  .react-live-editor > pre {
    border: 2px solid hsla(216, 30%, 86%, 0) !important;
  }

  hr {
    height: 1px;
    background: hsl(218, 25%, 95%);
    border: 0;
    margin: 30px 0;
  }

  @media (max-width: 767px) {
    padding: 0 15px;
  }
`
