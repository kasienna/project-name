import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public userForm: FormGroup;
  public userSaved = false;

  constructor(private fb: FormBuilder,
          private formService: FormService) {
        }

  ngOnInit() {
    const user = this.formService.getUser();
    this.userForm = this.fb.group({
      'first_name': [user.first_name, Validators.required],
      'last_name': [user.last_name, Validators.compose([Validators.required, Validators.min(1), Validators.max(99)])],
      'age': [user.age, Validators.compose([Validators.required, Validators.min(1), Validators.max(99)])],
      'validate': []
    });

  }

  saveUser() {
    if (this.userForm.invalid) {
      return;
    }

    this.formService.saveUser(this.userForm.value);
    this.userSaved = true;
  }

  reset() {
    this.userForm.reset();
    this.formService.clearUser();
  }

}
