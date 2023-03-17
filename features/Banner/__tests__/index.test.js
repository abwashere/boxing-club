import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Banner from '../index';

jest.mock('@/lib/sanity.client', () => ({
  client: {
    fetch: jest.fn(),
  },
}));

describe('Banner', () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      hero: {
        _id: '1',
        _type: 'heroSection',
        title: 'VBC Homepage',
        subtitle: 'Force courage et détermination',
        heroGallery: {
          images: [
            {
              _id: 'image-Tb9Ew8CXIwaY6R1kjMvI0uR1-2000x3000-jpg',
              _type: 'image',
              alt: 'Alt text for image 1',
              focus: 'top',
              hotspot: 'Hotspot',
              asset: {
                _id: '123',
                url: 'https://example.com/image1.jpg',
              },
            },
            {
              _id: 'image-Tb9Ew8CXIwaY6R1kjMvI0uR2-2000x3000-jpg',
              _type: 'image',
              alt: 'Alt text for image 2',
              focus: 'top',
              hotspot: 'Hotspot',
              asset: {
                _id: '456',
                url: 'https://example.com/image2.jpg',
              },
            },
          ],
        },
      },
    };
  });

  it('should render properly', async () => {
    const { findByText, findByRole } = render(<Banner {...expectedProps} />);
    const title = await findByText('VBC Homepage');
    const subtitle = await findByText('Force courage et détermination');
    const image = await findByRole('img');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
