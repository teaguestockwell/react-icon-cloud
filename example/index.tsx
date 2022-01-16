import * as React from "react";
import * as ReactDOM from "react-dom";
import typescript from "simple-icons/icons/typescript";
import javascript from "simple-icons/icons/javascript";
import java from "simple-icons/icons/java";
import nextdotjs from "simple-icons/icons/nextdotjs";
import nodedotjs from "simple-icons/icons/nodedotjs";
import { Cloud, renderSimpleIcon, ICloud } from "../.";

const icons = [typescript, javascript, java, nodedotjs, nextdotjs];

const light = "#fff";
const dark = "#000";
const invertBg = (color: string) => (color === light ? dark : light);

const makeStyles = (
  backgroundColor: string
): {
  container: ICloud["containerProps"];
  canvas: ICloud["canvasProps"];
  root: React.CSSProperties;
} => ({
  root: {
    backgroundColor,
    top: 0,
    left: 0,
    right: 0,
    height: "200vh",
    position: "absolute"
  },
  container: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40
    }
  },
  canvas: {}
});

const makeIcons = (bg: string) =>
  icons.map((icon) =>
    renderSimpleIcon({
      icon: icon,
      minContrastRatio: bg === light ? 1.2 : 2,
      bgHex: bg,
      size: 42,
      fallbackHex: invertBg(bg),
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: any) => e.preventDefault()
      }
    })
  );

// https://www.goat1000.com/tagcanvas-options.php
const options: ICloud["options"] = {
  // activateAudio: string
  // activeCursor: string
  // altImage: boolean
  // animTiming: 'Smooth' | 'Linear'
  // audioIcon: boolean
  // audioIconDark: boolean
  // audioIconSize: number
  // audioIconThickness: number
  // audioVolume: number
  // bgColor: null | string
  // bgOutlineThickness: number
  // bgRadius: number
  // centreFunc: any
  // centreImage: any
  clickToFront: 500,
  // decel: number
  depth: 1,
  // dragControl: boolean
  // dragThreshold: number
  // fadeIn: number
  // freezeActive: boolean
  // freezeDecel: boolean
  // frontSelect: boolean
  // hideTags: boolean
  // imageAlign: 'centre' | 'left' | 'right'
  // imageMode: null | 'image' | 'text' | 'both'
  // imagePadding: number
  // imagePosition: 'top' | 'bottom' | 'left' | 'right'
  // imageRadius: number | string
  imageScale: 2,
  // imageVAlign: 'top' | 'bottom' | 'middle'
  initial: [0.1, -0.1],
  // interval: number
  // lock: null | 'x' | 'y' | 'xy'
  // maxBrightness: number
  // maxSpeed: number
  // minBrightness: number
  // minSpeed: number
  // minTags: 0 - 200
  // noMouse: boolean
  // noSelect: boolean
  // noTagsMessage: string
  // offsetX: number
  // offsetY: number
  outlineColour: "#0000",
  // outlineDash: number
  // outlineDashSpace: number
  // outlineIncrease: number
  // outlineMethod: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none'
  // outlineOffset: number
  // outlineRadius: number
  // outlineThickness: number
  // padding: number
  // pinchZoom: boolean
  // pulsateTime: number
  // pulstateTo: number
  // radiusX: number
  // radiusY: number
  // radiusZ: number
  // repeatTagsTags: 0 - 64
  reverse: true,
  // scrollPause: boolean
  // shadow: string
  // shadowBlur: number
  // shadowOffset: [number,number] | number[]
  // shape: 'sphere' | 'hcylinder' | 'vcylinder' | 'hring' | 'vring'
  // shuffleTags: boolean
  // splitWidth: number
  // stretchX: number
  // stretchY: number
  // textAlign: 'centre' | 'left' | 'right'
  // textColour: string
  // textFont: string
  // textHeight: number
  // textVAlign: 'top' | 'bottom' | 'middle'
  tooltip: "native", // null | 'div'
  // tooltipClass: string
  tooltipDelay: 0,
  // txtOpt: boolean
  // txtScale: number
  // weight: boolean
  // weightFrom: any
  // weightGradient: any
  // weightMode: 'size' | 'colour' | 'both' | 'bgcolour' | 'bgoutline' | 'outline'
  // weightSize: number
  // weightSizeMax: number | null
  // weightSizeMin: number | null
  wheelZoom: false
  // zoom: number
  // zoomMax: number
  // zoomMin: number
  // zoomStep: number
};

export default function App() {
  const [bg, setBg] = React.useState(light);
  const styles = makeStyles(bg);
  const cloudIcons = makeIcons(bg);

  return (
    <div style={styles.root}>
      <button onClick={() => setBg(invertBg)}>Toggle Theme</button>
      <Cloud
        containerProps={styles.container}
        canvasProps={styles.canvas}
        options={options}
      >
        <a style={{ color: "red", fontSize: 50, fontWeight: 500 }}>hello</a>
        <a
          href="https://commons.wikimedia.org/wiki/File:Visual_Studio_Code_1.35_icon.svg"
          title="Visual Studio Code"
          target="_blank"
          rel="noopener"
        >
          <img
            height="42"
            width="42"
            alt="Visual Studio Code"
            src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: rgb(0, 122, 204);" viewBox="0 0 24 24" height="42px" width="42px"> <title>Visual Studio Code</title> <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"></path> </svg>'
          />
        </a>
        {cloudIcons}
      </Cloud>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
