import Realm from 'realm';

export default class Test extends Realm.Object<Test, 'label'> {
  label!: string;
  _id!: Realm.BSON.ObjectId;
  static schema = {
    name: 'Test',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      label: 'string',
    },
  };

  constructor(realm: Realm, label: string) {
    super(realm, {_id: new Realm.BSON.ObjectId(), label});
  }
}
