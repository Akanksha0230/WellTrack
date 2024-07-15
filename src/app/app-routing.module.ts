import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutStatusComponent } from './components/workout-status/workout-status.component';

const routes: Routes = [
  { path: '', redirectTo: '/workout-form', pathMatch: 'full' },
  { path: 'workout-form', component: WorkoutFormComponent },
  { path: 'workout-list', component: WorkoutListComponent },
  { path: 'workout-status/:id', component: WorkoutStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

