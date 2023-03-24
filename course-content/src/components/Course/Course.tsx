import { ICourse } from "../../interfaces/ICourse"
import Content from "./Content/Content"
import Header from "./Header/Header"
import Total from "./Total/Total"

const Course: React.FC<ICourse> = ({id, name, parts}) => {
    return (
        <>
            <Header name={name}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
        </>
    )
}

export default Course