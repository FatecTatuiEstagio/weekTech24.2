import { useEffect, useRef } from "react"

export default function BlobBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create blobs
    const blobs: Blob[] = []
    const blobCount = 15

    for (let i = 0; i < blobCount; i++) {
      blobs.push(new Blob(canvas))
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.fillStyle = "#ff0000" // Red background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw each blob
      blobs.forEach((blob) => {
        blob.update()
        blob.draw(ctx)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" style={{ backgroundColor: "#ff0000" }} />
}

class Blob {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  canvas: HTMLCanvasElement
  color: string
  opacity: number

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 100 + 50
    this.speedX = (Math.random() - 0.5) * 2
    this.speedY = (Math.random() - 0.5) * 2
    this.color = this.getRandomRedShade()
    this.opacity = Math.random() * 0.5 + 0.2
  }

  getRandomRedShade(): string {
    // Generate random red shades (keeping red high, others low)
    const r = Math.floor(Math.random() * 55) + 200 // 200-255
    const g = Math.floor(Math.random() * 50) // 0-50
    const b = Math.floor(Math.random() * 50) // 0-50
    return `rgb(${r}, ${g}, ${b})`
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    // Bounce off edges
    if (this.x < 0 || this.x > this.canvas.width) {
      this.speedX *= -1
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.speedY *= -1
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.globalAlpha = this.opacity

    // Draw a circle
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = 1
  }
}