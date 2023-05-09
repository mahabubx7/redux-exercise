import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from './features/albumSlice';

const Albums = () => {
  const { isLoading, error, data } = useSelector((state) => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  if (isLoading) return <p>Albums are loading...</p>;

  if (error !== null) return <p>Something went wrong!</p>;

  return (
    <div className="albums">
      {data.map((album) => <p key={album.id}>{album.title}</p>)}
    </div>
  );
};

export default Albums;
