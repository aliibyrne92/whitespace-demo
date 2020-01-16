/* eslint-disable no-console */
import { LightningElement, api, track } from 'lwc';


export default class AliTest extends LightningElement {
  @api prop1 = "";
  @api prop2 = "";
  @track name;

 mapMarkers = [
        {
            location: {
              Street: "All Hallows Square",
                City: "Dublin",
                Country: 'Ireland',
            },

            icon: 'custom:custom26',
            title: "Home",
        },
        {
            location: {
              Street: "Dublin City University Glasnevin",
                City: 'Dublin',
                Country: 'Ireland',
            },

            icon: 'custom:custom96',
            title: 'DCU',
        },
    ];
    markersTitle = "Côte d'Azur";


  valueUpdate(event) {
    console.log('valueUpdate: ', event.target.value);
    this.prop2 = event.target.value;
  }

  get uppercaseProp2() {
    return this.prop2.toUpperCase();
  }
}