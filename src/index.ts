import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'
import bodyParser from 'body-parser'

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const app = express()

// setup headers, middlware etc
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use('/', routes)

// health check
console.log('hello world')

// declare PORT
const PORT: number = parseFloat(process.env.PORT as string) || 4444

// run server
const server = app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`)
})

// type definitions for module in order to have type definitions and IDE support while using HMR feature
type ModuleId = string | number

interface WebpackHotModule {
  hot?: {
    data: any
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void
    accept(dependency: string, callback?: () => void): void
    accept(errHandler?: (err: Error) => void): void
    dispose(callback: (data: any) => void): void
  }
}

declare const module: WebpackHotModule

// activate HMR
if (module.hot) {
  module.hot.accept()
  // module.hot.dispose(() => console.log('module disposed'));
  module.hot.dispose(() => server.close())
}
