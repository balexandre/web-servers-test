# Fibonacci in Node, Bun, .NET Core and Go

simple code to test request per second on the most used web servers

## Tests

tests were conducted with the help of the loading test [autocannon](https://github.com/mcollina/autocannon/tree/master#autocannon)

```
npx autocannon -c 10 -d 100 <URL>
```

- `-c` stands for how many connections
- `-d` stands for the duration in seconds

run the server you want to test and execute the load test on that url

## How to run servers

assuming you have the 4 installed

- [NodeJs](https://nodejs.org/en/download/)
- [BunJs](https://bun.sh/)
- [Go](https://go.dev/dl/)
- [.NET Code](https://dotnet.microsoft.com/en-us/download)

you can run them, from the directory of this project, as

- NodeJS 
```
npm run start:node
```
- BunJs 
```
npm run start:bun
```
- Go 
```
go run go/http-server.go
```
- .NET Core 3, you need to build it first
```
dotnet build dotNetCore3/fibonacci.csproj
dotnet run --project dotNetCore3/fibonacci.csproj
```
- .NET Core 8, you need to build it first
```
dotnet build dotNet8/fibonacci.csproj
dotnet run --project dotNet8/fibonacci.csproj
```

## Results (average)

using `npx autocannon -c 10 -d 100 <URL>`

| Server | Url | avg latency | avg req/s | 
| -- | -- | --: | --: |
| NodeJs 14 | http://localhost:3001/fibonacci | `7335.20 ms` | `1.19` |
| NodeJs 16 | http://localhost:3001/fibonacci | `8544.05 ms` | `1.16` |
| BunJs 0.1.4 | http://localhost:3002/fibonacci | `4002.40 ms` | `2.46` |
| Go 1.18.4 | http://localhost:3003/fibonacci | `621.22 ms` | `16.03` |
| .NET Core 3.1.421 | http://localhost:3004/fibonacci | `1728.94 ms` | `5.71` |
| .NET Core 8.0.12 | http://localhost:3006/fibonacci | `1807.03 ms` | `5.5` |

test machine specs: i7-8700K CPU @ 3.70GHz with 32Gb on Windows 11 Pro 21H2, via WSL2 - Ubuntu 20.04

## Detailed results

### NodeJs 14.16.0

| Stat    | 2.5%    | 50%     | 97.5%    | 99%      | Avg       | Stdev     | Max      |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Latency | 2110 ms | 5629 ms | 17814 ms | 19168 ms | 7335.2 ms | 4203.1 ms | 19463 ms |

| Stat | 1% | 2.5% | 50% | 97.5% | Avg | Stdev | Min |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Req/Sec   | 0   | 0    | 1     | 2     | 1.19  | 0.65  | 1     |
| Bytes/Sec | 0 B | 0 B  | 161 B | 322 B | 192 B | 104 B | 161 B |

### NodeJs 16.14.2

| Stat | 2.5% | 50% | 97.5% | 99% | Avg | Stdev | Max |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Latency | 2096 ms | 6282 ms | 19254 ms | 20840 ms | 8544.05 ms | 4963.69 ms | 21383 ms |

| Stat | 1% | 2.5% | 50% | 97.5% | Avg | Stdev | Min |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Req/Sec   | 0   | 0    | 1     | 2     | 1.16  | 0.66  | 1     |
| Bytes/Sec | 0 B | 0 B  | 161 B | 322 B | 187 B | 106 B | 161 B |

### BunJs 0.1.4

| Stat | 2.5% | 50% | 97.5% | 99% | Avg | Stdev | Max |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Latency | 2881 ms | 3669 ms | 7350 ms | 7374 ms | 4002.4 ms | 1206.34 ms | 7387 ms |

| Stat | 1% | 2.5% | 50% | 97.5% | Avg | Stdev | Min |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Req/Sec   | 2     | 2     | 2     | 3     | 2.46  | 0.5    | 2     |
| Bytes/Sec | 196 B | 196 B | 196 B | 294 B | 240 B | 48.8 B | 196 B |

### Go 1.18.4

| Stat | 2.5% | 50% | 97.5% | 99% | Avg | Stdev | Max |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Latency | 575 ms | 622 ms | 661 ms | 668 ms | 621.22 ms | 22.77 ms | 688 ms |


| Stat | 1% | 2.5% | 50% | 97.5% | Avg | Stdev | Min |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Req/Sec   | 10      | 12      | 16      | 20      | 16.03   | 1.9   | 10      |
| Bytes/Sec | 1.36 kB | 1.63 kB | 2.18 kB | 2.72 kB | 2.18 kB | 259 B | 1.36 kB |

### .NET Core 3.1.421

| Stat | 2.5% | 50% | 97.5% | 99% | Avg | Stdev | Max |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Latency | 1637 ms | 1718 ms | 1874 ms | 1915 ms | 1728.94 ms | 57.2 ms | 2021 ms |

| Stat | 1% | 2.5% | 50% | 97.5% | Avg | Stdev | Min |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Req/Sec   | 0   | 0    | 6       | 10      | 5.71  | 3.75  | 1     |
| Bytes/Sec | 0 B | 0 B  | 1.03 kB | 1.72 kB | 982 B | 644 B | 172 B |

### .NET Core 8.0.12

| Stat | 2.5% | 50% | 97.5% | 99% | Avg | Stdev | Max |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Latency | 1677 ms | 1795 ms | 2053 ms | 2164 ms | 1807.03 ms | 92.19 ms | 2386 ms |

| Stat      | 1%  | 2.5% | 50%     | 97.5%   | Avg   | Stdev | Min   |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Req/Sec   | 0   | 0    | 6       | 10      | 5.5   | 3.5   | 1     |
| Bytes/Sec | 0 B | 0 B  | 1.03 kB | 1.72 kB | 946 B | 601 B | 172 B |