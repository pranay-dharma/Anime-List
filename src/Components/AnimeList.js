import React from 'react'

const AnimeList = ({animeList,setAnimeInfo,animeComponent,handleList}) => {
    const AddToList = animeComponent;
  return (
   <>
   {
    animeList ?(
        animeList.map((anime,index)=>{
            return(
<div className='card' key={index}
onClick={()=>setAnimeInfo(anime)}>
    <img src={anime.images.jpg.large_image_url} alt='card'/>
   <div className='anime-info'>
    <h4>{anime.title}</h4>
    <div className='overlay' onClick={()=>handleList(anime)}>
        <h3>SYNOPSIS</h3>
     <div className='synopsis'>
        <p>{anime.synopsis}</p>
     </div>
     <AddToList />
    </div>
   </div>
   </div>
            )
        })
    ):"NO FOUND"
}
  
   </>
  )
}

export default AnimeList
