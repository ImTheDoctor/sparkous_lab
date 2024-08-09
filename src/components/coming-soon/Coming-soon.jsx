import React from 'react'
import classes from './coming-soon.module.css'
import Image from 'next/image'

const ComingSoon = () => {
    return (
        <div className={classes.coming_soon_wrapper}>
            <Image 
                src="/logo.png"
                width={100}
                height={100}
                alt="Picture of the author"
            />
            <h1 className={classes.coming_soon_text}>Coming Soon</h1>
        </div>
    )
}

export default ComingSoon