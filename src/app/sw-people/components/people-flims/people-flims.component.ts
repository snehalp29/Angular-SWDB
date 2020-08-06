import { Component, OnInit, Input } from '@angular/core';
import { MinFlim } from '../../people';

@Component({
  selector: 'app-people-flims',
  templateUrl: './people-flims.component.html',
  styleUrls: ['./people-flims.component.scss'],
})
export class PeopleFlimsComponent implements OnInit {
  @Input() characterFlims: MinFlim[] = [];

  constructor() {}

  ngOnInit(): void {}
}
