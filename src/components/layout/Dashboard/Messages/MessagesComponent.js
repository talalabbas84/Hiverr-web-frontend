import React, { useState } from 'react';
import './index.css';

const MessagesComponent = () => {
  const [msgArray, setmsgArray] = useState([
    {
      msgId: 1,
      msgTime: '12 min',
      msgText: 'Where are you ????'
    },
    {
      msgId: 2,
      msgTime: '12 min',
      msgText: '345 BackStreet, Dekalb, IL 60115'
    },
    {
      msgId: 1,
      msgTime: '35 min',
      msgText: '345 BackStreet, Dekalb, IL 60115'
    }
  ]);
  const [DefaultMsgText, setDefaultMsgText] = useState([
    {
      DefaultMsgText: 'Be Right There'
    },
    {
      DefaultMsgText: 'Almost there'
    },
    {
      DefaultMsgText: 'Reached'
    },
    {
      DefaultMsgText: 'Thanks for Services'
    }
  ]);
  const [chatPeople, setchatPeople] = useState([
    {
      name: 'Sarah',
      img:
        'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/Jessica_Jones_Season_2_Promotional.png/revision/latest?cb=20180626040112'
    },
    {
      name: 'Evaa',
      img:
        'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/Jessica_Jones_Season_2_Promotional.png/revision/latest?cb=20180626040112'
    },
    {
      name: 'Natasha',
      img:
        'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/Jessica_Jones_Season_2_Promotional.png/revision/latest?cb=20180626040112'
    },
    {
      name: 'Elizabeth',
      img:
        'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/Jessica_Jones_Season_2_Promotional.png/revision/latest?cb=20180626040112'
    }
  ]);
  const [chatMsg, setchatMsg] = useState('');

  const sendMsg = () => {
    let { msgArray, chatMsg } = this.state;
    msgArray.push({ msgId: 2, msgText: chatMsg });
    this.setState({ msgArray, chatMsg: '' });
  };
  const sendDefaultMsg = () => {
    let { msgArray, defaultMsgs } = this.state;
    // msgArray.push({msgId:2, msgText: defaultMsgs.DefaultMsgText})
    this.setState({ msgArray, chatMsg: '' });
  };
  return (
    <div className='div-main-cont'>
      <p style={{ fontSize: 30, color: '#fff', marginLeft: 30, marginTop: 20 }}>
        Messages
      </p>
      <div className='div-main-cont2' />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className='div-left'>
          {chatPeople.map((v, i) => {
            return (
              <div className='div-chatuser'>
                <img src={v.img} alt='Logo' className='avatar' />
                <p style={{ color: '#fff', fontSize: 15, margin: 5 }}>
                  {v.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className='div-chat'>
          <div className='div-chatHead'>
            <img
              src='https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/Jessica_Jones_Season_2_Promotional.png/revision/latest?cb=20180626040112'
              alt='Logo'
              className='avatar'
            />
            <p style={{ color: '#fff', fontSize: 19, margin: 5 }}>Sarah</p>
          </div>
          <div style={{ display: 'flex', flex: 1 }}>
            {msgArray.map((v, i) => {
              console.log(v);
              return v.msgId == 1 ? (
                <div className='div-white-chat'>
                  <p style={{ fontSize: 17, marginBottom: 5 }}>{v.msgText}</p>
                </div>
              ) : (
                <div className='div-blue-chat'>
                  <p style={{ fontSize: 17, marginBottom: 5 }}>{v.msgText}</p>
                </div>
              );
            })}
          </div>
          {/* <div
            style={{
              height: 3,
              backgroundColor: "#A5A5A5",
              width: "100%",
              display: "flex",
              alignSelf: "flex-end",
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};
export default MessagesComponent;
