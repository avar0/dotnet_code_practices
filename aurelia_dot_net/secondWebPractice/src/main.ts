import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
   aurelia.use
   .defaultBindingLanguage()
   .defaultResources()
   .developmentLogging()
   .rounter()
   .history()
   .eventAggregator();
   aurelia.start().then(() => aurelia.setRoot());
}