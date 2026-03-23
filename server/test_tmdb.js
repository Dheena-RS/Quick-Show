import axios from 'axios';
import fs from 'fs';
const key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjYxOWQyMTMwZjQ5OGRjNjQwMmUyZDk2OWUxZDhiNCIsIm5iZiI6MTc3MzY1NjQxOC4zMDMsInN1YiI6IjY5YjdkOTYyZTQ2NWE4YjZlYTAyMDBjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q0ebSEzLh-oh1kTjWyxj9Sz20wDlg1uxARUtMFe30k8';

async function search() {
  let tamilYouths = [];
  for(let i=1; i<=5; i++) {
    const y = await axios.get(`https://api.themoviedb.org/3/search/movie?query=youth&page=${i}`, { headers: { Authorization: `Bearer ${key}` } });
    tamilYouths.push(...y.data.results.filter(m => m.original_language === 'ta'));
  }
  fs.writeFileSync('out3.json', JSON.stringify({ tamilYouths }, null, 2));
}
search();
