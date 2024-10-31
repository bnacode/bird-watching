// color-palette.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  template: `
    <div class="color-palette">
      <div
        *ngFor="let color of colors"
        class="color-circle"
        [style.background-color]="color"
        (click)="toggleColorSelection(color)"
        [class.selected]="isSelected(color)"
      ></div>
    </div>
  `,
  styleUrls: ['./color-palette.component.css'],
})
export class ColorPaletteComponent {
  @Output() colorsSelected = new EventEmitter<string[]>();
  selectedColors: string[] = [];
  colors: string[] = ['black', 'brown', 'burlywood', 'grey', 'white', 'yellow', 'orange', 'red', 'blue', 'green']; // Define your colors

  toggleColorSelection(color: string) {
    if (this.isSelected(color)) {
      this.selectedColors = this.selectedColors.filter((c) => c !== color);
    } else {
      this.selectedColors.push(color);
    }
    this.colorsSelected.emit(this.selectedColors);
  }

  isSelected(color: string): boolean {
    return this.selectedColors.includes(color);
  }
}
