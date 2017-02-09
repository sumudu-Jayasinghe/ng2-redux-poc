import {Component, OnInit} from '@angular/core';
import { IAppStore} from "./data-store/models";
import {Store} from '@ngrx/store';
import {INCREMENT, THREE} from "./data-store/reducers/identity-reducer";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private store: Store<IAppStore>) {

    }

    ngOnInit(): void {
       this.store.select('Counter').subscribe((val)=>{
           alert('counter - ' +val);
       });

       this.store.select('Multi').subscribe((val)=>{
           alert('multi -'+ val);
       });

       this.store.subscribe((val)=>{
           console.log('APP '+ JSON.stringify(val));
       })
    }

    onClick() {
        this.store.dispatch({type:INCREMENT});
    }

    onClickMulti(){
        this.store.dispatch({type:THREE});
    }
}
