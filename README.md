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
An interactive 3D tag cloud component for React that renders text and images into a interactive 3D tag cloud

- Built in support for rendering a cloud of [Simple Icons](https://github.com/simple-icons/simple-icons) with custom fallback color for poor contrast

- Lazy animation of the canvas (pause animation when off screen) 

## Built With

- [TSdx](https://github.com/formium/tsdx)
- [TypeScript](https://www.typescriptlang.org)
- [TagCanvas](https://www.goat1000.com/tagcanvas.php)
- [Simple Icons](https://github.com/simple-icons/simple-icons)

## Getting Started

To get a local copy up and running follow these simple steps.


```sh
npm i react-icon-cloud
```

```tsx
import {Cloud, renderSimpleIcon, renderImage, renderText, ICloud} from 'react-icon-cloud'
import jsIcon from "simple-icons/icons/javascript";

const iconTag = renderSimpleIcon({
  icon: jsIcon,
})

const imgTag = renderImg({
  imgProps: {
    src: 'https://openmoji.org/data/color/svg/1F44B.svg',
    alt: 'Globe',
    width: 100,
    height: 100
  },
  aProps: {
    href: 'https://openmoji.org',
    target: '_blank',
    rel: 'noreferrer',
  }
})

const textTag = renderText({
  text: 'hello'
})

const containerProps: ICloud['containerProps'] = {}
const canvasProps: ICloud['canvasProps'] = {}
const cloudProps: ICloud['options'] = {}

<Cloud 
    containerProps={containerProps} 
    canvasProps={canvasProps}
    options={options}
  >
  {iconTag}
  {imgTag}
  {textTag}
</Cloud>
```


## Examples
[Tag Canvas Options](https://www.goat1000.com/tagcanvas-options.php)

[Code Sandbox](https://codesandbox.io/s/react-icon-cloud-1xr9h)

[Dynamically Import Icons With Next.js SSR](https://github.com/teaguestockwell/portfolio-v2-nextjs/blob/main/src/components/skill_cloud.tsx)
## Roadmap

See the [open issues](https://github.com/tsappdevelopment/react-icon-cloud/issues) for a list of proposed features (and known issues).

## License

See `LICENSE` for more information.

## Contact

Teague Stockwell - [LinkedIn](https://www.linkedin.com/in/teague-stockwell)
