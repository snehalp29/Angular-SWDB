import { Component, OnInit } from '@angular/core';
import { MinFlim } from '../../people';
import { constants } from '../../../shared/constants';
import { SwService } from '../../sw.service';
import { Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss'],
})
export class PeoplesComponent implements OnInit {
  /**
   *
   * observable to hold character films
   */
  characterFlims$: Observable<MinFlim[]> | null = null;
  /**
   * empty select url
   */
  empty_select = constants.empty_select;

  /**
   * selected character url state
   *
   */
  selectedUrl = '';

  constructor(private swService: SwService) {}

  ngOnInit(): void {}

  onCharacterSelected(charUrl: string) {
    // console.log(`onCharacterSelected ${charUrl}`);
    this.selectedUrl = charUrl;

    if (this.selectedUrl != this.empty_select) {
      this.characterFlims$ = this.swService.getCharacterAndFlims(charUrl);
    } else {
      this.characterFlims$ = EMPTY;
    }
  }
}
