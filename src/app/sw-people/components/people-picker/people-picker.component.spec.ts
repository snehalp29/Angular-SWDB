import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplePickerComponent } from './people-picker.component';
import { SwService } from '../../sw.service';
import { WithLoadingPipe } from 'src/app/shared/with-loading.pipe';

describe('PeoplePickerComponent', () => {
  let component: PeoplePickerComponent;
  let fixture: ComponentFixture<PeoplePickerComponent>;
  let swService: SwService;

  const swServiceSpy = jasmine.createSpyObj('SwService', [
    'getCharacterAndFlims',
    'getCharacters',
  ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeoplePickerComponent, WithLoadingPipe],
      providers: [{ provide: SwService, useValue: swServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
