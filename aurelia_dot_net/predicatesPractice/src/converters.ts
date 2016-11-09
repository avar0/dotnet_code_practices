import moment from 'moment'

export class DateTimeValueConverter {
   toView(value) : any {
      return moment(value).format('M/D/YYYY');
   }
}