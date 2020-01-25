import React from 'react'
import Chatkit from '@pusher/chatkit'
import { Component } from 'react'
import Messagelist from './components/Messagelist'
// import Message from './components/Message'
import NewRoomForm from './components/NewRoomForm'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import { chatkitInstanceLocator, tokenUrl } from './config'
class App extends Component{

  componentDidMount() {
    const chatManager = new Chatkit.chatManager({
      instanceLocator: chatkitInstanceLocator,
      userId: "Abosede",
      tokenProvider: new Chatkit.tokenProvider(
        {
          url: tokenUrl
        }
      )
    })
    

    chatManager.connect()
      .then(currentuser => {
        currentuser.subscribeToRoom({
          roomId: ,
          hooks: {
            onNewMessage:
          }
        })
      }
    )
    }



  render() {
    return (
      <div className="app">
        <RoomList />
        <Messagelist />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    )
  }

}

export default App