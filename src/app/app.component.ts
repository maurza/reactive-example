import { Component, OnInit } from '@angular/core';
import { Observable, from, interval } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  arr = [1];
  index = 2;
// Es el metodo que se ejecuta cuando se inicializa el componente
  ngOnInit(): void {
// Crea el observable y se suscribe a el
    from(this.arr).subscribe(_ => console.log(_));
// Cada dos segundos se ejecuta la funcion en este caso se ejecuta la suscripción
      setInterval(() => {
        if(this.index <= 5){
          this.arr.push(this.index++)
        }
      },  2000);
  }

  mostrarArray(){
    return this.arr.join(',')
  }
  title = 'reactive-example';

  

}
