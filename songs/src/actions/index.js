// Action creator
export const selectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

// INSTEAD USING NAMED IMPORT
// Allows us to export many different functions from one file
// export default selectSong;
