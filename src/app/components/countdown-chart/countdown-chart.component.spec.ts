import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownChartComponent } from './countdown-chart.component';

describe('CountdownChartComponent', () => {
  let component: CountdownChartComponent;
  let fixture: ComponentFixture<CountdownChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
