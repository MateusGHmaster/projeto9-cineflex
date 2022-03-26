import ReactDOM from 'react-dom';
import App from './components/App';
import './components/reset.css';
import './components/style.css';

const CineFlex = App();
ReactDOM.render (CineFlex, document.querySelector('.root'));