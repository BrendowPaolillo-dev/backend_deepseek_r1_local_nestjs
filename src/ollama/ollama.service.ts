import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

@Injectable()
export class OllamaService {
  constructor(private readonly httpService: HttpService) {}

  askStream(prompt: string): Observable<string> {
    return new Observable((subscriber) => {
      this.httpService.post(
        'http://localhost:11434/api/generate',
        {
          model: 'deepseek-r1:14b',
          prompt: prompt,
          stream: true,
        },
        { responseType: 'stream' }
      ).subscribe({
        next: (response) => {
          const stream = response.data;
          
          stream.on('data', (chunk: Buffer) => {
            try {
              const data = JSON.parse(chunk.toString());
              subscriber.next(data.response); // Envia apenas o texto
            } catch (e) {
              subscriber.error('Chunk inválido');
            }
          });

          stream.on('end', () => subscriber.complete());
          stream.on('error', (err) => subscriber.error(err));
        },
        error: (err) => subscriber.error(err),
      });
    });
  }
}