import { withRouter } from "next/router";
import Layout from "../layout/Layout";
import Home from "./home/Home";
import Login from "./users/Login";
import Register from "./users/Register";

const clientRoute = [
  {
    route: "/",
    component: <Home />
  },
  {
    route: "/login",
    component: <Login />
  },
  {
    route: "/register",
    component: <Register />
  }
];

const Page = withRouter(props => {
  const route = props.router.asPath;
  function renderComponent() {
    for (let i = 0; i < clientRoute.length; i++) {
      if (clientRoute[i].route === route) {
        return <React.Fragment>{clientRoute[i].component}</React.Fragment>;
      }
    }
  }
  console.log(route);
  return (
    <Layout title="Users Login/Register">
      {renderComponent()}
    </Layout>
  );
});

export default Page;
