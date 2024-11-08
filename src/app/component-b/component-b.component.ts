import { Component, Input } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],
})
export class ComponentBComponent {

  @Input() data!: { name: string };

  childCounter = 0;

  constructor(public dataService: ContentService) { }

  updateChildData() {
    this.childCounter++;
  }

  updateServiceMessage() {
    this.dataService.message = `Updated by child at ${new Date().toLocaleTimeString()}`;
  }

}
