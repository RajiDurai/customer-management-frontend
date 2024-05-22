## About the project
### customer-management-frontend 
To display a customer list based on search set to customer's First Name or Last Name and filters set to Company Name. I used MERN tech stack creating the front end in react and axios. The dependencies installed and work tasks are tracked in GITHUB issues url - https://github.com/RajiDurai/customer-management-frontend/issues
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
  * Fetch customer data from the backend (Express API ).
  * You can use Axios to make API requests.
### 4. Implement Search and Filter:
  * In the search component, create an input field for the search query.
  * In the filter component, create a dropdown with company names.
  * Update the customer list based on the search input and selected company.
### 5. Display Filtered Customers:
  * In the table component, filter the customers based on the search query and selected company.
  * Display the filtered customers.
### 6. Styling and UI:
  * Style the components using CSS.

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

### Future goals
* I started with backend and implemented successfully. I have implemented the front end and I have connected successfully the front end app to backend getting 200s back from the server but couldn't get the data from back end to the UI. Also I have started exploring about the MERN stack newly for this project. If I have more time, I would fix the components to get the data/object rendering to the page successfully with search and filter. What I would have done differently in this situation is that I have applied the mvc architecture to write a java webapp using Springboot/similar and linked to any ORM mapping through controllers where the space that I am more comfortable with. But I had a big take away from learning MERN examples and javascript apps.
* write tests covering all componenets tests.
* write componenets for pagination and sort.
* Install newrelic monitoring to know about the performance
