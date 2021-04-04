import styled from 'styled-components'

export const Image = styled.a<{ url: string; size?: string }>`
  background-image: url(${props => props.url});
  background-size: ${props => props.size || 'contain'};
  background-repeat: no-repeat;
  background-position: center center;
`
