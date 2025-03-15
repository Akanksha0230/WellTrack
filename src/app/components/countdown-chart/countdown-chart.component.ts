import { Component, Input, OnInit, OnChanges, SimpleChanges,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-chart',
  standalone: true,
  imports: [],
  templateUrl: './countdown-chart.component.html',
  styleUrl: './countdown-chart.component.css'
})
export class CountdownChartComponent implements OnInit, OnChanges, OnDestroy {
  @Input() duration: number = 0; // duration in seconds
  @Input() isRunning: boolean = false;

  remainingTime: number = 0;
  interval: any;
  progress: number = 0; // Progress percentage

  ngOnInit() {
    this.remainingTime = this.duration;
    if (this.isRunning) {
      this.startTimer();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isRunning'] && this.isRunning) {
      this.startTimer();
    }
  }

  startTimer() {
    this.remainingTime = this.duration;
    this.interval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        this.progress = ((this.duration - this.remainingTime) / this.duration) * 100;
      } else {
        clearInterval(this.interval);
        this.progress = 100; // Full circle completion
        alert('Workout completed!');
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}

