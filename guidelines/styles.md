# Styles

For the styling you can use whatever solution is suitable for you but overall there's a CSS modules that you can use and if you need a theming functionality you can use css properties to define your dynamic values. There's gonna be a theme provider out of the box and you just need to configure it for your needs.

You can use css frameworks/component frameworks but do not forget to wrap those components into your own components to make it easier if you need to replace one of your components for some reason.

Consider using https://tailwindcss.com, because it provides really wide functionality out of the box and optimal style generation. 

All module styles are stored near the component they belong to and global/common styles for reuse are store inside the shared/ui/styles folder, here you can organise files like you want but consider having files like 

vars.scss - map theme, define other vars 
core.scss - re-export file to used inside the component's module file (contains varibles/breakpoints/mixins/classes for extension)

## Responsive

You can use any approach to writing media queries for your styles but there's "include media" library included already, it simplifies writing media queries. 
Avoid using JS based media quries because they do not stack together with nextjs and SSR becuase it requires of both server side/clients side markup to match during hydration process.

## Animations

For the common use-cases use css @keyframe animations. Simple stuff can be handled by transition props but do be aware of not using low performance animation properties ( plugin/no-low-performance-animation-properties can help with it a bit ).

For the complex animations which require JS means it's recommended to use https://react-spring.io library since it's pretty flexible for most cases. Don't forget to make move animation logic for specific elements outside of components which has it to improvde overall performance by not rendering whole parent.

## Refs

Some recommendations
https://css-tricks.com/ground-rules-for-web-animations 

Library with wide amount of most common animations
https://animate.style