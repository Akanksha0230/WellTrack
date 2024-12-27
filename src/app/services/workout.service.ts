import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable  } from 'rxjs';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [
    { id: 1,userId: 'user1', userName: 'Himanshu',workoutType:"Cardio", minutes: 10 ,date:new Date()},
    { id: 2,userId: 'user2', userName: 'Vijay',workoutType:"Running", minutes: 15 ,date:new Date()},
    { id: 3,userId: 'user3', userName: 'Lavanya',workoutType:"Cycling", minutes: 13 ,date:new Date()},
    { id: 4,userId: 'user4', userName: 'A Bhgyalaxmi',workoutType:"Strength", minutes: 30 ,date:new Date()},
    { id: 5,userId: 'user5', userName: 'Sona',workoutType:"Flexibility", minutes: 35 ,date:new Date()},
    { id: 5,userId: 'user5', userName: 'Sona',workoutType:"Running", minutes: 40 ,date:new Date()},
    { id: 6,userId: 'user7', userName: 'Vishal',workoutType:"Running", minutes: 30 ,date:new Date()},
    { id: 6,userId: 'user8', userName: 'Abhinav',workoutType:"Cardio", minutes: 40 ,date:new Date()},
    { id: 6,userId: 'user9', userName: 'Trisha',workoutType:"Flexibility", minutes: 10 ,date:new Date()}

    // Add more sample workouts as needed
  ];
  private workoutsSubject = new BehaviorSubject<Workout[]>(this.workouts);
  workouts$ = this.workoutsSubject.asObservable();
  constructor() {}
  addWorkout(workout: Workout) {
    workout.id = this.workouts.length + 1;
    this.workouts.push(workout);
    this.workoutsSubject.next(this.workouts);
  }

  getWorkouts():Workout[] {
    return this.workouts;
  }
  getWorkoutsByUserId(userId: string):Observable<Workout[]> {
    const workoutsByUser = this.workouts.filter(workout => workout.userId === userId);
    return new BehaviorSubject(workoutsByUser).asObservable();

  }
  getWorkoutById(id: number): Observable<Workout | undefined> {
    const workout = this.workouts.find(w => w.id === id);
    return new BehaviorSubject(workout).asObservable();
  }
  // getWorkoutById(id: string): Observable<Workout> {
  //   return this.http.get<Workout>(`workout-status/${id}`);
  // }
}

