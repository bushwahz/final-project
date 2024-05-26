// Import components
import React, { Component } from 'react'
import { Container, Image } from 'react-bootstrap'

// Render Contact Page
export default class Contact extends Component {
    render() {
        return (
          <Container>
          <div>
              <h1>Contact</h1>
              <Image src="https://plus.unsplash.com/premium_photo-1682310071124-33632135b2ee?q=80&w=912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fluid />
                <p>(123) 479-4567<br/>
                    123 Main St.<br/>
                    Fayetteville, AR 72703
                </p>
              
          </div>
          </Container>  
        )
    }
}