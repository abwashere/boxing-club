type base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface HeroSection extends Base {
  _id: string;
  title: string;
  subtitle: string;
  heroGallery: Gallery;
}

interface Post extends Base {
  _id: string;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  secondaryImages: Image[];
  slug: Slug;
  title: string;
  subtitle: Block[];
  publishedAt: string;
}

interface Category extends Base {
  _id: string;
  title: string;
}

interface Block extends Base {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Gallery {
  _type: 'gallery';
  images: Image[];
  display: string;
  zoom: boolean;
}

interface Image {
  _type: 'image';
  asset: 'reference';
  alt: string;
  focus: ImagePosition;
}

type ImagePosition =
  | 'left'
  | 'center'
  | 'right'
  | 'top'
  | 'left-top'
  | 'right-top'
  | 'bottom'
  | 'left-bottom';

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  _type: 'slug';
  current: string;
}

type UiColor =
  | 'gray'
  | 'gray-light'
  | 'gray-dark'
  | 'yellow'
  | 'white'
  | 'black'
  | 'transparent';
