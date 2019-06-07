## Multistage transitions

_Transitions inherit from Keyframes_, so its slots (initial, from, enter, leave and update) can take the same types that Keyframe slots can take, namely: objects, functions, object-arrays. This gives you the ability to handle complex multistage, chained or scripted animations.

## Props

_Transition accepts all spring properties_: native, from, immediate, onRest, and so on.

| Property    | Type   | Required | Default      |  Description                                                                                                                                                                                          |
| ----------- | ------ | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keys        |  Union |  false   | item => item | The same keys you would normally hand over to React in a list. Keys can be specified as a key-accessor function, an array of keys, or a single value                                                  |
| unique      |  Bool  |  false   |  false       |  When true enforces that an item can only occur once instead of allowing two or more items with the same key to co-exist in a stack                                                                   |
| reset       | Bool   |  false   | false        | Useful in combination with "unique", when true it forces incoming items that already exist to restart instead of adapting to their current values                                                     |
| initial     | Union  |  false   | -            |  First-render initial values, if present overrides "from" on the first render pass. It can be "null" to skip first mounting transition. Otherwise it can take an object or a function item => object) |
| from        |  Union |  false   | -            |  Base values (from -> enter), or: item => values                                                                                                                                                      |
| enter       |  Union |  false   | -            |  Values that apply to new elements, or: item => values                                                                                                                                                |
| leave       | Union  | false    | -            | Values that apply to leaving elements, or: item => values                                                                                                                                             |
|  update     |  Union |  false   |  -           |  Values that apply to elements that are neither entering nor leaving (you can use this to update present elements), or: item => values                                                                |
|  trail      | Number |  false   |  -           |  Trailing delay in ms                                                                                                                                                                                 |
| config      | Union  | false    | -            | Spring config, or for individual keys: fn((item,type) => key => config) or fn((item,type) => config), where "type" can be either enter, leave or update                                               |
| onDestroyed | Func   | false    | -            | Calls back once a transition is about to wrap up.                                                                                                                                                     |
| items       | Union  | true     | -            | An array of items to be displayed (or a single item of any type), this is used by Transition as the primary means of detecting changes.                                                               |
| children    | Func   | true     | -            | A single function-child that receives the individual item and return a functional component (item => props => view)                                                                                   |

## Demos
