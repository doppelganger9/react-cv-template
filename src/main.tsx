import ReactDOM from 'react-dom/client'
import { CVApp } from './App'
import data from "./data"
// importing fontawesome here or else it will not be loaded inside shadow tree...
import 'font-awesome/css/font-awesome.css';

class CurriculumVitaeApp extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const root = ReactDOM.createRoot(mountPoint);
    root.render(<CVApp {...data} />);
  }
}
customElements.define('cv-app-root', CurriculumVitaeApp);
