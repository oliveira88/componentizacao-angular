import { Component, Input } from '@angular/core';
import { Block } from 'src/model/block';

@Component({
  selector: 'app-new-block',
  templateUrl: './new-block.component.html',
  styleUrls: ['./new-block.component.scss']
})
export class NewBlockComponent {

  @Input() block!: Block;
}
