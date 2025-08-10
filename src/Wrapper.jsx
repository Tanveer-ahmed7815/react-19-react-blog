function Wrapper({children,color = "blue"}){
    return (
        <div style={{color: color,border: "5px solid green", width: "300px", margin: "10px"}}>
            {children}
   
        </div>
    )
}

export default Wrapper;