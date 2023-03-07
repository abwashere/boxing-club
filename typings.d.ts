type base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  _id: string;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  secondaryImages: Image[];
  slug: string;
  title: string;
  subTitle: string;
  publishedAt: string;
}

interface Category extends Base {
  title: string;
}

interface Block extends Base {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Image {
  _type: 'image';
  asset: 'reference';
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

// interface Slug {
//   _type: 'slug';
//   current: string;
// }
