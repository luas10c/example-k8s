import { NestFactory } from '@nestjs/core'

import * as env from '#/config/env.js'

import { AppModule } from './app.module.js'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.listen(env.PORT, '0.0.0.0')
}

bootstrap()
