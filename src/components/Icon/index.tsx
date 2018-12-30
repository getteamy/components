import React from 'react'

interface IconProps {
    icon: string
}

export default ({icon} : IconProps) => <i className="material-icons">{icon}</i>