import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/layout/theme-provider"
import { MoonIcon, SunIcon } from "lucide-react"


export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    function onclick() {
        if (theme === 'dark') {
            setTheme('light')
        } else if (theme === 'light') {
            setTheme('dark')
        }
    }

    return (
        <Button size="icon-sm"
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