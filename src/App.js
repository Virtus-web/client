import VideoUpload from './components/VideoUpload'
import VideoList from './components/VideoList'
import Header from './components/Header'

function App() {
    return (
        <div className='container'>
            <Header />
            <VideoUpload />
            <VideoList />
        </div>
    )
}

export default App
