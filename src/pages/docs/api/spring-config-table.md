| Property                  | Default     | Description   |
| ------------------------- | ----------- | ------------- |
| mass                      | 1           | spring mass
| tension                   | 170         | spring energetic load
| friction                  | 26          | spring resistence
| clamp                     | false       | when true, stops the spring once it overshoots its boundaries
| precision                 | 0.01        | precision
| velocity                  | 0           | initial velocity
| duration                  | undefined   | if > than 0 will switch to a duration-based animation instead of spring physics
| easing                    | t => t      | linear by default, you can use any easing you want, for instance d3-ease
