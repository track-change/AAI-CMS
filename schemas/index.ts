import blockContent from './blockContent'
import settings from './settings'
import artist from './artist'
import program from './program'
import education from './education'
import venue from './venue'
import ticket from './ticket'
import visit from './pages/visit'
import media from './media'
import form from './form'
import tags from './tag'
import news from './news'
import banner from './banner'
import home from './pages/home'
import venuePage from './pages/venue'
import aboutSchema from './pages/about'
import donate from './pages/donate'
import coverImage from '../components/coverImage'
import faq from './faq'
import artists from './pages/artists'

export const schemaTypes = [
  program,
  artist,
  ...aboutSchema,
  coverImage,
  home,
  education,
  media,
  venue,
  venuePage,
  visit,
  ticket,
  donate,
  form,
  tags,
  news,
  blockContent,
  settings,
  banner,
  faq,
  artists,
]
