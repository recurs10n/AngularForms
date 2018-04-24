import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { FormPosterService } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages = ['English', 'Spanish', 'French', 'Other'];
  model = new Employee( 'Darla', 'Smith', true, 'w2', 'default' );
  hasPrimaryLanguageError = false;
  
  constructor(private formPoster: FormPosterService) 
  { 

  }

  ngOnInit() {
  }

  firstNameToUpperCase( value:string ){
    if( value.length > 0 )
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    else
      this.model.firstName = value;
  }

  validatePrimaryLanguage(value)
  {
    this.hasPrimaryLanguageError = value === 'default';
  }

  submitForm( form: NgForm ): boolean {
    // validate form
    this.validatePrimaryLanguage( this.model.primaryLanguage );
    if( this.hasPrimaryLanguageError )
      return;

    this.formPoster.postEmployeeForm( this.model )
      .subscribe(
        data => console.log( 'success: ', data ),
        err => { console.log( 'error: ', err ) }
      );

      return false;
  }
}
