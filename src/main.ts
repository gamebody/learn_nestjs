import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TodosModule } from './todos/todos.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('Todos example')
  .setDescription('The Todos API description')
  .setVersion('1.0')
  .addTag('Todos')
  .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [TodosModule]
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
