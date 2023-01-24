import "./ninjas-container.styles.scss";
import myNinjas from "../../assets/naruto_characters.json";
import NinjaCard from "../ninja-card.component/ninja-card.component";
import { Fragment, useEffect, useState } from "react";
const NinjasContainer = () => {
  const [searchFieldText, setSearchFieldText] = useState("");
  const readInputText = (event) => {
    setSearchFieldText(event.target.value);
  };
  const [ninjaList, setNinjas] = useState(myNinjas);
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

  const upSort = () => {
    setNinjas(ninjas.sort((a, b) => a.age - b.age));
    console.log(ninjaList);
  };
  const downSort = () => {
    setNinjas(ninjas.sort((a, b) => b.age - a.age));
    console.log(ninjaList);
  };
  useEffect(() => {
    upSort();
  }, [searchFieldText]);
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
        <button onClick={upSort}>click</button>
        <button onClick={downSort}>down</button>
        <div className="ninjas_cartes_container">
          {ninjaList.map((ninja) => {
            return <NinjaCard character={ninja} key={ninja.id} />;
          })}
        </div>
      </main>
    </Fragment>
  );
};
export default NinjasContainer;
