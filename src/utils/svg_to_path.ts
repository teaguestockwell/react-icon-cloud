export const svgToPath = (svg: string) => {
  const p0 = svg.indexOf('d="')
  const p1 = svg.indexOf('"', p0 + 3)
  return svg.substring(p0 + 3, p1)
}
