import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage, CaseStudiesPage, ProcessPage, StudioPage } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="studio" element={<StudioPage />} />
          <Route path="contact" element={<div className="pt-40 text-center min-h-[50vh]"><h1 className="text-4xl font-bold">Get in Touch</h1><p className="mt-4 text-gray-500">Contact form coming soon.</p></div>} />
          <Route path="*" element={<div className="pt-40 text-center min-h-[50vh]"><h1 className="text-4xl font-bold">404</h1><p className="mt-4 text-gray-500">Page not found.</p><Link to="/" className="text-accent mt-4 inline-block hover:underline">Go Home</Link></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

