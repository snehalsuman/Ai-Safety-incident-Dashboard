import { useState } from 'react';
import mockIncidents from '../data/mockIncidents';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import '../styles/Dashboard.css';

function Dashboard() {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  
  // Handle adding a new incident
  const handleAddIncident = (newIncident) => {
    // Generate a new ID (in a real app this would be handled by the backend)
    const newId = Math.max(...incidents.map(inc => inc.id)) + 1;
    
    // Create a new incident with the current date
    const incidentWithMetadata = {
      ...newIncident,
      id: newId,
      reported_at: new Date().toISOString()
    };
    
    // Add the new incident to the state
    setIncidents([...incidents, incidentWithMetadata]);
  };

  // Filter incidents based on severity
  const filteredIncidents = filter === "All" 
    ? incidents 
    : incidents.filter(incident => incident.severity === filter);
  
  // Sort incidents based on date
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at);
    const dateB = new Date(b.reported_at);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="brand">
          <div className="logo">
            <span className="logo-icon">🔗</span>
            <span className="logo-text">HumanChain</span>
          </div>
          <h1>AI Safety Incident Dashboard</h1>
          <p className="tagline">Building a safer, more trustworthy, and human-centric digital world</p>
        </div>
      </header>
      
      <div className="dashboard-controls">
        <div className="filter-controls">
          <label>Filter by Severity:</label>
          <div className="button-group">
            <button 
              className={filter === "All" ? "active" : ""} 
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button 
              className={filter === "Low" ? "active" : ""} 
              onClick={() => setFilter("Low")}
            >
              Low
            </button>
            <button 
              className={filter === "Medium" ? "active" : ""} 
              onClick={() => setFilter("Medium")}
            >
              Medium
            </button>
            <button 
              className={filter === "High" ? "active" : ""} 
              onClick={() => setFilter("High")}
            >
              High
            </button>
          </div>
        </div>
        
        <div className="sort-controls">
          <label>Sort by Date:</label>
          <div className="button-group">
            <button 
              className={sortOrder === "newest" ? "active" : ""} 
              onClick={() => setSortOrder("newest")}
            >
              Newest First
            </button>
            <button 
              className={sortOrder === "oldest" ? "active" : ""} 
              onClick={() => setSortOrder("oldest")}
            >
              Oldest First
            </button>
          </div>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="incidents-container">
          <h2>Reported Incidents</h2>
          <IncidentList incidents={sortedIncidents} />
        </div>
        
        <div className="form-container">
          <h2>Report New Incident</h2>
          <IncidentForm onAddIncident={handleAddIncident} />
        </div>
      </div>
      
      <footer className="dashboard-footer">
        <p>&copy; {new Date().getFullYear()} HumanChain. All rights reserved.</p>
        <p>Committed to AI safety and human-centric technology</p>
      </footer>
    </div>
  );
}

export default Dashboard; 