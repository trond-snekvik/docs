const fs = require('fs')
const { isAbsolute } = require('path')

const mapFiles = (root,type) => {
  return fs.readdirSync(`./docs/${root}/${type}`)
    .filter( f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map( f => f.replace('.mdx','').replace('.md', '') )
    .map( f => {
      const parts = f.split('-')
      if (Number.isInteger(parseInt(parts[0],10))) {
        parts.shift()
        return parts.join('-')
      }
      return f
    })
    .map( f => `${root}/${type}/${f}`)
}

const firmware = [
  {
    type: 'autogenerated',
    dirName: 'firmware',
  },
]

const reference = [
  {
    type: 'autogenerated',
    dirName: 'reference',
  },
]

const gettingstarted = [
  {
    type: 'autogenerated',
    dirName: 'getting-started',
  },
]

const devicemanagement = [
  {
    type: 'autogenerated',
    dirName: 'device-management',
  },
]

module.exports = {
  gettingstarted,
  reference,
  firmware,
  devicemanagement,
};
