import React from 'react';
import { SmBreak } from 'components/common/break/smbreak';

const ListSupportingService: React.FC = () => {
  return (
    <div className="bg-white max-w-lg md:max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-[#0277BD] mb-8 text-center">
        AWS Marketplace
        <SmBreak />
        掲載支援サービスとは
      </h2>
      <div className="px-8 mx-auto">
        <p className="text-gray-700 mb-6 text-left">
        AWS アドバンストティアサービスパートナー及び、SaaS コンピテンシーパートナーとして、
        お客様の SaaS 製品を AWS Marketplace にスムーズに掲載するためサービスを提供しております。
        SaaS 導入事業者として、自社 SaaS 製品を掲載した経験と実績に基づいたノウハウで、
          AWS Marketplace へ掲載できる状態のプロダクト開発を支援し、販売拡大に寄与いたします。
        </p>
      </div>
      <div className="flex justify-center px-8">
        <button className="bg-orange-500 text-white py-3 px-8 rounded-full hover:bg-orange-600">
          お問い合わせはこちら
        </button>
      </div>
    </div>
  );
};

export { ListSupportingService }
