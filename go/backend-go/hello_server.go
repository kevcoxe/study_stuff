package main

import (
	"os"
	"github.com/gofiber/fiber"
)

func main() {
  app := fiber.New()

  app.Get("/api", func(c *fiber.Ctx) {
    c.Send("Hello, World!")
  })

  app.Listen(os.Getenv("PORT"))
}
