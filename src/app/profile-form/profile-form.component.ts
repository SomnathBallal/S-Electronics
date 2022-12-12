import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  profileForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(30)])
    }
  )

  constructor() { } 


  ngOnInit(): void {
  }

  submitData() {
    console.log(this.profileForm.value);

  }

  get age(): FormControl {
    return this.profileForm.get('age') as FormControl
  }

}
