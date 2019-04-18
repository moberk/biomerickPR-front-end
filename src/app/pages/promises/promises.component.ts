import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { reject } from 'q';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    this.contarTres().then(
      () => console.log('Terminó la promesa')
    )
    .catch(
      error => console.error('Error', error));
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
   return new Promise( (resolve) => {
      let contador = 0;

      // tslint:disable-next-line:prefer-const
      let intervalo = setInterval( ( ) => {
        contador += 1;
        console.log(contador);

        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }

      }, 1000 );
    });
  }
}
