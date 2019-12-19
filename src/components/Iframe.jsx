import React from 'react'

const Iframe = (props) => {
    console.log("pöö")
    return (
        <div>
            <iframe src={props.url} height="64px" width="64px" />
        </div>
    )
}

export default Iframe
