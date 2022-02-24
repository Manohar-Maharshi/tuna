import React from "react";
import { Link, useRoute } from "wouter";

function ActiveLink(props) {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a className={isActive ? "active w-full" : "w-full"}>{props.children}</a>
    </Link>
  );
}
export default ActiveLink;
