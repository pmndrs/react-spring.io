# Parallax

```jsx
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
```

## Basics

`Parallax` creates a scroll container. Throw in any amount of `ParallaxLayer`s and it will take care of moving them in accordance to their offsets and speeds.

```jsx
<Parallax pages={3} scrolling={false} horizontal ref={ref => this.parallax = ref}>
  <ParallaxLayer offset={0} speed={0.5}>
    <span onClick={() => this.parallax.scrollTo(1)}>
      Layers can contain anything
    </span>
  </ParallaxLayer>
</Parallax>
```

<br />

<iframe
  src="https://codesandbox.io/embed/nwq4j1j6lm?fontsize=13&editorsize=60&hidenavigation=1&codemirror=1&preview=preview"
  style="width: 100%; height: 500px; border: 0; border-radius: 4px; overflow: hidden"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />

<iframe
  src="https://codesandbox.io/embed/3yj75r4j5m?fontsize=13&editorsize=60&hidenavigation=1&codemirror=1&preview=preview"
  style="width: 100%; height: 500px; border: 0; border-radius: 4px; overflow: hidden"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />

## Props

### Parallax

| Property | Type |	Required | Default | Description |
| -------- | ---- | -------- | ------- | ----------- |
| config | Object | false | config.slow | Spring config (optional) |
| scrolling | Bool | false | true | Allow content to be scrolled, or not |
| horizontal | Bool | false | false | Scrolls horizontally or vertically |
| pages |	Number | true	| - |	Determines the total space of the inner content where each page takes 100% of the visible container |

### ParallaxLayer

| Property | Type | Required | Default | Description |
| -------- | ---- | -------- | ------- | ----------- |
| factor | Number | false | 1 | Size of a page, (1=100%, 1.5=1 and 1/2, ...) |
| offset | Number | false | 0 | Determines where the layer will be at when scrolled to (0=start, 1=1st page, ...) |
| speed | Number | false | 0 | shifts the layer in accordance to its offset, values can be positive or negative |