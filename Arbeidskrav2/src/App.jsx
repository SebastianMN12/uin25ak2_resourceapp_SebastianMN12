import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/html" />} />
          <Route path="/html" element={<Resources category="HTML" />} />
          <Route path="/css" element={<Resources category="CSS" />} />
          <Route path="/javascript" element={<Resources category="JavaScript" />} />
          <Route path="/react" element={<Resources category="React" />} />
          <Route path="/sanity-and-headless-cms" element={<Resources category="Sanity and headless CMS" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
