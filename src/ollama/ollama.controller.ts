import { Controller, Get, Query, Res } from '@nestjs/common';
import { OllamaService } from './ollama.service';
import { Response } from 'express';

@Controller('api')
export class OllamaController {
  constructor(private readonly ollamaService: OllamaService) {}

  @Get('ask-stream')
  askStream(@Query('prompt') prompt: string, @Res() res: Response) {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');

    this.ollamaService.askStream(prompt).subscribe({
      next: (chunk) => {
        res.write(chunk);
      },
      error: (err) => {
        console.error('Erro:', err);
        res.status(500).end();
      },
      complete: () => res.end()
    });
  }
}