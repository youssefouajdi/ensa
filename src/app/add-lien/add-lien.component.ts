import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Liens } from '../liens';
import { LiensService } from '../liens.service';

@Component({
  selector: 'app-add-liens',
  templateUrl: './add-liens.component.html',
  styleUrls: ['./add-liens.component.css']
})
export class AddLiensComponent implements OnInit {
 constructor(private liensservice:LiensService) { }  
  
  liens : Liens=new Liens();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  lienssaveform=new FormGroup({  
    nom:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    prenom:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    mdp:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    email:new FormControl('',[Validators.required,Validators.email]),  
  });  

  
  saveLiens(saveLiens: any){  
    this.liens=new Liens();     
    this.liens.titre=this.LiensTitre?.value
    this.liens.etat=this.LiensEtat?.value;
    this.liens.descritpion=this.LiensDesc?.value
    this.liens.lien_liens=this.Lienslien?.value;  
    this.submitted = true;  
    this.save();  
  }  
  
  save() {  
    this.liensservice.createOrUpdateLien(this.liens)  
    .then(son => {
      console.log('son', son); 
    })
    .catch(err => {
      console.log(err);
    });
    this.liens = new Liens();  
  }  
  
  get LiensTitre(){  
    return this.lienssaveform.get('titre');  
  }  
  
  get LiensDesc(){  
    return this.lienssaveform.get('description');  
  }  

  get LiensEtat(){  
    return this.lienssaveform.get('etat');  
  } 

  get Lienslien(){  
    return this.lienssaveform.get('lien');  
  }  
  
  addLiensForm(){  
    this.submitted=false;  
    this.lienssaveform.reset();  
  }  
}
