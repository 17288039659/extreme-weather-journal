// 关于我们页面 - 期刊简介 + 编委会（合并页面）
import { journalInfo, editorialBoard } from '../data/mockData';

export const About = () => {
  // 按角色分组
  const editorInChief = editorialBoard.filter(m => m.role === '主编');
  const deputyEditors = editorialBoard.filter(m => m.role === '副主编');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 期刊简介 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
          期刊简介
        </h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            {journalInfo.description}
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">收录与指标</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{journalInfo.impactFactor}</div>
                <div className="text-sm text-gray-500">影响因子</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{journalInfo.foundedYear}</div>
                <div className="text-sm text-gray-500">创刊年份</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{journalInfo.frequency}</div>
                <div className="text-sm text-gray-500">出版频率</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">1</div>
                <div className="text-sm text-gray-500">已出卷数</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 办刊宗旨 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
          办刊宗旨
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {journalInfo.scope}
        </p>
      </section>

      {/* 编委会 */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
          编委会
        </h2>

        {/* 主编 */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            主编
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {editorInChief.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg border border-gray-200 p-5 hover:border-primary-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-700 font-semibold text-lg">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-sm text-gray-500">{member.nameEn}</p>
                    <p className="text-sm text-gray-600 mt-1">{member.title}</p>
                    <p className="text-sm text-gray-500">{member.affiliation}</p>
                    <p className="text-sm text-primary-600 mt-2">{member.researchArea}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 副主编 */}
        {deputyEditors.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
              副主编
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deputyEditors.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-lg border border-gray-200 p-5 hover:border-primary-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-semibold text-lg">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-sm text-gray-500">{member.nameEn}</p>
                      <p className="text-sm text-gray-600 mt-1">{member.title}</p>
                      <p className="text-sm text-gray-500">{member.affiliation}</p>
                      <p className="text-sm text-primary-600 mt-2">{member.researchArea}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
