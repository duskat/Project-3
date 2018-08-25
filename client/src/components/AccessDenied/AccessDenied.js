import React from "react";
import { Link } from "react-router-dom";
import "./AccessDenied.css";
import { Container, Row, Col } from 'mdbreact';

const AccessDenied = props => (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col>
          <div className="text-center">
            <h2>This content for authenticated users only</h2>
            <h4>Please sign in  to enjoy Credit Cards Finder!</h4>
            <button className="btn round" rounded onClick={props.auth.login}>Sign in</button>
          </div>
        </Col>
      </Row>
    </Container>
)

export default AccessDenied