
"use client"
import Container from '@/components/Layout/Container/Container';
import { useState } from 'react';

const Tabs = ({ tabs,className ,containerName}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container className={`mt-10 ${containerName}`}>
      <div className={`flex space-x-2 items-center ${className}`}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 rounded-md border  ${activeTab === index ? 'bg-primary text-white' : 'border-primary text-dark'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs[activeTab].content}
      </div>
    </Container>
  );
};

export default Tabs;
