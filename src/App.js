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

    console.log("launching chat kit manager")

    const chatManager = new Chatkit.ChatManager({
      instanceLocator: chatkitInstanceLocator,
      userId: "testuser",
      tokenProvider: new Chatkit.TokenProvider(
        {
          url: tokenUrl
        }
      )
    })
    
    console.log('connecting to chatkit')
    chatManager.connect()
      .then(currentuser => {
        currentuser.subscribeToRoomMultipart({
          roomId: currentuser.rooms[0].id,
          messageLimit: 20,
          hooks: {
            onNewMessage: message => {
              console.log('hoooooooks')
              console.log('message text:', message.text)
            }
          }
        })
      }
    )
      .catch(e => console.log('there was an error ' + e))
      
    console.log('done with chatkit')
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