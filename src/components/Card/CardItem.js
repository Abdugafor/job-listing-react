import React, { useState } from 'react';
import { Tag } from '../Tag/Tag';
import  './cardItem.css';

export function CardItem({job}) {
  const [languages , setLanguages] = useState(job.languages)
  const [tools , setTools] = useState(job.tools)

  const featuredclass = job.featured ? 'liFeatured' : ''
  const classes = `li ${featuredclass}`
  return (
      <li className={classes}>
        <div className='info'>
            <img  src={job.logo} alt="company logo"/>

            <div className='info-text'>

              <div className='info-top'>
                <h4 className='companyName'>
                    {job.company}
                  </h4>

                  <div className='recentTags'>
                  {job.new ? <span className='newTag'>NEW!</span> : ''}
                  {job.featured ? <span className='featuredTag'>FEATURED</span> : ''}
                                    
                    
                </div>  
              </div>
                
                <h1>{job.position}</h1>

                <div className='info-bottom'>
                  <span className='postedAt'>{job.postedAt}</span>
                  <span className='contract'>{job.contract}</span>
                  <span className='location'>{job.location}</span>
                </div>
            </div>
        </div> 

        <div className='tags'>
            {languages.map(item => <Tag tag={item}/>)}
            {tools.map(item => <Tag tag={item}/>)}
        </div>
      </li>
  );
}
