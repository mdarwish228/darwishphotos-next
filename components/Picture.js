import React from 'react'
import Image from 'next/image'


function Picture({ picture }) {

  return (
    <div className="pb-2">
      <Image width={picture.width} height={picture.height} alt={picture.id} src={picture.src} className={`h-auto w-full animate-load-image ${picture.aspect} rounded`}/>
    </div>
  )
}

export default Picture
