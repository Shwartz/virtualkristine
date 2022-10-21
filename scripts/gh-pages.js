import ghpages from 'gh-pages';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.GITHUB_TOKEN) {
  console.log('No GITHUB_TOKEN found');
  process.exit(1)
}

ghpages.publish(
  'build',
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
