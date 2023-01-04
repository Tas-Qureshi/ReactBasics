

function ArrayObjects() {
    const planets = [
      { name: "Mars", isGasPlanet: false },
      { name: "Earch", isGasPlanet: false },
      { name: "Jupitor", isGasPlanet: true },
      { name: "Venus", isGasPlanet: false },
      { name: "Neptune", isGasPlanet: true },
      { name: "Uranus", isGasPlanet: true },
    ];
    return (
        <>
            {
                planets.map((planet, key) => {
                    return (
                      <div key={key}>
                        <h1>{planet.isGasPlanet && planet.name}</h1>
                      </div>
                    );
                })
            }
        </>
    );
}

export default ArrayObjects;