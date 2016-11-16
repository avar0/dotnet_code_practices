import {Interfaces} from "./interfaces"

export class DataFieldSelectorCustomElement {
   
   public selectedValue : Interfaces.DataField;

   constructor(public dataFieldOptions: Interfaces.DataFieldOptions) {
      this.dataFieldOptions = dataFieldOptions;
   }

   activate(modelData: any) {
      this.dataFieldOptions = modelData;
   }

   getRecentOptions() : Interfaces.DataField[] {
      if(this.dataFieldOptions != null){
         return this.dataFieldOptions.recentOptions;
      } else{
         return [];
      }
   }

   getAllOptions() : Interfaces.DataField[] {
      if(this.dataFieldOptions != null){
         return this.dataFieldOptions.allOptions;
      } else{
         return [];
      }
   }

   getSelectedValue() {
      return this.selectedValue;
   }

   /*life cycle*/
   attached(){
      let element = $(".data-field-select"); 
      element.select2({
         placeholder:"Select a data field"
      });
   }
}