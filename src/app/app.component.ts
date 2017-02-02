import {Component, OnInit} from '@angular/core';
import {IdentityReducer} from "./data-store/reducers/identity-reducer";
import {IncrementAction, DecrementAction} from "./data-store/actions/identity-actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  constructor(private s: IdentityReducer) {
    this.s = s;
  }

  ngOnInit(): void {
    console.log(this.s.invoke(10,new IncrementAction(10)));
    console.log(this.s.invoke(9,new DecrementAction()));
  }
}
