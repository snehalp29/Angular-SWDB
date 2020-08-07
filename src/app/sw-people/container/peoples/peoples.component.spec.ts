import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesComponent } from './peoples.component';
import { SwService } from '../../sw.service';
import { WithLoadingPipe } from 'src/app/shared/with-loading.pipe';

describe('PeoplesComponent', () => {
  let component: PeoplesComponent;
  let fixture: ComponentFixture<PeoplesComponent>;
  let swServiceSpy = jasmine.createSpyObj('SwService', [
    'getCharacterAndFlims',
    'getCharacters',
  ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeoplesComponent, WithLoadingPipe],
      providers: [{ provide: SwService, useValue: swServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
