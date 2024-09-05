import React, {useState, useRef, useEffect} from 'react'
import Navbar from '../components/Navbar'
import uploadIMG from '../images/upload.png'
import JoditEditor from "jodit-react"

const UploadBlog = () => {
  
  const editor = useRef(null)
  const [content, setContent] = useState('')
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null); // Set initial state to null for the file
  const [error, setError] = useState("");

  /* useEffect(() => {
    const realInput = document.getElementById('realInput');
    const mainImgCon = document.querySelector('.mainImgCon');

    const handleMainImgClick = () => {
      realInput.click();
    };

    const handleImageChange = (e) => {
      const imageFile = e.target.files[0];
      if (imageFile) {
        const imageURL = URL.createObjectURL(imageFile);
        const renderImg = document.getElementById('renderImg');
        const uploadCon = document.querySelector('.uploadCon');
        renderImg.src = imageURL;
        setImage(imageFile); // Set the actual file here
        uploadCon.style.display = 'none';
      }
    };

    mainImgCon.addEventListener('click', handleMainImgClick);
    realInput.addEventListener('change', handleImageChange);

    return () => {
      mainImgCon.removeEventListener('click', handleMainImgClick);
      realInput.removeEventListener('change', handleImageChange);
    };
  }, []); */
  
  return (
    <>
        <Navbar />
        <div className='flex mt-[20px] px-[150px]'>
            <div className='left'>
                <h3 className='text-2xl'>Upload New Blog</h3>
                <form action="" className='py-[3px]'>
                    <div className='inputBox mt-3'>
                        <input type="text" className='w-[40vw]' placeholder='Blog Title' required />
                    </div>
                    <div className='inputBox mt-3'>
                        <textarea className='w-[40vw]' placeholder='Blog Description' required />
                    </div>
                    <div className='w-[40vw] overflow-hidden mt-3 h-[150px] bg-[#FAFAFA] border-[.5px] border-[#c8c8c8] flex items-center flex-col justify-center rounded-lg cursor-pointer' >
                        <input type="file" id="realInput" hidden/>
                        <img id='renderImg'/>
                        <div className='uploadCon'>
                            <img className='w-[170px]' src={uploadIMG} alt="Upload" />
                            <p className='my-3'>Upload Image png/jpg/jpeg</p>
                        </div>
                    </div>

                    <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1} // tabIndex of textarea
                        onChange={newContent => setContent(newContent)}
                    />
                    <button className="btnBlue my-4 w-[40vw]" type='Submit'>Upload Blog</button>
                </form>
            </div>
            <div className='right'>
                <h3></h3>
            </div>
        </div>
    </>
  )
}

export default UploadBlog