/* eslint-disable prettier/prettier */
const EngineeringBlog = () => {
  return (
    <section>
      <h2 className="mb-4 md:mb-8 font-bold text-ap-green text-2xl text-center">
        エンジニアブログ
      </h2>
      <a
        href="https://tech.anti-pattern.co.jp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative h-[240px] md:h-[520px] w-full overflow-x-clip">
          <div className="bg-cover absolute inset-0 h-full bg-[url('https://static.ghost.org/v4.0.0/images/publication-cover.jpg')]"></div>
          <div className="flex justify-center h-full items-center relative mx-auto px-6 md:px-8 hover:bg-opacity-20 hover:bg-black hover:duration-300">
            <h3>
              <span className="text-white block text-xl md:text-5xl font-bold text-center">
                Anti-Pattern Inc. Engineering Blog
                <span className="block font-normal text-base md:text-3xl mt-4">
                  Anti-Pattern Inc.(株式会社アンチパターン)のエンジニアブログはこちらです。
                </span>
              </span>
            </h3>
          </div>
        </div>
      </a>
    </section>
  )
}

export { EngineeringBlog }
