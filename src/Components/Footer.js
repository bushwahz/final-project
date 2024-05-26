// Import components
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'



// Render website footer
export default class Footer extends Component {
    render() {
        return (
          <div className='footerStyle'>
          <Container>
            <Row>
              <Col>
                <h4>Contact</h4>
                <p>(123) 479-4567<br/>
                    123 Main St.<br/>
                    Fayetteville, AR 72703
                </p>
              </Col>
              <Col>
              <h4>Affiliates</h4>
                <ul>
                  <li>Walmart</li>
                  <li>Tyson</li>
                  <li>U of A</li>
                </ul>
              </Col>
                <Col>
                  <h4>Follow Us</h4>
                  <SocialIcon url="www.facebook.com" />
                  <SocialIcon url="www.twitter.com" />
                  <SocialIcon url="www.instagram.com" />
                </Col>
            </Row>
          </Container>  
          </div>
        )
    }
}