import express, { Application, Request, Response } from 'express'

const app: Application = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/hook', async (_req: Request, res: Response) => {
    console.log('received webhook',_req.body)
    res.sendStatus(200)
})

try {
    app.listen(PORT, () => {
        console.log(`dev server running at: http://localhost:${PORT}/`)
    })
} catch (e) {
    if (e instanceof Error) {
        console.error(e.message)
    }
}
