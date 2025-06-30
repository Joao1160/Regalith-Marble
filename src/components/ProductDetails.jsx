import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


function ProductDetails({ marble }) {
  if (!marble) return null;

  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about-desc">
            <h2 className="name">
              about <span>our product</span>
            </h2>
            <span className="short-line"></span>
            <h3 className="title">{marble.name}</h3>
            <p className="text">{marble.description}</p>

            <h3 className="title">Features</h3>
            <div className="features">
              {marble.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" /> {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="about-img">
            <img src={require(`../${marble.mainImage}`)} alt={marble.name} />
          </div>
        </div>
      </section>

      <div className="marbles">
        <div className="section-heading">
          <h2 className="heading">More</h2>
          <p className="title">images</p>
        </div>
        <div className="marbles-images">
          {marble.gallery.map((img, i) => (
            <div className="marble" key={i}>
              <img src={require(`../${img.path}`)} alt={img.title} />
              <div className="text">
                <h3 className="name">{img.title}</h3>
                <p className="title">{marble.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
