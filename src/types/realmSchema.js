import {ObjectId} from 'bson';

class Grant extends Realm.Object {

  constructor({
    // partition: string, 
    amount : number,
    countries : [],
    deadline,
    description,
    duration ,
    imageUrl ,
    title,
    id = new ObjectId(),
  }) {
    
    this._id = id;
    // this._partition = partition;
    this.amount = amount;
    this.countries = countries;
    this.deadline = deadline;
    this.description = description;
    this.duration = duration;
    this.imageUrl = image_url;
    this.title = title;

  }

  static schema = {
    name: 'Grant',
    properties: {
      _id: 'objectId',
      // _partition: 'string', 
      amount: 'string',
      countries: 'array',
      description: 'string',
      duration: 'string',
      imageUrl: 'string'

    },
    primaryKey: '_id',
  };
}

export {Grant};