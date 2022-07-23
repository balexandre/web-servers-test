package main

import (
	"fmt"
    "net/http"
)

func getFibonacci(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "result is %v", fibonacci(40))
}

func fibonacci(n uint) uint {
	if n < 2 {
		return n
	}
	return fibonacci(n-1) + fibonacci(n-2)
}

func main() {
    http.HandleFunc("/fibonacci", getFibonacci)
    
	fmt.Println("Go web server running in http://localhost:3003")
	http.ListenAndServe(":3003", nil)
}
