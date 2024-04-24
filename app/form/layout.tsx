import React, { ReactNode } from 'react'
import SectionNavigation from '../component/SectionNavigation'

export default function layout({children}:{children: React.ReactNode}) {
  return (
    <div>
        <SectionNavigation></SectionNavigation>
        {children}
    </div>
  )
}
