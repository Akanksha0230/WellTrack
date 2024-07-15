import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorkoutService } from '../../services/workout.service';
import { Workout } from '../../models/workout.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-workout-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './workout-form.component.html',
  styleUrl: './workout-form.component.css'
})
export class WorkoutFormComponent {
  workout: Partial<Workout> = {};

  constructor(private workoutService: WorkoutService, private router: Router) {}

  addWorkout() {
    const newWorkout: Workout = {
      id: Date.now(), 
      userId: this.workout.userId as string, 
      userName: this.workout.userName as string,
      workoutType: this.workout.workoutType as string,
      minutes: this.workout.minutes as number,
      date: new Date()
    };
    this.workoutService.addWorkout(newWorkout);
    this.workout = {};
    this.router.navigate(['/workout-status', newWorkout.id]);
  }
}
