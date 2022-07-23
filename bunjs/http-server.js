const headers = {
	headers: {
		"Content-Type": "text/html",
		"Cache-Control": "no-transform"
	}
}

const fibonacci = n => n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)

export default {
	port: 3002,
	async fetch(req) {
		const result = fibonacci(40)
		return new Response(`result is ${result}`)
	}
}
