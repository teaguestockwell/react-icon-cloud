[![license-shield]][license-url] [![linkedin-shield]][linkedin-url] ![size-url] ![size-url2] [![npm-v]][npm-url] [![gh-shield]][gh-url]

[license-shield]: https://img.shields.io/github/license/teaguestockwell/react-icon-cloud.svg

[license-url]: https://github.com/teaguestockwell/react-icon-cloud/blob/master/LICENSE

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?logo=linkedin&colorB=555

[linkedin-url]: https://www.linkedin.com/in/teague-stockwell/

[size-url]: https://img.shields.io/bundlephobia/minzip/react-icon-cloud

[size-url2]: https://img.shields.io/bundlephobia/min/react-icon-cloud

[npm-v]: https://img.shields.io/npm/v/react-icon-cloud

[npm-url]: https://www.npmjs.com/package/react-icon-cloud

[gh-shield]: https://img.shields.io/badge/-GitHub-black.svg?logo=github&colorB=555

[gh-url]: https://github.com/teaguestockwell/react-icon-cloud

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/teaguestockwell/react-icon-cloud">
    <img src="https://user-images.githubusercontent.com/71202372/131417256-58058879-f14c-4c03-9bdf-03bd1c80f25d.gif" alt="Logo" width="80%" >
  </a>

  <h3 align="center">React Icon Cloud</h3>

  <p align="center">
    React component for rendering an interactive img or word cloud on canvas
    <br />
    <a href="https://codesandbox.io/s/react-icon-cloud-1xr9h">Code Sandbox</a>
    <a href="https://github.com/teaguestockwell/react-icon-cloud/issues">Report Bug</a>
  </p>
</p>

## About
An interactive 3D tag cloud component for React that renders text, images, and simple icons into a interactive 3D tag cloud

- Built in support for rendering a cloud of [Simple Icons](https://github.com/simple-icons/simple-icons) with custom fallback color for poor contrast

- Lazy animation of the canvas (pause animation when off screen) 

## Built With

- [TSdx](https://github.com/formium/tsdx)
- [TypeScript](https://www.typescriptlang.org)
- [TagCanvas](https://www.goat1000.com/tagcanvas.php)
- [Simple Icons](https://github.com/simple-icons/simple-icons)

## Getting Started

To get a local copy up and running follow these simple steps or see the [Code Sandbox](https://codesandbox.io/s/react-icon-cloud-1xr9h).


```sh
npm i react-icon-cloud
```

## Static icon slugs
```tsx
import React from 'react'
import {Cloud, renderSimpleIcon} from 'react-icon-cloud'
import js from "simple-icons/icons/javascript"
import nextjs from "simple-icons/icons/nextdotjs"

const icons = [js,nextjs].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      onClick: (e: any) => e.preventDefault()
    }
  })
})

const IconCloud = () => {
  return <Cloud>
    {icons}
    <a>
      hello world
    </a>
    <a
      href="https://emojipedia.org/globe-showing-americas/"
      target="_blank"
      rel="noopener"
    >
      <img
        height="42"
        width="42"
        alt="A globe"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/globe-showing-americas_1f30e.png"
      />
    </a>
  </Cloud>
}
```

## Dynamic icon slugs
```tsx
import React from 'react'
import {Cloud, renderSimpleIcon, fetchSimpleIcons, SimpleIcon} from 'react-icon-cloud'

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = React.useState()
  React.useEffect(() => {fetchSimpleIcons(slugs).then(setIcons)}, [])

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
      icon,
      size: 42,
      aProps: {
        onClick: (e: any) => e.preventDefault()
      }
    }))
  }
  
  return <a>Loading</a>
}

const slugs = [
  'amazonaws',
  'android',
  'androidstudio',
  'antdesign',
  'typescript',
  'vercel',
  'visualstudiocode'
]

const DynamicIconCloud = () => {
  const icons = useIcons(slugs)

  return <Cloud>
    {icons}
  </Cloud>
}
```

# Props
## Cloud
|      name      |                 type                              | default |                           description                           |
|:--------------:|:-------------------------------------------------:|:-------:|:---------------------------------------------------------------:|
| canvasProps    | HTMLAttributes < HTMLCanvasElement > \| undefined | {}      | Attributes that will be passed to the underlying canvas element |
| children       | Tag[]                                             | []      | Tags rendered using the provided renderers                      |
| containerProps | HTMLAttributes < HTMLDivElement >  \| undefined   | {}      | Attributes passed to the root div element                       |
| id             | string \| number \| undefined                                  | uuid    | Should be provided when using SSR                               |
| options        | IOptions \| undefined                             | {}      | https://www.goat1000.com/tagcanvas-options.php                  |
## renderSimpleIcon
Used to create a tag for the Cloud component
|       name       |                       type                      |  default  |                                                                           description                                                                          |
|:----------------:|:-----------------------------------------------:|:---------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| aProps           | HTMLAttributes < HTMLAnchorElement > \| undefined | {}        | Attributes passed to the underlying anchor element                                                                                                             |
| bgHex            | string \| undefined                             | '#fff'    | The string hex of the background the icon will be rendered on. Ex: '#fff'. Used to determine if the min contrast ratio for the icons default color will be met |
| fallbackHex      | string \| undefined                             | '#000'    | The color of the icon if the minContrastRatio is not met Ex: '#000'                                                                                            |
| icon             | any                                             | undefined | The simple icon object you would like to render. Ex: import icon from "simple-icons/icons/javascript";
| imgProps | HTMLAttributes  < HTMLImageElement > \| undefined | {}      | Attributes passed to the underlying img element    |                                                         |
| minContrastRatio | number \| undefined                             | 1         | 0 - 21 The min contrast ratio between icon and bgHex before the fallbackHex will be used for the icon color                                                    |
| size             | number \| undefined                             | 42        | The size in px of the icon                                                                                                                                     |
## fetchSimpleIcons
Used when you cant statically import simple icons during built time. Calling this will use `fetch` to get icons for each provided slug.
|       name       |                       type                      |  default  |                                                                           description                                                                          |
|:----------------:|:-----------------------------------------------:|:---------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| slugs           | string[]                                         |           | Slugs to fetch svgs and colors for. The return icons may be passed to renderSimpleIcon                                                                         |    
## Examples
[Tag Canvas Options](https://www.goat1000.com/tagcanvas-options.php)

[Code Sandbox](https://codesandbox.io/s/react-icon-cloud-d0s96s)

[Dynamically Import Icons With Next.js SSR](https://github.com/teaguestockwell/portfolio-v2-nextjs/blob/main/src/components/skill_cloud.tsx)
## Roadmap

See the [open issues](https://github.com/tsappdevelopment/react-icon-cloud/issues) for a list of proposed features (and known issues).

## License

See `LICENSE` for more information.

## Contact

Teague Stockwell - [LinkedIn](https://www.linkedin.com/in/teague-stockwell)
