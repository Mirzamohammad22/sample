let {lighthouseCheck} = require('@foo-software/lighthouse-check')
const fs = require('fs')
const ev = JSON.parse(
  fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8')
)
const prNum = ev.pull_request.number
console.log('prNum',prNum)
async function mylighthouse(){

    const response = await lighthouseCheck({
        urls: [
          'https://www.dubizzle.com'
        ]
      });
}
mylighthouse()