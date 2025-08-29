import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const cors = require('cors');
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001;

  app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
    }),
  );

  await app.listen(port);
  console.log(`Server is running on http://localhost:${port}`);
}
bootstrap();
