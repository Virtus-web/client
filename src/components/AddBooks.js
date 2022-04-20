// import { Component } from 'react'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import axios from 'axios'


// class VideoUpload extends Component {

//     state = {
//         selectedVideos: null,
//         loaded: 0
//     }
    
//     handleSubmit = (e) => {

//         let data = new FormData();
//         const config = {
//             header: { 'content-type': 'multipart/form-data' }
//         }
//         for (let i = 0; i < this.state.selectedVideos.length; i++) {
//             data.append('file', this.state.selectedVideos[i]);
//         }

//         axios
//         .post('/api/video/uploadvideos', data, config)
//         .then(response => {
//             toast.success('Upload Successful');
//         })
//         .catch(error => {
//         toast.error(`Upload Fail with status: ${error.statusText}`);
//         })
//     }

//     render() {

//         return (
//             <main role='main'>
//                 <div className='container text-center'>
//                     <div className="form-group">
//                         <ToastContainer />
//                     </div>
//                     <h1 className='display-4'>UPLOADS VIDEOS</h1>
                    
//                     <form className='form-inline d-flex justify-content-between' method="post" name="video" action="/api/video/uploadvideos" encType="multipart/form-data">
//                         <div className='form-group'>
//                             <input
//                                 type='file'
//                                 name='file'
//                                 className='form-control'
//                                 accept='video/*'
//                                 // multiple
//                                 // required
//                                 // onChange={this.handleChange.bind(this)}
//                             />
//                         </div>
//                         <div className='form-group ml-3'>
//                             <button
//                             className='btn btn-outline-secondary'
//                             type='button'
//                             onClick={this.handleSubmit.bind(this)}>upload
//                             </button>
//                         </div>
//                     </form>
//                 </div>
            
//             </main>
//         )
//     }
// }

// export default VideoUpload
