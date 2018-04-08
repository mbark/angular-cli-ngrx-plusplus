import { Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: '**', component: NotfoundComponent },
];
