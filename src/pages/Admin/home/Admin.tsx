import AdminNavigation from "@components/AdminNavigation/AdminNavigation";
import Heading from "@components/Headings/Heading";

import Statistics from "./Statistics/Statistics";

const Admin = () => {
  return (
    <>
      <AdminNavigation />
      <Heading title="Some statistics" />

      <Statistics />
    </>
  );
};

Admin.isOnlyAdmin = true;

export default Admin;
