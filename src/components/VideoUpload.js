import { useState } from 'react'
// import { singleFileUpload, getSingleFiles } from '../data/api'
import { singleFileUpload } from '../data/api'
// import { ToastContainer } from 'react-toastify'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const VideoUpload = (props) => {

    const [singleFile, setSingleFile] = useState('')
    
    const SingleFileChange = (e) => {
        console.log(e.target.files)
        setSingleFile(e.target.files[0]);
    }

    const config = {
            header: { 'content-type': 'multipart/form-data' }
        }

    const uploadSingleFile = async () => {
        const formData = new FormData()
        formData.append('file', singleFile)
        await singleFileUpload(formData, config)
        toast.info('Vidéo chargée', { position: toast.POSITION.BOTTOM_RIGHT })
        // getSingleFiles()
    }


    return (
        <main role='main'>
            <div className='container text-center'>
                <div className="form-group">
                    <ToastContainer />
                </div>
                <h1 className='display-4'>UPLOADS VIDEOS</h1>
                
                <form className='form-inline d-flex justify-content-around' encType="multipart/form-data">
                    <div className='form-group'>
                        <input
                            type='file'
                            name='file'
                            className='form-control'
                            accept='video/*'
                            onChange={(e) => SingleFileChange(e)}
                        />
                    </div>
                    <div className='form-group ml-3'>
                        <button
                        className='btn btn-outline-secondary'
                        type='button'
                        onClick={() => uploadSingleFile()}>upload
                        </button>
                    </div>
                </form>
            </div>
        
        </main>
    )
}

export default VideoUpload
