import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../../services/workout.service';
import { Workout } from '../../models/workout.model';

@Component({
  selector: 'app-workout-status',
  templateUrl: './workout-status.component.html',
  styleUrls: ['./workout-status.component.css']
})
export class WorkoutStatusComponent implements OnInit {
  workout: Workout | null = null;
  error: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private workoutService: WorkoutService,
  ) {}

  ngOnInit() {
    const workoutId = this.route.snapshot.paramMap.get('id');
    if (workoutId) {
      const id= Number(workoutId);
      this.fetchWorkout(id);
    } else {
      // Handle case where workoutId is null or undefined
      console.error('Workout ID is null or undefined.');
      this.error = 'Workout ID is null or undefined.';
    }
  }
  fetchWorkout(id:number) {
    
      this.workoutService.getWorkoutById(id).subscribe(
        (workout: Workout |undefined) => {
          if (workout) {
            this.workout = workout;
            this.error = null; // Reset error if successful
          } else {
            console.error(`Workout with ID '${id}' not found.`);
            this.error = `Workout with ID '${id}' not found.`;
          }
        }, (error:any) => {
          console.error('Error fetching workout data:', error);
          this.error = 'Error fetching workout data.';
          this.workout = null;
        });
    } 
    
  }
  


