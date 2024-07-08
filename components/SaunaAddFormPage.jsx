'use client';
import { useState } from 'react';

const SaunaAddFormPage = () => {
  const [fields, setFields] = useState({
    type: '',
    name: '',
    description: '',
    price: '',
    dimension: '',
    views: {
      standard: {
        price: '',
        image: ''
      },
      panoramic: {
        price: '',
        image: ''
      },
      halfmoon: {
        price: '',
        image: ''
      },
    },
    wood_type: {
      clear_cedar: {
        price: '',
        image: ''
      },
      knotty_cedar: {
        price: '',
        image: ''
      },
    },
    stove_type: {
      Harvia_KIP_6_6wh: {
        price: '',
        image: ''
      },
      Harvia_Legend_150: {
        price: '',
        image: ''
      },
    },
    installation: {
      diy: {
        price: '',
        image: ''
      },
      supply_install: {
        price: '',
        image: ''
      },
    },
    seller_info: {
      name: 'torontosaunaco',
      email: 'test@test.com',
      phone: '555-555-7898',
    },
    is_featured: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      const updatedFiles = [...files];
      setFields((prevFields) => ({
        ...prevFields,
        views: {
          ...prevFields.views,
          [name.split('.')[0]]: {
            ...prevFields.views[name.split('.')[0]],
            image: updatedFiles[0]
          }
        }
      }));
    } else if (name.includes('.')) {
      const [parentName, childName] = name.split('.');
      setFields((prevFields) => ({
        ...prevFields,
        views: {
          ...prevFields.views,
          [parentName]: {
            ...prevFields.views[parentName],
            [childName]: value
          }
        }
      }));
    } else {
      setFields((prevFields) => ({
        ...prevFields,
        [name]: value
      }));
    }
  };

  const handleFeaturedChange = (e) => {
    const isChecked = e.target.checked;
    setFields((prevFields) => ({
      ...prevFields,
      is_featured: isChecked
    }));
  };

  const handleImageChange = (e) => {
    const { files } = e.target;
    const updatedImages = [...fields.images, ...files];

    setFields((prevFields) => ({
      ...prevFields,
      images: updatedImages
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('type', fields.type);
    formData.append('name', fields.name);
    formData.append('price', fields.price);
    formData.append('views', JSON.stringify(fields.views)); // Stringify views object
    formData.append('description', fields.description);
    formData.append('dimension', fields.dimension);
    formData.append('installation', JSON.stringify(fields.installation)); // Stringify installation object
    formData.append('stove_type', JSON.stringify(fields.stove_type)); // Stringify stove_type object
    formData.append('wood_type', JSON.stringify(fields.wood_type)); // Stringify wood_type object
    formData.append('seller_name', fields.seller_info.name);
    formData.append('seller_email', fields.seller_info.email);
    formData.append('seller_phone', fields.seller_info.phone);
    formData.append('is_featured', fields.is_featured);

    fields.images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log('Response from backend:', result);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <h2 className="text-3xl text-center font-semibold mb-6">
          Add Product
        </h2>

        {/* Form Fields Here */}
        {/* Product Type */}
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            Product Type
          </label>
          <select
            id="type"
            name="type"
            className="border rounded w-full py-2 px-3"
            value={fields.type}
            onChange={handleChange}
            required
          >
            <option value="Pure Cube">Pure Cube</option>
            <option value="Luna">Luna</option>
            <option value="Barrel">Barrel</option>
            <option value="Cold Plunge">Cold Plunge</option>
            <option value="Outdoor Showers">Outdoor Showers</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Listing Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Listing Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="e.g. Luna Sauna With 2' Porch"
            value={fields.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="border rounded w-full py-2 px-3"
            rows="4"
            placeholder="Add Description of the Product"
            value={fields.description}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Dimension */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Dimension</label>
          <input
            type="text"
            id="dimension"
            name="dimension"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="e.g. 98 x 98(cm)"
            value={fields.dimension}
            onChange={handleChange}
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="e.g. 13000"
            value={fields.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Views */}
        <div className="mb-4 bg-blue-50 p-4">
          <label className="block text-gray-700 font-bold mb-2">Views</label>
          {Object.keys(fields.views).map((viewKey) => (
            <div key={viewKey} className="mb-2">
              <label className="block text-gray-700 font-bold mb-2 capitalize">
                {viewKey} View
              </label>
              <input
                type="text"
                name={`${viewKey}.price`}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Price"
                value={fields.views[viewKey].price}
                onChange={handleChange}
              />
              <input
                type="file"
                name={`${viewKey}.image`}
                className="border rounded w-full py-2 px-3 mb-2"
                onChange={handleChange}
              />
            </div>
          ))}
        </div>

        {/* Stove Type */}
        <div className="mb-4 bg-blue-50 p-4">
          <label className="block text-gray-700 font-bold mb-2">Stove Type</label>
          {Object.keys(fields.stove_type).map((viewKey) => (
            <div key={viewKey} className="mb-2">
              <label className="block text-gray-700 font-bold mb-2 capitalize">
                {viewKey} Type
              </label>
              <input
                type="text"
                name={`${viewKey}.price`}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Price"
                value={fields.stove_type[viewKey].price}
                onChange={handleChange}
              />
              <input
                type="file"
                name={`${viewKey}.image`}
                className="border rounded w-full py-2 px-3 mb-2"
                onChange={handleChange}
              />
            </div>
          ))}
        </div>

        {/* Wood Type */}
        <div className="mb-4 bg-blue-50 p-4">
          <label className="block text-gray-700 font-bold mb-2">Wood Type</label>
          {Object.keys(fields.wood_type).map((viewKey) => (
            <div key={viewKey} className="mb-2">
              <label className="block text-gray-700 font-bold mb-2 capitalize">
                {viewKey} 
              </label>
              <input
                type="text"
                name={`${viewKey}.price`}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Price"
                value={fields.wood_type[viewKey].price}
                onChange={handleChange}
              />
              <input
                type="file"
                name={`${viewKey}.image`}
                className="border rounded w-full py-2 px-3 mb-2"
                onChange={handleChange}
              />
            </div>
          ))}
        </div>

        {/* Installation */}
        <div className="mb-4 bg-blue-50 p-4">
          <label className="block text-gray-700 font-bold mb-2">Installation Type</label>
          {Object.keys(fields.installation).map((viewKey) => (
            <div key={viewKey} className="mb-2">
              <label className="block text-gray-700 font-bold mb-2 capitalize">
                {viewKey} 
              </label>
              <input
                type="text"
                name={`${viewKey}.price`}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Price"
                value={fields.installation[viewKey].price}
                onChange={handleChange}
              />
              <input
                type="file"
                name={`${viewKey}.image`}
                className="border rounded w-full py-2 px-3 mb-2"
                onChange={handleChange}
              />
            </div>
          ))}
        </div>

        {/* Featured Item */}
        <div className='flex gap-4 items-center mb-2'>
          <label className="block text-gray-700 font-bold">Featured Item</label>
          <input
            type="checkbox"
            name="is_featured"
            onChange={handleFeaturedChange}
          />
        </div>

        {/* Images */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Images for this Product</label>
          <input
            type='file'
            id='images'
            name='images'
            multiple
            accept='image/*'
            onChange={handleImageChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default SaunaAddFormPage;
