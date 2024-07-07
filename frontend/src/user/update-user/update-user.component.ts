import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {

  updateViewUser: FormGroup;
  id: number = this.activeRoute.snapshot.params['id'];

  constructor(private formbuilder: FormBuilder,
    private userservice: UserService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.updateViewUser = this.formbuilder.group({
      name: ['',[ Validators.required]],
      gender: ['',[ Validators.required]],
      email: ['',[ Validators.required]],
      address: ['',[ Validators.required]],
      phone: ['',[ Validators.required]]

    })
  }

  ngOnInit() {
    this.getUserById();

  }
  getUserById() {
    this.userservice.getUserById(this.id).subscribe(data => {
      console.log(data);
      this.updateViewUser.patchValue(data)
    })
  }

  update() {

    this.userservice.updateUser(this.id,this.updateViewUser.value).subscribe(data => {
      console.log(data);
      if (data.id != null) {

        this.router.navigate(['/user/view-user']);
      }
     
    })
  }






}
