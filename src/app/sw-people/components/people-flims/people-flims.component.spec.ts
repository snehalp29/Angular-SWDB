import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleFlimsComponent } from './people-flims.component';

describe('PeopleFlimsComponent', () => {
  let component: PeopleFlimsComponent;
  let fixture: ComponentFixture<PeopleFlimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleFlimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleFlimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
