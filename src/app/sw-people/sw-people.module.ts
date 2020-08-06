import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PeoplePickerComponent } from './components/people-picker/people-picker.component';
import { PeoplesComponent } from './container/peoples/peoples.component';
import { RouterModule, Routes } from '@angular/router';
import { PeopleFlimsComponent } from './components/people-flims/people-flims.component';
import { SharedModule } from '../shared/shared.module';

const SWRoutes: Routes = [
  {
    path: '',
    component: PeoplesComponent,
  },
];

@NgModule({
  declarations: [PeoplePickerComponent, PeoplesComponent, PeopleFlimsComponent],
  imports: [
    RouterModule.forChild(SWRoutes),
    CommonModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class SwPeopleModule {}
