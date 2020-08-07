import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesComponent } from './peoples.component';
import { SwService } from '../../sw.service';
import { WithLoadingPipe } from '../../../shared/with-loading.pipe';
import { of, EMPTY } from 'rxjs';
import { constants } from '../../../shared/constants';

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
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onCharacterSelected', () => {
    it('should call swService getCharacterAndFlims if select url is not empty', () => {
      // Arrange
      const getCharacterAndFlimsSpy = swServiceSpy.getCharacterAndFlims.and.returnValue(
        of([{ test: 'test' }])
      );

      // Act
      component.onCharacterSelected('https://swapi.dev/api/people/1/');
      fixture.detectChanges();

      // Assert
      expect(getCharacterAndFlimsSpy).toHaveBeenCalledWith(
        'https://swapi.dev/api/people/1/'
      );
    });

    it('should not call swService getCharacterAndFlims if select url is empty', () => {
      // Arrange
      const getCharacterAndFlimsSpy = swServiceSpy.getCharacterAndFlims.and.returnValue(
        of([{ test: 'test' }])
      );

      // Act
      component.onCharacterSelected(constants.empty_select);
      fixture.detectChanges();

      // Assert
      expect(getCharacterAndFlimsSpy).not.toHaveBeenCalled();
      expect(component.characterFlims$).toEqual(EMPTY);
    });
  });
});
