import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataProviderProvinceService } from '../../providers/data-provider-province.service';


@Component({
  selector: 'app-add-address-modal',
  templateUrl: './add-address-modal.page.html',
  styleUrls: ['./add-address-modal.page.scss'],
})
export class AddAddressModalPage implements OnInit {
  recepientForm: FormGroup;

  selectedCountry: String = "--Choose Country--";

  Province: Array<any>; 
  
  states: Array<any>;

  cities: Array<any>;

  public boolDelivery:boolean = false; // false=>unselected ; true=>selected

  constructor(private formBuilder: FormBuilder,private router:Router,private route: ActivatedRoute, public provinceService:DataProviderProvinceService) {
    this.recepientForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.maxLength(100)]],
      email: ['',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
      phone: ['',
      [
        Validators.required,
        Validators.pattern('^[0-9_-]{10,12}')
      ],
    ],
    
      address: this.formBuilder.array([

        this.formBuilder.group({floor: ['',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(10)
        ]],
        prov: ['',[Validators.required,Validators.maxLength(100)]],
        city: ['',[Validators.required,Validators.maxLength(100)]],
        street: ['',[Validators.required,Validators.maxLength(100)]]
        })
      ]),
      deliveryMethod: this.formBuilder.array([
        this.formBuilder.group({
          method:['',Validators.required]
        })
      ])
    });
  }
  ngOnInit() {
    this.Province= this.provinceService.LoadProvince();
    this.boolDelivery = true;
  }

    public change_choiceDelivery(_boolDelivery:boolean)
    {
        if(this.boolDelivery!= _boolDelivery){
          let delivery = "Courier";
          console.log("this.boolDelivery = ",delivery);
        }else{
        let delivery = "LBC Express";
        console.log("this.boolDelivery = ",delivery);
        }
    }
    
    changeCountry(country) {
      this.states = this.Province.find(cntry => cntry.name == country).states;
    }
  
    changeState(state) {
      this.cities = this.Province.find(cntry => cntry.name == this.selectedCountry).states.find(stat => stat.name == state).cities;
    }


    get name() {
      return this.recepientForm.get('name');
    }
    get email() {
      return this.recepientForm.get('email');
    }
    get phone() {
      return this.recepientForm.get('phone');
    }
    get floor() {
      return this.recepientForm.get('address.floor');
    }
    get prov() {
      return this.recepientForm.get('address.prov');
    }
    get city() {
      return this.recepientForm.get('address.city');
    }
    get street() {
      return this.recepientForm.get('address.street');
    }
    get method() {
      return this.recepientForm.get('deliveryMethod.method');
    }

    public errorMessages = {
      name: [
        { type: 'required', message: 'Name is required' },
        { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
      ],
      email: [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Please enter a valid email address' }
      ],
      phone: [
        { type: 'required', message: 'Phone number is required' },
        { type: 'pattern', message: 'Please enter a valid phone number' }
      ],
      method: [
        {type: 'required', message: 'Please select delivery method'}
      ],
      floor: [
        { type: 'required', message: 'Floor number is required' },
        { type: 'pattern', message: 'Please enter a valid phone number' }
      ],
      prov: [
        { type: 'required', message: 'Province is required' }
      ],
      city: [
        { type: 'required', message: 'City name is required' },
      ],
      street: [
        { type: 'required', message: 'Street name is required' },
        {
          type: 'pattern',
          message: 'Please enter a valid zip code'
        }
      ]
    };

  
  

  public submit(formValue:Array <any>){
    let navigationExtras: NavigationExtras = {
      state:{
        user:formValue
      }
    }
    this.router.navigate(['display-checkout-modal'], navigationExtras);
    console.log(formValue);
  }

}

