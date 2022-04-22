import { fetchSimpleIcons } from "./fetch_simple_icons"

// make real network requests
import 'isomorphic-fetch'

export const slugs = [
  'amazonaws',
  'android',
  'androidstudio',
  'antdesign',
  'azuredevops',
  'css3',
  'cypress',
  'dart',
  'docker',
  'express',
  'figma',
  'firebase',
  'flutter',
  'git',
  'github',
  'gitlab',
  'html5',
  'java',
  'javascript',
  'jest',
  'jira',
  'mui',
  'mysql',
  'nextdotjs',
  'nginx',
  'nodedotjs',
  'npm',
  'postgresql',
  'prisma',
  'react',
  'reactquery',
  'redux',
  'sonarqube',
  'testinglibrary',
  'typescript',
  'vercel',
  'visualstudiocode',
];

describe('getSlugIcons', () => {
  it('returns correctly formed icons', async () => {
    const icons = await fetchSimpleIcons({slugs})
    console.log(icons)
    expect(icons).toHaveLength(slugs.length)
    for (const icon of icons) {
      expect(icon.slug).toBeTruthy()
      expect(typeof icon.slug).toBe('string')
      expect(icon.slug).not.toBe('')

      expect(icon.path).toBeTruthy()
      expect(typeof icon.path).toBe('string')
      expect(icon.path).not.toBe('')

      expect(icon.hex).toBeTruthy()
      expect(typeof icon.hex).toBe('string')
      expect(icon.hex).not.toBe('')
    }
  })
})