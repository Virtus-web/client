import axios from 'axios';

const apiUrl = 'http://localhost:3001/api/video/uploadvideos'

export const singleFileUpload = async (data, options) => {
    try {
        await axios.post(apiUrl, data, options)
    } catch (error) {
        throw error
    }
}

export const getSingleFiles = async () => {
    try {
        const {data} = await axios.get(apiUrl)
        return data
    } catch (error) {
        throw error
    }
}
