import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AnnonceService } from '../_services/annonce.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-my-annonces',
  templateUrl: './my-annonces.component.html',
  styleUrls: ['./my-annonces.component.scss']
})
export class MyAnnoncesComponent implements OnInit {
  currentUser: any;
  annonces : any;

  constructor(private annonceService : AnnonceService, private token: TokenStorageService) { }

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

  clickMethod(id_ann: string) {
    if(confirm("Are you sure to delete "+id_ann)) {
      this.annonceService.deleteAnnonce(id_ann).subscribe(
        data => {
        },
        err => {
        }
      );
      console.log("Implement delete functionality here");
    }
  }

}
