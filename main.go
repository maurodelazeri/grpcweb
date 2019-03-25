package main

import (
	"context"
	"log"
	"net/http"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	pb "github.com/maurodelazeri/grpcweb/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/grpclog"
)

const (
	port = ":50051"
)

// server is used to implement helloworld.GreeterServer.
type server struct{}

// SayHello implements helloworld.GreeterServer
func (s *server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	log.Printf("Received: %v", in.Name)
	return &pb.HelloReply{Message: "Hello " + in.Name}, nil
}

func main() {
	grpcServer := grpc.NewServer()
	pb.RegisterGreeterServer(grpcServer, &server{})
	wrappedServer := grpcweb.WrapServer(grpcServer)
	handler := func(resp http.ResponseWriter, req *http.Request) {
		allowCors(resp, req)
		wrappedServer.ServeHTTP(resp, req)
	}
	httpServer := http.Server{
		Addr:    ":8000",
		Handler: http.HandlerFunc(handler),
	}
	if err := httpServer.ListenAndServe(); err != nil {
		grpclog.Fatalf("failed starting http server: %v", err)
	}
}

func allowCors(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Expose-Headers", "grpc-status, grpc-message")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, XMLHttpRequest, x-user-agent, x-grpc-web, grpc-status, grpc-message")
}
