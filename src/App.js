import './App.css';
import React from 'react'

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      g: 1,
      m: 3,
      p: 3,
      lastModify: null
    }
    this.pTournamentHandler = this.pTournamentHandler.bind(this);
  }

  componentDidMount() {
    this.alertHandler();
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  componentDidUpdate(prevState){
    if(this.state.date !== prevState.date){
      this.alertHandler();
    }
  } 

  tick() {
    this.setState({
      date: new Date()
    });
  }

  alertHandler(){
    var getMinutes = this.state.date.getMinutes();

    if((getMinutes > 25 && getMinutes < 40) || (getMinutes > 0 && getMinutes < 10)){
      document.body.style.backgroundColor = "#023817";
    }
    else{
      document.body.style.backgroundColor = "rgb(10, 3, 51)";
    }
  }
  pTournamentHandler(e){
    e.preventDefault();
    if(e.type === "click"){
      this.setState({
        p: this.state.p - 1
      })
    }
    else {
      this.setState({
        p: this.state.p + 1
      })
    }
    this.setState({
      lastModify: new Date().toLocaleTimeString()
    })
  }
  mTournamentHandler(e){
    e.preventDefault();
    if(e.type === "click"){
      this.setState({
        m: this.state.m - 1
      })
    }
    else {
      this.setState({
        m: this.state.m + 1
      })
    }
    this.setState({
      lastModify: new Date().toLocaleTimeString()
    })
  }
  gTournamentHandler(e){
    e.preventDefault();
    if(e.type === "click"){
      this.setState({
        g: this.state.g - 1
      })
    }
    else {
      this.setState({
        g: this.state.g + 1
      })
    }
    this.setState({
      lastModify: new Date().toLocaleTimeString()
    })
  }

  render() {
    return (
      <div>
       <head>
            <meta charset="utf-8" />
            <link rel="icon" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
              name="description"
              content="Web site created using create-react-app"
            />
            <title>tprioritycontrol</title>

            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossorigin="anonymous"
            />
          </head>
          <div className="d-flex h-100 w-100 text-center text-bg-dark correction">
    
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header className="mb-auto">
              <div>
                <h1 className="float-md-middle mb-0 fonthora">{this.state.date.toLocaleTimeString([], {timeStyle: 'short'})}</h1>
              </div>
            </header>
          <div className="container">
              <div className="row align-items-center">
                <p className="fontT noselection" onClick={(e) => this.pTournamentHandler(e)} onContextMenu={(e) => this.pTournamentHandler(e)}>{this.state.p}</p><p className="fontP">P</p>
                <p className="fontT noselection" onClick={(e) => this.mTournamentHandler(e)} onContextMenu={(e) => this.mTournamentHandler(e)}>{this.state.m}</p><p className="fontP">M</p>
                <p className="fontT noselection" onClick={(e) => this.gTournamentHandler(e)} onContextMenu={(e) => this.gTournamentHandler(e)}>{this.state.g}</p><p className="fontP">G</p>
              </div>
            </div>
            <p className="col-sm-12">
                <a href="#" onClick={() =>  window.location.reload()} className="btn btn-light fw-bold border-white bg-white">Resetar</a>
              </p>
              <p className="fontP2">Ultima vez modificado:</p>
              <p className="fontP3">{this.state.lastModify}</p>
            <footer className="mt-auto text-white-50">
              <p>Nada abaixo de 8.8 e 1k gtd+</p>
              <p>Normal: Até 22 todos. Sex sab e dom: 33</p>
              <p>Bounty: Até 44 field grande, 55 resto. Sex sab e dom: 55</p>
            </footer>
          </div>
          
          
              
            </div>
      </div>
    );
  }
}