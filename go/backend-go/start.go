package main

import (
  "os"
  "github.com/gofiber/fiber"
  "backend-go/api"
)

// Main function
func main() {
  app := fiber.New()

  app.Get("/", api.Home)
  app.Get("/api", api.ApiHome)
  app.Get("/api/books", api.ApiGetBooks)

  app.Listen(os.Getenv("PORT"))
}
