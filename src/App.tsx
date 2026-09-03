import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectsPage from './pages/ProjectsPage';

function ScrollToRoute() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }

    window.scrollTo(0, 0);
  }, [hash, pathname]);

  return null;
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed right-2 top-20 z-50 flex h-[90%] w-3 items-stretch md:right-3 md:w-4">
      <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-700/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-[1px]">
        <div
          className="absolute inset-x-0 top-0 w-full rounded-full bg-linear-to-b from-cyan-300 via-primary to-sky-500 shadow-[0_0_18px_rgba(0,200,255,0.8)] transition-[height] duration-150 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToRoute />
      <ScrollProgress />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projets" element={<ProjectsPage />} />
        <Route path="/projets/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
