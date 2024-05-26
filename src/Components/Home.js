// Import components
import React, { Component } from 'react'
import { Container, Button, Card, CardGroup } from 'react-bootstrap'
import ImageSlider from './Slider';

// Render Home page component
export default class Home extends Component {
    render() {
        return (
          <div>
            {/* Render Image Slider on Home page only */}
            <ImageSlider />
            <Container>
              <div>
                <h1>Home</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div><br />
              <h2>Our Services</h2>
              {/* Bootstrap Card Group */}
              <CardGroup>
                <Card>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1501255133540-c675b2234546?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='wedding reception' />
                  <Card.Body>
                    <Card.Title>Wedding DJ</Card.Title>
                    <Card.Text>
                      The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </Card.Text>
                    <Button variant="info">Learn More</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1571266028243-d220c6a7edbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='event dj' />
                  <Card.Body>
                    <Card.Title>Event DJ</Card.Title>
                    <Card.Text>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </Card.Text>
                    <Button variant="info">Learn More</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='projector' />
                  <Card.Body>
                    <Card.Title>AV & Lighting</Card.Title>
                    <Card.Text>
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first.
                    </Card.Text>
                    <Button variant="info">Learn More</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Container>
          </div>    
        )
    }
}