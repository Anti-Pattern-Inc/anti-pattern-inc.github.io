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
        <div className="relative h-[200px] sm:h-[520px] w-full overflow-x-clip">
          <div className="bg-cover absolute inset-0 h-full bg-[url('https://static.ghost.org/v4.0.0/images/publication-cover.jpg')]"></div>
          <div className="flex justify-center h-full items-center relative mx-auto max-w-7xl px-6 lg:px-8">
            <h3>
              <span className="text-white block text-xl sm:text-5xl font-bold text-center">
                Anti-Pattern Inc. Engineering Blog
                <span className="block font-normal text-base sm:text-3xl ">
                  Anti-Pattern
                  Inc.(株式会社アンチパターン)のエンジニアブログです。
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
