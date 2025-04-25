# HumanChain AI Safety Incident Dashboard

![HumanChain Logo](public/humanchain-favicon.svg)


<img width="642" alt="Screenshot 2025-04-26 at 12 17 49 AM" src="https://github.com/user-attachments/assets/354f8504-3825-4106-8ad6-9d0a366e8cd7" />

A sleek, modern dashboard for viewing, filtering, and reporting AI safety incidents. This project serves as a frontend interface for HumanChain, allowing users to monitor and log hypothetical AI safety incidents.

## 🔍 Overview

HumanChain is a deep-tech software AI startup at the forefront of AI safety, aiming to build a safer, more trustworthy, and human-centric digital world. This dashboard provides an intuitive interface for:

- Monitoring recent AI safety incidents
- Filtering incidents by severity levels
- Sorting incidents chronologically
- Viewing detailed information about each incident
- Reporting new incidents through a validated form

## ✨ Features

- **Interactive Dashboard**: Clean, intuitive UI with responsive design
- **Incident Filtering**: Filter by severity levels (Low, Medium, High)
- **Time-based Sorting**: Sort incidents by date (newest/oldest first)
- **Expandable Details**: View comprehensive incident descriptions on demand
- **Incident Reporting**: Submit new incidents through a validated form
- **Dark/Light Mode**: Toggle between themes for better user experience
- **In-Memory Storage**: All data is managed within the frontend state
- **Responsive Design**: Fully functional across device sizes

## 🚀 Tech Stack

- **React**: UI component library
- **Vite**: Build tool and development server
- **JavaScript**: Programming language
- **CSS3**: Custom styling with Flexbox for responsive layouts
- **LocalStorage API**: For theme preference persistence

## 📋 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.14.0 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/humanchain-ai-safety-dashboard.git
cd humanchain-ai-safety-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Usage

### Viewing Incidents
- The main dashboard displays all reported incidents with their title, severity, and date
- Click "View Details" on any incident to see its full description
- Use the severity filters to show only incidents of specific severity levels
- Sort by date to prioritize newest or oldest incidents

### Reporting New Incidents
- Fill out the "Report New Incident" form
- Provide a title, description, and select a severity level
- Submit the form to add the incident to the dashboard
- The form validates inputs to ensure complete information

### Theme Switching
- Click the theme toggle in the top-right corner to switch between light and dark modes
- Your preference is saved between sessions

## 📷 Screenshots

![Dashboard Light Mode](screenshots/dashboard-light.png)
*Dashboard in Light Mode*

![Dashboard Dark Mode](screenshots/dashboard-dark.png)
*Dashboard in Dark Mode*

## 🔮 Future Enhancements

- Backend integration for persistent data storage
- User authentication and personalized views
- Advanced filtering and search capabilities
- Data visualization for incident trends
- Export/import functionality for incident data
- Mobile app version for on-the-go monitoring

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- This project was created as part of HumanChain's Frontend Intern Take-Home Assignment
- Mock data and requirements based on HumanChain's AI safety initiatives
- Icons and design inspiration from modern UI/UX trends in cybersecurity dashboards

---

Built with ❤️ for HumanChain - Building a safer, more trustworthy, and human-centric digital world.
