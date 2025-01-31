const PORT = 3002

const fibonacci = n => n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)

const server = Bun.serve({
	port: PORT,
	fetch(req) {
		const result = fibonacci(40);
		return new Response(`result is ${result}`);
	},
});

console.log(`BunJs http server is running on ${server.url}`);