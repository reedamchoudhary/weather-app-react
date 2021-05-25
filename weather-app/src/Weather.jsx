const Weather = (props) =>{
    return (
        <div className="card">
            <h1>Pune, India</h1>
            <span>{props.min_temp}</span>
            <span>{props.max_temp}</span>
        </div>
    )
}
        
export default Weather