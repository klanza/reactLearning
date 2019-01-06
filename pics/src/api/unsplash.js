import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID ff2c8e8f413fbabf9d4380cfc623eca8690aef40d1dddbd3278ac4626ba19a0a'
  }
});
