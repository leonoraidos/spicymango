import { fetchData } from "../../services/api.js";
import { useQuery } from "react-query";
import RecordsCard from "./recordsCard";
import { useState } from "react";
import { fetchCreateAlbum } from "../../services/api.js";

const RecordsList = () => {

  const [page, setPage] = useState('');
  const [limit, setLimit] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setPage(1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const { data, isLoading, isError } = useQuery(['data', page, limit], () => fetchData(page, limit), {
    //enabled it only on load or wehn form submitted
    enabled: isSubmitted || page === '' || limit === '',
  });

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

  const { users = [], albums = [], photos = [] } = data || {};

  console.log(albums)

  const createAlbum = async (userId, albumName) => {
    await fetchCreateAlbum(userId, albumName);
  }

    return (
      <div className="container mx-auto mt-24 p-6 rounded-md">
        <form onSubmit={handleSubmit} className="flex flex-row mb-2 ">
          <label>
            Page:
            <input type="number" value={page} onChange={handlePageChange} className="w-14 mx-auto ml-2 mr-2 mt-2"/>
          </label>
          <label>
            Limit:
            <select type="number" value={limit} onChange={handleLimitChange} className="w-14 mx-auto ml-2 mr-2 mt-2">
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </label>
          <button type="submit" className="bg-orange-400 hover:bg-orange-600 font-bold py-2 px-4 rounded mr-2 mb-2 ml-2">Apply Limit</button>
      </form>
        <div className="flex justify-between justify-center m-4">
          <button
            className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded -mr-2 w-36"
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <button
            className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-36 -mr-2"
            onClick={() => setPage((prevPage) => prevPage + 1)}
          >
            Next Page
          </button>
        </div>
      {users.map((user) => (
        <RecordsCard
        key={user.id}
        title={user.firstName + ' ' + user.lastName}
        userId={user.id}
        createAlbum={createAlbum}
      >

          {albums
            .filter((album) => album.userId === user.id)
            .map((album) => (
              <RecordsCard key={album.id} title={album.title.toUpperCase()} isAlbum={true} id={album.id}>
                {photos
                  .filter((photo) => photo.albumId === album.id)
                  .map((photo) => (
                    <div key={photo.id} className='mb-2'>
                      <img src={photo.thumbnailUrl} alt={photo.title} className="w-[150px] h-[150px] mr-2 rounded shadow-sm" />
                      <span>{photo.title}</span>
                    </div>
                  ))}
              </RecordsCard>
            ))}
        </RecordsCard>
      ))}


    </div>
    )
}

export default RecordsList;