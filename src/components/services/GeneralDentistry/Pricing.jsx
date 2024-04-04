import React from "react"

const Pricing = ({title,services})=>{
    return(
        <div className="tab1 py-16">
        <h1 className="blue text-3xl t-style 	pb-16">
        {title}
        </h1>
        <div className="flexe">
       {services.map((service)=>(
          <div className="nove">
            <h2 className="blue text-2xl pt-2.5 ">£{service.price}</h2>
            <p>
              <b> {service.name}: </b>
              {service.desc}
            </p>
          </div>
          ))}
        </div>
      </div>
    )
}

export default Pricing