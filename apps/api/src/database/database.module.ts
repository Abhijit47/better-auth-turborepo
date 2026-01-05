import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { authDB } from '@workspace/db/auth-db';
import { DB_TOKEN } from './dbConfigs';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [
    {
      provide: DB_TOKEN,
      inject: [ConfigService],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      useFactory: (configService: ConfigService) => {
        return authDB;
      },
    },
  ],
  exports: [DB_TOKEN],
})
export class DatabaseModule {}
