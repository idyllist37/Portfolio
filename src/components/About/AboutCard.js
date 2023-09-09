import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Idyllist </span>
            from <span className="purple"> South Korea.</span>
            <br /> I am a high school student interested in programming, mathematics, neuroscience.
            
            <br />
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is like a box of chocolates. You never know what you're gonna get!"{" "}
          </p>
          <footer className="blockquote-footer">Forrest Gump</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
