import { 
  Component, Input, OnInit, OnDestroy, 
  ViewChild, ViewContainerRef, 
  ComponentFactoryResolver, ComponentRef, SimpleChanges, OnChanges} from '@angular/core';
  import { DynamicAbstractComponent } from '../dynamicabs.component';
  import { DynamicMessageComponent } from '../dynamicmessage/dynamicmessage.component';
  import { DynamicChoiceComponent } from '../dynamicchoice/dynamicchoice.component';
  import { UnknownDynamicComponent } from '../unknowndynamic/unknowndynamic.component';
  
@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements OnInit, OnDestroy {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input()
  type: string;

  @Input()
  context: any;

  @Input()
  content: any;

  private mappings = {
      'message': DynamicMessageComponent,
      'choice':  DynamicChoiceComponent
  };
  private componentRef: ComponentRef<{}>;
  
  constructor(
   private componentFactoryResolver: ComponentFactoryResolver) {
  }

  getComponentType(typeName: string) {
    let type = this.mappings[typeName];
    return type || UnknownDynamicComponent;
}

ngOnInit() {
  console.log("At Dynamic Compoenent");
  if (this.type) {
      let componentType = this.getComponentType(this.type);
      
      // note: componentType must be declared within module.entryComponents
      let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);

      // set component context
      let instance = <DynamicAbstractComponent> this.componentRef.instance;
      instance.context = this.context;
      instance.content = this.content;
      // console.log(this.content);
  }
}

ngOnDestroy() {
  if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
  }
}

}
