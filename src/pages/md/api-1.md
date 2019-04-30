# Common api

## Configs

Spring are configurable and can be tuned. If you want to adjust these settings, you should provide a `config` property to `useSpring()`: E.g.:
```js
useSpring({ config: { duration: 250 }, ... })
```

| Property  | Default   | Description                                                                     |
| --------- | --------- | ------------------------------------------------------------------------------- |
| mass      | 1         | spring mass                                                                     |
| tension   | 170       | spring energetic load                                                           |
| friction  | 26        | spring resistence                                                               |
| clamp     | false     | when true, stops the spring once it overshoots its boundaries                   |
| precision | 0.01      | precision                                                                       |
| velocity  | 0         | initial velocity                                                                |
| duration  | undefined | if > than 0 will switch to a duration-based animation instead of spring physics, value should be indicated in milliseconds (e.g. `duration: 250` for a duration of 250ms) |
| easing    | t => t    | linear by default, you can use any easing you want, for instance d3-ease        |
