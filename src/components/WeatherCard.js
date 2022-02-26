import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';


export const WeatherCard = (props) => {
  return (
    <>
    {props.data.map((data, index) => {
      return (
        <Col key={index} className="mb-4" xs="12" md="3">
          <Card  style={{ width: '18rem' }}>
            <Card.Body>
                <Button variant="danger" size="sm" className="float-end" onClick={() => props.onRemove(index)}>
                  <FontAwesomeIcon size="sm" icon={faTrash} />
                </Button>              
                <Card.Title>{data.data.name}</Card.Title>
                <Card.Text>
                  Current Temprature : {data.data.main.feels_like} °
                </Card.Text>
            </Card.Body>
        </Card>          
      </Col>
      )
    })}
    </>
  );
};