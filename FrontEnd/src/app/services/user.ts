export class User {
  constructor(_id = '', name = '', email = '', password = '', type = '') {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
  }
  _id: string;
  name: string;
  email: string;
  password: string;
  type: string;
}
