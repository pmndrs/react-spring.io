# Transition

```jsx
import { Transition } from 'react-spring/renderprops'
```

Transition animates component lifecycles as components mount, unmount or otherwise change.

*It takes a list of items of any type, and their keys*. The latter defaults to `item => item`, which, if your items are self-sufficient as a key is often good enough. Whenever items are added, removed, reordered or updated, it will help you to animate these changes.

*You provide a single function-child* that receives an item and additionally its transition state (enter/leave/update), followed by its index. The full signature looks like: `(item, state, index) => props => ReactNode`
  
*You should always rely on the item that you receive* instead of reading from scope, since you could be rendering an item that has already been deleted, but is retained inside Transition until its fade-out is complete. This is especially important for routes.

TLDR, items in, keys if necessary, present the item that comes out and apply the animated props you receive.