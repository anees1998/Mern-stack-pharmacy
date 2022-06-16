import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class BuyCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "white",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          New Arrivals!
        </h1>

        <div
          className="Card"
          style={{
            display: "flex",
            flexWrap: "wrap",
            textAlign: "center",
            justifyContent: "space-evenly",
            borderRadius: "20px",
            marginTop: "30px",
          }}
        >
          <Card className="buycard" style={{ width: "18rem" }}>
            <Card.Img
              style={{ borderRadius: "22px 22px 0px 0px" }}
              variant="top"
              src="dbs1.png"
            />
            <Card.Body>
              <Card.Title>Dish</Card.Title>
              <Card.Text>50% OFF. Get it Now.</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
            
          </Card>

          <Card className="buycard" style={{ width: "18rem" }}>
            <Card.Img
              style={{ borderRadius: "22px 22px 0px 0px" }}
              variant="top"
              src="dbs1.png"
            />
            <Card.Body>
              <Card.Title>Dish</Card.Title>
              <Card.Text>50% OFF. Get it Now.</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>

          <Card className="buycard" style={{ width: "18rem" }}>
            <Card.Img
              style={{ borderRadius: "22px 22px 0px 0px" }}
              variant="top"
              src="dbs1.png"
            />
            <Card.Body>
              <Card.Title>Dish</Card.Title>
              <Card.Text>50% OFF. Get it Now.</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>

          <Card className="buycard" style={{ width: "18rem" }}>
            <Card.Img
              style={{ borderRadius: "22px 22px 0px 0px" }}
              variant="top"
              src="dbs1.png"
            />
            <Card.Body>
              <Card.Title>Dish</Card.Title>
              <Card.Text>50% OFF. Get it Now.</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>

          <Card className="buycard" style={{ width: "18rem" }}>
            <Card.Img
              style={{ borderRadius: "22px 22px 0px 0px" }}
              variant="top"
              src="dbs1.png"
            />
            <Card.Body>
              <Card.Title>Dish</Card.Title>
              <Card.Text>50% OFF. Get it Now.</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>

          <Card className="buycard" style={{ width: "18rem" }}>
            <Card.Img
              style={{ borderRadius: "22px 22px 0px 0px" }}
              variant="top"
              src="dbs1.png"
            />
            <Card.Body>
              <Card.Title>Dish</Card.Title>
              <Card.Text>50% OFF. Get it Now.</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>

          <Card className="buycard" style={{ width: "18rem" }}>
            <Card.Img
              style={{ borderRadius: "22px 22px 0px 0px" }}
              variant="top"
              src="dbs1.png"
            />
            <Card.Body>
              <Card.Title>Dish</Card.Title>
              <Card.Text>50% OFF. Get it Now.</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default BuyCard;
