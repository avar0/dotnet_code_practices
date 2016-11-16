import {Interfaces} from "./interfaces";
export class FilterContainer {

   public filters: Interfaces.IFilter[];

   constructor() {
      this.filters = [];
   }

   getFilterView(index: number) : string {
      switch(this.filters[index].dataType){
         case "date":
            return "./value-edit-datepicker.html"
         case "text":
            return "./value-edit-text.html";
      }
   }

   /*Lifecycle*/
   activate(modelObject: any) {
      this.filters = modelObject; 
   }
}