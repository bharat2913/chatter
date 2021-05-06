import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SidebarOption from './SidebarOption/SidebarOption';
import AddIcon from '@material-ui/icons/Add';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';

function Sidebar() {
  const [channels, setChannel] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) =>
      setChannel(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <div className='sidebar_info'>
          <h2>Chatter</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <QuestionAnswerIcon />
        {/* <CreateIcon /> */}
      </div>
      <div className='sidebar_rooms'>
        <SidebarOption Icon={AddIcon} addChannelOption title='Add Room' />
        <hr />

        {channels.map((channel) => (
          <SidebarOption title={channel.name} id={channel.id} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
