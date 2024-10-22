import Header from '../components/common/header';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setRoom, setParticipants } from '../store/features/videoCallSlice';
import { useDispatch } from 'react-redux';

const JoinCall = () => {
  const [roomName, setRoomName] = useState('');
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleJoinRoom = async () => {
    if (!roomName || !userName) {
      alert('Room name and user name are required!');
      return;
    }

    try {
      // Fetch token from your backend (replace with your actual API endpoint)
      const response = await fetch(
        `http://localhost:3001/getToken?room=${roomName}&user=${userName}`
      );
      const { token } = await response.json();

      console.log(token);

      // Dispatch token and participants to the Redux store
      dispatch(setRoom(roomName));
      // In real use, fetch the room participants, for now it's empty
      dispatch(setParticipants([]));

      // Navigate to the video call page and pass the token and room info
      navigate('/video-call', { state: { token } });
    } catch (error) {
      console.error('Failed to join room:', error);
    }
  };
  return (
    <main className='bg-zinc-950 min-h-screen'>
      <div className='container mx-auto'>
        <Header />
        <div className='flex justify-center items-center md:min-h-[85vh]'>
          <div className='border rounded-3xl border-zinc-700 p-10 w-1/3'>
            <div className='text-zinc-200 flex flex-col gap-5 font-thin w-full'>
              <div className='flex flex-col gap-3'>
                <div className='text-5xl font-thin text-zinc-600'>
                  Start video call
                </div>
                <div className='text-3xl font-thin'>Join or start room</div>
                <div className='flex flex-col'>
                  <div>Room Name</div>
                  <input
                    type='text'
                    placeholder='Enter room name'
                    className='bg-zinc-800 p-2 rounded-lg'
                    onChange={(e) => setRoomName(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <div>User Name</div>
                  <input
                    type='text'
                    placeholder='Enter user name'
                    className='bg-zinc-800 p-2 rounded-lg'
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <button
                  type='submit'
                  className='w-full py-2 bg-zinc-800 mt-3 rounded-lg hover:bg-zinc-700'
                  onClick={handleJoinRoom}
                >
                  Join Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JoinCall;
