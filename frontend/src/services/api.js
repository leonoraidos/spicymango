import axios from 'axios';

const baseURL = 'http://localhost:3000/';

export const fetchData = async (page, limit) => {
  try {
    let url = `${baseURL}data/all`;
    if (page && limit) {
      url = `${baseURL}data/paginated?page=${page}&limit=${limit}`;
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAlbumById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}album/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}