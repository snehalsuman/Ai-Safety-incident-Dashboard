import { useState } from 'react';
import IncidentItem from './IncidentItem';
import '../styles/IncidentList.css';

function IncidentList({ incidents }) {
  const [expandedIncidents, setExpandedIncidents] = useState({});
  
  // Toggle expanded state for an incident
  const toggleExpand = (id) => {
    setExpandedIncidents(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  return (
    <div className="incident-list">
      {incidents.length === 0 ? (
        <p className="no-incidents">No incidents match your current filters.</p>
      ) : (
        incidents.map(incident => (
          <IncidentItem 
            key={incident.id}
            incident={incident}
            isExpanded={!!expandedIncidents[incident.id]}
            onToggleExpand={() => toggleExpand(incident.id)}
          />
        ))
      )}
    </div>
  );
}

export default IncidentList; 