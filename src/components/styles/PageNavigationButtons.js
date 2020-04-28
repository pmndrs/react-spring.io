import styled from '@emotion/styled'

export const StyledNextPrevious = styled('div')`
  margin: 0px;
  padding: 0px;
  width: auto;
  display: grid;
  grid-template-rows: auto;
  column-gap: 24px;
  grid-template-columns: calc(50% - 8px) calc(50% - 8px);

  .nextBtn,
  .previousBtn {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    border: 1px solid hsl(216, 20%, 94%);
    border-radius: 9px;
    box-shadow: hsl(216, 20%, 96%) 0px 2px 6px 0px;
    transition: all 500ms ease;
  }

  .nextBtn:hover,
  .previousBtn:hover {
    background: hsl(216, 28%, 99%);
    border-color: hsl(216, 28%, 90%);
    box-shadow: hsl(216, 28%, 92%) 0px 2px 9px 0px;
  }

  .leftArrow,
  .rightArrow {
    display: block;
    flex: 0 0 auto;
    padding: 16px;
    color: hsl(216, 30%, 28%);
    font-size: 24px;
  }

  .leftArrow svg,
  .rightArrow svg {
    display: block;
  }

  .nextPreviousTitle {
    display: block;
    margin: 0px;
    padding: 0px;
  }

  .nextPreviousTitle span {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
  }

  @media (max-width: 767px) {
    display: block;
    padding: 0 15px;

    .previousBtn {
      margin-bottom: 20px;
    }
  }
`
