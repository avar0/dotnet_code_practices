export module Interfaces {
   export interface DataFieldOptions {
      recentOptions: DataField[];
      allCategories?: DataFieldCategory[];
      allOptions?: DataField[];
   }

   export interface FilterElement {
      filterSuffix: string;
      filterValue: string;
   }

   export interface DataFieldCategory {
      name: string;
      dataFields : DataField[];
   }

   export interface DataField {
      fieldName : string;
      dataType : string;
   }

   export interface IRule {
      dataField: DataField;
      comparer: IRuleComparer;
      filters: IFilter[];
   }

   export interface IFilter {
      suffix: string;
      value: any;
      dataType: string;
   }

   export interface IRuleComparer {
      name: string;
      behaviour: string;
   }

   // export enum DataType {
   //     number = 1,
   //     text,
   //     date
   // }

   // export enum Behaviour {
   //     SingleValue,
   //     MultiValue,
   //     Range
   // }    
}