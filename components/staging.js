
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
        type: '',
        material: '',
      },
      installation: {
        type: '',
        material: '',
      },
      beds: '',
      baths: '',
      square_feet: '',
      amenities: [],
      rates: {
        weekly: '',
        monthly: '',
        nightly: '',
      },
      seller_info: {
        name: '',
        email: '',
        phone: '',
      },
      otherType: '',
      images: [],
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      const [field, subfield] = name.split('.');
  
      if (subfield) {
        setFields((prevState) => ({
          ...prevState,
          [field]: {
            ...prevState[field],
            [subfield]: value
          }
        }));
      } else {
        setFields((prevState) => ({
          ...prevState,
          [name]: value
        }));
      }
    };
  
    const handleViewChange = (e) => {
      const { name, value } = e.target;
      const [view, prop] = name.split('.');
  
      setFields((prevState) => ({
        ...prevState,
        views: {
          ...prevState.views,
          [view]: {
            ...prevState.views[view],
            [prop]: value
          }
        }
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Add logic to submit the form data to the backend/API
      //console.log(fields.views);
      const test = fields.views
      if(fields.views)
  {
    for (const key in fields.views) {
        if (Object.hasOwnProperty.call(fields.views, key)) {
          const element = fields.views[key];
          if(element.price && element.image)
          console.log(element)
          
        }
      }
  }  };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl text-center font-semibold mb-6">
            Add Product
          </h2>
  
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
                  onChange={handleViewChange}
                />
                <input
                  type="file"
                  name={`${viewKey}.image`}
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Image URL"
                  value={fields.views[viewKey].image}
                  onChange={handleViewChange}
                />
              </div>
            ))}
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
  export default SaunaAddFormPage