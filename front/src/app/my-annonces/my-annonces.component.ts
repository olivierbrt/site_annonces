import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AnnonceService } from '../_services/annonce.service';
import { HttpErrorResponse } from '@angular/common/http';

import { AnnonceModalComponent } from '../annonce-modal/annonce-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-my-annonces',
  templateUrl: './my-annonces.component.html',
  styleUrls: ['./my-annonces.component.scss']
})
export class MyAnnoncesComponent implements OnInit {
  currentUser: any;
  annonces : any;
  modalRef: MdbModalRef<AnnonceModalComponent>;

  constructor(private annonceService : AnnonceService, private token: TokenStorageService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    if(this.currentUser){
      this.annonceService.getMyAnnonces().subscribe(data => {
        this.annonces = data;
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
    }
  }

  openModal(infoAnnonce : any) {
    let copy =JSON.parse(JSON.stringify(infoAnnonce))
    delete copy.id_user;
    delete copy.state;
    delete copy.date_pub;
    this.modalRef = this.modalService.open(AnnonceModalComponent, { data : { annonce : copy }});
    this.modalRef.onClose.subscribe((isSuccessful: boolean) => {
      if(isSuccessful){
        window.location.reload();
      }
    });
  }

  clickMethod(id_ann: string) {
    if(confirm("Are you sure to delete "+id_ann)) {
      this.annonceService.deleteAnnonce(id_ann).subscribe(
        data => {
          console.log(data);
          window.location.reload();
        },
        err => {
          console.log(err);
        }
      );
      console.log("Implement delete functionality here");
    }
  }

}
