import { Component, OnInit } from '@angular/core';

import { CSScriptService } from '../../shared';

@Component({
  selector: 'app-cs-dashboard',
  templateUrl: './cs-dashboard.component.html',
  styleUrls: ['./cs-dashboard.component.css']
})
export class CSDashboardComponent implements OnInit {
moduleScript: any;
contentType:any;
content:any;
reasons:any;
currentModule:string = "callback";
currentStep:string ="introTwo";
searchArray = ['AgentName','george'];
replaceArray = ['Hal', 'UI Magic'];
stepScript:any;
  constructor(private scriptService: CSScriptService) { }

  ngOnInit() {
    this.scriptService.getModule(this.currentModule).then(modulescript => {
      console.log(modulescript);
      this.moduleScript = modulescript;
      this.content = this.moduleScript.steps[0].content;
      this.contentType =  this.moduleScript.steps[0].contentType;
      // Find the script by step name
      // this.stepScript = this.moduleScript.steps.find(element => element.step == this.currentStep);
      // console.log(this.stepScript);
      // Replace mustashe text
      this.content.forEach(element => {
        element.text = this.replaceContent(element.text)
      });

      if (this.contentType == "callbackform") {
          this.reasons = this.moduleScript.steps[0].callbackReason;
        //  console.log(this.reasons);
      }   
    });
  }

  replaceContent(raw: string): string {
    let output: string = raw;
    var mapping = {};
    this.searchArray.forEach((e,i) => mapping[`{{${e}}}`] = this.replaceArray[i]);
    output = output.replace(/\{\{\w+\}\}/ig, n => mapping[n]);
    return output;
  }

}
