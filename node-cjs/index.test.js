const React = require('react')
require('@testing-library/jest-dom')
const { render } = require('@testing-library/react')
const { default: Skeleton, SkeletonTheme } = require('@srmagura/react-loading-skeleton')

it('works', () => {
    render(
        <SkeletonTheme borderRadius={7}>
            <Skeleton count={5} />
        </SkeletonTheme>
    )

    const skeletons = Array.from(document.querySelectorAll('.react-loading-skeleton'))

    expect(skeletons).toHaveLength(5)

    for (const skeleton of skeletons) {
        expect(skeleton).toBeVisible()
        expect(skeleton).toHaveStyle({ borderRadius: '7px' })
    }
})
