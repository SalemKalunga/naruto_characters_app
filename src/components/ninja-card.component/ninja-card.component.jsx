const NinjaCard = (props) => {
  const { character } = props;
  const {
    first_name,
    last_name,
    age,
    favorite_technique,
    hair_color,
    email,
    gender,
    img,
  } = character;
  return (
    <div className="ninja_card">
      <div className="image_container">
        <img src={img} alt={first_name} width={200} height={200} />
      </div>
      <div className="ninja_description">
        <p>First name : {first_name}</p>
        <p>Last name : {last_name}</p>
        <p>Hair color : {hair_color}</p>
        <p>Age : {age}</p>
        <p>Favorite Technique : {favorite_technique}</p>
        <p>Email : {email}</p>
        <p>Gender : {gender}</p>
      </div>
    </div>
  );
};
export default NinjaCard;
