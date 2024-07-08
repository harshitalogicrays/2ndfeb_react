import ReactImageMagnify from '@blacklab/react-image-magnify'
import React, { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const ImageThumbnail = ({images}) => {
// console.log(images)
const [image,setImage]=useState(images[0])
const [index,setIndex]=useState(0)
let handleImage=(i)=>{
        setImage(images[i])
        setIndex(i)}
let handlePrev=()=>{
    if(index>0){
        setIndex(index-1)
        setImage(images[index-1])   }}
let handleNext=()=>{
    if(index<images.length-1){
        setIndex(index+1)
        setImage(images[index+1])
    }}
  return (
    <div>
      {/* <img src={image} width={400} height={400}/> */}
      <ReactImageMagnify
                imageProps={{
                    alt : "loading",
                    src : image,
                    height : 200,
                    width : 200
                }}
                magnifiedImageProps={{
                    src: image,
                    height : 800,
                    width : 800
                }}
                magnifyContainerProps ={{
                    scale : 2
                    }}
                    portalProps= {{
                    id : "portal-test-id",
                    horizontalOffset : 10,
                    verticalOffset:-100
                    }}
            />
      <div className="row mt-3">
        <div class="col-1"><button onClick={handlePrev}><FaArrowAltCircleLeft/></button> </div>
      {images.map((im,i)=>
      <div className="col-2" key={i}>
        <img src={im} className={`img-fluid ${i==index ? 'border border-dark border-5':''}`}
        onClick={()=>handleImage(i)}/></div>)}
      <div class="col-1" onClick={handleNext}><FaArrowAltCircleRight/> </div>
      </div>
    </div>
  )
}

export default ImageThumbnail
