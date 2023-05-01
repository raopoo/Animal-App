import "./Animals.css";

import { useState } from "react";

import Grid from "../Grid";
//import DogGrid from "../DogGrid/DogGrid";
import Button from "../../../Components/Button/Button";

const Animals = () => {
    const [catList, setCatList] = useState([]);
    const [dogList, setDogList] = useState([]);

    const displayTenCats = async () => {
        const getTenData = await fetch(
            "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        const json = await getTenData.json();
        console.log(json);
        setDogList([]);
        return setCatList(
            <div className="animalGrid">
                {json.map((el) =>
                    catList.concat(
                        <Grid
                            id={el.id}
                            imgUrl={el.url}
                            key={el.id}
                        ></Grid>
                    )
                )}
            </div>
        );
    };
    const displayTenDogs = async () => {
        const getTenData = await fetch(
            "https://api.thedogapi.com/v1/images/search?limit=10"
        );
        const json = await getTenData.json();
        console.log(json);
        setCatList([]);
        return setDogList(
            <div className="animalGrid">
                {json.map((el) =>
                    dogList.concat(
                        <Grid
                            id={el.id}
                            imgUrl={el.url}
                            key={el.id}
                        ></Grid>
                    )
                )}
            </div>
        );
    };

    return (
        <div>
            <Button label={"Cats"} clickHandler={displayTenCats}></Button>
            <Button label={"Dogs"} clickHandler={displayTenDogs}></Button>
            {catList}
            {dogList}
        </div>
    );
};

export default Animals;
