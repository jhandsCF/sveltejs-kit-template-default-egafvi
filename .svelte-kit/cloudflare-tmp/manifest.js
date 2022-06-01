export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"start-9ffcaa53.js","js":["start-9ffcaa53.js","chunks/index-9fe72fd8.js","chunks/index-92d65ea7.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "todos",
				pattern: /^\/todos\/?$/,
				names: [],
				types: [],
				path: "/todos",
				shadow: () => import('../output/server/entries/endpoints/todos/index.js'),
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set(["/","/about"]);
