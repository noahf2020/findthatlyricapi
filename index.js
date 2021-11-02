const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors');


let port = process.env.PORT || 8000

app.use(cors());
app.listen(port, ()=>{
    console.log(`localhost:8000`)
})

app.get(`/getsong`, (req, res) =>{
 
   var options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: {term: req.query.song, locale: 'en-US', offset: '0', limit: '5'},
    headers: {
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
      'x-rapidapi-key': '8caf149c5amsh8345060bd49ad26p11ad0cjsn359ef318cd0a'
    }
  };
  
  axios.request(options).then(function (response) {
      res.send(response.data.tracks.hits);
      console.log(response.data.tracks.hits)
  }).catch(function (error) {
      console.error(error);
  });



})