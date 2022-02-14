import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    {
        url: '/search', 
        text: 'All'
    },
    {
        url: '/news', 
        text: 'News'
    },
    {
        url: '/images', 
        text: 'Images'
    },
    {
        url: '/videos', 
        text: 'Videos'
    },
]

const Links = () => {
  return (
    <div>Links</div>
  )
}

export default Links;