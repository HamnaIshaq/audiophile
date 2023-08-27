# Audiophile Notes

A multi page e-commerce project

- react
- css

## Folder structure

The below structure is the intermediate folder structure taken from [Junior vs Senior React Folder Structure - How To Organize React Projects](https://www.youtube.com/watch?v=UUga4-z7b6s&t=351s)

📦src
┣ 📂assets
┃ ┣ 📂images
┃ ┃ ┗ 📜img.jpg
┃ ┣ 📜global.css
┃ ┗ 📜logo.svg
┣ 📂components
┃ ┣ 📂form
┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┗ 📜CheckBox.test.jsx
┃ ┃ ┣ 📜CheckBox.jsx
┃ ┃ ┣ 📜FormInput.jsx
┃ ┃ ┣ 📜FormSelect.jsx
┃ ┃ ┗ 📜RadioButton.jsx
┃ ┣ 📂ui
┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┗ 📜Modal.test.jsx
┃ ┃ ┣ 📜Button.jsx
┃ ┃ ┣ 📜ButtonGroup.jsx
┃ ┃ ┣ 📜Dropdown.jsx
┃ ┃ ┗ 📜Modal.jsx
┃ ┣ 📂**tests**
┃ ┗ 📜Navbar.jsx
┣ 📂context
┃ ┣ 📂**test**
┃ ┃ ┗ 📜AuthContext.test.jsx
┃ ┗ 📜AuthContext.jsx
┣ 📂data
┃ ┣ 📜configValues.json
┃ ┣ 📜constants.js
┃ ┗ 📜defaultTodos.json
┣ 📂hooks
┃ ┣ 📂**tests**
┃ ┃ ┣ 📜useFetch.test.jsx
┃ ┃ ┗ 📜useLocalStorage.test.jsx
┃ ┣ 📜useFetch.jsx
┃ ┗ 📜useLocalStorage.jsx
┣ 📂pages
┃ ┣ 📂Home
┃ ┃ ┣ 📂**tests**
┃ ┃ ┣ 📜index.jsx
┃ ┃ ┣ 📜NewTodoModal.jsx
┃ ┃ ┣ 📜TodoContext.jsx
┃ ┃ ┣ 📜TodoForm.jsx
┃ ┃ ┣ 📜TodoItem.jsx
┃ ┃ ┗ 📜TodoList.jsx
┃ ┣ 📂Login
┃ ┃ ┣ 📂**tests**
┃ ┃ ┣ 📜index.jsx
┃ ┃ ┣ 📜LoginForm.jsx
┃ ┃ ┗ 📜useLogin.jsx
┃ ┣ 📂Settings
┃ ┃ ┣ 📂**tests**
┃ ┃ ┣ 📜index.jsx
┃ ┃ ┣ 📜SettingsContext.jsx
┃ ┃ ┣ 📜SettingsForm.jsx
┃ ┃ ┗ 📜useSettings.jsx
┃ ┗ 📂Signup
┣ 📂utils
┃ ┣ 📂**tests**
┃ ┣ 📜formatCurrency.jsx
┃ ┗ 📜formatDate.jsx
┣ 📜App.jsx
┣ 📜App.test.jsx
┗ 📜main.jsx

in src

- assets -> css, images, svgs (any asset that is not actual js code)
- components -> contains shared components that will be used in more than 1 place
  like form components folder can contain Checkbox.js, FormInput.js, FormSelect.js etc
- ui components folder -> Button, Modal, ButtonGroup, Dropdown
  with tests
- context -> any context that we are using (AuthContext) with a test folder with test for the context
- data -> contains any data like json, store json data or any constant data
- hooks -> custom hooks will go here + test folder with corresponding tests
- utils -> utility function (helper functions) + test folder (the code for util functions will be genearlly small and pure functions)
- pages -> Overall pages with tests as well

## How to proceed with project

### Main features

First, we will identify the main features and implement them

- Show categories of projects
- Show all products present in a selected category
- Show product details of selected product
- Set the number of items to purchase with input, increment, decrement buttons
- Add product to cart
- Show product in cart
- Proceed to checkout page and show all products present in cart
