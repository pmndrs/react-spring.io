| Property | Type | Description |
| -------- | ---- | ----------- | 
| from     | obj | Base values, optional |
| to       | obj/fn/array(obj) | Animates to ... |
| delay     | number/fn | Delay in ms before the animation starts. Also valid as a function for individual keys: key => delay |
| immediate     | bool/fn | Prevents animation if true. Also valid as a function for individual keys: key => immediate |
| config     | obj/fn | Spring config (contains mass, tension, friction, etc). Also valid as a function for individual keys: key => config |
| reset     | bool | The spring starts to animate from scratch (from -> to) if set true |
| reverse     | bool | "from" and "to" are switched if set true, this will only make sense in combination with the "reset" flag |
| onStart     | fn | Callback when the animation starts to animate |
| onRest     | fn | Callback when the animation comes to a still-stand |
| onFrame     | fn | Frame by frame callback, first argument passed is the animated value |
