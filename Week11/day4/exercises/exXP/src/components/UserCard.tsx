
interface UserProps {
    name?: string;
    age?: number;
}

const UserCard = ({ name = "John", age = 32}: UserProps ): JSX.Element=> {
    return (
        <>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
    </> 
    )

}

export default UserCard;