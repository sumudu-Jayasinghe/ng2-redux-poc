import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IdentityReducer} from "./reducers/identity-reducer";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [IdentityReducer],
  exports:[]
})
export class DataStoreModule { }
