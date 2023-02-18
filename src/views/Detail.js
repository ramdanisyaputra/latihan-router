import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function Detail() {

    const skills = [
        {
          id: 1,
          name: "javascript",
          description: "Javascript description",
          image: require("../images/js.png")
        },
        {
          id: 2,
          name: "React",
          description: "React description",
          image: require("../images/react.png")
        },
        {
          id: 3,
          name: "Vue",
          description: "Vue description",
          image: require("../images/vuejs.jpeg")
        },
        {
          id: 4,
          name: "Svelte",
          description: "Svelte description",
          image: require("../images/sveltejs.png")
        }
    ];

    const { id } = useParams();

    const skill = skills.find(skill => skill.id === parseInt(id));

    return (
        <MainLayout>
            <div style={container}>
                <h1>{skill.name}</h1>
                <div style={box}>
                    <img src={skill.image} alt={skill.image} style={img}/>
                    <div>
                        <p>{skill.description}</p>
                        <Link to='/'>
                            Back Home
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Detail;

const container = {
    padding: "0 6rem"
}

const img = {
    width: "auto",
    height: "20rem",
    marginRight: "2rem"
}

const box = {
    display: "flex"
}