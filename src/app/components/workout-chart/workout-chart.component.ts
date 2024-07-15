import { Component, OnInit, Input, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { WorkoutService } from '../../services/workout.service';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Workout } from '../../models/workout.model';

@Component({
  selector: 'app-workout-chart',
  standalone: true,
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.css'],
  imports: [CommonModule]
})
export class WorkoutChartComponent implements OnInit, AfterViewInit {
  @Input() userId: string | null = null;
  workouts: Workout[] = [];

  constructor(
    private workoutService: WorkoutService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && this.userId !== null) {
      if (isPlatformBrowser(this.platformId) && this.userId !== null) {
        this.workoutService.getWorkoutsByUserId(this.userId).subscribe(
          (workouts: Workout[]) => {
            this.workouts = workouts;
            if (this.workouts.length > 0) {
              this.renderChart();
            }
          },
          (error: any) => {
            console.error('Error fetching workouts for user:', error);
          }
        );
      }
    }
  }

  ngAfterViewInit() {
    if (this.workouts.length > 0) {
      this.renderChart();
    }
  }

  private renderChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    if (ctx) {
      const workoutTypes = this.workouts.map(workout => workout.workoutType);
      const workoutMinutes = this.workouts.map(workout => workout.minutes);
      const workoutDates = this.workouts.map(workout => workout.date);

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: workoutTypes,
          datasets: [{
            label: 'Workout Minutes',
            data: workoutMinutes,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      console.error('Chart element not found');
    }
  }
}


  // ngOnInit() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const workouts = this.workoutService.getWorkouts();
  //     const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  //     new Chart(ctx, {
  //       type: 'bar',
  //       data: {
  //         labels: workouts.map(w => w.userName),
  //         datasets: [{
  //           label: 'Workout Minutes',
  //           data: workouts.map(w => w.minutes),
  //           backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //           borderColor: 'rgba(75, 192, 192, 1)',
  //           borderWidth: 1
  //         }]
  //       },
  //       options: {
  //         scales: {
  //           y: {
  //             beginAtZero: true
  //           }
  //         }
  //       }
  //     });
  //   }
  // }


