import React from 'react';
import  './tag.css';

export function Tag({tag}) {
  return (
    <li className='tag'>
      {tag}
    </li>
  );
}
