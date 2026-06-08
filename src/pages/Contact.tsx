// 联系我们页面
import { journalInfo } from '../data/mockData';

export const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-200">
        联系我们
      </h1>

      <div className="space-y-8">
        {/* 编辑部信息 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            编辑部信息
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-700 font-bold text-lg">JEW</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{journalInfo.name} 编辑部</h3>
                  <p className="text-sm text-gray-500">{journalInfo.publisher}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">电子邮箱</div>
                    <div className="text-gray-900 font-medium">{journalInfo.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">联系电话</div>
                    <div className="text-gray-900 font-medium">{journalInfo.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">通讯地址</div>
                    <div className="text-gray-900 font-medium">{journalInfo.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 常见问题 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-600 rounded-full"></span>
            常见问题
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-medium text-gray-900 mb-2">Q：投稿后多久能收到审稿意见？</h3>
              <p className="text-gray-600 text-sm">A：一般在投稿后30个工作日内收到审稿意见。如超过此时间未收到，请联系编辑部。</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-medium text-gray-900 mb-2">Q：如何查询稿件状态？</h3>
              <p className="text-gray-600 text-sm">A：可通过在线投稿系统实时查询稿件状态，或联系编辑部咨询。</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-medium text-gray-900 mb-2">Q：录用后多久能发表？</h3>
              <p className="text-gray-600 text-sm">A：录用稿件一般在1-3个月内在线优先出版，正式出版取决于当期排期。</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-medium text-gray-900 mb-2">Q：是否收取版面费？</h3>
              <p className="text-gray-600 text-sm">A：本刊不收取版面费和审稿费。</p>
            </div>
          </div>
        </section>

        {/* 工作时间 */}
        <section>
          <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-600">
            <p className="font-medium text-gray-900 mb-2">编辑部工作时间</p>
            <p>周一至周五 9:00 - 17:00</p>
            <p className="text-sm text-gray-500 mt-2">（法定节假日除外）</p>
          </div>
        </section>
      </div>
    </div>
  );
};
