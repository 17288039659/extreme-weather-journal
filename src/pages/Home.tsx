// 首页 - 参考JAS/MWR风格
// 左侧：期刊封面 + 导航
// 中间：最新文章列表
import { Link } from 'react-router-dom';
import { journalInfo, latestArticles } from '../data/mockData';

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 左侧栏：期刊信息 + 导航 */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
            {/* 期刊封面图 */}
            <div className="w-full aspect-[3/4] rounded-lg mb-4 overflow-hidden shadow-sm">
              <img
                src={import.meta.env.BASE_URL + "cover.jpg"}
                alt={`${journalInfo.name} 封面`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 期刊基本信息 */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">ISSN</span>
                <span className="font-mono">{journalInfo.issn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">影响因子</span>
                <span className="font-semibold text-primary-600">{journalInfo.impactFactor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">刊期</span>
                <span>{journalInfo.frequency}</span>
              </div>
            </div>

            {/* 快捷导航 */}
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
              <Link
                to="/about"
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                关于本刊
              </Link>
              <Link
                to="/submission"
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                投稿须知
              </Link>
              <Link
                to="/template"
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                论文模板
              </Link>
              <Link
                to="/ethics"
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                伦理声明
              </Link>
            </div>
          </div>
        </aside>

        {/* 主内容区：最新文章 */}
        <main className="flex-1 min-w-0">
          {/* 当前期次标题 */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">最新文章</h2>
            <p className="text-sm text-gray-500 mt-1">
              暂无已发表文章
            </p>
          </div>

          {/* 文章列表 */}
          {latestArticles.length > 0 ? (
            <div className="space-y-4">
              {latestArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:border-primary-300 hover:shadow-sm transition-all"
                >
                  {/* 文章标题 */}
                  <Link
                    to={`/article/${article.id}`}
                    className="text-lg font-semibold text-primary-700 hover:text-primary-800 transition-colors leading-relaxed block"
                  >
                    {article.title}
                  </Link>

                  {/* 英文标题 */}
                  <p className="text-sm text-gray-500 mt-1 italic">{article.titleEn}</p>

                  {/* 作者 */}
                  <div className="mt-3 text-sm text-gray-600">
                    {article.authors.join(', ')}
                  </div>

                  {/* 摘要预览 */}
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {article.abstract}
                  </p>

                  {/* 底部信息 */}
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center px-2 py-1 bg-primary-50 text-primary-700 rounded">
                        {article.category}
                      </span>
                      <span>DOI: {article.doi}</span>
                    </div>
                    <span>{article.publishDate}</span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* 空状态 */
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">暂无文章</h3>
              <p className="text-gray-500">文章正在准备中，敬请期待</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
