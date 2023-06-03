import { useParams } from "react-router-dom";
import { useQuery } from 'react-query';
import { fetchAlbumById } from '../../services/api.js';
import PhotoCarousel from "./photoCarousel.jsx";

const AlbumCard = () => {

  const { id } = useParams();

  const { data, isLoading, isError } = useQuery('album', () => fetchAlbumById(id));

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

  return (
    <>
      {album && (
        <div className="container mx-auto p-6 rounded-md">
          <div className="bg-zinc-300 shadow-lg p-6 mb-4 rounded-md">
            <h2 className="text-lg font-bold mb-2 text-zinc-800 mx-auto">
              {album.title.toUpperCase()}
            </h2>
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