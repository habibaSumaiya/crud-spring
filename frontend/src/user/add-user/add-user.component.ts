import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService, private router: Router) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      gender: ['',[ Validators.required]],
      email: ['',[ Validators.required]],
      address: ['',[ Validators.required]],
      phone: ['',[ Validators.required]]
    });
  }

  ngOnInit() {
    
  }

  onSubmit() {
    this.userService.createuser(this.userForm.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/user/view-user']);
    });

  }

  


}
