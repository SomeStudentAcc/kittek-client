import Breadcrumbs from "@/components/shared/Breadcrumbs";

import ProfileContainer from "./ProfileContainer";

export const revalidate = 600;
export const dynamicParams = true;

export default async function Profile() {

  const scrums = [
    {
      url: "/",
      label: "Главная",
    },
    {
      url: "/profile",
      label: "Профиль",
    },
  ];

  return (
    <div className="container mx-auto px-3 md:px-0 mb-20">
      <Breadcrumbs items={scrums} />
      <ProfileContainer />
    </div>
  );
}
