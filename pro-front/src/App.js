import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <div className="title-container">
          <h1>
            Refine <span className="and">&</span> Structure
          </h1>
          <h2>
            Your <span className="italic">Business</span>
          </h2>
          <h2>
            <span className="italic">Documents</span> in Seconds
          </h2>
        </div>
        <p className="subtitle">Structure, select, and download instantly.</p>
        <div className="search-container">
          <div className="file-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18V12" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 15H15" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <select className="document-dropdown">
            <option value="" disabled selected>Select Document</option>
            <option value="invoice">Invoice</option>
            <option value="contract">Contract</option>
            <option value="report">Report</option>
            <option value="letter">Letter</option>
          </select>
          <button className="generate-button">Generate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
