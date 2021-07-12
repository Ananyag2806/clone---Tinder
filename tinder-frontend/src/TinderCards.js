import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card';

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
        },
        {
            name: "Jeff Bezoz",
            url: "https://image.cnbcfm.com/api/v1/image/105510261-1591797492468preview.jpg?v=1620822045&w=630&h=354"
        },
        {
            name: "Sandra Bullock",
            url: "https://www.usmagazine.com/wp-content/uploads/2020/02/Sandra-Bullock-Plans-to-Move-%E2%80%98Down-the-Street%E2%80%99-From-Her-Kids-When-They-Start-College.jpg?w=1000&quality=86&strip=all"
        },
    ]);

    const swiped = (direction, nameToDelete) =>{
        console.log("removing" + nameToDelete);
    };

    const outOfFrame = (name) =>{
        console.log(name + "left the screen");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCardsContainer">

                {people.map((person) => (
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{backgroundImage: `url(${person.url})`}}
                        className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>

                ))}
            </div>
        </div>
    )
}

export default TinderCards
