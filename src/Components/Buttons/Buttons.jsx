import { Button as MButton } from "@material-tailwind/react"
import { useState } from "react"
import { useEffect } from "react"

export const Button = ({ children, className, variant, onClick }) => {
    const [types, setType] = useState('primary')
    useEffect(() => {
        if (variant === 'primary') {
            setType('bg-primary text-white')
        }
        else if (variant === 'secondary') {
            setType('bg-secondary text-white')
        }
        else if (variant === 'accent') {
            setType('bg-accent text-white')
        }
        else if (variant === 'error') {
            setType('bg-red-500 text-white')
        }
        else if (variant === 'success') {
            setType('bg-green-500 text-white')
        }
        else if (variant === 'white') {
            setType('bg-white text-primary')
        }
        else {
            setType('bg-primary text-white')
        }
    }, [])
    return <MButton size="sm" variant="filled"  className={`${className} border-none ${types}`} onClick={onClick}>
        {children}
    </MButton>
}