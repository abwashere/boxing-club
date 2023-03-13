type base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface HeroSection extends Base {
  _id: string;
  _type: 'heroSection';
  title: string;
  subtitle: string;
  heroGallery: Gallery;
}

interface Post extends Base {
  _id: string;
  _type: 'post';
  body: Block[];
  categories: Category[];
  mainImage: Image;
  secondaryImages: Image[];
  slug: Slug;
  title: string;
  subtitle: Block[];
  publishedAt: string;
}

interface Article extends Base {
  _id: string;
  _type: 'article';
  slug: Slug;
  title: string;
  subtitle: string;
  body: Block[];
  section: string;
  mainImage: Image;
  table: any;
  coach: Person;
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

interface Person {
  _type: 'person';
  name: string;
  slug: Slug;
  photo: Image;
}

interface Image {
  _id: string;
  _type: 'image';
  asset: 'reference';
  alt: string;
  focus: ImagePosition;
  hotspot: Hotspot;
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

interface Hotspot {
  _type: 'hotspot';
  height: number;
  width: number;
  x: number;
  y: number;
}

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
