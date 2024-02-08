import React, { ReactNode } from 'react'

interface BodyProps {
    children?: ReactNode
}
function Body({ children }: BodyProps) {
    return (
        <div className='py-2 flex flex-col h-full w-full items-center space-y-2'>{children}</div>
    )
}

export default Body