// 文章详情页 - 学术论文展示
import { useParams, Link } from 'react-router-dom';
import { latestArticles } from '../data/mockData';

export const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = latestArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">文章未找到</h2>
        <p className="text-gray-500 mb-6">您访问的文章不存在或已下架。</p>
        <Link
          to="/"
          className="px-6 py-2 text-sm font-medium text-primary-600 border border-primary-300 rounded-lg hover:bg-primary-50 transition-colors"
        >
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 返回链接 */}
      <nav className="mb-6">
        <Link
          to="/"
          className="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
        >
          <span>←</span>
          <span>返回最新文章</span>
        </Link>
      </nav>

      {/* 文章头部 */}
      <article className="bg-white rounded-lg border border-gray-200">
        {/* 文章标题区域 */}
        <div className="p-8 border-b border-gray-200">
          {/* 分类标签 */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full">
              {article.category}
            </span>
          </div>

          {/* 中文标题 */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
            {article.title}
          </h1>

          {/* 英文标题 */}
          <p className="text-lg text-gray-500 mt-3 italic leading-relaxed">
            {article.titleEn}
          </p>

          {/* 作者信息 */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-3">
              {article.authors.map((author, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {author}
                </span>
              ))}
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {article.affiliations.join(' · ')}
            </div>
          </div>

          {/* 发表信息 */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>发表日期：{article.publishDate}</span>
            <span>·</span>
            <span>Vol. {article.volume}, No. {article.issue}, pp. {article.pages}</span>
          </div>
        </div>

        {/* 摘要 */}
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">摘要</h2>
          <p className="text-gray-700 leading-relaxed">
            {article.abstract}
          </p>
        </div>

        {/* 关键词 */}
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">关键词</h2>
          <div className="flex flex-wrap gap-2">
            {article.keywords.map((keyword, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* DOI 与引用 */}
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">引用信息</h2>
          <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700 break-all">
            DOI: {article.doi}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors">
              下载 PDF
            </button>
            <button className="px-4 py-2 text-sm font-medium text-primary-600 border border-primary-300 rounded-lg hover:bg-primary-50 transition-colors">
              引用本文
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              分享
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};
