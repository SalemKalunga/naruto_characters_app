import profileImage from "../../assets/profile_images/naruto.jpg";
import "./ninjas-container.styles.scss";
import myNinjas from "../../assets/naruto_characters.json";
const NinjasContainer = () => {
  return (
    <div className="ninjas_cartes_container">
      {myNinjas.map((ninja) => {
        return (
          <div key={ninja.id} className="ninja_card">
            <div className="image_container">
              {}
              <img
                src={ninja.img}
                alt={ninja.first_name}
                width={200}
                height={200}
              />
            </div>
            <div className="ninja_description">
              <p>First name : {ninja.first_name}</p>
              <p>Last name : {ninja.last_name}</p>
              <p>Hair color : {ninja.hair_color}</p>
              <p>Age : {ninja.age}</p>
              <p>Favorite Technique : {ninja.favorite_technique}</p>
              <p>Email : {ninja.email}</p>
              <p>Gender : {ninja.gender}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default NinjasContainer;
