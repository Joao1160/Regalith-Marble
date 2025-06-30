import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/marbles.json";

const Category = ({ categoryRef }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(data);
  }, []);

  return (
    <section className="category" ref={categoryRef}>
      <div className="container">
        <div className="section-heading">
          <h2>view our products</h2>
          <span></span>
        </div>
        <div className="category-items">
          {categories.map((cat) => (
            <div className="category-item" key={cat.id}>
              <Link to={`/details/${cat.id}`}>
                <div className="pic">
                  <img src={require(`../${cat.mainImage}`)} alt={cat.name} />
                </div>
                <div className="text">
                  <h3 className="heading">{cat.name}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;

// const Category = ({ categoryRef }) => {
//   return (
//     <section className="category" ref={categoryRef}>
//       <div className="container">
//         <div className="section-heading">
//           <h2>view our products</h2>
//           <span></span>
//         </div>
//         <div className="category-items">
//           {categories.map((cat, i) => (
//             <div className="category-item" key={i}>
//               <Link to="/details">
//                 <div className="pic">
//                   <img src={cat.img} alt={`marble image ${i + 1}`} />
//                 </div>
//                 <div className="text">
//                   <h3 className="heading">{cat.name}</h3>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Category;
