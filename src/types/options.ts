/**
 * https://www.goat1000.com/tagcanvas-options.php 
 */
interface Options {
  readonly activateAudio: string
  readonly activeCursor: string 
  readonly altImage: boolean
  readonly animTiming: 'Smooth' | 'Linear'
  readonly audioIcon: boolean
  readonly audioIconDark: boolean
  readonly audioIconSize: number
  readonly audioIconThickness: number
  readonly audioVolume: number
  readonly bgColor: null | string
  readonly bgOutlineThickness: number
  readonly bgRadius: number
  readonly centreFunc: any
  readonly centreImage: any
  readonly clickToFront: boolean | number
  readonly decel: number
  readonly depth: number
  readonly dragControl: boolean
  readonly dragThreshold: number
  readonly fadeIn: number
  readonly freezeActive: boolean
  readonly freezeDecel: boolean
  readonly frontSelect: boolean
  readonly hideTags: boolean
  readonly imageAlign: 'centre' | 'left' | 'right'
  readonly imageMode: null | 'image' | 'text' | 'both'
  readonly imagePadding: number
  readonly imagePosition: 'top' | 'bottom' | 'left' | 'right'
  readonly imageRadius: number | string
  readonly imageScale: number | null
  readonly imageVAlign: 'top' | 'bottom' | 'middle'
  readonly initial: null | [number,number] | number[]
  readonly interval: number
  readonly lock: null | 'x' | 'y' | 'xy'
  readonly maxBrightness: number
  readonly maxSpeed: number
  readonly minBrightness: number
  readonly minSpeed: number
  readonly minTags: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 | 161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 | 181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200
  readonly noMouse: boolean
  readonly noSelect: boolean
  readonly noTagsMessage: string
  readonly offsetX: number
  readonly offsetY: number
  readonly outlineColour: string
  readonly outlineDash: number
  readonly outlineDashSpace: number
  readonly outlineIncrease: number
  readonly outlineMethod: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none'
  readonly outlineOffset: number
  readonly outlineRadius: number
  readonly outlineThickness: number
  readonly padding: number
  readonly pinchZoom: boolean
  readonly pulsateTime: number
  readonly pulstateTo: number
  readonly radiusX: number
  readonly radiusY: number
  readonly radiusZ: number
  readonly repeatTagsTags: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64
  readonly reverse: boolean
  readonly scrollPause: boolean
  readonly shadow: string
  readonly shadowBlur: number
  readonly shadowOffset: [number,number] | number[]
  readonly shape: 'sphere' | 'hcylinder' | 'vcylinder' | 'hring' | 'vring'
  readonly shuffleTags: boolean
  readonly splitWidth: number
  readonly stretchX: number
  readonly stretchY: number
  readonly textAlign: 'centre' | 'left' | 'right'
  readonly textColour: string
  readonly textFont: string
  readonly textHeight: number
  readonly textVAlign: 'top' | 'bottom' | 'middle'
  readonly tooltip: null | 'native' | 'div'
  readonly tooltipClass: string
  readonly tooltipDelay: number
  readonly txtOpt: boolean
  readonly txtScale: number
  readonly weight: boolean
  readonly weightFrom: any
  readonly weightGradient: any
  readonly weightMode: 'size' | 'colour' | 'both' | 'bgcolour' | 'bgoutline' | 'outline'
  readonly weightSize: number
  readonly weightSizeMax: number | null
  readonly weightSizeMin: number | null
  readonly wheelZoom: boolean
  readonly zoom: number
  readonly zoomMax: number
  readonly zoomMin: number
  readonly zoomStep: number
}

export type IOptions = Partial<Options> | undefined