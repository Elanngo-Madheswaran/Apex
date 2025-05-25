import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        }),
        alias:{
            $components : 'src/lib/components',
            $assets : 'src/lib/assets',
        },
        prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
					return;
				}
				
				// ignore missing image files
				if (path.endsWith('.png') || path.endsWith('.jpg') || path.endsWith('.jpeg') || path.endsWith('.gif')) {
					console.warn(`Warning: Asset not found: ${path}`);
					return;
				}

				// otherwise fail the build
				throw new Error(message);
			}
		}
    }
};