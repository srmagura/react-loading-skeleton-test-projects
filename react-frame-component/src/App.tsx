import './App.css'
import Frame from 'react-frame-component'
import Skeleton, { SkeletonTheme } from '@srmagura/react-loading-skeleton'

function App() {
    return (
        <div className="App">
            <h1>react-frame-component Test</h1>
            <SkeletonTheme highlightColor="lemonchiffon">
                <Frame head={<link href="skeleton.css" rel="stylesheet" />}>
                    <Skeleton count={5} />
                </Frame>
            </SkeletonTheme>
        </div>
    )
}

export default App
