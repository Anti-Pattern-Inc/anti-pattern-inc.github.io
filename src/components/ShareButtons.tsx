import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

type Props = {
  type: string
  slug: string
}

const ShareButtons = ({ type, slug }: Props) => {
  return (
    <div className="flex gap-2 my-4 justify-end">
      <FacebookShareButton url={`https://anti-pattern.co.jp/${type}/${slug}`}>
        <FacebookIcon size={28} round />
      </FacebookShareButton>
      <TwitterShareButton url={`https://anti-pattern.co.jp/${type}/${slug}`}>
        <TwitterIcon size={28} round />
      </TwitterShareButton>
      <LinkedinShareButton url={`https://anti-pattern.co.jp/${type}/${slug}`}>
        <LinkedinIcon size={28} round />
      </LinkedinShareButton>
    </div>
  )
}

export { ShareButtons }
