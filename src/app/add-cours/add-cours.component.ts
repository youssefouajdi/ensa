import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit {
 constructor(private coursservice:CoursService) { }  
  
  cours : Cours=new Cours();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  courssaveform=new FormGroup({  
    titre:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    description:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    lien:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    etat:new FormControl('',[Validators.required]) 
  });  

  
  saveCours(saveCours: any){  
    this.cours=new Cours();     
    this.cours.titre=this.CoursTitre?.value;
    this.cours.etat=this.CoursEtat?.value;
    this.cours.desc=this.CoursDesc?.value
    this.cours.lien_cours=this.Courslien?.value;  
    this.submitted = true;  
    this.save();  
  }  
  
  save() {  
    this.coursservice.createOrUpdateCours(this.cours)  
    .then(son => {
      console.log('son', son); 
    })
    .catch(err => {
      console.log(err);
    });
    this.cours = new Cours();  
  }  
  
  get CoursTitre(){  
    return this.courssaveform.get('titre');  
  }  
  
  get CoursDesc(){  
    return this.courssaveform.get('description');  
  }  

  get CoursEtat(){  
    return this.courssaveform.get('etat');  
  } 

  get Courslien(){  
    return this.courssaveform.get('lien');  
  }  
  
  addCoursForm(){  
    this.submitted=false;  
    this.courssaveform.reset();  
  }  
}
