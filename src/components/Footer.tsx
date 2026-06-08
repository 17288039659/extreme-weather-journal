// 页脚 - 简洁学术风格
import { Link } from 'react-router-dom';
import { journalInfo } from '../data/mockData';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 期刊信息 */}
          <div>
            <h3 className="text-white font-semibold mb-3">{journalInfo.name}</h3>
            <p className="text-sm leading-relaxed">{journalInfo.publisher}</p>
            <p className="text-sm mt-2">ISSN: {journalInfo.issn}</p>
            <p className="text-sm">eISSN: {journalInfo.eISSN}</p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-white font-semibold mb-3">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/submission" className="hover:text-white transition-colors">投稿须知</Link></li>
              <li><Link to="/template" className="hover:text-white transition-colors">论文模板</Link></li>
              <li><Link to="/ethics" className="hover:text-white transition-colors">伦理声明</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">联系我们</Link></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-white font-semibold mb-3">联系方式</h3>
            <ul className="space-y-2 text-sm">
              <li>邮箱：{journalInfo.email}</li>
              <li>电话：{journalInfo.phone}</li>
              <li>地址：{journalInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {journalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
