// make real network requests
import 'isomorphic-fetch'
import {fetchSimpleIcons} from './fetch_simple_icons'

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
]

describe('fetchIcons', () => {
  it('returns correctly formed icons', async () => {
    const icons = await fetchSimpleIcons({slugs})
    expect(Object.keys(icons.simpleIcons)).toHaveLength(slugs.length)
    for (const icon of Object.values(icons.simpleIcons)) {
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
