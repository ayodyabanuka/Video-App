import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
  RoomName,
  DisconnectButton,
} from '@livekit/components-react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { serverUrl } from '../lib/livekit';
import { setRoom, setParticipants } from '../store/features/videoCallSlice';
import '@livekit/components-styles';
import { Track } from 'livekit-client';
const VideoCall = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLeaveRoom = () => {
    dispatch(setRoom(null));
    dispatch(setParticipants([]));
    navigate('/join-call');
  };
  const { token } = location.state;
  return (
    <div className='bg-zinc-950 h-screen'>
      <LiveKitRoom
        video={true}
        audio={true}
        token={token}
        serverUrl={serverUrl}
        data-lk-theme='default'
        className=''
      >
        <MyVideoConference />
        <RoomAudioRenderer />
        <div className='flex w-full gap-3 justify-center items-center'>
          <ControlBar controls={{ leave: false }} />
          <DisconnectButton onClick={handleLeaveRoom}>
            Leave room
          </DisconnectButton>
        </div>
      </LiveKitRoom>
    </div>
  );
};

const MyVideoConference = () => {
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );
  return (
    <div>
      <GridLayout tracks={tracks} style={{ height: 'calc(90vh)' }}>
        <ParticipantTile />
      </GridLayout>
    </div>
  );
};

export default VideoCall;
