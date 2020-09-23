import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAddressModalPage } from './add-address-modal.page';

describe('AddAddressModalPage', () => {
  let component: AddAddressModalPage;
  let fixture: ComponentFixture<AddAddressModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAddressModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAddressModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
