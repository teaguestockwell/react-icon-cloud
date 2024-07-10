import React,{ useEffect, useMemo, useState } from 'react'
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
  React.useEffect(() => {fetchSimpleIcons({slugs}).then(({simpleIcons}) => setIcons(Object.values(simpleIcons)))}, [])

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



//Make sure to save the custom images or icons in public folder
const customslugs = [
  'icon1',
  'icon2',
  'icon3',
  'icon4',
  'icon5',
  'icon6',
]

interface IconCloudProps {
  customslugs: string[];
}

const CustomIconCloud: React.FC<IconCloudProps> = ({ customslugs }) => {
  const [data, setData] = useState<string[] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setData(customslugs);
    setMounted(true);
  }, [customslugs]);

  
  //For nextjs instead of <img/> you can use <Image/> tag with 'priority' poperty
  const customiconrender = useMemo(() => {  
      return data?.map((icon) => (
        <a href="#" key={icon} style={{ display: "inline-block", padding: "10px" }}>
          <img
            width={50}
            height={50}
            src={`/${icon}.svg`} //choose the appropriate extension
            alt={icon}
            style={{ zIndex: 10 }}
          />
        </a>
      ));
    }, [data]);

  if (!mounted) {
    return null;
  }

  return (
    <Cloud>
      {customiconrender}
    </Cloud>
  );
}



const App = () => {
  return <>
    <h1>{new Date().toISOString()}</h1>
    <StaticIconCloud />
    <DynamicIconCloud />
    <CustomIconCloud />
    <
  </>
}

ReactDOM.render(<App />, document.getElementById("root"));
