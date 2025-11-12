import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/layout/theme-provider"
import { MoonIcon, SunIcon } from "lucide-react"


export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    console.log(useTheme().theme)

    function onclick() {
        if (theme === 'dark') {
            setTheme('light')
        } else if (theme === 'light') {
            setTheme('dark')
        }
    }

    return (
        <Button
        onClick={onclick}> 
            {
                theme === 'light' &&
                <MoonIcon />
            }
            {
                theme === 'dark' &&
                <SunIcon />
            }
        </Button>
    )
}