import classNames from "classnames";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "#/i18n/navigation";

const HomePage = async () => {
  const token = (await cookies()).get("token")?.value;
  if (!!token) {
    redirect({
      href: "/web",
      locale: "zh",
    });
  }
  redirect({
    // locale: `/auth/login`,
    href: "/auth/login",
    locale: "zh",
  });
};

export default HomePage;
