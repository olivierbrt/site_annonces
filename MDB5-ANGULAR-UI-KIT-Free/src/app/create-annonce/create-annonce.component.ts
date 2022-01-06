import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { TokenStorageService } from '../_services/token-storage.service';
import { AnnonceService } from '../_services/annonce.service';

@Component({
  selector: 'app-create-annonce',
  templateUrl: './create-annonce.component.html',
  styleUrls: ['./create-annonce.component.scss']
})
export class CreateAnnonceComponent implements OnInit {
  currentUser: any;
  form: any = {
    titre: null,
    description: null,
    prix: null,
    photo: null
  };
  isSuccessful = false;
  isCreateFailed = false;
  errorMessage = '';
  dateNow : Date = new Date();

  constructor(private token: TokenStorageService, private annService : AnnonceService) { }

  //myDate = new Date();

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  onSubmit(): void {
    console.log(this.dateNow.toISOString());
    const { titre,  description, prix, photo } = this.form;
    this.annService.createAnnonce(formatDate(this.dateNow, 'yyyy-MM-dd', 'en-US'), titre, description, prix, photo).subscribe(
      data => {
        this.isSuccessful = true;
        this.isCreateFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isCreateFailed = true;
      }
    );
  }
}
