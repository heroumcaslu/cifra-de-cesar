import { Injectable } from '@angular/core';
import { fromEventPattern } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CifraDeCesarService {

  private texto: String = '';
  private cifrado: String = '';

  constructor() { }

  cifrar(text: String, deslocamento: number, min: number = 12, max: number = 255  ) {

    let maxDeslocamento = ((max+1)-min);

    if (text == '') {

      throw 'Digite algum(a) texto/palavra para ser cifrado(a).';

    }

    if (deslocamento < 0 || deslocamento > maxDeslocamento) {

      throw 'O deslocamento não pode ser menor que 0 e não pode ser maior que '+maxDeslocamento+'.';

    }

    let textDecifrado = '';
        for (let i = 0; i < text.length; i++) {
            if ((text.charCodeAt(i) + deslocamento) > max) {
                textDecifrado += String.fromCharCode((text.charCodeAt(i) + deslocamento) - maxDeslocamento);
            } else {
                textDecifrado += String.fromCharCode(text.charCodeAt(i) + deslocamento);
            }
        }
        return textDecifrado;

  }

}
