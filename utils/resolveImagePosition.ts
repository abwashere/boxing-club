const imagePositions = {
  left: 'object-left',
  center: 'object-center',
  right: 'object-right',
  top: 'object-top',
  'left-top': 'object-left-top',
  'right-top': 'object-right-top',
  bottom: 'object-bottom',
  'left-bottom': 'object-left-bottom',
};

export default function resolveImagePosition(image: Image): string {
  return imagePositions[image.focus];
}
