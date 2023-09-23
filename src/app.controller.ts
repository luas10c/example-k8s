import { Controller, Get } from '@nestjs/common'

const id = Math.floor(Math.random() * 9999999)

import * as constants from '#/config/constants.js'

@Controller({
  path: '/'
})
export class AppController {
  @Get()
  async index() {
    console.log('/ GET')

    return {
      message: 'Hello, World!',
      region: constants.REGION,
      id
    }
  }
}
