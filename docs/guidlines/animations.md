# Animations

For the common use-cases use css @keyframe animations. Simple stuff can be handled by transition props but do be aware of not using low performance animation properties ( plugin/no-low-performance-animation-properties can help with it a bit ).

For the complex animations which require JS means it's recommended to use https://react-spring.io library since it's pretty flexible for most cases. Don't forget to make move animation logic for specific elements outside of components which has it to improvde overall performance by not rendering whole parent.


## Refs
Some recommendations
https://css-tricks.com/ground-rules-for-web-animations 

Library with some css animations
https://animate.style