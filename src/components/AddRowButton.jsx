import React from 'react'

const AddRowButton = (props) => {

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20pt",
        fontWeight: "bolder",
        width: "100%",
        height: "90px",
        color: "silver",
        borderRadius: "3px",
        cursor: "pointer"
    }

    return (
        <div style={style} onClick={props.addrow()}>
            Add Row
        </div>
    )
}

export default AddRowButton
