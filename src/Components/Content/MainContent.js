import React from "react";
import Loadable from "react-loadable";
import { Layout } from "antd";

import Footer from "../Navigation/Footer";

const Loading = () => <div>Loading...</div>;

const SignInForm = Loadable({
  loader: () => import("../Form/Signin"),
  loading: Loading
});

const RegisterForm = Loadable({
  loader: () => import("../Form/Register"),
  loading: Loading
});

const PublicContent = Loadable({
  loader: () => import("../Content/PublicContent"),
  loading: Loading
});

const TentangSiakad = Loadable({
  loader: () => import("../Content/TentangSiakad"),
  loading: Loading
});

// passing rest props with Array
// export default function MainContent(...props) {

// regular way to pass props
// export default function MainContent(URL, onRouteChange, etc) {

// passing rest props with array destructuring
export default function MainContent({ ...props }) {
  const {
    URL,
    onRouteChange,
    loadUser,
    route,
    registerLabel,
    signinLabel
  } = props;

  const { Content } = Layout;

  return (
    <Layout>
      <Content style={{ justifyContent: "center", alignItems: "center" }}>
        {/* If no user signed in, load the homepage */}
        {route === "register" ? (
          <RegisterForm URL={URL} onRouteChange={onRouteChange} />
        ) : route === "signin" ? (
          <SignInForm
            URL={URL}
            onRouteChange={onRouteChange}
            loadUser={loadUser}
          />
        ) : route === "tentang-siakad" ? (
          <TentangSiakad />
        ) : route === "home" || route === "signout" ? (
          <PublicContent
            registerLabel={registerLabel}
            signinLabel={signinLabel}
            onRouteChange={onRouteChange}
          />
        ) : null}
      </Content>
      <Footer />
    </Layout>
  );
}
