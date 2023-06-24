type UserInformationTransmissionDetails = {
  service_name: string
  send_user_information_to: string
  send_user_information_content: string
  send_user_information_purpose: {
    purpose_at_our_company: string
    purpose_at_send_user: string
  }
  service_product: string[]
}

const userInformationTransmissionDetails: UserInformationTransmissionDetails[] =
  [
    {
      service_name: 'Account Engagement',
      send_user_information_to: 'Salesforce, Inc.',
      send_user_information_content:
        '・Cookie\n・デバイス、ブラウザに関連するデータ\n・IP アドレス\n・サイト内 / アプリでのアクティビティ',
      send_user_information_purpose: {
        purpose_at_our_company:
          'D.属性情報･端末情報・位置情報・行動履歴等に基づく広告・コンテンツ等の配信・表示、当社サービスの提供',
        purpose_at_send_user: 'https://www.salesforce.com/jp/company/privacy/',
      },
      service_product: [
        'HarborS',
        'SaaSus Platform',
        '株式会社アンチパターン\nコーポレート',
        '株式会社アンチパターン\nエンジニアブログ',
        'engineed',
        'CloudDriver',
      ],
    },
    {
      service_name: 'Google Analytics',
      send_user_information_to: 'Google LLC',
      send_user_information_content:
        '・Cookie\n・デバイス、ブラウザに関連するデータ\n・IP アドレス\n・サイト内 / アプリでのアクティビティ',
      send_user_information_purpose: {
        purpose_at_our_company: 'E.マーケティング活動',
        purpose_at_send_user: 'https://policies.google.com/privacy',
      },
      service_product: [
        'HarborS',
        '株式会社アンチパターン\nコーポレートサイト',
        'エンジニアブログ',
        'engineed',
        'CloudDriver',
        'POSSE',
      ],
    },
    {
      service_name: 'Google Search Console',
      send_user_information_to: 'Google LLC',
      send_user_information_content:
        '・Cookie\n・デバイス、ブラウザに関連するデータ\n・IP アドレス\n・サイト内 / アプリでのアクティビティ',
      send_user_information_purpose: {
        purpose_at_our_company: 'E.マーケティング活動',
        purpose_at_send_user: 'https://policies.google.com/privacy',
      },
      service_product: [
        'HarborS',
        'SaaSus Platform',
        '株式会社アンチパターン\nコーポレートサイト',
        '株式会社アンチパターン\nエンジニアブログ',
        'engineed',
        'CloudDriver',
      ],
    },
    {
      service_name: 'Google 広告',
      send_user_information_to: 'Google LLC',
      send_user_information_content:
        '・Cookie\n・デバイス、ブラウザに関連するデータ\n・IP アドレス\n・サイト内 / アプリでのアクティビティ',
      send_user_information_purpose: {
        purpose_at_our_company:
          'D.属性情報･端末情報・位置情報・行動履歴等に基づく広告・コンテンツ等の配信・表示、当社サービスの提供',
        purpose_at_send_user: 'https://policies.google.com/privacy',
      },
      service_product: ['SaaSus Platform'],
    },
    {
      service_name: 'intercom',
      send_user_information_to: 'Intercom, Inc.',
      send_user_information_content:
        '・Cookie\n・デバイス、ブラウザに関連するデータ\n・IP アドレス\n・サイト内 / アプリでのアクティビティ',
      send_user_information_purpose: {
        purpose_at_our_company:
          'D.属性情報･端末情報・位置情報・行動履歴等に基づく広告・コンテンツ等の配信・表示、当社サービスの提供',
        purpose_at_send_user: 'https://www.intercom.com/legal/privacy',
      },
      service_product: ['engineed'],
    },
    {
      service_name: 'LinkedIn',
      send_user_information_to: 'LinkedIn',
      send_user_information_content:
        '・Cookie\n・デバイス、ブラウザに関連するデータ\n・IP アドレス\n・サイト内 / アプリでのアクティビティ',
      send_user_information_purpose: {
        purpose_at_our_company:
          'D.属性情報･端末情報・位置情報・行動履歴等に基づく広告・コンテンツ等の配信・表示、当社サービスの提供',
        purpose_at_send_user:
          'https://jp.linkedin.com/legal/l/cookie-table?\nhttps://jp.linkedin.com/legal/cookie-policy?',
      },
      service_product: [
        'SaaSus Platform',
        '株式会社アンチパターン\nコーポレートサイト',
        'engineed',
        'CloudDriver',
      ],
    },
    {
      service_name: 'Meta広告（Facebook,Instagram）',
      send_user_information_to: 'Meta Platforms, Inc.',
      send_user_information_content:
        '・Cookie\n・デバイス、ブラウザに関連するデータ\n・IP アドレス\n・サイト内 / アプリでのアクティビティ',
      send_user_information_purpose: {
        purpose_at_our_company:
          'D.属性情報･端末情報・位置情報・行動履歴等に基づく広告・コンテンツ等の配信・表示、当社サービスの提供',
        purpose_at_send_user: 'https://www.facebook.com/privacy/policy',
      },
      service_product: [
        'SaaSus Platform',
        '株式会社アンチパターン\nコーポレートサイト',
        'engineed',
      ],
    },
    {
      service_name: 'Microsoft Clarity',
      send_user_information_to: 'Microsoft Japan Co., Ltd.',
      send_user_information_content:
        '・Cookie\n・デバイス、ブラウザに関連するデータ\n・IP アドレス\n・サイト内 / アプリでのアクティビティ',
      send_user_information_purpose: {
        purpose_at_our_company:
          'D.属性情報･端末情報・位置情報・行動履歴等に基づく広告・コンテンツ等の配信・表示、当社サービスの提供',
        purpose_at_send_user:
          'https://privacy.microsoft.com/ja-jp/privacystatement',
      },
      service_product: ['engineed'],
    },
    {
      service_name: 'Ptengine',
      send_user_information_to: '株式会社Ptmind',
      send_user_information_content:
        '・Cookie\n・デバイス、ブラウザに関連するデータ\n・IP アドレス\n・サイト内 / アプリでのアクティビティ',
      send_user_information_purpose: {
        purpose_at_our_company:
          'D.属性情報･端末情報・位置情報・行動履歴等に基づく広告・コンテンツ等の配信・表示、当社サービスの提供',
        purpose_at_send_user: 'https://www.ptengine.jp/privacy-policy',
      },
      service_product: ['SaaSus Platform'],
    },
    {
      service_name: 'Twitter広告',
      send_user_information_to: 'Twitter, Inc.',
      send_user_information_content:
        '・Cookie\n・デバイス、ブラウザに関連するデータ\n・IP アドレス\n・サイト内 / アプリでのアクティビティ',
      send_user_information_purpose: {
        purpose_at_our_company:
          'D.属性情報･端末情報・位置情報・行動履歴等に基づく広告・コンテンツ等の配信・表示、当社サービスの提供',
        purpose_at_send_user:
          'https://help.twitter.com/ja/rules-and-policies/twitter-cookies',
      },
      service_product: [
        'SaaSus Platform',
        '株式会社アンチパターン\nコーポレートサイト',
        'engineed',
        'CloudDriver',
      ],
    },
    {
      service_name: 'Yahoo広告',
      send_user_information_to: 'ヤフー株式会社',
      send_user_information_content:
        '・Cookie\n・デバイス、ブラウザに関連するデータ\n・IP アドレス\n・サイト内 / アプリでのアクティビティ',
      send_user_information_purpose: {
        purpose_at_our_company:
          'D.属性情報･端末情報・位置情報・行動履歴等に基づく広告・コンテンツ等の配信・表示、当社サービスの提供',
        purpose_at_send_user: 'https://privacy.yahoo.co.jp/',
      },
      service_product: ['HarborS'],
    },
  ]

const UserInformationTransmissionTable = () => {
  return (
    <table className="text-left w-full mb-3 block overflow-x-scroll whitespace-nowrap text-xs">
      <tbody>
        <tr className="border-[1px] text-center">
          <th className="bg-gray-100 border-r-[1px] px-3 py-2">No.</th>
          <th className="bg-gray-100 border-r-[1px] px-3 py-2">
            情報収集モジュール等の名称
            <br />
            （サービス名）
          </th>
          <th className="bg-gray-100 border-r-[1px] px-3 py-2">
            情報の送信先となる者の氏名・名称
          </th>
          <th className="bg-gray-100 border-r-[1px] px-3 py-2">
            送信される利用者情報の内容
          </th>
          <th className="bg-gray-100 border-r-[1px]">
            <p className=" px-3 py-2">送信される利用者情報の利用目的</p>
            <div className="flex h-full">
              <p className="w-1/2 border-t-[1px] border-r-[1px] px-3 py-2">
                「当社」での利用目的
              </p>
              <p className="w-1/2 border-t-[1px] px-3 py-2">
                「送信先」での利用目的
              </p>
            </div>
          </th>
          <th className="bg-gray-100 border-r-[1px] px-3 py-2">
            サービス／プロダクト
          </th>
        </tr>
        {userInformationTransmissionDetails.map((detail, index) => (
          <tr key={index} className="whitespace-normal border-b-[1px]">
            <td className="px-3 py-2 table-data">{index + 1}</td>
            <td className="px-3 py-2 table-data">{detail.service_name}</td>
            <td className="px-3 py-2 table-data">
              {detail.send_user_information_to}
            </td>
            <td className="px-3 py-2 table-data">
              {detail.send_user_information_content}
            </td>
            <td className="table-data py-2">
              <div className="flex items-center">
                <p className="w-1/2 h-full my-auto px-3">
                  {detail.send_user_information_purpose.purpose_at_our_company}
                </p>
                <a
                  href="https://www.salesforce.com/jp/company/privacy/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-3 text-ap-blue break-words"
                >
                  {detail.send_user_information_purpose.purpose_at_send_user}
                </a>
              </div>
            </td>
            <td className="px-3 py-2 table-data">
              {detail.service_product.map((product, index) => (
                <p
                  key={product}
                  className={
                    detail.service_product.length - 1 == index
                      ? 'py-2'
                      : 'py-2 border-b-[1px]'
                  }
                >
                  {product}
                </p>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { UserInformationTransmissionTable }
