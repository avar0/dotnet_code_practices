import {inject} from 'aurelia-framework'
import {DependencyTest} from './dependency-test';

@inject(DependencyTest)

export class App {
   message = "Welcome to Aurelia";
   constructor(public header: string, public content: string, dep: DependencyTest) {
      this.header = "Welcome";
      this.content = "Aurelia";
      console.log(DependencyTest);
   }

   created(owningView, myView) {
      console.log("created");
      console.log(owningView);
      console.log(myView);
      console.log("---------------------");
   }

   bind(bindingContext, overrideContext) {
      console.log("bind");
      console.log(bindingContext);
      console.log(overrideContext);
      console.log("---------------------");
   }

   attached(argument) {
      console.log("Attached");
      console.log(argument);
      console.log("---------------------");
   }
   
   public updateContent() : void {
      this.header = "New value";
      this.content = "New value";
   }
}