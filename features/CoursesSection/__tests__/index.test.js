import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CourseSection from '../index';
import mockedArticles from './coursesArticlesMock';

jest.mock('@/lib/sanity.client', () => ({
  client: {
    fetch: jest.fn(),
  },
}));

describe('CourseSection', () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      articles: mockedArticles,
    };
  });

  it('should render properly', async () => {
    const { findByText } = render(<CourseSection {...expectedProps} />);
    const title = await findByText('Nos cours');

    expect(title).toBeInTheDocument();
  });

  it('should render the correct amount of images and titles', async () => {
    const { findAllByRole } = render(<CourseSection {...expectedProps} />);
    const images = await findAllByRole('img');
    const titles = await findAllByRole('heading', { level: 3 });
    const titlesList = titles.map(title => title.innerHTML);

    const expectedImagesLength = expectedProps.articles.length;
    const expectedTitles = expectedProps.articles.map(article => article.title);

    expect(images.length).toEqual(expectedImagesLength);
    expect(titlesList).toEqual(expectedTitles);
  });
});
