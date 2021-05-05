import React from 'react';
import { useHistory } from 'react-router';
import db from '../../../firebase';
import './SidebarOption.css';

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt('Enter Channel name');

    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className='sidebarOption'
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className='sidebarOption_icon' />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className='sidebarOption_channel'>
          <span className='sidebarOption_hash'># </span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
