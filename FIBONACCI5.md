[<< go back](README.md)

# Fibonacci(5)

Here are the results when using `fibonacci(5)` so we can look at server responses and not how the language handles the fibonacci sequence

## Results (average)

using `npx autocannon -c 10 -d 100 <URL>`

| Server | Url | avg latency | avg req/s |
| -- | -- | --: | --: |
| NodeJs 22.9.0 | http://localhost:3001/fibonacci | `0.01 ms` | `45,743.92` |
| BunJs 1.2.1 | http://localhost:3002/fibonacci | `0.01 ms` | `26,349.76`|
| Go 1.22.2 | http://localhost:3003/fibonacci | `0.01 ms` | `40,847.68` |
| .NET Core 3.1.32 runtime | http://localhost:3004/fibonacci | `0.06 ms` | `18,060.96` |
| .NET Core 8.0.12 runtime | http://localhost:3006/fibonacci | `0.03 ms` | `20,687.60` |

test machine specs: i7-8700K CPU @ 3.70GHz with 32Gb on Windows 11 Pro 21H2, via WSL2 - Ubuntu 20.04

## Detailed results

### NodeJs 22.9.0

```
> nvm use 22.9.0
> node run start:node
```

| Stat | 2.5% | 50% | 97.5% | 99% | Avg | Stdev | Max |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Latency | 0 ms | 0 ms | 0 ms  | 0 ms | 0.01 ms | 0.06 ms | 18 ms |

| Stat | 1% | 2.5% | 50% | 97.5% | Avg | Stdev | Min |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Req/Sec   | 32,303  | 38,079  | 45,823  | 49,471  | 45,743.92 | 2,539.17 | 32,301  |
| Bytes/Sec | 4.91 MB | 5.79 MB | 6.96 MB | 7.52 MB | 6.95 MB   | 386 kB   | 4.91 MB |

```
Req/Bytes counts sampled once per second.
# of samples: 100

4574k requests in 100.02s, 695 MB read
```

### BunJs 1.2.1

```
> nvm use 22.9.0
> node run start:bun
```

| Stat | 2.5% | 50% | 97.5% | 99% | Avg | Stdev | Max |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Latency | 0 ms | 0 ms | 0 ms  | 0 ms | 0.01 ms | 0.12 ms | 10 ms |

| Stat | 1% | 2.5% | 50% | 97.5% | Avg | Stdev | Min |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Req/Sec   | 22,447  | 24,943  | 26,127  | 29,167 | 26,349.76 | 1,059.95 | 22,432  |
| Bytes/Sec | 2.85 MB | 3.17 MB | 3.32 MB | 3.7 MB | 3.35 MB   | 135 kB   | 2.85 MB |

```
Req/Bytes counts sampled once per second.
# of samples: 100

2635k requests in 100.01s, 335 MB read
```

### Go 1.22.2

server initialized with
```
> go run go/http-server.go
```

| Stat | 2.5% | 50% | 97.5% | 99% | Avg | Stdev | Max |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Latency | 0 ms | 0 ms | 0 ms  | 0 ms | 0.01 ms | 0.05 ms | 8 ms |


| Stat | 1% | 2.5% | 50% | 97.5% | Avg | Stdev | Min |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Req/Sec   | 33,119  | 35,391  | 41,215  | 42,879  | 40,847.68 | 1,841.35 | 33,117  |
| Bytes/Sec | 4.24 MB | 4.53 MB | 5.28 MB | 5.49 MB | 5.23 MB   | 236 kB   | 4.24 MB |

```
Req/Bytes counts sampled once per second.
# of samples: 100

4085k requests in 100.01s, 523 MB read
```

### .NET Core 3.1.32 runtime

```
> dotnet build dotNetCore3/fibonacci.csproj
> dotnet run --project dotNetCore3/fibonacci.csproj --framework netcoreapp3.1
```

| Stat | 2.5% | 50% | 97.5% | 99% | Avg | Stdev | Max |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Latency | 0 ms | 0 ms | 1 ms  | 1 ms | 0.06 ms | 0.33 ms | 91 ms |

| Stat | 1% | 2.5% | 50% | 97.5% | Avg | Stdev | Min |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Req/Sec   | 12,751  | 16,415  | 17,999  | 19,375  | 18,060.96 | 929.82 | 12,748  |
| Bytes/Sec | 2.08 MB | 2.67 MB | 2.93 MB | 3.16 MB | 2.94 MB   | 152 kB | 2.08 MB |

```
Req/Bytes counts sampled once per second.
# of samples: 100

1806k requests in 100.01s, 294 MB read
```

### .NET Core 8.0.12 runtime

```
> dotnet build dotNetCore8/fibonacci.csproj
> dotnet run --project dotNetCore8/fibonacci.csproj --framework net8.0
```

| Stat | 2.5% | 50% | 97.5% | 99% | Avg | Stdev | Max |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Latency | 0 ms | 0 ms | 0 ms  | 1 ms | 0.03 ms | 0.37 ms | 151 ms |

| Stat      | 1%  | 2.5% | 50%     | 97.5%   | Avg   | Stdev | Min   |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Req/Sec   | 11,559  | 16,399  | 21,087  | 22,159  | 20,687.6 | 1,578.71 | 11,553  |
| Bytes/Sec | 1.88 MB | 2.67 MB | 3.44 MB | 3.61 MB | 3.37 MB  | 257 kB   | 1.88 MB |

```
Req/Bytes counts sampled once per second.
# of samples: 100

2069k requests in 100.01s, 337 MB read
```
