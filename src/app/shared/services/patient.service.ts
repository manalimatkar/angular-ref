import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

const patientsPromise: Promise<Patient[]> = Promise.resolve([
   {
    patientid: "12", 
    name: "Mike Wilson",
    dob: "02/12/65",
    empgroup: "United Healthcare",
    grouptype: "PPO",
    program: "PumpSuppliesCommercial",
    eligibilitystatus: "active",
    existingccspatient: "Yes",
    phyName:"Dr Ashley",
    phyPh: 1234567890
    },
  {
    patientid: "123", 
    name: "Mitchel Drew",
    dob: "12/12/76",
    empgroup: "BCBS of Texas",
    grouptype: "PPO",
    program: "PumpSuppliesMedicare",
    eligibilitystatus: "active",
    existingccspatient: "Yes",
    phyName:"Dr Ashley",
    phyPh: 1234567890
  },
   {
    patientid: "12345", 
    name: "John Dawson",
    dob: "12/12/76",
    empgroup: "Sefco",
    grouptype: "PPP",
    program: "PumpSuppliesCommercial",
    eligibilitystatus: "active",
    existingccspatient: "No",
    phyName:"Dr Ashley",
    phyPh: 1234567890
  }
]);

@Injectable()
export class PatientService {

  // get all users
  getPatients() {
    return patientsPromise;
  }

  // find a specific user
  getPatient(patientid:string) {
    return patientsPromise.then(patients => patients.find(patient => patient.patientid === patientid));
  }

}