import axios from "axios"
import Movie from "../models/Movie.js";
import Show from "../models/Show.js";
import { inngest } from "../inngest/index.js";


export const getNowPlayingMovies=async(req,res)=>{
    try{
        const [taMoviesRes, enMoviesRes, youthRes, dhurandharRes, thaaiKizhaviRes] = await Promise.all([
            axios.get('https://api.themoviedb.org/3/discover/movie?with_original_language=ta&primary_release_date.gte=2025-01-01&sort_by=popularity.desc', {
                headers:{Authorization:`Bearer ${process.env.TMDB_API_KEY}`}
            }).catch(() => ({ data: { results: [] } })),
            axios.get('https://api.themoviedb.org/3/discover/movie?with_original_language=en&primary_release_date.gte=2025-01-01&sort_by=popularity.desc', {
                headers:{Authorization:`Bearer ${process.env.TMDB_API_KEY}`}
            }).catch(() => ({ data: { results: [] } })),
            axios.get('https://api.themoviedb.org/3/movie/1542352', {
                headers:{Authorization:`Bearer ${process.env.TMDB_API_KEY}`}
            }).catch(() => ({ data: null })),
            axios.get('https://api.themoviedb.org/3/movie/1582770', {
                headers:{Authorization:`Bearer ${process.env.TMDB_API_KEY}`}
            }).catch(() => ({ data: null })),
            axios.get('https://api.themoviedb.org/3/movie/1602783', {
                headers:{Authorization:`Bearer ${process.env.TMDB_API_KEY}`}
            }).catch(() => ({ data: null }))
        ]);

        const filterTitle = (m) => m && !m.title.toLowerCase().includes('lyk') && !m.title.toLowerCase().includes('like') && !m.title.toLowerCase().includes('sweetheart') && !m.title.toLowerCase().includes('love insurance');

        const taMovies = taMoviesRes.data.results.filter(filterTitle);
        const enMovies = enMoviesRes.data.results.filter(filterTitle);
        
        const mixedMovies = [];
        
        if (dhurandharRes.data) mixedMovies.push(dhurandharRes.data);
        if (youthRes.data) mixedMovies.push(youthRes.data);
        if (thaaiKizhaviRes.data) mixedMovies.push(thaaiKizhaviRes.data);
        
        const maxLength = Math.max(taMovies.length, enMovies.length);
        for(let i = 0; i < maxLength; i++){
            if(taMovies[i]) mixedMovies.push(taMovies[i]);
            if(enMovies[i]) mixedMovies.push(enMovies[i]);
        }

        res.json({success:true, movie: mixedMovies.slice(0, 20)})
    }catch(error){
        console.error(error);
        res.json({success:false,message:error.message})
    }
}

export const addShow=async(req,res)=>{
    try{
        const{movieId,showInput,showPrice}=req.body
        let movie=await Movie.findById(movieId)

        if(!movie){
            const [movieDetailsResponse,movieCreditsResponse]=await Promise.all([axios.get(`https://api.themoviedb.org/3/movie/${movieId}`,{
                headers:{Authorization:`Bearer ${process.env.TMDB_API_KEY}`}
            }),
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`,{
                headers:{Authorization:`Bearer ${process.env.TMDB_API_KEY}`}
            })
        ]);
        const movieApiData=movieDetailsResponse.data;
        const movieCreditsData=movieCreditsResponse.data;
        const movieDetails={
            _id:movieId,
            title:movieApiData.title,
            overview:movieApiData.overview,
            poster_path:movieApiData.poster_path,
            backdrop_path:movieApiData.backdrop_path,
            genres:movieApiData.genres,
            casts:movieCreditsData.cast,
            release_date:movieApiData.release_date,
            original_language:movieApiData.original_language,
            tagline:movieApiData.tagline || "",
            vote_average:movieApiData.vote_average,
            runtime:movieApiData.runtime,

        }
        movie=await Movie.create(movieDetails);
        }

        const showToCreate=[];
        showInput.forEach(show=>{
            const showDate=show.date;
            show.time.forEach((time)=>{
                const dataTimeString=`${showDate}T${time}`;
                showToCreate.push({
                    movie:movieId,
                    showDateTime:new Date(dataTimeString),
                    showPrice,
                    occupiedSeats:{}
                                })
            })
        });
        if(showToCreate.length>0){
            await Show.insertMany(showToCreate);
        }
        await inngest.send({
            name:"app/show.added",
            data:{movieTitle:movie.title}
        })
        res.json({success:true,message:'show Added successfully.'})
    }catch(error){
        console.error(error);
        res.json({success:false,message:error.message})
    }
}

export const getShows =async (req,res)=>{
    try{
        const shows=await Show.find({showDateTime:{$gte: new Date()}}).populate('movie').sort({showDateTime:1});

        const uniqueMoviesMap = new Map();
        shows.forEach(show => {
            if (show.movie && !uniqueMoviesMap.has(show.movie._id.toString())) {
                uniqueMoviesMap.set(show.movie._id.toString(), show.movie);
            }
        });
        const uniqueShows = Array.from(uniqueMoviesMap.values());
        
        res.json({success:true,shows:uniqueShows})
    } catch(error){
        console.error(error);
        res.json({success:false,message:error.message});

    }
}

export const getShow=async(req,res)=>{
    try{
        const{movieId}=req.params;
        const shows= await Show.find({movie:movieId,showDateTime:{$gte:new Date()}})
        const movie=await Movie.findById(movieId);
        const dateTime={};
        shows.forEach((show)=>{
            const date=show.showDateTime.toISOString().split("T")[0];
            if(!dateTime[date]){
                dateTime[date]=[]
            }
            dateTime[date].push({time:show.showDateTime,showId:show._id})
        })
        res.json({success:true,movie,dateTime})
    } catch(error){
        console.error(error);
        res.json({success:false,message:error.message});

    }
}