import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-m-navigation-item',
  standalone: true,
  imports: [],
  templateUrl: './m-navigation-item.component.html',
  styleUrl: './m-navigation-item.component.css'
})
export class MNavigationItemComponent {
  @Input() name!: string;
}
