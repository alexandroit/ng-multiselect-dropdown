import { Component, Input } from '@angular/core';

@Component({
  selector: 'sample-section',
  standalone: false,
  templateUrl: './sample-section.component.html'
})
export class SampleSectionComponent{
  @Input() public desc: any;
}
