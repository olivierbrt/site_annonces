import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { UserService } from '../_services/user.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  modalRef: MdbModalRef<ProfileModalComponent>;

  constructor(private token: TokenStorageService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  openModal() {
    let copy =JSON.parse(JSON.stringify(this.currentUser))
    this.modalRef = this.modalService.open(ProfileModalComponent, { data : { user : copy }});
    this.modalRef.onClose.subscribe((isSuccessful: boolean) => {
      if(isSuccessful){
        this.token.saveUser(copy);
        window.location.reload();
      }
    });
  }
}