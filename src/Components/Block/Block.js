import './style.css'
export const Block = ({generate, children}) =>{


    return(<div className='block'>
        <h2>{generate ||  "Please search your quote"}</h2>
        {children}
    </div>)
}