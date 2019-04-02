export class Task {
	assignedto: string;
	wfcontext:string;
	patinetid: string;	
    tasknum: number;
    description: string;
    stepnum: number;
    status: string;
    steps?: Step[];
}
export class Step {
	tasknum: number;
	stepnum:number;
	stepdetails:string;
	status: string;
	nextStep: Step;
}