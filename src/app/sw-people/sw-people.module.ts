import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PeoplesComponent } from './container/peoples/peoples.component';
import { PeopleFlimsComponent } from './components/people-flims/people-flims.component';
import { PeoplePickerComponent } from './components/people-picker/people-picker.component';



@NgModule({
  declarations: [PeoplesComponent, PeopleFlimsComponent, PeoplePickerComponent],
  imports: [
    CommonModule
    HttpClientModule,
    SharedModule,
  ]
})
export class SwPeopleModule { }
