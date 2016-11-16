import moment from 'jspm_packages/npm/moment@2.15.2';
import numeral from 'jspm_packages/npm/numeral@1.5.3';

export class DateFormatValueConverter {

   constructor() {
      var x : Date = new Date();
      console.log(x)
      console.log(numeral(x).format('D/M/YYYY'));
   }
   toView(value) {
      //return moment(value).format('dddd');
   }
}

export class CurrencyFormatValueConverter {
   
   constructor () {
      // console.log(numeral(val).format("($0,0.00)"));
   }
   toView(val) {
      
   }

}