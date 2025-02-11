import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { OllamaController } from './ollama/ollama.controller';
import { OllamaService } from './ollama/ollama.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
  ],
  controllers: [OllamaController],
  providers: [OllamaService],
})
export class AppModule {}