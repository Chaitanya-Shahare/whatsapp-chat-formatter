import logo from './logo.svg';
import './App.css';
import FileUploader from './components/FileUploader';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<FileUploader/>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<FileUploader/>}/>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
