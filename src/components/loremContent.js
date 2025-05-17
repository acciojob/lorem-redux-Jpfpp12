import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLorem } from './loremActions.js';

const LoremContent = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      <h1>📘 Lorem Redux Output</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </>
      )}
    </div>
  );
};

export default LoremContent;
