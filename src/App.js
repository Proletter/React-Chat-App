import React from 'react'
import { Component } from 'react'
import Chatkit from '@pusher/chatkit'
import Messagelist from './components/Messagelist'
import NewRoomForm from './components/NewRoomForm'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import { chatkitInstanceLocator, tokenUrl } from './config'
class App extends Component{

  componentDidMount() {    

    const chatManager = new Chatkit.ChatManager({
      instanceLocator: chatkitInstanceLocator,
      userId: "Abosede",
      tokenProvider: new Chatkit.TokenProvider(
        {
          url: tokenUrl
        }
      )
    })
    

    chatManager.connect()
      .then(currentuser => {
        currentuser.subscribeToRoom({
          roomId: '9d506af4-d923-45bf-a6ec-3b37ffeec776',
          hooks: {
            onNewMessage: message => {
              console.log('message text:', message.text)
            }
          }
        })
      }
    )
    }



  render() {
    return (<div className="app">
        <RoomList />
        <Messagelist />
        <SendMessageForm />
        <NewRoomForm />
       </div>
        )
  }

}

export default App