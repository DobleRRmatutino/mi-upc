import React, { useState, useEffect } from 'react';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { TiuVirtualScreen } from './screens/TiuVirtualScreen';
import { AcademicoScreen } from './screens/AcademicoScreen';
import { AyudaScreen } from './screens/AyudaScreen';
import { SecretEditorModal } from './components/SecretEditorModal';
import { initialMockData } from './data/mockData';

function App() {
  // Load saved profile data from device localStorage or default mock
  const [mockData, setMockData] = useState(() => {
    try {
      const saved = localStorage.getItem('upc_student_profile');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Error reading saved profile:", e);
    }
    return initialMockData;
  });

  // Screen navigation state: 'home' | 'academico' | 'ayuda' | 'perfil' | 'tiu'
  const [activeScreen, setActiveScreen] = useState('home');
  const [previousTab, setPreviousTab] = useState('perfil');

  // Secret editor modal state (opened by 3 quick taps on UPC logo/avatar)
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleOpenTiu = () => {
    setPreviousTab(activeScreen === 'tiu' ? 'perfil' : activeScreen);
    setActiveScreen('tiu');
  };

  const handleBackFromTiu = () => {
    setActiveScreen(previousTab || 'perfil');
  };

  const handleSaveData = (newData) => {
    setMockData(newData);
    try {
      localStorage.setItem('upc_student_profile', JSON.stringify(newData));
    } catch (e) {
      console.error("Error saving profile to localStorage:", e);
    }
  };

  const handleResetData = () => {
    setMockData(initialMockData);
    try {
      localStorage.removeItem('upc_student_profile');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full h-[100dvh] max-w-md mx-auto bg-white flex flex-col relative overflow-hidden select-none font-sans">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {activeScreen === 'home' && (
          <HomeScreen
            data={mockData}
            onNavigateToTab={(tab) => setActiveScreen(tab)}
            onOpenTiu={handleOpenTiu}
            onSecretTrigger={() => setIsEditorOpen(true)}
          />
        )}

        {activeScreen === 'perfil' && (
          <ProfileScreen
            data={mockData}
            onOpenTiu={handleOpenTiu}
            onSecretTrigger={() => setIsEditorOpen(true)}
          />
        )}

        {activeScreen === 'tiu' && (
          <TiuVirtualScreen
            data={mockData}
            onBack={handleBackFromTiu}
            onSecretTrigger={() => setIsEditorOpen(true)}
          />
        )}

        {activeScreen === 'academico' && (
          <AcademicoScreen data={mockData} />
        )}

        {activeScreen === 'ayuda' && (
          <AyudaScreen />
        )}
      </main>

      {/* Bottom Navigation Bar (Hidden on TIU Virtual screen) */}
      {activeScreen !== 'tiu' && (
        <BottomNav
          activeTab={activeScreen}
          onSelectTab={(tab) => setActiveScreen(tab)}
        />
      )}

      {/* Secret Editor Modal (Activated via 3 quick taps on the UPC logo or avatar) */}
      <SecretEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        currentData={mockData}
        onSave={handleSaveData}
        onReset={handleResetData}
      />
    </div>
  );
}

export default App;
