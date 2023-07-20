import "../App.css";
import { MultiStepProgressBar } from "../components/MultiStepProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { MultiStepForm } from "../components/MultiStepForm";
import { questions } from "./Question";

export default function Book() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions?.length || 0;
  // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
  const [pagesAnswers, setPagesAnswers] = useState({});

  const prevButton = () => {
    if (index > 1) {
      setIndex(prevIndex => prevIndex - 1);
    }
  }

  const nextButton = () => {
    if (index - 3) {
      setIndex(prevIndex => prevIndex + 1);
    } else {
      // clear the form on submit
      setPagesAnswers({});
      setSubmitted(true);
    }
  }

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({...pagesAnswers, [step]: answersObj});
  }

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  }

  return (
    <div className="App">
      <Container style={{ marginTop: 100, marginBottom:100, width:700 }}>
        <h1>Payment Form</h1>
      <Container className="h-100">
        <Row className="m-5">
          <Col className="align-self-center">
            <MultiStepProgressBar
              step={index}
              />
          </Col>
        </Row>
        <Row>
          {
            submitted ?
            <Card>
              <Card.Body>
                <p>Thank you for doing business with us. A confirmation email will be sent to you with a summary of the invoice</p>
              </Card.Body>
              <Card.Footer>
                <Button onClick={handleStart}>Buy another Services</Button>
              </Card.Footer>
            </Card> :
          <Card>
            <Card.Body>
              <MultiStepForm
                list={questions}
                step={index}
                onPageUpdate={onPageAnswerUpdate}
                pagesAnswers={pagesAnswers}
                />
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button onClick={prevButton} disabled={index == 1}>Previous</Button>
              <Button onClick={nextButton}>{index == totalPagesCount ? 'Submit' : 'Next'}</Button>
            </Card.Footer>
          </Card>
        }
        </Row>
      </Container>
      </Container>
    </div>
  );
  }

