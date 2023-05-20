interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country?: string;
}

export enum Country {
    USA = "USA",
    UK = "UK",
    CANADA = "CANADA"
}
// export enum Country {
//     USA,
//     UK,
//     CANADA
// }


// const getAge(name: string): number => {
//     return props.age;
// }
export const Person = (props: Props) => {
    return (
        <div>
            <h1>Name: {props.name} </h1>
            <h1>Email: {props.email} </h1>
            <h1>Age: {props.age} </h1>
            <h1>This Person: {props.isMarried ? "is" : " is not"} Married</h1>
            {props.friends.map((friend: string, key: number) => (
                <h1 key={key}>{friend}</h1>
            ))}
            <h1> country  {props.country} </h1>
        </div>
    )
}



// Person.propTypes = {
//     name: PropTypes.string,
//     email: PropTypes.string,
//     age: PropTypes.number,
//     isMarried: PropTypes.bool,
//     friends: PropTypes.arrayOf(PropTypes.string)
// }