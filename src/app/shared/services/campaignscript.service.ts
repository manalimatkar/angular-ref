import {Injectable} from '@angular/core';

const csscriptPromise : Promise <any[] > = Promise.resolve([
  {
    module: "greetings",
    steps: [
      {
        step: "greetingIntroMinor",
        contentType: "message",
        content: [
          {
            text: "Patient is a minor. You must ask to speak to their parent or guardian.",
            type: "note"
          }, {
            text: "<strong>Hello!</strong> This is {{AgentName}} with CCS Medical",
            type: "agent"
          }, {
            text: "I am calling with information about a new <strong>free</strong> healthcare benefit, may I speak to the" +
                " parent or guardian please",
            type: "agent"
          }
        ],
        showButtons: [
          {
            title: "Yes",
            onselect: {
              module: "greetings",
              step: "introTwo"
            }
          }, {
            title: "No",
            onselect: {
              module: "callback",
              step: "scheduleCallback"
            }
          }
        ]
      }, {
        step: "introTwo",
        contentType: "message",
        content: [
          {
            text: "I am calling with information about a new healthcare benefit, You should have re" +
                "cieved a letter from employer",
            type: "agent"
          }, {
            text: "If the member is ready to move to the offer, click the Yes button for employment" +
                " verification. If the member is not interested then click the Not Interested but" +
                "ton to offer rebuttals.",
            type: "note"
          }
        ],
        showButtons: [
          {
            title: "Yes",
            onselect: {
              module: "greetings",
              step: "employeeVerification"
            }
          }, {
            title: "Not Intrested",
            onselect: {
              module: "rebuttals",
              step: "notIntrested"
            }
          }
        ]
      }
    ]
  },
  {
    module: "callback",
    steps: [
      {
        step: "callback",
        contentType: "callbackform",
        content: [
          {
            text: "What is the date and time to call back",
            type: "agent"
          }, {
            text: "Indicate Why Patient is not avaialble",
            type: "note"
          }
        ],
        callbackReason: [
          {
            code: 101,
            option: "Not Authorised User"
          }, {
            code: 102,
            option: "Not a good time"
          }, {
            code: 103,
            option: "Not Available"
          }, {
            code: 104,
            option: "Busy"
          }
        ],
        showButtons: [
          {
            title: "Complete Call",
            onselect: {
              module: "patientSearch",
              step: "home"
            }
          }
        ]
      }
    ]
  }
]);
@Injectable()
export class CSScriptService {
  getModule(moduleName : String) {
    return csscriptPromise.then(scripts => scripts.find((script : any) => script.module === moduleName));
  }
}
