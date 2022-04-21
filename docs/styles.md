Eslint
 - effector:recommended
 - fsd:recommended
 - fsd: layer-order
 - fsd: deep import — only 2-3 level
   cases:
     - import '@entities/entity'
     - import '@features/entity/edit'
 - prevent global imports. Use only package-import and ts-aliases
 - spaces between imports level. Optional. Example:


    import {} from 'react';

    import {} from '@shared'
    
    import {} from '../'

    import {} from './'


 - Always assign page type `const Page:NextPage = ...` + gSSP | gSP
 - always use named export at end of file
 - prevent usage BrowserAPI without `window.method`
 - Prevent importing module if module marked as `@deprecated`
 - prevent usage `try{}finally{}` without `catch(e){}`

 - Always use in pages gSSP | gSP | gIP(?)
 - eslint-plugin-json(?)
 - next/core-web-vitals (?)


Stylelint
 - "@include" order classname-declaration-lever, exclude from rule "@include media(){}" "@include not-last-child" "@include last-child" "@include first-child{}" "@include not-first-child{}" "@include all-children{}"
 - re-declaration top-level-file classname
 - "css-vars" order classname-declaration-lever
 - prevent usage of "@extend"
 - prevent import not "core.scss"
 - "camel-case" classname naming
 - prevent usage `property: #hex-color`. Colors must always use from css-var
 - prevent usage `font: 'Font-name'`. Fonts must always use from @mixin

PostCss
 - browserlist
 - mobile 100vh iOS(with js resize var refresh)
