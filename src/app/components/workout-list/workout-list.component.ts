import { Component,OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { Workout } from '../../models/workout.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkoutFormComponent } from '../workout-form/workout-form.component';
import { WorkoutChartComponent } from '../workout-chart/workout-chart.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, FormsModule, WorkoutFormComponent, WorkoutChartComponent],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css'
})
export class WorkoutListComponent implements OnInit{
  workouts: Workout[] = [];
  selectedUserId: string | null = null;
  searchTerm = '';
  filterType = '';
  showChart = false;
  currentPage = 1;
  pageSize = 5;
  constructor(private workoutService: WorkoutService, private router: Router) {}

  ngOnInit() {
    this.workoutService.workouts$.subscribe(workouts => this.workouts = workouts);

  }
  selectUser(userId: string) {
    this.selectedUserId = userId;
    this.showChart = true;
  }
  filteredWorkouts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.workouts.filter(workout => {
      return (this.searchTerm ? workout.userName.includes(this.searchTerm) : true) &&
             (this.filterType ? workout.workoutType === this.filterType : true);
    }).slice(startIndex, startIndex + this.pageSize);
  }
  nextPage() {
    this.currentPage++;
  }

  previousPage() {
    this.currentPage--;
  }
}
