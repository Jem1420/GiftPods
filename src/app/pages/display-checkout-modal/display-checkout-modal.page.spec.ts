import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayCheckoutModalPage } from './display-checkout-modal.page';

describe('DisplayCheckoutModalPage', () => {
  let component: DisplayCheckoutModalPage;
  let fixture: ComponentFixture<DisplayCheckoutModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCheckoutModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayCheckoutModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
