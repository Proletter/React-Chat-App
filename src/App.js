import React from 'react'
import { Component } from 'react'
import {
  ChatkitProvider,
  TokenProvider,
  withChatkit,
} from "@pusher/chatkit-client-react"
// import Chatkit from '@pusher/chatkit-client'
// import connect from '@pusher/chatkit-server'
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
      userId: "newuser",
      tokenProvider: new Chatkit.TokenProvider(
        {
          url: tokenUrl
        }
      )
    })
    
    console.log('connecting to chatkit')
    chatManager.connect()
      .then((currentUser) => {
        //returns an undefined user here hence we can't continue this project for now. I will look into this later.
        //Quick reminder, you might have to update the chatkit library to the latest version.
        console.log("connected as", currentUser)
        // currentUser.subscribeToRoomMultipart({
        //   roomId: currentUser.rooms[0].id,
        //   hooks: {
        //     onMessage: message => {
        //       console.log('hoooooooks')
        //       console.log('message text:', message.text)
        //     }
        //   }
        // })
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