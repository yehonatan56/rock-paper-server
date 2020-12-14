import React, { useState } from 'react';
import StartGame from './components/startgame';
import WinAlert from './components/winAlert';
import socketIOClient from 'socket.io-client';
function App() {
  var clicked = 0;
  const playersresult = [];
  var socket = null;

  const [winactive , setwinactive
  ] = useState('');

  if (socket === null) {
    socket = socketIOClient('http://localhost:4001')
  }
  socket.on('output' , (output) => {
    playersresult.push(output);
  });

  function result(result) {
    if (clicked >= 1) { // server
      return;
    }
    playersresult.push(result);
    console.log(playersresult);
    checkwin();
    clicked++;
  } 
   function checkwin() {
    if (playersresult[0] === 'cut' && playersresult[1] === 'boxing') {win('boxing')}
     else if (playersresult[0] === 'boxing' && playersresult[1] === 'cut') {win('boxing')}
     else if (playersresult[0] === 'hand' && playersresult[1] === 'boxing') {win('hand')}
     else if (playersresult[0] === 'boxing' && playersresult[1] === 'hand') {win('hand')}
     else if (playersresult[0] === 'hand' && playersresult[1] === 'cut') {win('cut')}
     else if (playersresult[0] === 'cut' && playersresult[1] === 'hand') {win('cut')}
  }

  function win(winplayer) {
      var win = `${winplayer} winner`;
      console.log(win);
      setwinactive(<WinAlert  win={win}/>);
  }

  return (
    <div className="bg-dark App">
      <StartGame pushfun={result}></StartGame>
      <div>{winactive}</div>
    </div>
  );
}

export default App;