import { Component, OnInit } from '@angular/core';
import { Observable, from, interval } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const counter = interval(1000);

    from([1,2,3]).pipe(map(i => i*8)).subscribe(_ => console.log(_));
tyqdas
  }
  title = 'reactive-example';

  

}
