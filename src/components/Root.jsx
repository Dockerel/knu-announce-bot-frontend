import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Helmet } from "react-helmet";

export default function Root() {
  return (
    <>
      <Helmet>
        <title>KNU COMP Crawler</title>
      </Helmet>
      <div>
        <Header />
        <Outlet />
      </div>
    </>
  );
}
