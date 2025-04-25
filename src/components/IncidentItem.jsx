import '../styles/IncidentItem.css';

function IncidentItem({ incident, isExpanded, onToggleExpand }) {
  // Format the date to be more readable
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };
  
  // Get severity class for styling
  const getSeverityClass = (severity) => {
    switch(severity) {
      case 'Low':
        return 'severity-low';
      case 'Medium':
        return 'severity-medium';
      case 'High':
        return 'severity-high';
      default:
        return '';
    }
  };
  
  return (
    <div className={`incident-item ${getSeverityClass(incident.severity)}`}>
      <div className="incident-header">
        <h3 className="incident-title">{incident.title}</h3>
        <div className="incident-meta">
          <span className={`incident-severity ${getSeverityClass(incident.severity)}`}>
            {incident.severity}
          </span>
          <span className="incident-date">
            {formatDate(incident.reported_at)}
          </span>
        </div>
      </div>
      
      <button 
        className="view-details-btn"
        onClick={onToggleExpand}
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Hide Details' : 'View Details'}
      </button>
      
      {isExpanded && (
        <div className="incident-details">
          <p>{incident.description}</p>
        </div>
      )}
    </div>
  );
}

export default IncidentItem; 