import { useImmer } from "use-immer";

const App = () => {
    const [person, updatePerson] = useImmer({
        name: "Niki de Saint Phalle",
        artwork: {
            title: "Blue Nana",
            city: "Hamburg",
            image: "https://i.imgur.com/Sd1AgUOm.jpg",
        },
    });

    function handlePersonChange(e) {
        const { name, value } = e.target;
        const names = ["title", "city", "image"];
        updatePerson((draft) => {
            if (names.includes(name)) {
                draft.artwork[name] = value;
            } else {
                draft.name = value;
            }
        });
    }

    return (
        <div className="m-3">
            <label className="text-red-500">
                Name:
                <input
                    name="name"
                    className="border block rounded mb-2"
                    value={person.name}
                    onChange={handlePersonChange}
                />
            </label>
            <label className="text-blue-500">
                Title:
                <input
                    name="title"
                    className="border block rounded mb-2"
                    value={person.artwork.title}
                    onChange={handlePersonChange}
                />
            </label>
            <label className="text-yellow-500">
                City:
                <input
                    name="city"
                    className="border block rounded mb-2"
                    value={person.artwork.city}
                    onChange={handlePersonChange}
                />
            </label>
            <label>
                Image:
                <input
                    name="image"
                    className="border block rounded mb-2"
                    value={person.artwork.image}
                    onChange={handlePersonChange}
                />
            </label>
            <p>
                <i className="text-blue-500">{person.artwork.title}</i>
                {" by "}
                <span className="text-red-500">{person.name}</span>
                <br />
                (located in{" "}
                <span className="text-yellow-500">{person.artwork.city}</span>)
            </p>
            <img src={person.artwork.image} alt={person.artwork.title} />
        </div>
    );
};

export default App;
