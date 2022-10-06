import { Fragment } from "react"

export const Contact =(props)=>{
return <Fragment>
    <div className="item">
            <div className="container">
              <img
                src={props.src}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">
                <div className="text">{props.title}</div>
              </div>
            </div>
          </div>

</Fragment>
}