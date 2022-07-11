import "./placeholder.scss"

const Placeholder = ({ dimension }) => {
    return (
        <div className="placeholder" style={{ width: dimension, height: dimension }}>
            {`${dimension} x ${dimension}`}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
} 

export default Placeholder;