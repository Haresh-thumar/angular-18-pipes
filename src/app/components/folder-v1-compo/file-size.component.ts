import { Component } from '@angular/core';
import { FileSizePipe } from '../../pipes/folder-v1-pipe/file-size.pipe';

@Component({
  selector: 'app-fileSize',
  standalone: true,
  imports: [FileSizePipe],
  template: `
    <!-------------- File-Size-Convert (KB, MB, GB, TB) Pipe ---------------->
    <div class="three">
      <h1 class="heading">File-Size Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <h4>{{ kbFile | fileSize }}</h4>
      <h4>{{ mbFile | fileSize }}</h4>
      <h4>{{ gbFile | fileSize }}</h4>
      <h4>{{ tbFile | fileSize }}</h4>
    </div>
  `,
})
export class AppFileSizeComponent {
  kbFile: number = 1024;
  mbFile: number = 12345678;
  gbFile: number = 123456781234;
  tbFile: number = 12345678123456;
}
