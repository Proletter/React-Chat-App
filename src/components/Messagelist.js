import React from 'react';
import { Component } from 'react'


const DUMMY_DATA = [
  {
    sendgrid: 'perpogen',
    text: 'hey how is it going'
  },
  {
    sendgrid: 'jasmine',
    text: 'great and how are you'
  },
  {
    sendgrid: 'perpogen',
    text: 'good to hear from you'
  }


]






class Messagelist extends Component {

  
  
  
  render() {
    return (
      <div className="message-list">{
        DUMMY_DATA.map((message, index)=> {
          return (
            <div className="message">
              <div className="message-username">{message.sendgrid}</div>
              <div className="message-text">{message.text}</div>
            </div>
            )

        })
      }

      </div>

    )    

  }




}


export default Messagelist