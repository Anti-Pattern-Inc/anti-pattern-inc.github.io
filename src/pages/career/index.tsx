import { Philosophy } from 'components/career/Philosophy'
import { CustomHead } from 'components/common/CustomHead'
import { BaseLayout } from 'components/layouts/BaseLayout'

const Career = () => {
  return (
    <>
      <CustomHead
        title="採用ページ | Anti-Pattern Inc."
        description="Anti-Pattern Inc.の採用ページです。"
      />
      <BaseLayout headerBgColor="stone-100">
        <Philosophy />
      </BaseLayout>
    </>
  )
}

export default Career
