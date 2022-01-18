import React from 'react'
import { Link } from 'react-router-dom'
import Shoes from '../Data/Shoes'

const LaunchIndex = () => {
    return (
        <ul>
      {Object.entries(Shoes).map(([slug, { name, img }]) => (
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
    )
}

export default LaunchIndex
