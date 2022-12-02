// import {Realm, createRealmContext} from '@realm/react';
// export class Grant extends Realm.Object {
//     _id!: Realm.BSON.ObjectId;
//     amount!: number;
//     countries!: string[];
//     deadline!: string;
//     description!: string;
//     duration!: string;
//     title!: string;



//     // the Task.generate() method creates Grant objects with fields with default values
//     static generate(amount: number, description: string, duration: string, title: string) {
//       return {
//         _id: new Realm.BSON.ObjectId(),
//         amount,
//         countries: ["country1"],
//         deadline: new Date(),
//         description,
//         duration,
//         title

//       };
//     }
//     // To use a class as a Realm object type, define the object schema on the static property "schema".
//     static schema = {
//       name: 'Grant',
//       properties: {
//         _id: 'objectId',
//         amount: 'string',
//         countries: 'string',
//         deadline: 'date',
//         description: 'string',
//         duration: 'string',
//         title: 'string'
//       },
//       primaryKey: '_id',
//     };
//   }
