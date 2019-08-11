import {combineReducers } from 'redux';

const songReducer = () => {
	return [
	{title: 'Barbie Girl', duration: ' 4:05'},
	{title: 'One Love', duration: ' 5:00'},
	{title: 'KuchKuch Hota Hai' , duration: '4:30'},
	{title: 'I Want it That Way', duration: ' 1:20'},
	];
};

const selectedSongReducer = (selectedSong = null, action) => {

	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;

};

export default combineReducers ({
	songs: songReducer,
	selectedSong: selectedSongReducer
});