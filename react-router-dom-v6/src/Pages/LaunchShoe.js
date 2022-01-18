import React from 'react'
import { useParams } from 'react-router';
import Shoes from '../Data/Shoes';

const LaunchShoe = () => {
    const { slug } = useParams();
  const shoe = Shoes[slug];
  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img } = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
}

export default LaunchShoe
