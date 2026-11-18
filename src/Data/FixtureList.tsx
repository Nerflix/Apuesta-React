import { useEffect, useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { app } from "../../public/firebase.tsx";

const database = getDatabase(app);

function FixtureList() {
  const [countryNames, setCountryNames] = useState<string[]>([]);

  useEffect(() => {
    // Reference the root of your database
    const rootRef = ref(database, "API-Endpoints");

    // Fetch the data
    get(rootRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // The data exists, you can access it as a JavaScript object
          const fetchedData = snapshot.val();
          setCountryNames(Object.keys(fetchedData.leagues ?? {}));
        } else {
          console.log("No data available.");
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      });
  }, []); // Empty dependency array, so this effect runs only once

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="col ">
      <h4>Top Leagues</h4>
      <ul className="list-group list-group-flush justify-content-center">
        {countryNames.length > 0 ? (
          countryNames.map((countryName, index) => (
            <li
              key={countryName}
              className={
                selectedIndex === index
                  ? `list-group-item active`
                  : "list-group-item"
              }
              onClick={() => setSelectedIndex(index)}
              style={{ cursor: "pointer" }}
            >
              {countryName}
            </li>
          ))
        ) : (
          <li className="list-group-item">No countries available</li>
        )}
      </ul>
    </div>
  );
}

export default FixtureList;
