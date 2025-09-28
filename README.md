# React + Vite + Relay + GraphQL + Overdrive

This project demonstrates setting up a **React app with Vite**, connected to a **GraphQL server** using **Relay** and **Overdrive**.

---

## Steps Taken

1. **Set up a React + Vite project**

   - Created a new Vite React app as the base.
   - `npm create vite@latest my-app`

2. **Install client dependencies**

   - Installed `react-relay`, `graphql`, and `relay` to enable Relay in the React app.
   - `npm install react-relay graphql relay`
   - Installed Overdrive
   - `npm i overdrive`

3. **Set up the GraphQL server**

   - Installed `graphql` and `graphql-yoga` for the server.
   - Created a `server.js` file to define the GraphQL schema and resolvers.
   - Started the server using `npm start`.
   - Server available at: `http://localhost:4000/graphql`.
   - `npm install graphql graphql-yoga`

4. **Hook the React app to the GraphQL server using Relay**

   - Installed Relay-related dependencies in the client:
     - `react-relay` and `graphql`
     - Dev dependencies: `relay-compiler`, `babel-plugin-relay`, `@vitejs/plugin-react`
   - `npm install react-relay graphql` and `npm install -D relay-compiler babel-plugin-relay @vitejs/plugin-react`

5. **Create a Relay Environment**

   - Added `src/relay/Environment.js` to configure the Relay network and store.

6. **Wrap the app with the Relay Provider**
   - Updated the main app entry to wrap the React app with the `RelayEnvironmentProvider`.
