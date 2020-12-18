
import './App.css';
import Note from './components/Note'
import Header from './components/Header'
import Header1 from './components/Header1'
import FooterComponent from './components/FooterComponent'
import Home from './components/Home'
import { Button, Container,Row, Col } from 'reactstrap';
import {ToastContainer, toast} from "react-toastify"
import AllNotes from './components/AllNotes';
import {AddNote} from './components/AddNote'
import Menus from './components/Menus'
import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
  const btnhandle =()=>{
    toast("success")
  }
  return (
    <div className="App">
      
      <Router>
      <ToastContainer/>
      <Container>
      <Header1/>
        <Row>
          <Col md={4}>
              <Menus/>
          </Col>
          <Col md={8}>
              <Route path="/" component={Home} exact/>
              <Route path="/add-note" component={AddNote} exact/>
              <Route path="/view-notes" component={AllNotes} exact/>
          </Col>
        </Row>
      </Container>
      </Router>
      
    </div>
  );
}

export default App;
