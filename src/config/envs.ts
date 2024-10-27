import 'dotenv/config'

export const envs = {
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  connectionString: <string>process.env.DATABASE_CONNECTION_STRING,
}
