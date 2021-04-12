import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  const year = new Date().getFullYear()
  return (
    <CFooter fixed={false}>
      <div>        
        CiaTécnica<span className="ml-1">&copy; {year}</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Marcos Eduardo - React Test.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
