import { 
    IconButton, 
    useColorMode 
} from "@chakra-ui/react";
import { GiBoomerangSun} from "react-icons/gi";
import {FiMoon} from "react-icons/fi"

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <IconButton icon={colorMode === "light" ? <FiMoon /> : <GiBoomerangSun />}
        marginLeft="10px"
        backgroundColor = {colorMode === "light" ? "gray.100" : "gray.800"}
        onClick = {toggleColorMode} />
    )
}

    export default ThemeToggle;