import React from 'react'

import { ReactComponent as Add } from '../../icons/add.svg'
import { ReactComponent as ArrowRight } from '../../icons/arrowRight.svg'
import { ReactComponent as ArrowLeft } from '../../icons/arrowLeft.svg'
import { ReactComponent as Back } from '../../icons/back.svg'
import { ReactComponent as Calendar } from '../../icons/calendar.svg'
import { ReactComponent as Check } from '../../icons/check.svg'
import { ReactComponent as Close } from '../../icons/close.svg'
import { ReactComponent as Dots } from '../../icons/dots.svg'
import { ReactComponent as Drop } from '../../icons/drop.svg'
import { ReactComponent as Edit } from '../../icons/edit.svg'
import { ReactComponent as Lock } from '../../icons/lock.svg'
import { ReactComponent as Reload } from '../../icons/reload.svg'
import { ReactComponent as Search } from '../../icons/search.svg'
import { ReactComponent as Trash } from '../../icons/trash.svg'
import { ReactComponent as Upload } from '../../icons/upload.svg'
import { ReactComponent as User } from '../../icons/user.svg'
import { ReactComponent as Hamburger } from '../../icons/hamburger.svg'
import { ReactComponent as Graph } from '../../icons/graph.svg'
import { ReactComponent as Law } from '../../icons/law.svg'
import { ReactComponent as Plane } from '../../icons/plane.svg'
import { ReactComponent as Wallet } from '../../icons/wallet.svg'
import { ReactComponent as Wheelchair } from '../../icons/wheelchair.svg'
import { ReactComponent as Phone } from '../../icons/phone.svg'
import { ReactComponent as Att } from '../../icons/att.svg'
import { ReactComponent as Facebook } from '../../icons/facebook.svg'
import { ReactComponent as IndicatorDown } from '../../icons/indicatorDown.svg'
import { ReactComponent as Family } from '../../icons/family.svg'
import { IconName } from '../../constants'

import './styles.scss'


interface Props {
  name: IconName
}

export default function Icon({
  name,
  ...props
}: Props) {
  const icons = {
    "add": Add,
    "arrowRight": ArrowRight,
    "arrowLeft": ArrowLeft,
    "back": Back,
    "calendar": Calendar,
    "check": Check,
    "close": Close,
    "dots": Dots,
    "drop": Drop,
    "edit": Edit,
    "lock": Lock,
    "reload": Reload,
    "search": Search,
    "trash": Trash,
    "upload": Upload,
    "user": User,
    "hamburger": Hamburger,
    "graph": Graph,
    "law": Law,
    "plane": Plane,
    "wallet": Wallet,
    "wheelchair": Wheelchair,
    "phone": Phone,
    "att": Att,
    "facebook": Facebook,
    "indicatorDown": IndicatorDown,
    "family": Family,
  }

  const IconComponent = icons[name]

  return (
    <IconComponent {...props} />
  )
}
