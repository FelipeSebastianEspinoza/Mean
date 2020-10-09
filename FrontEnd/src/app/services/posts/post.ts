export class Post {
  constructor(title = '', image = '') {
    this.title = title;
    this.image = image;
  }

  title: string;
  image: string;
}
