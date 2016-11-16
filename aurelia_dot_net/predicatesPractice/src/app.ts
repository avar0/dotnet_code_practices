//import {DataFieldSelectorCustomElement} from "./components/data-field-selector"
// import {DataFieldOptions} from  "./components/interfaces"
// import {DataField} from  "./components/interfaces"
// import {DataType} from "./components/interfaces"
import {Interfaces} from "./components/interfaces"

export class App {
   public readonly helloWorldView = "./components/hello-world.html";

   constructor() {
       
   }

   getHelloWorldView() : string {
      return this.helloWorldView;
   }

   getDataFieldSelectorView() : string {
      return "./components/data-field-selector";
   }

   getPredicate() : Interfaces.IRule {
      let rule: Interfaces.IRule;
      rule = {
         dataField: {
            dataType: "text",
            fieldName: "MyProp"
         },
         comparer: {
            name: "Equals",
            behaviour: "Range"
         },
         filters: [
            // {
            //    dataType: "date",
            //    value: "Rodrigo",
            //    suffix: ""
            // }
         ]
      }

      return rule;
   }

   getGreeting() : string {
      return "Hello";
   }

   getDataFieldOptions() : Interfaces.DataFieldOptions {

      // should go and get the options from backed
      let options : Interfaces.DataFieldOptions;
      options = {
         recentOptions:[
            {
               fieldName: "option 1",
               // datatype: Interfaces.DataType.date
               dataType: "date"
            },
            {
               fieldName: "option 2",
               dataType: "number"
            }
         ],
         allOptions: [
            {
               fieldName: "option 1",
               dataType: "date"
            },
            {
               fieldName: "option 2",
               dataType: "number"
            },
            {
               fieldName: "option 3",
               dataType: "text"
            },
            {
               fieldName: "option 4",
               dataType: "text",
            }
         ]
      }

      return options;
   }
}