import { Component, OnInit } from '@angular/core';
import { Observable, from, interval } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  arr = [1,2,3];
  ngOnInit(): void {
    from(this.arr).pipe(map(i => i * 8)).subscribe(_ => console.log(_));

    setTimeout(() => {
      this.arr.push(8)
    },  5000);
  }

  mostrarArray(){
    return this.arr.join(',')
  }
  title = 'reactive-example';

  

}
