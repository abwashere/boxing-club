import { client } from '@/lib/sanity.client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function getUrlFor(source: Image) {
  return builder.image(source);
}

export default getUrlFor;
