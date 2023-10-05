import './Text.css'

function Text(props) {
    return (
        <span className='text'>{props.children}</span>
    )
}

export default Text