# grpcweb

grpcweb

```
cd app/my-app/src/proto
protoc helloworld.proto  --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
```

```
cd proto/
protoc helloworld.proto --go_out=plugins=grpc:.
```

Start the server

```
go run main.go
```

Start the app

```
cd app/my-app/
yarn install
yarn start
```

```
docker build -t envoy:v1 .
docker run -d --name envoy -p 9901:9901 -p 8080:8080 envoy:v1

protoc alaska.proto enum.proto user.proto  --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

```
