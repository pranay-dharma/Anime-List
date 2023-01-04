import React from 'react'

const AnimeInfo = (props) => {
    const {title,images:{jpg:{large_image_url}},source,rank,score,rating,duration} = props.animeInfo
  return (
   <>
   <div className='anime-content'>
    <h3>{title}</h3><br />
    <img src={large_image_url} alt='alt'/><br /><br />
    <div className='info'>
        <h3>#Rank:{rank}</h3>
        <h3>#Duration:{duration}</h3>
        <h3>#Score:{score}</h3>
        <h3>#Source:{source}</h3>
        <h3>#Rating:{rating}</h3>

    </div>
   </div>
   </>
  )
}

export default AnimeInfo
