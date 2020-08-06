import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SwService } from '../../sw.service';
import { Observable } from 'rxjs';
import { Character } from '../../character';
import { constants } from '../../../shared/constants';

@Component({
  selector: 'app-people-picker',
  templateUrl: './people-picker.component.html',
  styleUrls: ['./people-picker.component.scss'],
})
export class PeoplePickerComponent implements OnInit {
  @Output() characterSelected: EventEmitter<string> = new EventEmitter<
    string
  >();

  empty_select = constants.empty_select;
  characters$: Observable<Character[]> | null = null;
  constructor(private swService: SwService) {}

  ngOnInit(): void {
    this.characters$ = this.swService.getCharacters();
  }

  selectedCharacter(charUrl: string) {
    this.characterSelected.next(charUrl);
  }
}
