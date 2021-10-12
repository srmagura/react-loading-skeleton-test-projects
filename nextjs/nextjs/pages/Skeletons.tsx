import Skeleton, { SkeletonTheme } from '@srmagura/react-loading-skeleton'

export const Skeletons = () => (
    <div>
        <Skeleton
            count={5}
            width={500}
            highlightColor="purple"
            baseColor="blue"
            // style={{ margin: '5px' }}
        />
        <SkeletonTheme baseColor="purple" highlightColor="blue">
            <Skeleton
                count={5}
                width={500}
                // style={{ margin: '5px' }}
            />
        </SkeletonTheme>
    </div>
)
