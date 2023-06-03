import PropTypes from 'prop-types';

const RecordsCard = ({ title, children, isAlbum }) => (

  <div className={`${isAlbum ? 'bg-zinc-300' : 'bg-zinc-100'} "shadow-lg p-6 mb-4 rounded-md `}>
    <h2 className="text-lg font-bold mb-2 text-zinc-800 mx-auto">{title}</h2>
    <div className='flex flex-row flex-wrap'>
      {children}
    </div>
  </div>
);

RecordsCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isAlbum: PropTypes.bool,
};

export default RecordsCard;