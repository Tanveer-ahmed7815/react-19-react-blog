function User(props){
    return (
        <div>
            <h1>User component</h1>
            <h2>{props.user.name}</h2>
            <h2>{props.user.age}</h2>
        </div>
    )
}

export default User;