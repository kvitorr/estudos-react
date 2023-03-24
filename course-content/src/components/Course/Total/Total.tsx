import { IPart } from "../../../interfaces/IPart"

const Total: React.FC<{parts: IPart[]}> = ({parts}) => {

    return (
        <>
            <b>total of {
            parts.reduce((previousValue: number, currentValue) => previousValue + currentValue.exercises, 0)
            } exercises</b>
        </>
    )
}

export default Total