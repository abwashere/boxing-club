type base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  body: Block[];
  categories: Category[];
  mainImage: Image;
  secondaryImages: Image[];
  slug: string;
  title: string;
  subTitle: string;
  publishedAt: string;
}
