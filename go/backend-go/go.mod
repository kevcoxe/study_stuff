module github/kevcoxe/study_stuff/go/backend-go

go 1.14

require (
	backend-go/api v0.0.0
	github.com/gofiber/fiber v1.12.6
)

replace backend-go/api => ./api
