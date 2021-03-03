import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class CommonModule {}
