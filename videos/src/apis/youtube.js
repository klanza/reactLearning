import axios from 'axios';

const KEY = 'AIzaSyBbXSGnGiA_xvJeo_FflavBVwZitpdkxeY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY
  }
});
