let { lighthouseCheck } = require('@foo-software/lighthouse-check')

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_REPO = process.env.GITHUB_REPO
const GITHUB_REF = process.env.GITHUB_REF 

const parsePullRequestId = githubRef => {
  const result = /refs\/pull\/(\d+)\/merge/g.exec(githubRef);
  if (!result) throw new Error("Reference not found.");
  const [, pullRequestId]= result;
  return pullRequestId;
};
async function mylighthouse() {
  const PR = parsePullRequestId(GITHUB_REF)
  const URL = `https://api.github.com/repos/${GITHUB_REPO}/pulls/${PR}/reviews`
  lighthouseCheck({
    emulatedFormFactor: 'both',
    prCommentSaveOld: false,
    prCommentAccessToken: GITHUB_TOKEN,
    prCommentUrl:URL ,
    urls: [
      'https://www.dubizzle.com'
    ]
  });
}
mylighthouse()
