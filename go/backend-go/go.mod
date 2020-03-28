module github/kevcoxe/study_stuff/go/backend-go

go 1.14

require (
	backend-go/api v0.0.0
	github.com/gofiber/fiber v1.8.42
	github.com/gorilla/mux v1.7.4
	gopkg.in/natefinch/lumberjack.v2 v2.0.0
)

replace backend-go/api => ./api
