import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'



// const getSingleFiles = async () => {
//     try {
//         const {data} = await axios.get(apiUrl)
//         return data
//     } catch (error) {
//         throw error
//     }
// }

//PLUS


const VideoUpload = () => {

    const [singleFile, setSingleFile] = useState('')

    const [filePath, setFilePath] = useState("");
    const [fileName, setFileName] = useState("");
    // const [duration, setDuration] = useState("");
    // const [thumbnail, setThumbnail] = useState("");

    const apiUrl = 'http://localhost:3001/api/video/'

    const singleFileUpload = async (data, options) => {
        try {
            await axios
            .post(apiUrl + 'uploadvideos', data, options)
            .then(response => {
                console.log(response)
                toast.success('Upload Successful', { position: toast.POSITION.BOTTOM_RIGHT })
                if (response.data.success) {
                    setFilePath(response.data.url)
                    setFileName(response.data.fileName)
                    console.log(filePath)
                    console.log(fileName)
        
                    const variable = {
                        url: response.data.url
                    }
                    axios
                    .post(apiUrl + 'thumbnail', variable)
                    .then(response => {
                        if (response.data.success) {
                            // setDuration(response.data.fileDuration)
                            // setThumbnail(response.data.url)
                        } else {
                            alert('Failed to make the thumbnails')
                        }
                    })

                } else {
                    alert('Failed to upload video')
                }
            })
        } catch (error) {
            throw error
        }
    }
    
    const SingleFileChange = (e) => {
        console.log(e.target.files[0])
        setSingleFile(e.target.files[0]);
    }

    const config = {
            header: { 'content-type': 'multipart/form-data' }
        }

    const uploadSingleFile = () => {
        const formData = new FormData()
        formData.append('file', singleFile)
        singleFileUpload(formData, config)
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
