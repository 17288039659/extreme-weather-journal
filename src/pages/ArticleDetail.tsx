import { useParams, Link } from 'react-router-dom';
import { latestArticles } from '../data/mockData';

export const ArticleDetail = () => {
  const { id } = useParams();
  const article = latestArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">文章未找到</h1>
        <p className="text-gray-500 mb-6">该文章可能尚未上线或已被移除。</p>
        <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
          返回首页
        </Link>
      </div>
    );
  }

  // PDF 文件名规则：与 article.id 对应
  const pdfUrl = import.meta.env.BASE_URL + article.id + '.pdf';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 面包屑导航 */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-primary-600 transition-colors">首页</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">文章详情</span>
      </nav>

      {/* 文章信息卡片 */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        {/* 标签 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
            {article.category}
          </span>
          <span className="text-xs text-gray-400">
            Vol. {article.volume}, No. {article.issue}, pp. {article.pages}
          </span>
        </div>

        {/* 中文标题 */}
        <h1 className="text-xl font-bold text-gray-900 leading-relaxed">
          {article.title}
        </h1>

        {/* 英文标题 */}
        <p className="text-sm text-gray-500 mt-1 italic">{article.titleEn}</p>

        {/* 作者信息 */}
        <div className="mt-4 text-sm text-gray-600">
          <span className="font-medium text-gray-700">作者：</span>
          {article.authors.join(', ')}
        </div>

        {/* 单位 */}
        <div className="mt-1 text-sm text-gray-500">
          {article.affiliations.join('; ')}
        </div>

        {/* 摘要 */}
        <div className="mt-5 pt-5 border-t border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-2">摘要</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{article.abstract}</p>
        </div>

        {/* 关键词 */}
        <div className="mt-4">
          <h3 className="font-semibold text-gray-900 mb-2 text-sm">关键词</h3>
          <div className="flex flex-wrap gap-2">
            {article.keywords.map((kw, i) => (
              <span key={i} className="inline-flex items-center px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* DOI & 日期 */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
          <span>DOI: {article.doi}</span>
          <span>发布日期: {article.publishDate}</span>
        </div>
      </div>

      {/* PDF 在线阅读器 */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            在线阅读
          </h3>
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-600 text-white text-xs font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            下载 PDF
          </a>
        </div>
        <iframe
          src={pdfUrl}
          className="w-full border-0"
          style={{ height: '80vh', minHeight: '600px' }}
          title={article.title}
        />
      </div>
    </div>
  );
};
