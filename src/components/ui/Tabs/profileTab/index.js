
"use client"
import Container from '@/components/Layout/Container/Container';
import { useState } from 'react';

const ProfileTab = ({ tabs,className }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container className={`mt-10 flex flex-wrap md:flex-nowrap gap-4`}>
      <div className={`flex flex-col h-60 text-start space-y-3 w-full md:w-4/12 rounded-md bg-secondary shadow  p-4 sticky top-3  ${className}`}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 rounded-md border text-start  ${activeTab === index ? 'bg-primary text-white' : 'border-white text-dark'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4 w-full md:w-8/12">
        {tabs[activeTab].content}
      </div>
    </Container>
  );
};

export default ProfileTab;
