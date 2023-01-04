import React, { useState, useEffect } from "react";
import './Components/style.css';
import AnimeLst from './Components/AnimeList';
import AnimeInfo from './Components/AnimeInfo'
import AddToList from "./Components/AddToList";
import RemoveFromList from "./Components/RemoveFromList";
export default function App() {
  //to hold search state
  const [search, setSearch] = useState("Naruto")

  //to hold our response
  const [animeData, setAnimeData] = useState();

  //to info about anime
  const [animeInfo, setAnimeInfo] = useState();

  const [myAnimeList, setMyAnimeList] = useState([]);
  
  const addTo = (anime)=> {
    const index = myAnimeList.findIndex((myanime)=>{
      return myanime.mal_id === anime.mal_id
    })
    if(index < 0){
      const newArray = [...myAnimeList,anime]
      setMyAnimeList(newArray);
    }
  
  }
  const removeFrom =(anime)=>{
    const newArray = myAnimeList.filter((myanime)=>{
      return myanime.mal_id !== anime.mal_id
    })
    setMyAnimeList(newArray)
  }

  const getData = async() =>{
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData = await res.json();
    setAnimeData(resData.data)
  }

  useEffect(()=>{
getData()
  },[search])

  return (
   <>
   <div className = "header">
    <h1>Anime List</h1>
    <div className='search-box'>
      <input type='search' placeholder='search'
      onChange={(e)=>setSearch(e.target.value)}/>
    </div>
   </div>
   <div className="container">
    <div className='animeInfo'>
{animeInfo && <AnimeInfo  animeInfo={animeInfo}/>}
    </div>
    <div className='anime-row'>
      <h2 className="text-heading">Anime</h2>
      <div className='row'>
<AnimeLst 
 animeList = {animeData}
setAnimeInfo={setAnimeInfo}
animeComponent = {AddToList}
handleList = {(anime)=>addTo(anime)}/>
      </div>
      <h2 className="text-heading">MyList</h2>
      <div className='row'>
<AnimeLst 
 animeList = {myAnimeList}
setAnime={setAnimeInfo}
animeComponent = {RemoveFromList}
handleList = {(anime)=>removeFrom(anime)}/>
      </div>
    </div>
   </div>
   </>
  )
}
