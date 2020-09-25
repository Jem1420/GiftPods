import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlideAComponent } from './slide-a.component';

describe('SlideAComponent', () => {
  let component: SlideAComponent;
  let fixture: ComponentFixture<SlideAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideAComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
