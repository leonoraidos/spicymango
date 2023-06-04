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

export const fetchCreateAlbum = async (userId, albumName) => {
  console.log('in api service making req', userId, albumName)
  try {
    const response = await axios.post(`${baseURL}createalbum/${userId}`, {
      albumName: albumName,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const fetchDeleteAlbum = async (albumId) => {
  try {
    const response = await axios.delete(`${baseURL}deletealbum/${albumId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const fetchUpdateAlbum = async (albumId, albumName) => {
  try {
    const response = await axios.patch(`${baseURL}updatealbum/${albumId}`, {
      albumName: albumName,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}