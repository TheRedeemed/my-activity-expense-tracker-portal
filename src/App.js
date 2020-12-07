// import logo from './logo.svg';
import './App.css';
import AppHeader from './components/header/AppHeader';
import AppContent from './components/content/AppContent';
import AppFooter from './components/footer/AppFooter';

function App() {
  return (
    <div className='App-container'>
      <AppHeader data-testid='app-header' />
      <AppContent data-testid='app-content' />
      <AppFooter data-testid='app-footer' />
    </div>
  );
}

export default App;
