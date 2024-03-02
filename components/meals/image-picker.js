'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }){
    const imageInputRef = useRef();
    const [pickedImage, setPickedImage] = useState();

    function handleImageClick(){
        imageInputRef.current.click();
    }

    function handleImagePick(event){
        const file = event.target.files[0];
        
        if (!file){
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No Image</p>}
                {pickedImage && <Image src={pickedImage} alt="Image selected" fill/>}
            </div>
            <input ref={imageInputRef}
             className={classes.input}
             type='file' 
             id={name} 
             accept='image/png, image/jpeg' 
             name={name}
             onChange={handleImagePick}
             required />
             <button className={classes.button} type="button" onClick={handleImageClick}>
                Pick an Image
             </button>
        </div>
    </div>
}