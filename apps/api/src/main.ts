import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false, // Required for Better Auth
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => {
    console.log(
      `API is running on http://localhost:${process.env.PORT ?? 3000}`,
    );
  })
  .catch((err) => {
    console.error('Failed to start API:', err);
    process.exit(1);
  });
