### 1. Setting Up the Project:
 * Make sure you have Node.js and npm installed.
 * Create a new React project using Create React App:
    ```
    npx create-react-app customer-management-frontend 
    cd customer-management-frontend
     ```

* Install any necessary dependencies (e.g., Axios for API calls, Semantic UI React for styling):
    ``` npm install axios semantic-ui-react ```

### 2. Create Components:
  * Create a /table component to display the list of customers.
  * Create a /search component for the search input.
  * Create a /company component for the company name dropdown filter.

### 3. Fetch Customer Data:
  * Fetch customer data from your backend (Express API or any other source).
  * You can use Axios to make API requests.
### 4. Implement Search and Filter:
  * In your search component, create an input field for the search query.
  * In your filter, create a dropdown with company names.
  * Update the customer list based on the search input and selected company.
### 5. Display Filtered Customers:
In your table component, filter the customers based on the search query and selected company.
  * Display the filtered customers.
### 6. Styling and UI:
  * Style your components using CSS or a UI library (e.g., Semantic UI React).
  * Customize the UI as needed.

Here are the steps involved to run the project locally:
#### Clone the project from the git URL - 

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Your app is ready to be deployed!


