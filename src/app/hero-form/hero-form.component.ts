import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;


  onSubmit() { this.submitted = true; }


  newHero() {
    this.model = new Hero(42, '', '');
  }

  skyDog(): Hero {
    const myHero =  new Hero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  getFormData(f: NgForm ) {
    // console.log(f.controls['name1']?.value)

    // Object.values(f.controls).forEach( ctl => {
    //       console.log(ctl);
    // } );
    
    console.log(f.value)
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form?.controls?.name?.value;
    return form && form.controls.name &&
    form.controls.name.value +", "+ form.controls.power.value; // Dr. IQ
  }

  /////////////////////////////

}
