import React from "react"

export const Work:React.FC = () => {
    const electron = (window as any).electron;
    return <div>GO GO WORK {electron.homeDir()}</div>
}