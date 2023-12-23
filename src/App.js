import logo from './logo.svg';
import './App.css';

import About from './About';
import Contact from './contact';
import Services from './components/services';
import Page from './components/page';

import aboutImg from './assets/imegas/dev.jpg'
import contactImg from './assets/imegas/ser.webp'
import servicesImg from './assets/imegas/web.jpg'

function App() {
  return (
<div className="App">
  <div className='container'>
  {/*<About />
<Contact />
  <Services />*/}
<Page titel="About us" content="About us page contant" img={aboutImg}/>
<Page titel="Contact us" content="Contact us page contant" img={contactImg}/>
<Page titel="Services" content="Services page contant" img={servicesImg}/>

  </div>
</div>
  );
  }


  export default App;
