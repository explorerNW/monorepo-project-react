import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Link to={'/user-profile'}>user profile</Link>
    </div>
  );
};

export default App;
