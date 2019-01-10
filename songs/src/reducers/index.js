import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Alexander Hamilton', duration: '3:56' },
    { title: 'Aaron Burr, Sir', duration: '2:36' },
    { title: 'My Shot', duration: '5:33' },
    { title: 'The Story of Tonight', duration: '1:31' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

// Why export default here
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
