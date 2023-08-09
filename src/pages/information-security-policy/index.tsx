import { CustomHead } from 'components/common/CustomHead'
import { PolicyContent } from 'components/information-security-policy/PolicyContent'
import { BaseLayout } from 'components/layouts/BaseLayout'

const policyContents = [
  {
    title: '1.経営者の責任',
    content:
      '当社は、経営者主導で組織的かつ継続的に情報セキュリティの改善・向上に努めます。',
  },
  {
    title: '2.社内体制の整備',
    content:
      '当社は、情報セキュリティの維持及び改善のために組織を設置し、情報セキュリティ対策を社内の正式な規則として定めます。',
  },
  {
    title: '3.従業員の取組み',
    content:
      '当社の従業員は、情報セキュリティのために必要とされる知識、技術を習得し、情報セキュリティへの取り組みを確かなものにします。',
  },
  {
    title: '4.法令及び契約上の要求事項の遵守',
    content:
      '当社は、情報セキュリティに関わる法令及び契約上の要求事項を遵守します。',
  },
  {
    title: '5.情報セキュリティの継続的改善',
    content:
      '当社は、情報セキュリティマネジメントシステムを継続的に改善します。',
  },
]

const InformationSecurityPolicy = () => {
  return (
    <>
      <CustomHead
        title="情報セキュリティ方針 | Anti-Pattern Inc."
        description="このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。"
      />
      <BaseLayout headerBgColor="stone-100">
        <div className="bg-stone-100 pb-10 md:pb-20">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center pt-8 md:pt-24">
            INFORMATION SECURITY POLICY
          </h1>
          <p className="font-bold text-center mt-6 md:mt-10">
            情報セキュリティ方針
          </p>
        </div>
        <div className="bg-slate-50 pt-10 pb-24 md:pt-16 md:pb-36">
          <article className="mx-6 px-6 pt-6 pb-24 max-w-6xl xl:mx-auto lg:px-32 md:pt-16 md:pb-36 bg-white">
            <p className="text-ap-green text-sm"></p>
            <section className="pt-6 md:pt-12">
              <h2 className="pt-4 text-2xl font-bold">情報セキュリティ方針</h2>
              <p className="pt-7 text-sm leading-6 text-gray-700">
                当社の情報セキュリティ方針を、以下のように定めます。
                <br />
                株式会社アンチパターン（以下、当社）は、当社の情報資産、並びにお客様からお預かりした情報資産を事故・災害・犯罪などの脅威から守り、お客様ならびに社会の信頼に応えるべく、以下の方針に基づき全社で情報セキュリティに取り組みます。
              </p>
              {policyContents.map((policyContent, index) => (
                <PolicyContent
                  key={index}
                  title={policyContent.title}
                  content={policyContent.content}
                />
              ))}
              <div className="pt-12">
                <p className="text-sm leading-6 text-gray-700">
                  ■制定日:2023年5月1日
                </p>
                <p className="text-sm leading-6 text-gray-700">
                  株式会社アンチパターン
                </p>
                <p className="text-sm leading-6 text-gray-700">
                  代表取締役社長 小笹佑京
                </p>
              </div>
            </section>
          </article>
        </div>
      </BaseLayout>
    </>
  )
}

export default InformationSecurityPolicy
