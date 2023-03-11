import {Realm} from '@realm/react';
export class Grant extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  category!: string;
  countries!: string;
  deadline!: Date;
  description!: string,
  subject!: string;
  title!: string;


  static generate(description: string, userId?: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      category: "category placeholder",
      countries: "countries placeholder",
      deadline: new Date(),
      description: "description placeholder",
      subject, 
      title,
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'Grant',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      category: 'string',
      countries: 'string',
      deadline: 'date',
      description: 'string',
      subject: 'string',
      title: 'title',
    },
  };
}
