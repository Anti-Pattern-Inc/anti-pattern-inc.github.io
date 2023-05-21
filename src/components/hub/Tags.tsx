import Link from 'next/link'

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <>
      {tags.map((tag) => {
        return (
          <Link href={`/hub?tag=${tag}`} key={tag}>
            #{tag}
          </Link>
        )
      })}
    </>
  )
}

export { Tags }
