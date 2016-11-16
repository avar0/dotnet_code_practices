import {Interfaces} from "./interfaces"

export class Predicate {

   public rule : Interfaces.IRule;
   private filterLimit: boolean = true;
   private filterContainerView: string;
   private lastComparer: string;

   constructor() {
   }

   setComparer(comparer: Interfaces.IRuleComparer) {
      if(this.lastComparer != comparer.name) {
         this.cleanFilters();
      }

      switch(comparer.behaviour) {
         case "SingleValue":
            this.filterContainerView = "./filter-single-value.html";
            this.filterLimit = true;
            this.rule.filters.push(
               {
                  dataType: this.rule.dataField.dataType,
                  suffix: "",
                  value: null
               }
            );
            break;
         case "Range":
            this.filterContainerView = "./filter-range-value.html"
            this.filterLimit = true;
            this.rule.filters.push(
               {
                  dataType: this.rule.dataField.dataType,
                  suffix: "from",
                  value: null
               }
            );

            this.rule.filters.push(
               {
                  dataType: this.rule.dataField.dataType,
                  suffix: "to",
                  value: null
               }
            );
            break;
         case "MultiValue":
            this.filterContainerView = "./filter-multiple-value.html"
            this.filterLimit = false;
            break;
      }

      this.lastComparer = comparer.name;
   }

   getFilterContainerview() : string {
      return this.filterContainerView;
   }

   addFilter() {
      if(!this.filterLimit) {
         this.rule.filters.push(
               {
                  dataType: this.rule.dataField.dataType,
                  suffix: "",
                  value: null
               }
            );
      }
   }

   removeFilter(index: number) {
      
   }

   cleanFilters() {
      this.rule.filters.length = 0;
   }

   /*Lifecycle*/
   activate(modelObject: any) {
      this.rule = modelObject;
      this.setComparer(this.rule.comparer);
   }
}

