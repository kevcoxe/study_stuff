package api

import (
  "github.com/gofiber/fiber"
)

// API functions

func Home(c *fiber.Ctx) {
  c.Send("Welcome to Go")
}

func ApiHome(c *fiber.Ctx) {
  c.Send("Welcome to the api")
}

func ApiGetBooks(c *fiber.Ctx) {
  c.Send("some books")
}

