import './App.css';
import CountdownTimer from './components/CountdownTimer';
import PlaceholderPage from './components/PlaceholderPage';


function App() {



  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center text-center py-12">
      <div>
        <h3 className="text-3xl md:text-5xl font-bold">Website Under Development</h3>
        <p className="m-3">We`re working hard to bring you our new website. Stay tuned!</p>
        <CountdownTimer />
        <PlaceholderPage />
      </div>
    </div>
  );
}

export default App;
