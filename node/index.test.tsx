import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Skeleton, {
  SkeletonTheme,
  SkeletonProps,
  SkeletonThemeProps,
} from 'react-loading-skeleton';

it('works', () => {
  render(
    <SkeletonTheme borderRadius={7}>
      <Skeleton count={5} />
    </SkeletonTheme>
  );

  const skeletons = Array.from(
    document.querySelectorAll('.react-loading-skeleton')
  );

  expect(skeletons).toHaveLength(5);

  for (const skeleton of skeletons) {
    expect(skeleton).toBeVisible();
    expect(skeleton).toHaveStyle({ borderRadius: '7px' });
  }

  const skeletonProps: SkeletonProps = { count: 1 };
  const skeletonThemeProps: SkeletonThemeProps = { highlightColor: 'black' };
});
