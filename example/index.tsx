import React from 'react'
import * as ReactDOM from "react-dom";
import {Cloud, renderSimpleIcon, fetchSimpleIcons, SimpleIcon} from '../.'
import {siJavascript, siNextdotjs} from "simple-icons/icons"

const icons = [siJavascript, siNextdotjs].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      onClick: (e: any) => e.preventDefault()
    }
  })
})

const StaticIconCloud = () => {
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

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = React.useState<SimpleIcon[]>()
  React.useEffect(() => {fetchSimpleIcons({slugs}).then(setIcons)}, [])

  if (icons) {
    return icons.map((icon) => renderSimpleIcon({
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

const App = () => {
  return <>
    <StaticIconCloud />
    <DynamicIconCloud />
  </>
}

ReactDOM.render(<App />, document.getElementById("root"));
