import React from 'react'
import * as ReactDOM from "react-dom";
import {Cloud, renderSimpleIcon} from '../.'
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
      title="Visual Studio Code"
      target="_blank"
      rel="noopener"
    >
      <img
        height="42"
        width="42"
        alt="Visual Studio Code"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/globe-showing-americas_1f30e.png"
      />
    </a>
  </Cloud>
}

ReactDOM.render(<IconCloud />, document.getElementById("root"));
