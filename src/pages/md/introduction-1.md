# Introduction

<div id="intro-demos">
  <div class="demo-cell">
    <a href="https://codesandbox.io/embed/n9vo1my91p" >
      <img src="https://i.imgur.com/tg1mN1F.gif" class="laptop"/>
    </a>
  </div>
  <a href="https://codesandbox.io/embed/j0y0vpz59" >
    <div class="demo-cell">
      <img src="https://i.imgur.com/OxGLHeT.gif"  class="tablet"/>
    </div>
  </a>
  <a href="https://codesandbox.io/embed/r5qmj8m6lq" >
    <div class="demo-cell">
      <img src="https://i.imgur.com/ifdCBvG.gif" class="phone"/>
    </div>
  </a>
</div>

<p align="middle">
  <i>These demos are real, click them!</i>
</p>

**react-spring** is a spring-physics based animation library that should cover most of your UI related animation needs. It gives you tools flexible enough to confidently cast your ideas into moving interfaces.

This library represents a modern approach to animation. It is very much inspired by Christopher Chedeau's [animated](https://github.com/animatedjs/animated) and Cheng Lou's [react-motion](https://github.com/chenglou/react-motion). It inherits animated's powerful interpolations and performance, as well as react-motion's ease of use. But while animated is mostly imperative and react-motion mostly declarative, react-spring bridges both. You will be surprised how easy static data is cast into motion with small, explicit utility functions that don't necessarily affect how you form your views.

## Installation

```text
npm install react-spring
```

## Platforms

react-spring is cross platform, it supports the web, react-native, react-native-web and practically any other platform (use the `/universal` export in that case, which does not carry native elements and color-interpolations).

## Browser support

The library comes as an es-module compiled for evergreen browsers with the following browserlist config: [`>1%, not dead, not ie 11, not op_mini all`](https://browserl.ist/?q=%3E1%25%2C+not+dead%2C+not+ie+11%2C+not+op_mini+all). If you need to support legacy targets or deal with targets that don't support modules, you can use the commonJS export by simply appending `.cjs` to your imports.

## Size

Everything included you end up with currently `10.7KB` (web), `9.7KB` (react-native) or `6.9KB` (/universal export). The size will ultimately depend on your build-chain and can decrease with tree-shaking. For instance, just importing useSpring without color-interpolations (using the /universal export) you will get `4.7KB`.

## Why springs and not durations

The principle you will be working with is called a `spring`, it _does not have a defined curve or a set duration_. In that it differs greatly from the animation you are probably used to. We think of animation in terms of time and curves, but that in itself causes most of the struggle we face when trying to make elements on the screen move naturally, because nothing in the real world moves like that.

<p align="middle">
  <img height="250" src="https://i.imgur.com/7CCH51r.gif" />
</p>

We are so used to time-based animation that we believe that struggle is normal, dealing with arbitrary curves, easings, time waterfalls, not to mention getting this all in sync. As Andy Matuschak (ex Apple UI-Kit developer) [expressed it once](https://twitter.com/andy_matuschak/status/566736015188963328): _Animation APIs parameterized by duration and curve are fundamentally opposed to continuous, fluid interactivity_.

Springs change that, animation becomes easy and approachable, everything you do looks and feels natural by default. For a detailed explanation watch the video below:

<br />
