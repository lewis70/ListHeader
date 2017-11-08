import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

    lists: any = [
        {
            listTitle: "Puppies",
            items: [
                {
                    itemDesc: "Labradoodle",
                    Info: {
                        price: "$750",
                        location: "Indianapolis, IN"
                    }
                },
                {
                    itemDesc: "German Shepard",
                    Info: {
                        price: "$1,250",
                        location: "Greenwood, IN"
                    }
                },
                {
                    itemDesc: "Rotwieller",
                    Info: {
                        price: "$500",
                        location: "Richmond, IN"
                    }
                },
                {
                    itemDesc: "Boxer",
                    Info: {
                        price: "$500",
                        location: "Indianapolis, IN"
                    }
                }
            ]
        },
        {
            listTitle: "Kittens",
            items: [
                {
                    itemDesc: "Orange",
                    Info: {
                        price: "$75",
                        location: "Greenwood, IN"
                    }
                },
                {
                    itemDesc: "Calico",
                    Info: {
                        price: "$100",
                        location: "Osgood, IN"
                    }
                },
                {
                    itemDesc: "Black",
                    Info: {
                        price: "$75",
                        location: "Indianapolis, IN"
                    }
                },
                {
                    itemDesc: "Munchkin",
                    Info: {
                        price: "$150",
                        location: "Fishers, IN"
                    }
                }
            ]
        }
    ];


    constructor() {
        console.log('Hello DataProvider Provider');
    }

}
