
export default function LandingBtn(props){
    return(
    
            <button onClick={props.link} className='trash'>
            <h3>{props.account}</h3></button>
        
    )
}