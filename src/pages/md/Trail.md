# Trail

```jsx
import {Trail} from 'react-spring/renderprops'
```

Trail animates the first item of a list of elements, the rest form a natural trail and follow their previous sibling.

_It takes a list of items of any type, and their keys_. The latter defaults to `item => item`, which, if your items are self-sufficient as a key is often good enough.

_You provide a single function-child_ that receives an item and additionally its index. The full signature looks like: `(item, index) => props => ReactNode`
  
TLDR, items in, keys if necessary, present the item that comes out and apply the animated props you receive.

```jsx
<Trail items={items} keys={item => item.key} from={{transform: 'translate3d(0,-40px,0)'}} to={{transform: 'translate3d(0,0px,0)'}}>
  {item => props => <span style={props}>{item.text}</span>}
</Trail>
```

## Props

_Trail accepts all spring properties_: native, from, immediate, onRest, and so on.

|  Property |  Type            |  Required |  Default       |  Description                                                                                                                            |
| --------- | ---------------- | --------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
|  keys     | fn/undefined/any |  false    |  item => item  | Item keys (the same keys you'd hand over to react in a list). If you specify items, keys can be an accessor function (item => item.key) |
|  from     |  obj             | false     |  -             | Base values, optional                                                                                                                   |
|  to       |  obj             | false     | -              | Animates to ...                                                                                                                         |
|  items    | any/undefined    | true      | -              |  An array of items to be displayed, use this if you need access to the actual items when distributing values as functions (see above)   |
|  children | fn               | true      | -              | A single function-child that receives the individual item and return a functional component (item, index) => props => view)             |
|  reverse  |  bool            | false     |  -             | When true the trailing order is switched, it will then trail bottom to top                                                              |

## Demos
