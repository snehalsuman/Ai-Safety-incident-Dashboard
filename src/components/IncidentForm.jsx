import { useState } from 'react';
import '../styles/IncidentForm.css';

function IncidentForm({ onAddIncident }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: 'Medium'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      onAddIncident(formData);
      
      // Reset form after successful submission
      setFormData({
        title: '',
        description: '',
        severity: 'Medium'
      });
    }
    
    setIsSubmitting(false);
  };
  
  return (
    <form className="incident-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Incident Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className={errors.description ? 'error' : ''}
        ></textarea>
        {errors.description && <span className="error-message">{errors.description}</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="severity">Severity</label>
        <select
          id="severity"
          name="severity"
          value={formData.severity}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      
      <button 
        type="submit" 
        className="submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Report Incident'}
      </button>
    </form>
  );
}

export default IncidentForm; 