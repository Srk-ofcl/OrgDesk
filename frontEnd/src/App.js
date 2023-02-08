import './App.css';
import '../src/assets/css/bootstrap-datetimepicker.min.css';
import '../src/assets/css/bootstrap.css';
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/dataTables.bootstrap4.min.css';
import '../src/assets/css/font-awesome.min.css';
import '../src/assets/css/fullcalendar.min.css';
import '../src/assets/css/line-awesome.min.css';
import '../src/assets/css/select2.min.css';
import '../src/assets/css/style.css';
import Home from './app/view/homepage';
import AboutUs from './app/view/pages/aboutUs';
import Header from './app/view/components/header';
import Footer from './app/view/components/Footer';
import Profile from './app/view/pages/dashboards/admin_dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route exact path="/dashboard" element={<Home/>}/>
              <Route path="/about" element={<AboutUs />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
          <div className="main-wrapper">
    
          </div>
      <Footer />
    </div>
  );
}

export default App;
