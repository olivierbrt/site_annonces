import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AnnonceService } from '../_services/annonce.service';

@Component({
  selector: 'app-annonce-modal',
  templateUrl: './annonce-modal.component.html',
  styleUrls: ['./annonce-modal.component.scss']
})

export class AnnonceModalComponent {
  annonce : any;
  isSuccessful : boolean = false;
  message: string;
  errorMessage: string;

  constructor(private annonceService : AnnonceService, public modalRef: MdbModalRef<AnnonceModalComponent>) { }

  close(): void {
    this.modalRef.close(this.isSuccessful)
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    this.annonceService.updateAnnonce(this.annonce.id_ann,this.annonce.titre, this.annonce.description, this.annonce.prix, this.annonce.photo).subscribe(
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
