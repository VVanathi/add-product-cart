import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchComponent from './Components/SearchComponent';
import ShowCourseComponent from './Components/ShowCourseComponent';
import UserCartComponent from './Components/UserCartComponent';


function App() {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Chevron', price: 200, image: 'https://assets.ajio.com/medias/sys_master/root/20240425/LXPp/6629b03a16fd2c6e6acfc0a9/-473Wx593H-467276228-brown-MODEL.jpg' },
    { id: 2, name: 'Embosed', price: 300, image: 'https://assets.ajio.com/medias/sys_master/root/20240424/JViO/6629342416fd2c6e6ace6a50/-473Wx593H-467275944-brown-MODEL.jpg' },
    { id: 3, name: 'Satchel', price: 350, image: 'https://assets.ajio.com/medias/sys_master/root/20240115/uRWk/65a51a7b8cdf1e0df5b6778f/-473Wx593H-466981667-green-MODEL.jpg' },
    { id: 4, name: 'Emaline', price: 390, image: 'https://assets.ajio.com/medias/sys_master/root/20240202/uG7I/65bc6ec78cdf1e0df5e158d9/-473Wx593H-467034040-brown-MODEL.jpg' }
  ]);
  const [courses1, setCourses1] = useState([
    { id: 1, name: 'Pink Kurta',cart:'Price:', price: 499, image: 'https://assets.ajio.com/medias/sys_master/root/20231215/dIQm/657c4326ddf7791519d25a73/-473Wx593H-443025262-lilac-MODEL.jpg' },
    { id: 2, name: 'Green Kurta',cart:'Price:', price: 699, image: 'https://assets.ajio.com/medias/sys_master/root/20230530/ybZN/6475ebf442f9e729d7fd602d/-473Wx593H-443014645-mint-MODEL.jpg' },
    { id: 3, name: 'White Kurta',cart:'Price:', price: 799, image: 'https://assets.ajio.com/medias/sys_master/root/20231228/gJCd/658d96f8ddf7791519f30ef1/-473Wx593H-443025282-beige-MODEL.jpg' },
    { id: 4, name: 'Floral Kurta',cart:'Price:', price: 599, image: 'https://assets.ajio.com/medias/sys_master/root/20231208/lLBC/6573092aafa4cf41f5be407d/-473Wx593H-443025051-ltpeach-MODEL.jpg' }
  ]);
  const [courses2, setCourses2] = useState([
    { id: 1, name: 'Model 1',cart:'Price:', price: 200, image: 'https://assets.ajio.com/medias/sys_master/root/20210407/NyQR/606dadf9f997dd7b64a663d6/-473Wx593H-460867296-red-MODEL.jpg' },
    { id: 2, name: 'Model 2',cart:'Price:', price: 190, image: 'https://assets.ajio.com/medias/sys_master/root/20230221/3N9H/63f48368aeb26924e37f1a1d/-473Wx593H-469325281-black-MODEL4.jpg' },
    { id: 3, name: 'Model 3',cart:'Price:', price: 220, image: 'https://assets.ajio.com/medias/sys_master/root/20240216/4VX4/65cf89e405ac7d77bb5f176d/-473Wx593H-469573507-black-MODEL4.jpg' },
    { id: 4, name: 'Model 4',cart:'Price:', price: 260, image: 'https://assets.ajio.com/medias/sys_master/root/20220713/TpvA/62cee23af997dd03e2d29e4a/-473Wx593H-410316967-6zx-MODEL.jpg' }
  ]);
  const [courses3, setCourses3] = useState([
    { id: 1, name: 'Model 1',cart:'Price:', price: 1200, image: 'https://assets.ajio.com/medias/sys_master/root/20240103/Jhkp/659571caddf7791519ff4804/-473Wx593H-469456970-black-MODEL.jpg' },
    { id: 2, name: 'Model 2',cart:'Price:', price: 1190, image: 'https://assets.ajio.com/medias/sys_master/root/20231227/LpHR/658c3bf3afa4cf41f5ef8cc7/-473Wx593H-469456961-teal-MODEL.jpg' },
    { id: 3, name: 'Model 3',cart:'Price:', price: 1220, image: 'https://assets.ajio.com/medias/sys_master/root/20231120/QVfh/655b51f8ddf77915198d9c9e/-473Wx593H-469456949-steel-MODEL.jpg' },
    { id: 4, name: 'Model 4',cart:'Price:', price: 1260, image: 'https://assets.ajio.com/medias/sys_master/root/20240328/X4Sw/6604793616fd2c6e6a85d9bc/-473Wx593H-467208151-rosegold-MODEL.jpg' }
  ]);
  const [courses4, setCourses4] = useState([
    { id: 1, name: 'Model 1',cart:'Price:', price: 500, image: 'https://assets.ajio.com/medias/sys_master/root/20240124/FssJ/65b0fa6816fd2c6e6abd4b4e/-473Wx593H-450153613-black-MODEL.jpg' },
    { id: 2, name: 'Model 2',cart:'Price:', price: 690, image: 'https://assets.ajio.com/medias/sys_master/root/20230829/AV9n/64ee2437ddf7791519888d7f/-473Wx593H-442110792-navy-MODEL.jpg' },
    { id: 3, name: 'Model 3',cart:'Price:', price: 720, image: 'https://assets.ajio.com/medias/sys_master/root/20230808/vCHQ/64d2688fa9b42d15c999894a/-473Wx593H-442110787-pink-MODEL.jpg' },
    { id: 4, name: 'Model 4',cart:'Price:', price: 460, image: 'https://assets.ajio.com/medias/sys_master/root/20221222/a2Ac/63a46e44f997ddfdbded5f92/-473Wx593H-442028449-multi-MODEL.jpg' }
  ]);
  const [courses5, setCourses5] = useState([
    { id: 1, name: 'Model 1',cart:'Price:', price: 800, image: 'https://assets.ajio.com/medias/sys_master/root/20231026/HQSz/653a7a47afa4cf41f561f67a/-473Wx593H-469564513-black-MODEL.jpg' },
    { id: 2, name: 'Model 2',cart:'Price:', price: 1190, image: 'https://assets.ajio.com/medias/sys_master/root/20230922/IPz0/650da8abafa4cf41f5fec4cd/-473Wx593H-460779090-gold-MODEL.jpg' },
    { id: 3, name: 'Model 3',cart:'Price:', price: 1620, image: 'https://assets.ajio.com/medias/sys_master/root/20220602/uN2x/6297c1fdf997dd03e259f93a/-473Wx593H-469228489-brown-MODEL.jpg' },
    { id: 4, name: 'Model 4',cart:'Price:', price: 1360, image: 'https://assets.ajio.com/medias/sys_master/root/20210330/H9sv/60621d0ef997dd7b6458999b/-473Wx593H-460882596-green-MODEL.jpg' }
  ]);
 
  const [cartCourses, setCartCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState('');

  const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses.find(item => item.product.id === GFGcourse.id);
    if (alreadyCourses) {
      const latestCartUpdate = cartCourses.map(item => item.product.id === GFGcourse.id ? { ...item, quantity: item.quantity + 1 } : item);
      setCartCourses(latestCartUpdate);
    } else {
      setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
    }
  };

  const deleteCourseFromCartFunction = (GFGCourse) => {
    const updatedCart = cartCourses.filter(item => item.product.id !== GFGCourse.id);
    setCartCourses(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartCourses.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
  };

  const filterCourseFunction = courses.filter((course) => course.name.toLowerCase().includes(searchCourse.toLowerCase()));
  

 
  return (
    <div className="App">
      <SearchComponent searchCourse={searchCourse} courseSearchUserFunction={courseSearchUserFunction} />
      <BrowserRouter>
        <header>
          <nav>
            <ul className='ice'>
              <li className='ice1'><Link to="/cloths">Bags</Link></li>
              <li className='ice2'><Link to="/bags">Cloths</Link></li>
              <li className='ice2'><Link to="/slip">Slippers</Link></li>
              <li className='ice2'><Link to="/watch">Watch</Link></li>
              <li className='ice2'><Link to="/caps">Caps</Link></li>
              <li className='ice2'><Link to="/glass">Sunglasses</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route
            path="/cloths"
            element={<ShowCourseComponent courses={courses} filterCourseFunction={filterCourseFunction} addCourseToCartFunction={addCourseToCartFunction} />}
          />
          <Route
            path="/bags"
            element={<BagsComponent courses1={courses1} filterCourseFunction={filterCourseFunction} addCourseToCartFunction={addCourseToCartFunction} />}
          />
        
        <Route
            path="/slip"
            element={<Slippers courses2={courses2} filterCourseFunction={filterCourseFunction} addCourseToCartFunction={addCourseToCartFunction} />}
          />
        
        <Route
            path="/watch"
            element={<Watch courses3={courses3} filterCourseFunction={filterCourseFunction} addCourseToCartFunction={addCourseToCartFunction} />}
          />
           <Route
            path="/caps"
            element={<Caps courses4={courses4} filterCourseFunction={filterCourseFunction} addCourseToCartFunction={addCourseToCartFunction} />}
          />
          <Route
            path="/glass"
            element={<Sunglass courses5={courses5} filterCourseFunction={filterCourseFunction} addCourseToCartFunction={addCourseToCartFunction} />}
          />
        </Routes>
      </BrowserRouter>
      <UserCartComponent cartCourses={cartCourses}  deleteCourseFromCartFunction={deleteCourseFromCartFunction} totalAmountCalculationFunction={totalAmountCalculationFunction} setCartCourses={setCartCourses} />
    </div>
  );
}

const BagsComponent = ({ courses1, addCourseToCartFunction,filterCourseFunction }) => {
  return (
    <div className="bags">
      {courses1.map(course => (
        <div key={course.id} className="product">
          <img src={course.image} alt={course.name} />
          <h3>{course.name}</h3>
          <p>Price: Rs {course.price}</p>
          <button className="add-to-cart-button" onClick={() => addCourseToCartFunction(course)}>
            Add to Shopping Cart
          </button>
        </div>
      ))}
    </div>
  );
};
const Slippers = ({ courses2, addCourseToCartFunction,filterCourseFunction }) => {
  return (
    <div className="bags">
      {courses2.map(course => (
        <div key={course.id} className="product">
          <img src={course.image} alt={course.name} />
          <h3>{course.name}</h3>
          <p>Price: Rs {course.price}</p>
          <button className="add-to-cart-button" onClick={() => addCourseToCartFunction(course)}>
            Add to Shopping Cart
          </button>
        </div>
      ))}
    </div>
  );
};
const Watch = ({ courses3, addCourseToCartFunction,filterCourseFunction }) => {
  return (
    <div className="bags">
      {courses3.map(course => (
        <div key={course.id} className="product">
          <img src={course.image} alt={course.name} />
          <h3>{course.name}</h3>
          <p>Price: Rs {course.price}</p>
          <button className="add-to-cart-button" onClick={() => addCourseToCartFunction(course)}>
            Add to Shopping Cart
          </button>
        </div>
      ))}
    </div>
  );
};
const Caps = ({ courses4, addCourseToCartFunction,filterCourseFunction }) => {
  return (
    <div className="bags">
      {courses4.map(course => (
        <div key={course.id} className="product">
          <img src={course.image} alt={course.name} />
          <h3>{course.name}</h3>
          <p>Price: Rs {course.price}</p>
          <button className="add-to-cart-button" onClick={() => addCourseToCartFunction(course)}>
            Add to Shopping Cart
          </button>
        </div>
      ))}
    </div>
  );
};
const Sunglass = ({ courses5, addCourseToCartFunction,filterCourseFunction }) => {
  return (
    <div className="bags">
      {courses5.map(course => (
        <div key={course.id} className="product">
          <img src={course.image} alt={course.name} />
          <h3>{course.name}</h3>
          <p>Price: Rs {course.price}</p>
          <button className="add-to-cart-button" onClick={() => addCourseToCartFunction(course)}>
            Add to Shopping Cart
          </button>
        </div>
      ))}
    </div>
  );
};


export default App;
