import { Component, Input } from '@angular/core';
import { DynamicContentComponent } from './dynamic-content.component';

@Component({
    selector: 'dynamic-component-demo',
    template: `
    <div class="row">
        <div class="col-md-12">
            <app-dynamic-content type="{{deviceselection[0].type}}" [context]="deviceselection[0].context" [content]=[deviceselection[0].content]></app-dynamic-content>
        </div>
    </div>
        <hr/>
    <div class="row">
        <div class="col-md-12">
            <app-dynamic-content type="{{deviceselection[1].type}}" [context]="deviceselection[1].context" [content]=[deviceselection[1].content]></app-dynamic-content>
        </div>
    </div>
    `
})
export class DynamicContentComponentDemo {
    currentContext: any = "MeterType";
    deviceselection: any =[
        {
           type: "message",
           context: "MeterType",
           content:[            
                   {   
                       option: "Cellular",
                       value: "1",
                       text: "Cellular meters do not require a mobile phone, wireless plan, or phone app. Results are automatically sent to the cloud",
                       onselectcontext: "CellularMeterFeatureOne"
                   },
                  {  
                     option: "Bluetooth",
                     value: "2",
                     text: "Bluetooth meters must be paired with  a mobile phone or tablet with WiFi or a wireless plan. Results are sent through a mobile app to the cloud",
                     onselectcontext: "BluetoothMeterFeatureOne"
                   } 
               ]
        },
        {
            type: "choice",
            context: "CellularMeterFeatureOne",
            content:[
                {
                    option: "TalkingMeter",
                    value: "1",
                    text: "Do you want a talking meter?",
                    onselectcontext: "TalkingCellularMeter"
                },
                {
                    option: "MobileMeter",
                    value: "2",
                    text: "Do you want to use a mobile app for your meter?",
                    onselectcontext: "MobileCellularMeter"
                },
                {
                    option: "SpanishMeter",
                    value: "3",
                    text: "Do you need a meter that can convert to Spanish?",
                    onselectcontext: "SpanishCellularMeter"
                }
               
            ]
        },
        {
            type: "choice",
            context: "BluetoothMeterFeatureOne",
            content:[
                {
                    option: "BolusDosingCalulatorMeter",
                    value: "1",
                    text: "Do you want a bolus dosing calculator?",
                    onselectcontext: "BlueToothBolusDosingCalulatorMeter"
                },
                {
                    option: "ColorCodedRageMeter",
                    value: "2",
                    text: "Do you want a color coded range indicator?",
                    onselectcontext: "BlueToothColorCodedRageMeter"
                },
                {
                    option: "AlternateSiteTestingMeter",
                    value: "3",
                    text: "Do you use alternate sites when testing?",
                    onselectcontext: "BlueToothAlternateSiteTestingMeter"
                }               
            ]
        }

    ]

    contextone: any = {
        context: 'sample1',
        text: 'Can I talk to John'
    }
    contexttwo: any = {
        context: 'sample2',
        text: 'Mike'
    }
    contextthree: any = {
        context: 'sample3',
        text: 'Mary'
    }
    context: any = {
        text: 'Manali'
    }

}