import './App.css';
import XARToken from './artifacts/contracts/XARToken.sol/XARToken.json';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import Dispenser from './components/Dispenser.js';
import TokenSend from './components/TokenSend.js';

function App() {
    const Token = XARToken;

    return (
        <div className="App">
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <div>My Token Dispenser</div>
                        <Dispenser tokenContract={Token} />
                    </Col>
                    <Col>
                        <div> our sending area</div>
                        <TokenSend tokenContract={Token} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App; 