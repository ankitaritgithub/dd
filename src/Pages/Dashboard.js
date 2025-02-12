import React from 'react';
import { Send, Paperclip, Image, Layout } from 'lucide-react';
import './Dashboard.css';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import dashboardArrow from '../assets/dashboaredarrow.svg';
import introductionIcon from '../assets/introduction-icon.svg';

const Dashboard = () => {
  const suggestedPrompts = {
    'Automate Case generation': [
      'Create a test case for signup page',
      'Create a test case for user is able to click on input field',
      'Test Case For Role Management'
    ],
    'Test Case Execution': [
      'Create a check list for Role management test cases',
      'Create a Checklist for Signup page',
      'Test Case For Role Management'
    ],
    'Code Import and Upload': [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, conse',
      'Lorem Ipsum Dolor Sit Amet.'
    ]
  };

  const PromptCard = ({ text }) => (
    <div className="prompt-card">
      <span className="prompt-text">{text}</span>
      <img src={dashboardArrow} alt="arrow" className="arrow-icon" />
    </div>
  );

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="chatbot-dashboared">
        <div className="header">
          <h1 className="main-title">
            Unveiling the Power of Test Case Generation
            <br />
            and Execution
          </h1>
          <p className="subtitle">
            Software testing with automated case generation, execution, and meticulous scrutiny, ensuring precision and efficiency in development workflows.
          </p>
        </div>

        <div className="prompts-section">
          <div className="prompts-header">
            <img src={introductionIcon} alt="introduction icon" className="sparkle" />
            <h2 className="section-title">Suggested Prompts</h2>
          </div>
          
          <div className="prompts-grid">
            {Object.entries(suggestedPrompts).map(([category, prompts]) => (
              <div key={category} className="category-card">
                <h3 className="category-title">{category}</h3>
                {prompts.map((prompt, index) => (
                  <PromptCard key={index} text={prompt} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="input-section">
          <div className="input-container">
            <input
              type="text"
              placeholder="How can I help you?"
              className="main-input"
            />
            <div className="action-buttons">
              <button className="icon-button">
                <Paperclip size={20} />
              </button>
              <button className="icon-button">
                <Image size={20} />
              </button>
              <button className="icon-button">
                <Layout size={20} />
              </button>
              <button className="send-button">
                <Send size={16} />
                Send message
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;