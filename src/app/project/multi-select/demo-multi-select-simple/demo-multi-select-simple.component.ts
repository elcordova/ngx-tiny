import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-multi-select-simple',
  templateUrl: './demo-multi-select-simple.component.html',
  preserveWhitespaces: true
})
export class DemoMultiSelectSimpleComponent {

  selected = [];
  options = ['South Africa', 'United States', 'United Kingdom'];

  get output() {
    return JSON.stringify(this.selected);
  }

  onChange(selection) {
    this.selected = selection;
  }


}
