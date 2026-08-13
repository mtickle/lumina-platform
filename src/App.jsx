import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@layouts/Layout';
import HomePage from '@pages/HomePage';
import SermonsPage from '@pages/SermonsPage';
import LifeGroupsPage from '@pages/LifeGroupsPage';
import MinistriesPage from '@pages/MinistriesPage';
import ContactPage from '@pages/ContactPage';
import BibleStudyPage from '@pages/BibleStudyPage';
import MealPage from '@pages/MealPage';
import ScrollToTop from '@components/ScrollToTop';
import MusicPage from '@pages/MusicPage';
import NextGenPage from '@pages/NextGenPage';
import SitemapPage from '@pages/SiteMapPage';

// Placeholder for remaining pages
const PagePlaceholder = ({ title }) => (
  <div className="max-w-6xl mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl font-bold text-slate-900 mb-4">{title}</h1>
    <p className="text-slate-600">Coming soon!</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="sermons" element={<SermonsPage />} />
          <Route path="lifegroups" element={<LifeGroupsPage />} />
          <Route path="ministries" element={<MinistriesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="biblestudy" element={<BibleStudyPage />} />
          <Route path="meal" element={<MealPage />} />
          <Route path="music" element={<MusicPage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="nextgen" element={<NextGenPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}