import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-annonce-modal',
  templateUrl: './annonce-modal.component.html',
  styleUrls: ['./annonce-modal.component.scss']
})

export class AnnonceModalComponent {
  annonce : any;

  constructor(public modalRef: MdbModalRef<AnnonceModalComponent>) { }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }

}
