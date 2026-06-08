// 主应用组件 - 配置路由
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ArticleDetail } from './pages/ArticleDetail';
import { SubmissionGuidelines } from './pages/SubmissionGuidelines';
import { PaperTemplate } from './pages/PaperTemplate';
import { EthicsStatement } from './pages/EthicsStatement';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router basename="/extreme-weather-journal">
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* 顶部导航 */}
        <Header />

        {/* 主内容区 */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/submission" element={<SubmissionGuidelines />} />
            <Route path="/template" element={<PaperTemplate />} />
            <Route path="/ethics" element={<EthicsStatement />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* 页脚 */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
