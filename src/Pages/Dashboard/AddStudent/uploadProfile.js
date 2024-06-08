import { upload } from '../../../Components/helper/axios.instance';
import { setChildFeilds } from '../../../redux/child/childSlice';


export const uploadProfilePic = (file) => async (dispatch) => {
  try {
    // Upload the file to a server or cloud storage
    const formData = new FormData();
    formData.append('image', file);

    const response = await upload('/upload/profile', formData)

    const data = response.data

    // Dispatch the URL and other metadata to the store
    dispatch(setChildFeilds({ profilePic: data.url }));
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};
