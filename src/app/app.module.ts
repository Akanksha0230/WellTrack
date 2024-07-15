import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutChartComponent } from './components/workout-chart/workout-chart.component';
import { WorkoutStatusComponent } from './components/workout-status/workout-status.component';
import { AppRoutingModule } from './app-routing.module';
import { CountdownChartComponent } from './components/countdown-chart/countdown-chart.component';

import { WorkoutService } from './services/workout.service';
@NgModule({
  declarations: [
    
    WorkoutStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent, 
    AppRoutingModule,
    RouterModule,
    WorkoutFormComponent,
    WorkoutListComponent,
    CountdownChartComponent,
    WorkoutChartComponent,
    
  ],
  providers: [WorkoutService],
  bootstrap: [] 
})
export class AppModule { }
