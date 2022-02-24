import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent {
  user : any;
  isSuccessful : boolean = false;
  message: string;
  errorMessage: string;

  constructor(private userService : UserService, public modalRef: MdbModalRef<ProfileModalComponent>) { }

  close(): void {
    this.modalRef.close(this.isSuccessful)
  }

  onSubmit(form: NgForm): void {
    this.userService.updateUser(form.value.mail, form.value.username, form.value.nom, form.value.prenom).subscribe(
      data => {
        this.isSuccessful=true;
        this.message=data.message;
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
