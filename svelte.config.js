import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import * as dotenv from 'dotenv';

dotenv.config();

//NODE_ENV is built in, therefore using SVELTE_APP_ prefix
const dev = process.env.SVELTE_APP_ENV === 'development';

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
