import { Component } from '@angular/core';
import { TimeDurationPipe } from '../../pipes/folder-v1-pipe/time-duration.pipe';

@Component({
  selector: 'app-timeDuration',
  standalone: true,
  imports: [TimeDurationPipe],
  template: `
    <!-------------- Time Duration Pipe ---------------->
    <div class="three">
      <h1 class="heading">Time Duration Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Time Duration Pipe</p>
      <h4>{{ time1 | timeDuration }}</h4>
      <h4>{{ time2 | timeDuration }}</h4>
      <h4>{{ time3 | timeDuration }}</h4>
      <h4>{{ time4 | timeDuration }}</h4>
    </div>
  `,
})
export class AppTimeDurationComponent {
  time1: number = 150;
  time2: number = 120;
  time3: number = 190;
  time4: number = 75;
}
