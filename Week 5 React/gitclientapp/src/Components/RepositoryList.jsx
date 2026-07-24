/*------------ Hands-on 19 ------------------------*/

import { useEffect, useState } from "react";
import GitClient from "../services/GitClient";

function RepositoryList() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {

    async function loadRepositories() {

      const data =
        await GitClient.getRepositories("facebook");

      setRepos(data);

    }

    loadRepositories();

  }, []);

  return (

    <div>

      <h1>GitHub Repositories</h1>

      <ul>

        {repos.map((repo) => (

          <li key={repo.id}>
            {repo.name}
          </li>

        ))}

      </ul>

    </div>

  );

}

export default RepositoryList;