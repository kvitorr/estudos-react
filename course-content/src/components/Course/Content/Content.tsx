import { IPart } from "../../../interfaces/IPart"
import Part from "./Part/Part"

const Content: React.FC<{parts: IPart[]}> = ({parts}) => {
    return (
        <>
            {parts.map((part: any) => {
                return <Part key={part.id} id={part.id} name={part.name} exercises={part.exercises}/>
            })}
        </>       
    )
}

export default Content