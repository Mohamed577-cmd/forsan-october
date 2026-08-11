import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { SideProgress } from './components/SideProgress';
import { Hero } from './sections/Hero';
import { ResearchIdea } from './sections/ResearchIdea';
import { TopicsOverview } from './sections/TopicsOverview';
import { TimelineSection } from './sections/TimelineSection';
import { StrategicMap } from './sections/StrategicMap';
import { TopicSections } from './sections/TopicSections';
import { SourcesSection } from './sections/SourcesSection';
import { Footer } from './sections/Footer';

function App() {
  const [presentationMode, setPresentationMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('presentation-mode', presentationMode);
    return () => document.body.classList.remove('presentation-mode');
  }, [presentationMode]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">تخطَّ إلى المحتوى</a>
      <Navbar
        presentationMode={presentationMode}
        onTogglePresentation={() => setPresentationMode((isActive) => !isActive)}
      />
      <SideProgress />
      <main id="main-content">
        <Hero />
        <ResearchIdea />
        <TopicsOverview />
        <TimelineSection />
        <StrategicMap />
        <TopicSections />
        <SourcesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
