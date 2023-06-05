import PropTypes from 'prop-types';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { fetchDeleteAlbum } from '../../services/api.js';
import { BsArrowsAngleExpand } from 'react-icons/bs';

const RecordsCard = ({ title, children, isAlbum, id, createAlbum, userId}) => {
  const queryClient = useQueryClient();

  const [albumName, setAlbumName] = useState('');

  const handleNameChange = (event) => {
    event.preventDefault();
    setAlbumName(event.target.value);
  }

  const handleCreateAlbum = async (event) => {
    event.preventDefault();
    console.log(userId, albumName);
    await createAlbum(userId, albumName);
    queryClient.invalidateQueries('data');

  }

  const handleDelete = async (event) => {
    event.preventDefault();
    await fetchDeleteAlbum(id);
    queryClient.invalidateQueries('data');
    console.log(id);
  }

  return (

  <div className={`${isAlbum ? 'bg-gray-300' : 'bg-gray-100'} "shadow-lg p-6 mb-4 rounded-md `}>
    {isAlbum ?
    <a href={`/album/${id}`} >
      <h2 className="text-lg font-bold mb-2 text-gray-800 mx-auto flex flex-row ">
      {title}
        <BsArrowsAngleExpand className='ml-2 mt-1'></BsArrowsAngleExpand>
      </h2>
    </a> :
    <>
      <h2 className="text-lg font-bold mb-2 text-gray-800 mx-auto">
      {title}
      </h2>
      <form className="flex flex-col justify-end">
        <label className='text-gray-800 self-end justify-end -mt-8 mb-2 '>
          Add Album:
          <input type="text" value={albumName} onChange={handleNameChange} className="w-18 mx-auto ml-2 mr-2 bg-blue-gray-100 rounded-sm"/>
        </label>
        <button
          onClick={handleCreateAlbum}
          type="submit"
          className="bg-gray-400 hover:bg-orange-600 mx-auto font-bold py-2 px-4 rounded mr-2 mb-2 "
          >Add New Album</button>
      </form>
    </>
      }
    <div className='flex flex-row flex-wrap mx-auto justify-center'>
      {children}
      <br></br>
    </div>
      <div className='flex justify-end self-end right-0 '>
        {isAlbum ? <button className="bg-red-200 hover:bg-red-800 h-12 mx-auto font-bold py-2 px-4 rounded mr-2 mb-2 justify-end self-end" onClick={handleDelete}>DELETE ALBUM</button> : null }
      </div>
  </div>
  );
}


RecordsCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isAlbum: PropTypes.bool,
  id: PropTypes.string,
  createAlbum: PropTypes.func,
  userId: PropTypes.string,
};

export default RecordsCard;