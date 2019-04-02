export class History{
	patientid: string;	
    wfcontext: string;
    notes: [{
    	text: string;
		createdat: string;
		writtenby: string;
    }];   
}
export class Note{
	text: string;
	createdat: string;
	writtenby: string;
}