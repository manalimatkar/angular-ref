import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Patient,PatientService} from '../../../shared';


@Component({
  selector: 'app-patientinfo',
  templateUrl: './patientinfo.component.html',
  styleUrls: ['./patientinfo.component.css']
})
export class PatientInfoComponent implements OnInit {

  @Input('') patient: Patient;
	// patientInfo: Patient;
  constructor(private service: PatientService) {}

  ngOnChanges(changes:SimpleChanges){
		if(changes['patient']) {		
			console.log(changes['patient'].currentValue)
			if(changes['patient'].isFirstChange()){
				// console.log(changes['patient'].currentValue);
			} else{
				var newpat:Patient = changes['patient'].currentValue;
				// console.log(newpat.name);
				// console.log(changes['patient'].currentValue);
				// console.log("change after firstchange");
			}
		} else{
			console.log("No patient to display");
		}
	}
  
  ngOnInit() {
    // console.log(this.patient);
  }

}
