import {Card, Container, Row, Col, Image} from "react-bootstrap"
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from"../assets/images/superhero/avenger.jpg"
import batmanImage from"../assets/images/superhero/batman.jpg"
import spidermanImage from"../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from"../assets/images/superhero/superman.jpg"


const SuperHero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">SUPERHERO MOVIE</h1>
                <br />
                <Row>
                <Col md={4} className="movieWrapper" id="superhero">
                <Card className="movieImage">
                 <Image  src={antmanImage} alt="Dune Movies" className="images"/>
                 <div className="bg-dark ">
                    <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ANTMAN</Card.Title>
                   <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </Card.Text>
        <Card.Text className="text-left">
            Last updated 10 mins ago
            </Card.Text>
            </div>
            </div>
     </Card>
        </Col>
        <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                 <Image  src={avengerImage} alt="Dune Movies" className="images"/>
                 <div className="bg-dark ">
                    <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AVENGER</Card.Title>
                   <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </Card.Text>
        <Card.Text className="text-left">
            Last updated 12 mins ago
            </Card.Text>
            </div>
            </div>
     </Card>
        </Col>
        <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                 <Image  src={batmanImage} alt="Dune Movies" className="images"/>
                 <div className="bg-dark ">
                    <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BATMAN</Card.Title>
                   <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </Card.Text>
        <Card.Text className="text-left">
            Last updated 6 mins ago
            </Card.Text>
            </div>
            </div>
     </Card>
        </Col>
        <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                 <Image  src={ spidermanImage} alt="Dune Movies" className="images"/>
                 <div className="bg-dark ">
                    <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SPIDERMAN</Card.Title>
                   <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </Card.Text>
        <Card.Text className="text-left">
            Last updated 17 mins ago
            </Card.Text>
            </div>
            </div>
     </Card>
        </Col>
        <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                 <Image  src={supermanImage} alt="Dune Movies" className="images"/>
                 <div className="bg-dark ">
                    <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SUPERMAN</Card.Title>
                   <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </Card.Text>
        <Card.Text className="text-left">
            Last updated 22 mins ago
            </Card.Text>
            </div>
            </div>
     </Card>
        </Col>
         </Row>
          </Container>
            
        </div>
    )
}

export default SuperHero
