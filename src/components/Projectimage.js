import React, { useState } from 'react'

export default function Projectimage({imgsrc, imgtext}) {
    const [showImage, setShowImage] = useState(false)
    const toggleImage = () => {
        setShowImage(!showImage)
    }
    let changeClass = showImage ? 'popup-image' : 'project-image'

    return (
        <>
            <div className={`card-body ${changeClass}`} onClick={toggleImage}>
                <img src={imgsrc} alt="" className='w-25' />
                <p className="card-text ms-2">{imgtext}</p>

            </div>
        </>
    )
}
