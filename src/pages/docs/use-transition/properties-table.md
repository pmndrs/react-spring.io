| Property | Type | Description |
| -------- | ---- | -------- |
| initial  | obj/fn | Initial (first time) base values, optional (can be null) |
| from     | obj/fn | Base values, optional |
| enter    | obj/fn/array(obj) | Styles apply for entering elements |
| update   | obj/fn/array(obj) | Styles apply for updating elements (you can update the hook itself with new values) |
| leave    | obj/fn/array(obj) | Styles apply for leaving elements |
| trail    | number | Delay in ms before the animation starts, adds up for each enter/update and leave |
| unique   | bool/fn | If this is true, items going in and out with the same key will be re-used |
| reset    | bool/fn | Used in combination with "unique" and makes entering items start from scratch |
