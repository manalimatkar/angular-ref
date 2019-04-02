import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NestedFormsRoutingModule } from './nested-forms-routing.module';
import { NestedFormsComponent } from './nested-forms.component';
import { AddressComponent } from './address/address.component';
import { ContactConsentComponent } from './contact-consent/contact-consent.component';
import { PhoneComponent } from './contact-consent/phone/phone.component';
import { EmailComponent } from './contact-consent/email/email.component';
import { OptionSelectComponent } from '../../shared/components/option-select/option-select.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NestedFormsRoutingModule
  ],
  declarations: [ NestedFormsComponent, 
    AddressComponent, 
    ContactConsentComponent, 
    PhoneComponent, 
    EmailComponent,
    OptionSelectComponent
   ]
})
export class NestedFormsModule { }
