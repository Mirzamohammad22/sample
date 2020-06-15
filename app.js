let {lighthouseCheck} = require('@foo-software/lighthouse-check')
async function mylighthouse(){
    const response = await lighthouseCheck({
        urls: [
          'https://www.dubizzle.com'
        ]
      });
}
mylighthouse()