import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {DataStoreModule} from "./data-store/data-store.module";
import {counterReducer, multiplyReducer} from "./data-store/reducers/identity-reducer";



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DataStoreModule,
        StoreModule.provideStore(
            {
                Counter : counterReducer,
                Multi : multiplyReducer
            })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
