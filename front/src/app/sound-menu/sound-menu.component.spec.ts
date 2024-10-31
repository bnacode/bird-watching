import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundMenuComponent } from './sound-menu.component';

describe('SoundMenuComponent', () => {
  let component: SoundMenuComponent;
  let fixture: ComponentFixture<SoundMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
