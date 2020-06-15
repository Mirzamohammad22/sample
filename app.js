let {lighthouseCheck} = require('@foo-software/lighthouse-check')

console.log('prNum',prNum)
async function mylighthouse(){

    const response = await lighthouseCheck({
        urls: [
          'https://www.dubizzle.com'
        ]
      });
}
mylighthouse()