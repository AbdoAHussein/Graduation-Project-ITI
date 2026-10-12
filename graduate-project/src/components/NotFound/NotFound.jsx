import React from 'react'
import errorImage from '../../assets/images.png'

export default function NotFound() {
    return (
        <div className='container-fluid mx-auto'>
            <img src={errorImage} alt="Not Found Image" className='w-100'/>
        </div>
    )
}