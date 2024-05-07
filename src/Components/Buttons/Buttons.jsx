import { Button as MButton } from "@material-tailwind/react"
import { useState } from "react"
import { useEffect } from "react"

export const Button = ({ children, className, type, ...props }) => {
    const [types, setType] = useState('primary')
    useEffect(() => {
        if (type === 'primary') {
            setType('bg-primary text-white')
        }
        else if (type === 'secondary') {
            setType('bg-secondary text-white')
        }
        else if (type === 'accent') {
            setType('bg-accent text-white')
        }
        else if (type === 'error') {
            setType('bg-error text-white')
        }
        else if (type === 'success') {
            setType('bg-green-500 text-white')
        }
        else if (type === 'white') {
            setType('bg-white text-primary')
        }
        else {
            setType('bg-primary text-white')
        }
    }, [])
    return <MButton variant="filled" {...props} className={`${className} border-none ${types}`} >
        {children}
    </MButton>
}