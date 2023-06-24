import { CustomHead } from 'components/common/CustomHead'
import { BaseLayout } from 'components/layouts/BaseLayout'
import { UserInformationTransmissionTable } from 'components/legal/UserInformationTransmissionTable'

const Legal = () => {
  return (
    <>
      <CustomHead
        title="個人情報の取り扱い等 | Anti-Pattern Inc."
        description="このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。"
      />
      <BaseLayout headerBgColor="stone-100">
        <div className="bg-stone-100 pb-10 md:pb-20">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center pt-8 md:pt-24">
            LEGAL POLICY
          </h1>
          <p className="font-bold text-center mt-6 md:mt-10">
            個人情報の取り扱い等
          </p>
        </div>
        <div className="bg-slate-50 pt-10 pb-24 md:pt-16 md:pb-36">
          <article className="mx-6 px-6 pt-6 pb-24 max-w-6xl xl:mx-auto lg:px-32 md:pt-16 md:pb-36 bg-white">
            <p className="text-ap-green text-sm"></p>
            <section className="pt-6 md:pt-12">
              <h3 className="py-4 text-2xl font-bold">個人情報保護方針</h3>
              <h4 className="pt-7 pb-3 text-lg font-bold">■基本方針</h4>
              <p className="text-sm leading-6 text-gray-700">
                株式会社アンチパターン(以下「当社」といいます。)は、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令および社内規程等を遵守し、当社で取扱う個人情報の取得、利用、管理を適正に行います。
              </p>
              <h5 className="pt-7 pb-3 text-lg font-bold">方針1.</h5>
              <p className="text-sm leading-6 text-gray-700">
                個人情報の利用の目的をできる限り特定し、当該目的の達成に必要な範囲内で適切に取扱います。また、目的外利用を行なわないための措置を講じます。
              </p>
              <h5 className="pt-7 pb-3 text-lg font-bold">方針2.</h5>
              <p className="text-sm leading-6 text-gray-700">
                個人情報は、適法かつ適正な方法で取得します。
              </p>
              <h5 className="pt-7 pb-3 text-lg font-bold">方針3.</h5>
              <p className="text-sm leading-6 text-gray-700">
                個人情報は、本人の同意なく第三者に提供しません。ただし、個人情報の保護に関する法令等により第三者提供が認められる場合は除きます。
              </p>
              <h5 className="pt-7 pb-3 text-lg font-bold">方針4.</h5>
              <p className="text-sm leading-6 text-gray-700">
                個人情報の管理にあたっては、漏洩・滅失・毀損の防止および是正、その他の安全管理のために必要かつ適切な措置を講じるよう努めます。
              </p>
              <h5 className="pt-7 pb-3 text-lg font-bold">方針5.</h5>
              <p className="text-sm leading-6 text-gray-700">
                個人情報の取扱いにあたっては、その情報を提供した本人が適切に関与し得るよう努め、可能な限り正確かつ最新の内容に保つよう努力します。
              </p>
              <h5 className="pt-7 pb-3 text-lg font-bold">方針6.</h5>
              <p className="text-sm leading-6 text-gray-700">
                個人情報保護に関する法令を遵守し、また個人情報保護に関する社内規程を定め、継続的な見直しを行い遵守します。
              </p>
              <h5 className="pt-7 pb-3 text-lg font-bold">方針7.</h5>
              <p className="text-sm leading-6 text-gray-700">
                個人情報保護に関する法令を遵守し、また個人情報保護に関する社内規程を定め、継続的な見直しを行い遵守します。
              </p>
              <div className="pt-3">
                <p className="text-sm leading-6 text-gray-700">
                  ■改訂 2022年5月12日
                </p>
                <p className="text-sm leading-6 text-gray-700">
                  ■作成 2019年10月23日
                </p>
              </div>
              <div className="border-t-4 border-stone-100 mt-16 pt-12"></div>
              <h3 className="pt-4 pb-6 text-2xl font-bold">
                プライバシーポリシー
              </h3>
              <p className="text-sm leading-6 text-gray-700">
                株式会社アンチパターン(以下「当社」といいます。)は、当社が運営するサービス（以下「当社サービス」といいます）をユーザーにご利⽤いただくにあたり、ユーザーの個⼈情報をどのような⽬的でどのように取り扱うかという点に関し、本プライバシーポリシーで定めております。ユーザーが本プライバシーポリシーに同意した場合には、当社が既に保有しているユーザーの個⼈情報についても本プライバシーポリシーに従って取り扱います。
              </p>
              <h4 className="pt-7 pb-3 text-lg font-bold">■個人情報の定義</h4>
              <p className="text-sm leading-6 text-gray-700">
                当社における個人情報とは、個人情報の保護に関する法律第２条第１項において定義されている「個人情報」を意味します。すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述、または個人別に付けられた番号、記号その他の符号、画像もしくは音声等によって特定の個人を識別できる情報です。また、その情報のみでは特定の個人を識別できない場合でも、他の情報と容易に照合することができ、それにより特定の個人を識別できることとなるものも個人情報に含まれます。
              </p>
              <h4 className="pt-7 pb-3 text-lg font-bold">■収集方法</h4>
              <p className="text-sm leading-6 text-gray-700">
                当社は、個人情報を不正な手段で取得しません。当社による個人情報の取得方法は以下の通りです。
              </p>
              <ol className="list-[upper-latin] pl-5">
                <li className="text-sm leading-6 text-gray-700">
                  ユーザーから直接、個⼈情報の提供を受ける⽅法
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  ユーザーが当社サービスを利⽤する際に、⾃動的に個⼈情報を記録する⽅法
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  第三者から間接的にユーザーの個⼈情報の提供を受ける⽅法
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  インターネットや公刊物等で公開された個⼈情報を取得する⽅法
                </li>
              </ol>
              <p className="text-sm leading-6 text-gray-700">
                また、法令の定める場合を除き、個人情報の利用目的を通知または公表し、利用目的の範囲内において利用します。なお、当社は、その情報のみでは「個⼈情報」に該当しない属性に関する情報（年齢・性別・職業・郵便番号・居住地域・趣味等）、Cookie情報、IPアドレス、端末識別子IDなどの識別子情報、位置情報・⾏動履歴といったインターネットの利⽤にかかるログ情報および広告識別⼦（AAID・IDFA）その他の個⼈に関する情報（以下、これらを総称して「インフォマティブデータ」といいます）をユーザーまたは第三者から取得しています。ユーザーが当社サービスの利⽤にあたり当社に個⼈情報を提供した場合、当社は、当該情報と、当該ユーザーのインフォマティブデータを紐付けて利用する場合がありますが、この場合には当該インフォマティブデータも個⼈情報として取り扱います。
              </p>
              <h4 className="pt-7 pb-3 text-lg font-bold">
                ■Cookieの広告配信利用について
              </h4>
              <p className="text-sm leading-6 text-gray-700">
                当社ウェブサイトでは、ヤフー株式会社をはじめとする第三者から配信される広告が掲載される場合があり、これに関連して、当該第三者が、当社ウェブサイトを訪問したユーザーのCookie情報等を取得し、利用している場合があります。
              </p>
              <p className="text-sm leading-6 text-gray-700">
                当該第三者によって取得されたCookie情報等は、当該第三者のプライバシーポリシーに従って取り扱われます。
              </p>
              <p className="text-sm leading-6 text-gray-700">
                ユーザーは、当該第三者のウェブサイト内に設けられたオプトアウトページにアクセスして、当該第三者によるCookie情報等の広告配信への利用を停止することができます。
              </p>
              <p className="text-sm leading-6 text-gray-700">
                なお、ユーザーのブラウザーは、プライバシー保護のため、そのウェブサイトのサーバーが送受信したCookieのみを送信します。
              </p>
              <p className="text-sm leading-6 text-gray-700">
                ユーザーは、Cookieの送受信に関する設定を「すべてのCookieを許可する」、「すべてのCookieを拒否する」、「Cookieを受信したらユーザーに通知する」などから選択できます。設定方法は、ブラウザーにより異なります。Cookieに関する設定方法は、お使いのブラウザーの「ヘルプ」メニューでご確認ください。
              </p>
              <p className="text-sm leading-6 text-gray-700">
                すべてのCookieを拒否する設定を選択されますと、認証が必要なサービスを受けられなくなる等、インターネット上の各種サービスの利用上、制約を受ける場合がありますのでご注意ください。
              </p>
              <h4 className="pt-7 pb-3 text-lg font-bold">■利用目的</h4>
              <p className="text-sm leading-6 text-gray-700">
                個人情報の利用目的は以下の通りです。
              </p>
              <ol className="list-[upper-latin] pl-5">
                <li className="text-sm leading-6 text-gray-700">
                  ユーザーの個人認証およびユーザー向け当社サービスの提供
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  当社サービスの利用に伴う連絡・メールマガジン・DM・各種お知らせ等の配信・送付
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  ユーザーの承諾・申込みに基づく、当社サービス利用企業等への個人情報の提供
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  属性情報･端末情報・位置情報・行動履歴等に基づく広告・コンテンツ等の配信・表示、当社サービスの提供
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  当社サービスの改善・新規サービスの開発・分析およびマーケティング
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  キャンペーン・アンケート・モニター・取材等の実施
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  当社サービスに関するご意見、お問い合わせ、クチコミ投稿内容の確認・回答、掲載
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  利用規約等で禁じている、商用・転用目的での各種申込行為、各種多重申込、権利譲渡、虚偽情報登録などの調査と、それに基づく当該申込内容の詳細確認
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  人材紹介その他当社サービスの特性に照らして、当社以外の第三者への個人情報の提供が予定されている場合における当該第三者への個人情報の提供
                </li>
              </ol>
              <h4 className="pt-7 pb-3 text-lg font-bold">■第三者提供の有無</h4>
              <p className="text-sm leading-6 text-gray-700">
                当社は、当社プライバシーポリシーに基づき、当社サービスの利用規約を踏まえてユーザーからあらかじめ同意を頂いている場合に、ユーザーからご提供いただいた個人情報を利用目的の範囲内で第三者（外国にある第三者も含みます。）に提供することがあります。提供先の第三者は、当該国の個人情報保護に関する法規制を遵守しています。なお、当社では、利用目的の範囲内で、他の事業者へ個人情報の取扱いを委託することがあります。
              </p>
              <h4 className="pt-7 pb-3 text-lg font-bold">
                ■利用者情報の外部送信について
              </h4>
              <p className="text-sm leading-6 text-gray-700">
                当社では、お客様のウェブ体験の向上や、お客様ごとにパーソナライズしたコンテンツ・広告の表示、アクセス解析による当社ウェブサイトの改善のために、クッキー等の端末識別子を利用して、お客様に関する情報（利用者情報）を収集し、外部事業者に送信しています。外部事業者の名称・サービス名、外部事業者に送信される利用者情報の内容、送信される情報の利用目的については、以下より詳細をご確認ください。
              </p>
              <div className="py-8">
                <UserInformationTransmissionTable />
              </div>
              <h4 className="pt-7 pb-3 text-lg font-bold">
                ■個人情報取扱業務の委託
              </h4>
              <p className="text-sm leading-6 text-gray-700">
                当社は、利用目的の範囲内で、他の事業者へ個人情報の取扱いを委託することがあります。この場合、当社は当該委託先に対して必要かつ適切な監督を⾏います。
              </p>
              <p className="text-sm leading-6 text-gray-700">
                また、当社は、当社サービスの利用企業・学校・団体・機関等から個⼈情報取扱業務の全部または⼀部を受託することがあります。この場合、当社は受託業務の遂⾏のために委託された個⼈情報を取り扱います。
              </p>
              <h4 className="pt-7 pb-3 text-lg font-bold">
                ■個人情報提供の任意性
              </h4>
              <p className="text-sm leading-6 text-gray-700">
                当社サービスにおいてそれぞれ必要となる項目を入力いただかない場合は、当社サービスを受けられない場合があります。
              </p>
              <h4 className="pt-7 pb-3 text-lg font-bold">
                ■個人情報の開示・訂正・利用停止等
              </h4>
              <p className="text-sm leading-6 text-gray-700">
                当社は、法令遵守または利⽤⽬的の達成に必要な範囲・期間において、個⼈情報を保管・利⽤しますが、ユーザー本⼈または代理⼈は、当社所定の⼿続きに従い、ユーザー本⼈が識別される個⼈情報の開⽰、内容の訂正・追加または削除、利⽤の停⽌または消去等（以下「開示等」といいます。）を求めることができます。
              </p>
              <p className="text-sm leading-6 text-gray-700">
                具体的な方法については、個別にご案内しますので、下記受付窓口までお問い合わせください。
              </p>
              <p className="text-sm leading-6 text-gray-700">
                なお、当社は、なりすまし等による不正な請求を防⽌する目的で、開示等の請求時に本⼈確認書類の提出を求めるなど合理的な⽅法で本⼈確認を⾏います。当社は、当社が定める本⼈確認に必要な項⽬が全て満たされる場合、当該請求をユーザー本⼈からの請求であるとみなして対応します。仮に当該請求がユーザー以外の第三者からの請求であった場合でも、当該請求への対応によりユーザーに⽣じた損害について当社は責任を負いませんので、ご⾃⾝の個⼈情報の管理には⼗分ご留意ください。
              </p>
              <p className="text-sm leading-6 text-gray-700">
                個人情報に関する問合わせ窓口
              </p>
              <p className="text-sm leading-6 text-gray-700">
                個人情報保護相談窓口責任者: 信田 健児
              </p>
              <p className="text-sm leading-6 text-gray-700">
                E-mail: privacy@anti-pattern.co.jp
              </p>
              <h4 className="pt-7 pb-3 text-lg font-bold">■安全管理措置</h4>
              <p className="text-sm leading-6 text-gray-700">
                当社では、法令の定めに従い、以下の通り安全管理措置を講じています。
              </p>
              <ol className="list-[upper-latin] pl-5">
                <li className="text-sm leading-6 text-gray-700">
                  組織的安全管理措置（組織内での責任者を定める等）
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  人的安全管理措置（個人情報の取扱いに関する留意事項について、従業者に定期的な教育を実施する等）
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  物理的安全管理措置（個人情報が記録されたUSBメモリやパソコン等に保存された電子ファイルにパスワード設定を付する等）
                </li>
                <li className="text-sm leading-6 text-gray-700">
                  技術的安全管理措置（アクセス制御を実施して担当者および取り扱う個人情報データベース等の範囲を限定する等）
                </li>
              </ol>
              <h4 className="pt-7 pb-3 text-lg font-bold">■問い合わせ先</h4>
              <p className="text-sm leading-6 text-gray-700">
                弊社サービス、又は個人情報の取扱いに関しては、下記の窓口までメールにてお問い合わせください。
              </p>
              <p className="text-sm leading-6 text-gray-700">担当: 信田 健児</p>
              <p className="text-sm leading-6 text-gray-700">
                E-mail: privacy@anti-pattern.co.jp
              </p>
              <h4 className="pt-7 pb-3 text-lg font-bold">■当社について</h4>
              <p className="text-sm leading-6 text-gray-700">
                事業者名：株式会社アンチパターン
              </p>
              <p className="text-sm leading-6 text-gray-700">
                住所地：東京都港区南⻘山3-15-9 MINOWA表参道3階
              </p>
              <p className="text-sm leading-6 text-gray-700">
                代表者：小笹佑京
              </p>
              <div className="pt-3">
                <p className="text-sm leading-6 text-gray-700">
                  ■改訂 2022年5月12日
                </p>
                <p className="text-sm leading-6 text-gray-700">
                  ■作成 2019年10月23日
                </p>
              </div>
            </section>
          </article>
        </div>
      </BaseLayout>
    </>
  )
}

export default Legal
