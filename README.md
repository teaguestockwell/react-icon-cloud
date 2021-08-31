[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[license-shield]: https://img.shields.io/github/license/tsAppDevelopment/hello2.svg
[license-url]: https://github.com/tsAppDevelopment/hello2/blob/master/licence.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/teague-stockwell/

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/tsAppDevelopment/react-icon-cloud">
    <img src="https://user-images.githubusercontent.com/71202372/131417256-58058879-f14c-4c03-9bdf-03bd1c80f25d.gif" alt="Logo" width="80%" >
  </a>

  <h3 align="center">React Icon Cloud</h3>

  <p align="center">
    React component for rendering an interactive img or word cloud on canvas.
    <br />
    <a href="https://teaguestockwell.com">View Demo</a>
    ·
    <a href="https://github.com/tsAppDevelopment/react-icon-cloud/issues">Report Bug</a>
  </p>
</p>

## About
An interactive 3D tag cloud component for React that renders text and images into a interactive 3D tag cloud. 

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

```typescript
import {IconTag, Cloud, IconCloud, Tag, TagCanvasOptions } from 'react-icon-cloud'
```

Then use either of the components:

```tsx
<IconCloud minContrast={1} size={50} backgroundHexColor={'#fff'} fallbackHexColor={'#000'} tags={tags3} key={v4()} tagCanvasOptions={options1}/>
```

```tsx
  <Cloud type={'img'} tags={tags2} key={v4()} tagCanvasOptions={options2}/>
```


## Example
[Tag Canvas Options](https://www.goat1000.com/tagcanvas-options.php)
[React Tag Cloud](https://github.com/tsAppDevelopment/react-icon-cloud/blob/master/example/index.tsx)
## Roadmap

See the [open issues](https://github.com/tsappdevelopment/hello2/issues) for a list of proposed features (and known issues).

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Teague Stockwell - [LinkedIn](https://www.linkedin.com/in/teague-stockwell)
