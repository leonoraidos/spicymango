import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from 'react-query';
import { fetchAlbumById, fetchUpdateAlbum } from '../../services/api.js';
import PhotoCarousel from "./photoCarousel.jsx";
import { FiEdit } from 'react-icons/fi';
import { useState } from "react";

const AlbumCard = () => {

  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery('album', () => fetchAlbumById(id));

  const [isEditing, setIsEditing] = useState(false);
  const [newAlbumTitle, setNewAlbumTitle] = useState('');

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2"></div>
      <span className="ml-2"></span>
    </div>
    )
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }


  const { album, photos } = data || {};

  const handleAlbumTitleChange = () => {
    setIsEditing(true);
    setNewAlbumTitle(data.album.title);
  }

  const handleAlbumTitleChangeSubmit = async (event) => {
    event.preventDefault();
    await fetchUpdateAlbum(id, newAlbumTitle);
    setIsEditing(false);
    queryClient.invalidateQueries('album');
  }

  const handleChange = (event) => {
    setNewAlbumTitle(event.target.value);
  }

  return (
    <>
      {album && (
        <div className="container mx-auto mt-24 p-6 rounded-md">
          <div className="bg-zinc-300 shadow-lg p-6 mb-4 rounded-md">
            {isEditing ? (
              <form onSubmit={handleAlbumTitleChangeSubmit}>
                <input
                  type="text"
                  value={newAlbumTitle}
                  onChange={handleChange}
                  className="w-full mb-2"
                />
                <button type="submit" className="bg-zinc-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded">
                  Save
                </button>
              </form>
            ) : (
              <>
                <h2 className="text-lg font-bold mb-2 text-zinc-800 mx-auto">
                  {album.title.toUpperCase()}
                </h2>
                  <button onClick={handleAlbumTitleChange}><FiEdit ></FiEdit></button>
              </>
            )}
            <div className="flex flex-row flex-wrap">
              <PhotoCarousel photos={photos} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AlbumCard;