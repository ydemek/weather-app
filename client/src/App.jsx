import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Loading from './components/Loading';
import { getCities } from './services/getCities';
import { getWeather } from './services/getWeather';


function App() {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [weathers, setWeathers] = useState([]);

  const handleSearch = (e) => {
    let value = e.target.value;

    if (value.length >= 2) {
      setLoading(true);
      getCities(value).then((res) => {
        setCities(res.list);
        setLoading(false);
      }).catch((err) => {
        console.log(err);
        setLoading(false);
      })
    }
  }
  const handleClick = (city) => {
    getWeather(city).then((res) => {
      setWeathers([...weathers, res])
      setCities([]);
      document.getElementById("form").reset();
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className="App">
      <div className="infos">
        <h2>Welcome to Weather App</h2>
        <Form id="form">
          <Form.Group className="mb-3" >
            <Form.Control className="mt-3" placeholder="Search Cities" onChange={handleSearch} />
            <Form.Text className="text-muted">
              write minumun two character
            </Form.Text>
          </Form.Group>
        </Form>

        <ListGroup variant="flush">
          {!loading ? cities?.map((item) => <ListGroup.Item className='city' key={item._id} onClick={() => handleClick(item.city)}>{item.city}</ListGroup.Item>) : <Loading />}


        </ListGroup>
      </div>

      <div className="weathers">
        <Container>
          <Row className="justify-content-md-center weathers-row">
            {weathers?.map((weather, key) => (
              <Col xs="12" md="4" key={key}>
                <Card className="weather">
                  <Card.Body>
                    <Card.Title>{weather.resolvedAddress}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{weather.currentConditions.datetime}</Card.Subtitle>
                    <Card.Text>
                      {weather.currentConditions.conditions}
                    </Card.Text>
                    <Card.Text >
                      
                      <p><strong>Temp: </strong>{weather.currentConditions.temp} °C</p>
                      <p><strong>Feelslike: </strong>{weather.currentConditions.feelslike} °C</p>
                      <p><strong>Humidity: </strong>{weather.currentConditions.humidity}%</p>
                    </Card.Text>
                    

                  </Card.Body>
                </Card>
              </Col>
            ))}

          </Row>

        </Container>

      </div>
    </div>
  )
}

export default App
