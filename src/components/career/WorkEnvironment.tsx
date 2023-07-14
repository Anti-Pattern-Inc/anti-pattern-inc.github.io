import AvailableOwnOfificeIcon from 'images/available_own_office_icon.svg'
import ClockIcon from 'images/clock_icon.svg'
import FullRemoteIcon from 'images/full_remote_icon.svg'
import ManagersIcon from 'images/managers_icon.svg'
import RemoteHQIcon from 'images/remote_hq_icon.svg'
import UniposIcon from 'images/unipos_icon.svg'
import Image, { StaticImageData } from 'next/image'

type WorkEnvironmentItems = {
  title: string
  img: StaticImageData
}

const workEnvironmentItems: ReadonlyArray<WorkEnvironmentItems> = [
  {
    title: 'フルフレックス',
    img: ClockIcon,
  },
  {
    title: 'フルリモート',
    img: FullRemoteIcon,
  },
  {
    title: 'エンジニア出身の経営陣',
    img: ManagersIcon,
  },
  {
    title: 'リモートHQ導入',
    img: RemoteHQIcon,
  },
  {
    title: 'Unipos導入',
    img: UniposIcon,
  },
  {
    title: '自社オフィス利用可能',
    img: AvailableOwnOfificeIcon,
  },
]

const WorkEnvironment = () => {
  return (
    <section className="mt-28">
      <h2 className="mb-4 md:mb-8 font-bold text-ap-green text-2xl text-center">
        社内環境
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 m-auto max-w-xl md:max-w-3xl gap-2 md:gap-5 px-2 sm:px-6 text-gray-600">
        {workEnvironmentItems.map((workEnvironment) => {
          return (
            <div
              key={workEnvironment.title}
              className="flex flex-col items-center justify-center gap-4"
            >
              <Image
                src={workEnvironment.img}
                alt={workEnvironment.title}
                className="w-2/3 h-2/3"
              />
              <div className="text-sm md:text-xl font-bold text-center">
                {workEnvironment.title}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export { WorkEnvironment }
