// 投稿须知页面
import { journalInfo } from '../data/mockData';

export const SubmissionGuidelines = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-200">
        投稿须知
      </h1>

      <div className="space-y-8">
        {/* 一、期刊范围 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            一、期刊范围
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>{journalInfo.description}</p>
            <p>{journalInfo.scope}</p>
          </div>
        </section>

        {/* 二、稿件类型 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            二、稿件类型
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>本刊接受以下类型的稿件：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>原创研究论文（Research Article）</strong>：报道极端天气领域的重要原创性研究成果，一般不超过10000字。</li>
              <li><strong>综述文章（Review Article）</strong>：对某一研究方向的最新进展进行系统评述，一般不超过12000字。</li>
              <li><strong>研究简报（Research Letter）</strong>：简要报道阶段性研究成果或重要发现，一般不超过4000字。</li>
              <li><strong>观点与评论（Perspective & Comment）</strong>：对热点问题的分析和评论，一般不超过3000字。</li>
            </ul>
          </div>
        </section>

        {/* 三、投稿要求 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            三、投稿要求
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p><strong>1. 语言要求</strong></p>
            <p className="ml-4">来稿应使用规范的中英文撰写。中文稿件需附英文摘要和英文标题；英文稿件需附中文摘要和中文标题。</p>

            <p><strong>2. 格式要求</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>标题：简明扼要，一般不超过20个汉字（中文）或15个实词（英文）</li>
              <li>作者信息：包括姓名、单位、通信地址、邮箱</li>
              <li>摘要：200-300字（中文）或150-250词（英文），应包含目的、方法、结果和结论</li>
              <li>关键词：3-8个，按学科体系排列</li>
              <li>正文：引言、数据与方法、结果与分析、讨论、结论</li>
              <li>参考文献：采用顺序编码制，格式参照本刊模板</li>
            </ul>

            <p><strong>3. 图表要求</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>图表应清晰、规范，分辨率不低于300 dpi</li>
              <li>图件需提供可编辑的矢量格式（如EPS、PDF）或高分辨率位图格式（TIFF）</li>
              <li>表格使用三线表格式</li>
              <li>所有图表应有中英文图题和表题</li>
            </ul>

            <p><strong>4. 数据与代码</strong></p>
            <p className="ml-4">本刊鼓励作者公开研究数据和分析代码。如涉及敏感数据，可申请数据保密期。</p>
          </div>
        </section>

        {/* 四、投稿流程 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            四、投稿流程
          </h2>
          <div className="text-gray-700 leading-relaxed">
            <ol className="list-decimal list-inside space-y-3">
              <li><strong>在线投稿</strong>：通过本刊在线投稿系统提交稿件（含Word和PDF格式）</li>
              <li><strong>初审</strong>：编辑部对稿件进行形式审查，约5个工作日</li>
              <li><strong>同行评审</strong>：送2-3位相关领域专家进行双盲评审，约30个工作日</li>
              <li><strong>审稿意见</strong>：根据评审意见决定录用、修改或退稿</li>
              <li><strong>修改与复审</strong>：作者按审稿意见修改后提交修改稿，必要时进行复审</li>
              <li><strong>录用与排版</strong>：录用后由编辑部进行排版校对</li>
              <li><strong>发表</strong>：在线优先出版（Online First）或正式出版</li>
            </ol>
          </div>
        </section>

        {/* 五、版权与费用 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            五、版权与费用
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>稿件录用后，作者需签署版权转让协议。本刊不收取版面费和审稿费。</p>
            <p>稿件一经录用，版权归 {journalInfo.publisher} 所有。</p>
          </div>
        </section>

        {/* 六、联系我们 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            六、联系我们
          </h2>
          <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed space-y-2">
            <p>如有疑问，请联系编辑部：</p>
            <p>邮箱：{journalInfo.email}</p>
            <p>电话：{journalInfo.phone}</p>
            <p>地址：{journalInfo.address}</p>
          </div>
        </section>
      </div>
    </div>
  );
};
