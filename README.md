# Github API Challenge

Components: 

  * Footer: credits to the owner of the project.

  * Navbar: GitHub logo.

  * SearchBar: input and button to search username.

  * UserDetail: name and picture of the user.

  * Repository: name and description of each repository.

  * Repositories: functional component will call the user repositories API - get(URL) everytime the repo URL changes with the useEffect hook.

Views: 

  * Home: Home page with SearchBar component 

  * UserSpecs: function will call API - getUser(username) - every time the path variable changes with the useEffect hook. If the username exists we will render UserDetail and Repositories components.

Services: 

  * API: Using Axios to call github API, both to get username's and the repositories information.

Tests: 

  * Tested API response to getUser(username)

