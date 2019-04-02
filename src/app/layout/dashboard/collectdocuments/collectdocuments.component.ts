import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"

import { DocumentList, Doc, DocumentsService } from '../../../shared';

@Component({
  selector: 'app-collectdocuments',
  templateUrl: './collectdocuments.component.html',
  styleUrls: ['./collectdocuments.component.css']
})
export class CollectDocumentsComponent implements OnInit {

  @Input('') parentForm : FormGroup;
  @Input('') context:string;
  @Input('') currentTask: number;
  @Output('') ontaskcomplete: EventEmitter<number>;
  optionsSelected:String[];

  showFollowUpDate : boolean = true;
  showAddNote: boolean = false;
  form: any ;

  patient = {
    documents: [
      { name: 'PWO',  selected: false, id: 12, desc: "PWO" },
      { name: 'ABN',  selected: false, id: 2, desc: "ABN"},
      { name: 'Labs',  selected: false, id: 2, desc: "Labs"},
      { name: 'CN',  selected: false, id: 2, desc: "Clinical Notes"}
    ]
  }
  

  ngOnChanges(changes: SimpleChanges) {
    if(changes['context']){
 
      if(changes['context'].isFirstChange()){
       
        // if context currentValue is available
             if(changes['context'].currentValue){
               //get document list
                this.doclistService.getDocumentsByContext(changes['context'].currentValue).then(doclist => {  
                 // reset documents array for patient.documents 
                 this.patient.documents = [];
                 // push new document list to patient.documents
                  for(var i=0; i<doclist.documents.length;i++){
                    this.patient.documents[i]=doclist.documents[i];
                  }
                  // render new check collection
                 this.form.controls.documents = this.builddocuments();
               },
               err => {
                 console.log("no context found");
               })
             } else {
               console.log("no context found");
         }           
      }
    }
 }

 constructor(private fb: FormBuilder, private doclistService: DocumentsService) {
  
    this.ontaskcomplete = new EventEmitter();
    this.buildForm();     
    // console.log(this.form.get("documents"))
 }

 ngOnInit(){
  console.log(this.currentTask);
}    

get documents(): FormArray {
  return this.form.get('documents') as FormArray;
};

buildForm(){
      this.form = this.fb.group({
         documents: this.builddocuments(),
         followup:['', Validators.required]
       });
}
builddocuments() {
  var arr = this.patient.documents.map(s => {
    return this.fb.control(s.selected);
  })
  return this.fb.array(arr);
}

submit(value:any) { 

  var f = Object.assign({}, value, {
    documents: value.documents.map((s:any, i:any) => {
    return {
      name: this.patient.documents[i].name,
      selected: s,
      desc: this.patient.documents[i].desc
    }
    })
  });
  
   console.log(f);

   this.ontaskcomplete.emit(this.currentTask + 1);
   
   this.buildForm();
}

checkChanged(e: any){
  if(e.target.checked){
    console.log(e.target.id);
  }
}

}


