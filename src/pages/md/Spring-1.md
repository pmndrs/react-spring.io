# Spring

```jsx
import {Spring} from 'react-spring/renderprops'
```

The primary task of a Spring is to move data from one state to another. The optional from-prop only plays a role when the component renders first, use the to-prop to update the spring with new values.

_Springs are accumulative_, they remember all the values you ever pass.

_Springs are physics based_, you will never have to break your head about durations and curves again.

_Do not think of the values you pass as "styles"_ per se, although you can use them as such.
