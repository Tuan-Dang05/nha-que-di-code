import './App.css';
import Card from './HOME/Card/card';
import Footer from './HOME/Footer/footer';
import Footer2 from './HOME/Footer2/footer2';
import Header from './HOME/Header/header';
import Main from './HOME/MainContent/main';
// daay la test
function App() {
  return (
    <div className="container-fluid">
      <div className='col-12 position-fixed' style={{marginLeft:'-12px',marginTop:'0px',background:'rgba(255,255,255,0.9)',zIndex:'10'}}>
        <Header/>
      </div>
      <div className='col-12' style={{marginTop:'0px'}}>
        <Main/>
      </div>
      <div className='col-12'>
        <Card/>
      </div>
      <div className='col-12'>
        <Footer/>
      </div>
      <div className='col-12'>
        <Footer2/>
      </div>
    </div>
  );
}

export default App;
