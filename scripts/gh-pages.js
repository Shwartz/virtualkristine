import ghpages from 'gh-pages';

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    silent: true,
    repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com/Shwartz/virtualkristine.git',
    user: {
      name: 'Andris Svarcs',
      email: 'svarcs.01@gmail.com'
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)
