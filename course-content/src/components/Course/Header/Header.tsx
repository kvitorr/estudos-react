import { IHeader } from "../../../interfaces/IHeader"


const Header: React.FC<IHeader> = ({name}) => {
    return (
        <h1>{name}</h1>
    )
}

export default Header