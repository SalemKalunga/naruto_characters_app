import "./ninjas-container.styles.scss";
import myNinjas from "../../assets/naruto_characters.json";
import NinjaCard from "../ninja-card.component/ninja-card.component";
import { Fragment, useState } from "react";
const NinjasContainer = () => {
  const [searchFieldText, setSearchFieldText] = useState("");
  const readInputText = (event) => {
    setSearchFieldText(event.target.value);
  };
  const ninjas = myNinjas.filter((ninja) => {
    return (
      ninja.first_name
        .toLocaleLowerCase()
        .includes(searchFieldText.toLocaleLowerCase()) ||
      ninja.last_name
        .toLocaleLowerCase()
        .includes(searchFieldText.toLocaleLowerCase()) ||
      ninja.hair_color
        .toLocaleLowerCase()
        .includes(searchFieldText.toLocaleLowerCase()) ||
      ninja.favorite_technique.toLocaleLowerCase().includes(searchFieldText) ||
      ninja.email
        .toLocaleLowerCase()
        .includes(searchFieldText.toLocaleLowerCase()) ||
      ninja.age === parseInt(searchFieldText) ||
      ninja.gender
        .toLocaleLowerCase()
        .includes(searchFieldText.toLocaleLowerCase())
    );
  });

  // useEffect(() => {});
  // const ninjas = myNinjas.filter((ninja) => {
  //   ninja.first_name.toLocaleLowerCase().includes(searchFieldText);
  // });
  // console.log(ninjas);
  return (
    <Fragment>
      <header>
        <h2>Natuto characters App</h2>
        <div>
          <form>
            <input
              type="search"
              placeholder="search"
              onChange={readInputText}
            />
          </form>
        </div>
      </header>
      <main>
        <div className="ninjas_cartes_container">
          {ninjas.map((ninja) => {
            return <NinjaCard character={ninja} key={ninja.id} />;
          })}
        </div>
      </main>
    </Fragment>
  );
};
export default NinjasContainer;
