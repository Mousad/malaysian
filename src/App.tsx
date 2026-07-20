import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Universities from './pages/Universities'
import UniversityDetail from './pages/UniversityDetail'
import Scholarships from './pages/Scholarships'
import StudyInMalaysia from './pages/StudyInMalaysia'
import Stories from './pages/Stories'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Apply from './pages/Apply'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/universities"
          element={
            <Layout>
              <Universities />
            </Layout>
          }
        />
        <Route
          path="/universities/:id"
          element={
            <Layout>
              <UniversityDetail />
            </Layout>
          }
        />
        <Route
          path="/scholarships"
          element={
            <Layout>
              <Scholarships />
            </Layout>
          }
        />
        <Route
          path="/study-in-malaysia"
          element={
            <Layout>
              <StudyInMalaysia />
            </Layout>
          }
        />
        <Route
          path="/stories"
          element={
            <Layout>
              <Stories />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  )
}
