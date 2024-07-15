import { Routes } from '@angular/router';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutChartComponent } from './components/workout-chart/workout-chart.component';
export const routes: Routes = [
  { path: '', component: WorkoutFormComponent },
  { path: 'workout-list', component: WorkoutListComponent },
  { path: 'workout-chart', component: WorkoutChartComponent }
];
