FROM golang:1.24 as builder

WORKDIR /web

COPY . .
RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -o /web
FROM alpine:latest
COPY --from=builder /web /web
EXPOSE 8080
CMD [ "/web" ]