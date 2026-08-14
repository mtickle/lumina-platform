import ScrollToTop from "@components/ScrollToTop";
import Layout from "@layouts/Layout";
import BibleStudyPage from "@pages/BibleStudyPage";
import ContactPage from "@pages/ContactPage";
import HomePage from "@pages/HomePage";
import LifeGroupsPage from "@pages/LifeGroupsPage";
import MealPage from "@pages/MealPage";
import MinistriesPage from "@pages/MinistriesPage";
import MusicPage from "@pages/MusicPage";
import NextGenPage from "@pages/NextGenPage";
import SermonsPage from "@pages/SermonsPage";
import SitemapPage from "@pages/SiteMapPage";
import WorshipPage from "@pages/WorshipPage";
import GivePage from "./pages/GivePage";
import PrototypePage from "./pages/PrototypePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <Route path="worship" element={<WorshipPage />} />
          <Route path="give" element={<GivePage />} />
          <Route path="prototype" element={<PrototypePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
