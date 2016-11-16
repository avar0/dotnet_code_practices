export class FilterValue {
   
   public filtervalue: any;

   constructor() {

   }

   /*lifecycle*/
   activate(modelObject: any) {
      this.filtervalue = modelObject
   }
}