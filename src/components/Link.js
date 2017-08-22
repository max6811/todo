import React from 'react'

const Link = ({filter_visibility, children, handleClick}) => {

    // render() {
        return (
            <a href="" onClick={(e) => {
                e.preventDefault()
                handleClick(children)
            }}>
            {children}
            </a>
        )
    // }
}

export default Link
