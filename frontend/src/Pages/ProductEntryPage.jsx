import React { useState } from 'react';
import { Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/component/ui/card';
import { useState } from 'react';

function ProductEntryPage() {
    const [formData, setFormData] = useState({
        title:'',
        description:'',
        rating:0,
        discountedPrice:0,
        originalPrice:0,
        Quantity:0,
        category:'',
    });

    const [Images, setImages] = useState(null);
    const handleImageUpload = (e) => {
        const ImagesArray = Array.from(e.target.files);
        console.log(ImagesArray);
        setImages(ImagesArray);
    };
    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        setFormData({
            ...formData,
            [name]: value,
        });
        // console.log(formData); (To check)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(Images);
        const {}
    return (
        <div className='flex justify-center items-center border border-black'
        style={{ height: '100vh' }}
        >
            <form onSubmit={handleChange}>
                <div>
                <label htmlFor=''>Enter Title</label>
                <br />
                <input type="text" />
                </div>
                <div>
                <label htmlFor=''>Enter Description</label>
                <input 
                type='text' 
                name='description' 
                value={formData.description}/>
                </div>
                <div>
                <label htmlFor=''>Discounted Price</label>
                <input 
                type="number" 
                value={formData.discountedPrice} 
                placeholder='discouted-price'/>
                </div>
                <div>
                <label htmlFor=''>Original Price</label>
                <input type="number" placeholder='original price'/>
                </div>
                <div>
                <label htmlFor=''>Stock Quantity</label>
                <input type="number" placeholder='Enter the Stock Quantity'/>
                </div>
                <div>
                <label htmlFor=''>Upload Product Images</label>
                <input type="file" multiple />
                </div>
                <div>
                <label htmlFor=''>Enter Category</label>
                <input type="text" placeholder='Enter the category'/>
                </div>
                <div>
                <label htmlFor=''>Enter Rating of the Product</label>
                <input type="number" placeholder='Rating of the product' />
                </div>
                <button type='Submit' className='bg-blue-400 text-white px-5 py-1'>Submit</button>
                <input type="text" />
            </form>
        </div>
    )
}

export default ProductEntryPage;

