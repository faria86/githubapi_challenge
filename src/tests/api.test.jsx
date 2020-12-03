import axios from "axios";
import { getUser, API } from "../services/githubapi";

jest.mock("axios");

describe('githubapi', () => {
  it('fetches successfully data from an API', async () => {
    // arrange
    const username = "faria86";
    axios.get.mockResolvedValue({});

    // act
    await getUser(username);

    // assert
    expect(axios.get).toHaveBeenCalledWith(
      `${API}/users/${username}`
    );
  });
});

