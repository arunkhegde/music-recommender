import { set } from 'mongoose';
import React, { useState } from 'react'
import '../../css/SearchBar.css'
export const SearchBar = ({setsongUrls,songUrls}) => {
    const [sugSongs, setsugSongs] = useState([])
    const [search_string,setsearch_string]=useState("");

    const load_recommendations=async(song)=>{

        try {
            setsugSongs([])
            const token=localStorage.getItem('jwt')
            console.log("hey")
            const result=await fetch(`/songs/load_recommendations/?search_string=${song.name}`,{
                method:"get",
                headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json",

                }
            }) //bring recommendation for songs
            const res=await result.json()
            
            //console.log(res.rec_obj)
            
            const allrec=res.rec_obj
            allrec.unshift(song)  // cur selected song at first
            // console.log("recs")
            // console.log("song",song)
            // console.log(allrec)
            await setsongUrls(allrec)

        } catch (error) {
            console.log(error)
        }
    }
    
    const bring_searchsongs=async(e)=>{
        if(e.key==='Enter'){
            //console.log("lol1")
            try {
                //console.log(sugSongs)
                console.log("lol222222222222")
                const token=localStorage.getItem('jwt')
                //////////////////////////////////////////////////////////////////////////usestate not working
                let srch_st=e.target.value

                console.log("search",search_string,)
                //?search_string=${search_string}
                console.log(e.target.value)
                if(e.target.value==="")return;
                if(e.target.value[0]==="#"){

                    console.log("#########",)
                    var songs=await fetch(`/songs/bringsearchsongsbytags/?search_string=${srch_st.substr(1,srch_st.length-1)}`,{
                        method:"get",
                        headers:{
                        "Authorization":`Bearer ${token}`,
                        "Content-Type":"application/json",
    
                        }
                    })
                }
                else{
                    var songs=await fetch(`/songs/bringsearchsongsbyname/?search_string=${e.target.value}`,{
                        method:"get",
                        headers:{
                        "Authorization":`Bearer ${token}`,
                        "Content-Type":"application/json",

                        }
                    })
                }

                //console.log(songs)
            
                songs=await songs.json()
                console.log("insearchbar")
                console.log(songs)
                songs=await songs.return_array
                setsugSongs(songs)


            } catch (error) {
                console.log('Error happened here!')

                console.log(error)
            }
        }
    }
    return (
        <div className="Smain">
            <input type='text' className="search" placeholder="start with '#' for tags and prefix search for song name" onchange={e=>setsearch_string(e.target.value)} onKeyDown={bring_searchsongs}/>
            <div className="suggestions" >
                {sugSongs?sugSongs.map((x)=>{
                    return <div className="sugsongs" key={x.name} id={x.name} onClick={()=>load_recommendations(x)}>{x.songname}</div>
                }):''}
            </div>
        </div>
    )
}
