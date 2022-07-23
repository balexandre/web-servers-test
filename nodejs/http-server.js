const http = require('http')
const PORT = 3001

const fibonacci = n => n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)

http.createServer((req, res) => {
	const result = fibonacci(40)
	res.write(`result is ${result}`)
	res.end()
}).listen(PORT, () => {
	console.log(`NodeJs http server is running on http://localhost:${PORT}`)
})
