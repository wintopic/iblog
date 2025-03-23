import { ArrowRightCircle } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CONFIG from '../config'
import Announcement from './Announcement'
import Card from './Card'

/**
 * 社交信息卡
 * @param {*} props
 * @returns
 */
export function InfoCard(props) {
  const { siteInfo, notice } = props
  const router = useRouter()
  // 在文章详情页特殊处理
  const isSlugPage = router.pathname.indexOf('/[prefix]') === 0
  const url1 = siteConfig('HEO_INFO_CARD_URL1', null, CONFIG)
  const icon1 = siteConfig('HEO_INFO_CARD_ICON1', null, CONFIG)
  const url2 = siteConfig('HEO_INFO_CARD_URL2', null, CONFIG)
  const icon2 = siteConfig('HEO_INFO_CARD_ICON2', null, CONFIG)
  return (
    <Card className='wow fadeInUp bg-[#4f65f0] dark:bg-yellow-600 text-white flex flex-col w-72 overflow-hidden relative'>
    
      {/* 公告栏 */}
      <Announcement post={notice} style={{ color: 'white !important' }} />

      <div className='flex justify-between'>
        <div className='flex space-x-3  hover:text-black dark:hover:text-white'>
          {/* 两个社交按钮 */}
          {url1 && (
            <div className='w-10 text-center bg-indigo-400 p-2 rounded-full  transition-colors duration-200 dark:bg-yellow-500 dark:hover:bg-black hover:bg-white'>
              <Link href={url1}>
                <i className={icon1} />
              </Link>
            </div>
          )}
          {url2 && (
            <div className='bg-indigo-400 p-2 rounded-full w-10 items-center flex justify-center transition-colors duration-200 dark:bg-yellow-500 dark:hover:bg-black hover:bg-white'>
              <Link href={url2}>
                <i className={icon2} />
              </Link>
            </div>
          )}
        </div>
        {/* 第三个按钮 */}
        <MoreButton />
      </div>
    </Card>
  )
}

/**
 * 了解更多按鈕
 * @returns
 */
function MoreButton() {
  const url3 = siteConfig('HEO_INFO_CARD_URL3', null, CONFIG)
  const text3 = siteConfig('HEO_INFO_CARD_TEXT3', null, CONFIG)
  if (!url3) {
    return <></>
  }
  return (
    <Link href={url3}>
      <div
        className={
          'group bg-indigo-400 dark:bg-yellow-500 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white flex items-center transition-colors duration-200 py-2 px-3 rounded-full space-x-1'
        }>
        <ArrowRightCircle
          className={
            'group-hover:stroke-black dark:group-hover:stroke-white w-6 h-6 transition-all duration-100'
          }
        />
        <div className='font-bold'>{text3}</div>
      </div>
    </Link>
  )
}
