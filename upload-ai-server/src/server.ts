import { fastify } from "fastify";
import { getAllPromptsRoutes } from "./routes/get-all-prompts";
import { uploadVideoRoutes } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";

const app = fastify()

app.register(getAllPromptsRoutes)
app.register(uploadVideoRoutes)
app.register(createTranscriptionRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running! 🔥')
})
