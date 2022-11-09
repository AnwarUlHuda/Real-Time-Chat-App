import './style.css';
import RoomAndUsersColumn from './room-and-users.js';
import SendMessage from './send-message.js';
import MessagesReceived from './messages.js';

const Chat = ({ username, room, socket, setUsername, setRoom }) => {
  return (
    <div className='chatContainer'>
      <RoomAndUsersColumn socket={socket} username={username} room={room} setUsername={setUsername} setRoom={setRoom}/>
      <div>
      <h2>{username}'s Typing Space</h2>
        <MessagesReceived socket={socket} username={username}/>
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;