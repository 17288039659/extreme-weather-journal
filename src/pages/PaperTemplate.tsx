// 论文模板页面

export const PaperTemplate = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-200">
        论文模板
      </h1>

      <div className="space-y-8">
        {/* 下载模板 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            模板下载
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">请根据您的稿件类型下载对应的论文模板：</p>
            <div className="space-y-3">
              <a href={import.meta.env.BASE_URL + "JEW-论文模板.docx"} download className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">原创研究论文模板</div>
                  <div className="text-sm text-gray-500">Research Article Template (.docx)</div>
                </div>
              </a>
              <a href={import.meta.env.BASE_URL + "JEW-论文模板.pdf"} download className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">论文模板（PDF预览版）</div>
                  <div className="text-sm text-gray-500">Template Preview (.pdf)</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 格式规范 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            格式规范概览
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">项目</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">中文稿件</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">英文稿件</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 px-4 font-medium">标题</td>
                    <td className="py-3 px-4">≤20字</td>
                    <td className="py-3 px-4">≤15个实词</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">摘要</td>
                    <td className="py-3 px-4">200-300字</td>
                    <td className="py-3 px-4">150-250词</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">关键词</td>
                    <td className="py-3 px-4">3-8个</td>
                    <td className="py-3 px-4">3-8个</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">正文格式</td>
                    <td className="py-3 px-4">宋体 小四</td>
                    <td className="py-3 px-4">Times New Roman 12pt</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">行距</td>
                    <td className="py-3 px-4">1.5倍行距</td>
                    <td className="py-3 px-4">Double spacing</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">页边距</td>
                    <td className="py-3 px-4" colSpan={2}>上下2.54cm，左右3.17cm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">图表分辨率</td>
                    <td className="py-3 px-4" colSpan={2}>≥300 dpi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 参考文献格式 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            参考文献格式示例
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>本刊采用顺序编码制，参考文献格式如下：</p>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4 font-mono text-sm">
              <div>
                <span className="font-semibold text-gray-900">[期刊论文]</span>
                <p className="mt-1">作者. 文章标题[J]. 期刊名, 年, 卷(期): 页码.</p>
                <p className="text-gray-500">例：张三, 李四. 华南暴雨的中尺度特征[J]. 极端天气学报, 2026, 1(1): 1-15.</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">[专著]</span>
                <p className="mt-1">作者. 书名[M]. 出版地: 出版社, 年.</p>
                <p className="text-gray-500">例：王五. 台风动力学[M]. 北京: 气象出版社, 2025.</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">[会议论文]</span>
                <p className="mt-1">作者. 论文标题[C]//会议名称. 出版地: 出版者, 年: 页码.</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">[学位论文]</span>
                <p className="mt-1">作者. 论文标题[D]. 城市: 学校名称, 年.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 注意事项 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            注意事项
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-amber-800 leading-relaxed space-y-2">
            <p>• 请严格按照模板格式排版，格式不规范的稿件将被退回修改</p>
            <p>• 所有图表需在正文中按顺序引用，并附中英文图题和表题</p>
            <p>• 参考文献请仔细核对，确保信息完整准确</p>
            <p>• 投稿前请确认所有作者已阅读并同意稿件内容</p>
          </div>
        </section>
      </div>
    </div>
  );
};
