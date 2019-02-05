import React from 'react'
import {Tweet} from 'react-twitter-widgets'
import Nav from '../common/nav'
import styled from 'styled-components'

// TODO extract everything, sort out this mess

const PageLayout = ({children, ...props}) => {
  return (
    <PageContainer {...props}>
      <Main>{children}</Main>
    </PageContainer>
  )
}

export const PageContainer = styled.article`
  h1 {
    font-size: 50px;
    font-weight: 600;
    text-align: center;

    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    letter-spacing: -0.03em;
    line-height: 1em;
    text-indent: -2px;
  }

  h2 {
    font-size: 22px;
    line-height: 34px;
    font-weight: 600;

    width: 100%;
    margin: 0 auto;

    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    text-align: center;
  }

  h3 {
    font-size: 18px;
    line-height: 34px;
    font-weight: 600;

    width: 100%;
    margin: 0 auto;

    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    text-align: center;
  }

  p {
    width: 100%;

    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  p strong {
    font-weight: 600;
  }

  p code {
    background: #f4f6f9;
    margin: 0 3px;
    border-radius: 3px;
    font-family: monospace;
    padding: 2px 5px;
    font-size: 0.8em;
    border: 1px solid rgba(0, 0, 0, 0.02);
  }

  p em,
  p strong,
  p code {
    font-size: inherit;
    line-height: inherit;
  }

  p.large {
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0px;
  }

  a {
    color: #ff4f4f;
    text-decoration: none;
  }
`

export const Main = styled.main`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`

const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.gap || '20px'};
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  width: 100%;
`

const Image = styled('a')`
  background-image: url(${props => props.url});
  background-size: ${props => props.size || 'contain'};
  background-repeat: no-repeat;
  background-position: center center;
`

const NavColumn = styled.aside`
  padding: 20px;
  width: 300px;
`

const ContentColumn = styled.aside`
  width: 60vw;
  padding: 0 40px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  section {
    width: 100%;
    margin-bottom: 1em;
    padding-bottom: 1em;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  .demos {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin: 2em 0;
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    width: 100%;
    border-radius: 20px;

    border: 1px solid #e1e8ed;

    margin: 2em 0;
  }

  .video-container iframe,
  .video-container object,
  .video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  p,
  h1,
  h2,
  h3 {
    max-width: 600px;
  }
`

export default function IntroductionPage({path}) {
  return (
    <PageLayout>
      <NavColumn>
        <Nav currentPath={path} />
      </NavColumn>
      <ContentColumn>
        <section>
          <h1>✌️</h1>

          <p className="large">
            <strong>react-spring</strong> is a spring-physics based animation library that should cover most of your UI related animation needs. It gives you tools flexible enough
            to confidently cast your ideas into moving interfaces.
          </p>
          <div className="demos">
            <img src="https://i.imgur.com/tg1mN1F.gif" style={{width: '50%'}} />
            <img src="https://i.imgur.com/OxGLHeT.gif" style={{width: '30%'}} />
            <img src="https://i.imgur.com/ifdCBvG.gif" style={{width: '10%'}} />
          </div>
          <p>
            This library represents a modern approach to animation. It is very much inspired by Christopher Chedeau's{' '}
            <a href="https://github.com/animatedjs/animated" target="_blank">
              animated
            </a>{' '}
            and Cheng Lou's&nbsp;
            <a href="https://github.com/chenglou/react-motion" target="_blank">
              react-motion
            </a>
            . It inherits animated's powerful interpolations and performance, as well as react-motion's ease of use. But while animated is mostly imperative and react-motion mostly
            declarative, react-spring bridges both. Hooks allow us to express intent linearly, you will be surprised how easy static data is cast into motion with small, explicit
            utility functions that don't necessarily affect how you form your views.
          </p>
        </section>

        <section>
          <h2>Why springs and not duration?</h2>
          <p>
            The principle you will be working with is called a <code>spring</code>, it does not have a defined curve or a set duration. In that it differs greatly from the
            animation you are probably used to. We think of animation in terms of time and curves, but that in itself causes most of the struggle we face when trying to make
            elements on the screen move naturally, because nothing in the real world moves like that.
          </p>

          <img style={{maxWidth: '200px'}} src="https://i.imgur.com/7CCH51r.gif" />

          <p>
            We are so used to time-based animation that we believe that struggle is normal, dealing with arbitrary curves, easings, time waterfalls, not to mention getting this all
            in sync. As Andy Matuschak (ex Apple UI-Kit developer){' '}
            <a href="https://twitter.com/andy_matuschak/status/566736015188963328" target="_blank">
              expressed it once
            </a>
            : <em>Animation APIs parameterized by duration and curve are fundamentally opposed to continuous, fluid interactivity.</em>
          </p>

          <p>
            Springs change that, animation becomes easy and approachable, everything you do looks and feels natural by default. For a detailed explanation watch the video below:
          </p>

          <div className="video-container">
            <iframe width="853" height="480" src="https://www.youtube.com/embed/1tavDv5hXpo?controls=0&amp;start=370" frameBorder="0" allowFullScreen />
          </div>
        </section>

        <section>
          <h2>People say</h2>

          <Grid>
            <Tweet tweetId="1006931395003015170" options={{width: '400'}} />
            <Tweet tweetId="1033962041298509824" options={{conversation: 'none', cards: 'hidden', width: '400'}} />
            <Tweet tweetId="1007560091430801409" options={{conversation: 'none', width: '400'}} />
            <Tweet tweetId="1033964001246543872" options={{conversation: 'none', width: '400'}} />
            <Tweet tweetId="1030826919124590597" options={{conversation: 'none', width: '400'}} />
            <Tweet tweetId="1005463922772664320" options={{conversation: 'none', width: '400'}} />
            <Tweet tweetId="1032284123161931778" options={{conversation: 'none', width: '400', cards: 'hidden'}} />
            <Tweet tweetId="983054609353707520" options={{conversation: 'none', width: '400'}} />
            <Tweet tweetId="1087456685080358918" options={{conversation: 'none', width: '400'}} />
          </Grid>
        </section>

        <section>
          <h2>Used by</h2>
          <Grid gap="0px">
            <Image title="Aragon" size="130px" href="https://aragon.org/" url="https://aragon.org/static/4b922782-home2.svg" />
            <Image title="Next" size="380px" href="https://nextjs.org" url="https://process.filestackapi.com/cache=expiry:max/resize=width:1050/compress/FloGbmnXSe3Gd49LAWXQ" />
            <Image
              title="Codesandbox"
              href="https://codesandbox.io/"
              url="https://camo.githubusercontent.com/a67bdde6bc5d15103e2516099107980790c0f11f/68747470733a2f2f636f646573616e64626f782e696f2f7374617469632f696d672f62616e6e65722e706e67"
            />
            <Image
              title="Devhub"
              size="120px"
              href="https://devhubapp.com"
              url="https://user-images.githubusercontent.com/619186/49823485-eed18480-fd66-11e8-88c0-700d840ad4f1.png"
            />
            <Image title="Quill" size="120px" href="https://quill.chat" url="https://quill.chat/079e00e7e0cbbeaa3aae571d657ca75b.png" />
            <Image title="Blockstack" size="120px" href="https://blockstack.org" url="https://avatars3.githubusercontent.com/u/8165984?s=200&v=4" />
            <Image
              title="The Azoor Society"
              size="120px"
              href="https://www.theazoorsociety.org"
              url="https://www.theazoorsociety.org/static/favicon-bd4dc352f10904c557f37e9f506327a0.png"
            />
          </Grid>
          <p>
            And{' '}
            <a href="https://github.com/drcmda/react-spring/network/dependents" target="_blank">
              many others
            </a>
          </p>
        </section>

        <section>
          <h2>Thank you</h2>
          <p>This project exists thanks to all the people who support and contribute 🙏.</p>

          <p>
            If you like this project, please consider helping out. All contributions are welcome as well as donations to{' '}
            <a href="https://opencollective.com/react-spring" target="_blank">
              Opencollective
            </a>
            , or in crypto:
          </p>
          <p>
            <code style={{display: 'inline-block'}}>
              (<strong>BTC</strong>) 36fuguTPxGCNnYZSRdgdh6Ea94brCAjMbH
            </code>
            <code style={{display: 'inline-block', marginTop: '10px'}}>
              (<strong>ETH</strong>) 0x6E3f79Ea1d0dcedeb33D3fC6c34d2B1f156F2682
            </code>
          </p>
          <p>You can also support this project by becoming a sponsor. Your logo will show up here with a link to your website.</p>

          <h3>Gold sponsors</h3>

          <a href="https://aragon.org/">
            <img width="300" src="https://wiki.aragon.org/design/logo/svg/imagetype.svg" />
          </a>

          <h3>Sponsors</h3>

          <a href="https://opencollective.com/react-spring/sponsor/0/website" target="_blank">
            <img src="https://opencollective.com/react-spring/sponsor/0/avatar.svg" />
          </a>
          <a href="https://opencollective.com/react-spring/sponsor/1/website" target="_blank">
            <img src="https://opencollective.com/react-spring/sponsor/1/avatar.svg" />
          </a>

          <h3>Backers</h3>
          <a href="https://opencollective.com/react-spring#backers" target="_blank">
            <img src="https://opencollective.com/react-spring/backers.svg?width=600" />
          </a>

          <h3>Contributors</h3>
          <a href="https://github.com/drcmda/react-spring/graphs/contributors">
            <img src="https://opencollective.com/react-spring/contributors.svg?width=600" />
          </a>
        </section>
      </ContentColumn>
    </PageLayout>
  )
}
