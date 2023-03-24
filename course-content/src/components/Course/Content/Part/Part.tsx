import { IPart } from "../../../../interfaces/IPart"

const Part: React.FC<IPart> = ({name, exercises}) => {
    return (
        <p>{name} {exercises}</p>
    )
}

export default Part