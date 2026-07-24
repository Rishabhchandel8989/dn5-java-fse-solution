/*------------ Hands-on 19 ------------------------*/

import { describe, test, expect, vi } from "vitest";

import axios from "axios";

import GitClient from "../services/GitClient";

vi.mock("axios");

describe("Git Client Tests", () => {

  test(
    "should return repository names for facebook",

    async () => {

      const mockedRepositories = [

        {
          id: 1,
          name: "react",
        },

        {
          id: 2,
          name: "jest",
        },

      ];

      axios.get.mockResolvedValue({

        data: mockedRepositories,

      });

      const repositories =
        await GitClient.getRepositories("facebook");

      expect(repositories).toEqual(mockedRepositories);

      expect(axios.get)
        .toHaveBeenCalledTimes(1);

      expect(axios.get)
        .toHaveBeenCalledWith(
          "https://api.github.com/users/facebook/repos"
        );

    }

  );

});