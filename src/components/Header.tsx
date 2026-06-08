// 顶部导航栏 - 深蓝底色白字，学术期刊风格
import { Link, useLocation } from 'react-router-dom';
import { journalInfo } from '../data/mockData';

export const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/about', label: '关于我们' },
    { path: '/submission', label: '投稿须知' },
    { path: '/contact', label: '联系我们' },
  ];

  return (
    <header className="bg-primary-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 左侧：期刊名称 */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">JEW</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">{journalInfo.name}</h1>
              <p className="text-xs text-blue-200 leading-tight">{journalInfo.nameEn}</p>
            </div>
          </Link>

          {/* 右侧：导航链接 */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-white/20 text-white'
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
