import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="flex justify-center items-center text-white bg-green-900 py-4">
                &copy; 2021<Link to="https://xclaimlabs.com"> &nbsp; Xclaim Labs <sup>&reg;</sup>&nbsp;</Link> All rights Reserved
            </div>
        </>
    )
}

export default Footer
