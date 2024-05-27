import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-block',
  templateUrl: './new-block.component.html',
  styleUrls: ['./new-block.component.scss']
})
export class NewBlockComponent {

  @Input() imgURL!: string;
}
