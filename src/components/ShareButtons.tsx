import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

const ShareButtons = () => {
  return (
    <div className="flex gap-2 my-4 justify-end">
      <FacebookShareButton url="https://anti-pattern.co.jp/news/climbers2023-startup-japan-expo">
        <FacebookIcon size={28} round />
      </FacebookShareButton>
      <TwitterShareButton url="https://anti-pattern.co.jp/news/climbers2023-startup-japan-expo">
        <TwitterIcon size={28} round />
      </TwitterShareButton>
      <LinkedinShareButton url="https://anti-pattern.co.jp/news/climbers2023-startup-japan-expo">
        <LinkedinIcon size={28} round />
      </LinkedinShareButton>
    </div>
  )
}

export { ShareButtons }
