import { Component } from '@angular/core';
import { ContentService } from '../services/content.service';
import { ComponentBComponent } from '../component-b/component-b.component';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
  providers: [ContentService],
  standalone: true,
  imports: [ComponentBComponent]
})
export class ComponentAComponent {

  constructor(
    public dataService: ContentService
  ) { }

  counter = 0;
  dataObject = { name: 'Initial' };

  updatePrimitive() {
    this.counter++;
  }

  updateNonPrimitive() {
    this.dataObject = { ...this.dataObject, name: `Updated ${this.counter}` };
  }

}
