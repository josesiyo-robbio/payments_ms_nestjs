import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config';

async function bootstrap() 
{

  const logger = new Logger('Payments-ms');

  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    })
    );
    
  await app.listen(envs.port);

  logger.log(`Payments MS running on por ${envs.port}`);
}
bootstrap();
