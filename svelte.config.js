import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import * as dotenv from 'dotenv';

dotenv.config();

// Result is pushed as is from public folder to github pages
// When testing locally, change prod to development and run serve on public folder
const dev = process.env.APP_ENV === 'prod';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'public',
			assets: 'public',
			fallback: 'null'
		}),
		paths: {
			base: dev ?  '' : '/virtualkristine',
		}
	}
};

export default config;
