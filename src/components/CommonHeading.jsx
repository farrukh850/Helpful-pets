import React from 'react'

 const CommonHeading = ({text, color, image}) => {
  return (
    <div className="relative flex flex-col-reverse">
        <h2 className={`font-[Cerebri] z-20 relative text-3xl md:text-[40px] text-center font-bold`} style={{ color: color }}>{text}</h2>
        <img src={image} alt="Paws" className="hidden md:block md:absolute md:top-1/2 md:-translate-y-1/2" />
    </div>
  )
}

export default CommonHeading