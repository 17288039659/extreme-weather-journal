// 伦理声明页面

export const EthicsStatement = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-200">
        伦理声明
      </h1>

      <div className="space-y-8">
        {/* 出版伦理 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            一、出版伦理
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>《极端天气学报》严格遵循国际出版伦理委员会（COPE）的出版伦理规范，致力于维护学术出版的诚信与公正。</p>
            <p>本刊所有编辑、审稿人和作者均应遵守以下伦理准则。</p>
          </div>
        </section>

        {/* 作者伦理 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            二、作者伦理
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p><strong>1. 原创性与一稿多投</strong></p>
            <p className="ml-4">投稿稿件应为原创性研究成果，未在其他期刊或出版物上发表或同时投稿。一稿多投属于学术不端行为，一经发现将拒稿处理。</p>

            <p><strong>2. 数据真实性</strong></p>
            <p className="ml-4">作者应确保研究数据的真实性、准确性和完整性。不得伪造、篡改或选择性报告数据。研究结果应如实反映实验或观测的实际情况。</p>

            <p><strong>3. 署名与贡献</strong></p>
            <p className="ml-4">稿件署名应仅包括对研究有实质性贡献的人员。所有作者均应参与研究的设计、实施、分析或论文撰写。通讯作者负责稿件的整体质量和所有作者的知情同意。</p>

            <p><strong>4. 利益冲突声明</strong></p>
            <p className="ml-4">作者应在投稿时声明任何可能影响研究客观性的利益关系，包括经济利益、学术关系等。如无利益冲突，也需明确声明。</p>

            <p><strong>5. 引用规范</strong></p>
            <p className="ml-4">作者应正确引用他人研究成果，不得故意遗漏重要参考文献，也不得过度自引。</p>
          </div>
        </section>

        {/* 审稿人伦理 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            三、审稿人伦理
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p><strong>1. 客观公正</strong></p>
            <p className="ml-4">审稿人应基于稿件的学术质量进行评审，不受作者身份、国籍、机构等因素影响。</p>

            <p><strong>2. 保密义务</strong></p>
            <p className="ml-4">审稿人应对送审稿件的内容严格保密，不得在稿件正式发表前向他人透露或用于个人研究。</p>

            <p><strong>3. 时效性</strong></p>
            <p className="ml-4">审稿人应在约定时间内完成评审。如无法按时完成，应及时通知编辑部。</p>

            <p><strong>4. 利益冲突回避</strong></p>
            <p className="ml-4">如审稿人与稿件作者存在竞争、合作或师生关系等利益冲突，应主动回避。</p>
          </div>
        </section>

        {/* 编辑伦理 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            四、编辑伦理
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p><strong>1. 公正决策</strong></p>
            <p className="ml-4">编辑应基于稿件的学术价值和审稿意见做出录用或退稿决定，不受个人偏好或外部压力影响。</p>

            <p><strong>2. 保密原则</strong></p>
            <p className="ml-4">编辑应对投稿稿件的内容严格保密，不得向非审稿人员透露。</p>

            <p><strong>3. 廉洁自律</strong></p>
            <p className="ml-4">编辑不得利用职务之便为自己或他人谋取利益，不得接受作者的财物或其他好处。</p>
          </div>
        </section>

        {/* 学术不端处理 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            五、学术不端处理
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>本刊对以下学术不端行为采取零容忍政策：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>抄袭</strong>：包括全文抄袭、部分抄袭、翻译抄袭等</li>
              <li><strong>伪造数据</strong>：包括编造、篡改研究数据和结果</li>
              <li><strong>一稿多投</strong>：同时向多家期刊投稿同一稿件</li>
              <li><strong>不当署名</strong>：包括挂名、遗漏真实贡献者等</li>
              <li><strong>重复发表</strong>：将已发表内容改头换面再次发表</li>
            </ul>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
              <p className="text-red-800 font-medium">处理措施：</p>
              <p className="text-red-700 mt-1">一经查实，本刊将采取退稿、撤稿、通知作者单位、在期刊网站公示等措施。情节严重者，将通报相关学术管理部门。</p>
            </div>
          </div>
        </section>

        {/* 投稿确认 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            六、投稿伦理确认
          </h2>
          <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed">
            <p>投稿时，通讯作者需确认以下事项：</p>
            <ol className="list-decimal list-inside space-y-2 mt-3">
              <li>本稿件为原创性研究，未在其他期刊发表或同时投稿</li>
              <li>所有数据真实可靠，研究过程符合学术规范</li>
              <li>所有署名作者均已知情并同意投稿</li>
              <li>已按要求声明利益冲突</li>
              <li>已按规范引用他人研究成果</li>
              <li>已遵守本刊伦理规范</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};
