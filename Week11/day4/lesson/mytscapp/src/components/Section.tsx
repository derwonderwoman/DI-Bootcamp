import { ReactNode } from "react";

interface sectionProps {
    content: string;
    children: ReactNode;
}

const Section = ({children, content= "bla bla"}: sectionProps) => {
    return<>
        <section>{content}</section>
        <div>{children}</div>
    </> 
}

export default Section;