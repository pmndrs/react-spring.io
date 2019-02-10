import React from 'react'
import styled from 'styled-components'
import {Tweet} from 'react-twitter-widgets'
import NavPage from '../common/nav-page'
import ParseMD from '../utils/parse-md'
import {Grid, Image} from '../common/components'
import raw from 'raw.macro'

const content1 = raw('./md/introduction-1.md')

export default function IntroductionPage({path}) {
  return (
    <NavPage currentPath={path}>
      <h1>Introduction</h1>
      <p align="middle">
        <a href="https://codesandbox.io/embed/n9vo1my91p" style={{margin: 10}}>
          <img src="https://i.imgur.com/tg1mN1F.gif" width="410" />
        </a>
        <a href="https://codesandbox.io/embed/j0y0vpz59" style={{margin: 10}}>
          <img src="https://i.imgur.com/OxGLHeT.gif" width="280" />
        </a>
        <a href="https://codesandbox.io/embed/r5qmj8m6lq" style={{margin: 10}}>
          <img src="https://i.imgur.com/ifdCBvG.gif" width="90" />
        </a>
      </p>
      <p align="middle">
        <i>These demos are real, click them!</i>
      </p>
      <ParseMD contents={content1} />
      <YouTubeEmbed src="https://www.youtube.com/embed/1tavDv5hXpo?controls=0&amp;start=370" />
      <h2>People say</h2>
      <TweetGrid />
      <h2>Used by</h2>
      <Grid gap="0px">
        <Image title="Aragon" size="130px" href="https://aragon.org/" url="https://aragon.org/static/4b922782-home2.svg" />
        <Image title="Next" size="380px" href="https://nextjs.org" url="https://process.filestackapi.com/cache=expiry:max/resize=width:1050/compress/FloGbmnXSe3Gd49LAWXQ" />
        <Image
          title="Codesandbox"
          href="https://codesandbox.io/"
          url="https://camo.githubusercontent.com/a67bdde6bc5d15103e2516099107980790c0f11f/68747470733a2f2f636f646573616e64626f782e696f2f7374617469632f696d672f62616e6e65722e706e67"
        />
        <Image title="Devhub" size="120px" href="https://devhubapp.com" url="https://user-images.githubusercontent.com/619186/49823485-eed18480-fd66-11e8-88c0-700d840ad4f1.png" />
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
        <br />
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
        <img src="https://opencollective.com/react-spring/contributors.svg?width=1000" />
      </a>
    </NavPage>
  )
}

function Demos() {
  return (
    <DemosContainer>
      <img src="https://i.imgur.com/tg1mN1F.gif" style={{width: '50%'}} />
      <img src="https://i.imgur.com/OxGLHeT.gif" style={{width: '30%'}} />
      <img src="https://i.imgur.com/ifdCBvG.gif" style={{width: '10%'}} />
    </DemosContainer>
  )
}

const DemosContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin: 2em 0;
`

function TweetGrid() {
  const w = 400
  return (
    <Grid>
      <Tweet tweetId="1006931395003015170" options={{width: w}} />
      <Tweet tweetId="1033962041298509824" options={{conversation: 'none', cards: 'hidden', width: w}} />
      <Tweet tweetId="1007560091430801409" options={{conversation: 'none', width: w}} />
      <Tweet tweetId="1033964001246543872" options={{conversation: 'none', width: w}} />
      <Tweet tweetId="1030826919124590597" options={{conversation: 'none', width: w}} />
      <Tweet tweetId="1032284123161931778" options={{conversation: 'none', width: w, cards: 'hidden'}} />
      <Tweet tweetId="983054609353707520" options={{conversation: 'none', width: w}} />
      <Tweet tweetId="1087456685080358918" options={{conversation: 'none', width: w}} />
    </Grid>
  )
}

const ResponsiveVideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  width: 100%;
  overflow: hidden;

  border-radius: 20px;
  border: 1px solid #e1e8ed;
  margin: 2em 0;

  & iframe,
  & object,
  & embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

function YouTubeEmbed({src}) {
  return (
    <ResponsiveVideoContainer>
      <iframe width="853" height="480" src={src} frameBorder="0" allowFullScreen />
    </ResponsiveVideoContainer>
  )
}
