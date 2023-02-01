import { Router } from "next/router";
import { useEffect } from "react";
import useRequest from "../../hooks/use-request";

export default () => {
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSucces: () => Router.push("/"),
  });
  useEffect(() => {
    doRequest();
  }, []);
  return <div>Sign you out...</div>;
};
