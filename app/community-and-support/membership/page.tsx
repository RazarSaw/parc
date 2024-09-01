import RegularMembers from "./regular-members";
import AssociateMembers from "./associate-members"
import Directors from "./directors";
import Header from "./header";
import Prices from "./prices";
import SilentKeys from "./silent-keys.jsx";
import HonoraryMembers from "./honorary-members.jsx";

export default function membershipDirectorsAndSponsors() {
  return (
    <>
      <Header />
      <Prices />
      <main className="bg-neutral-800">
        <div className="container mx-auto py-16 px-8 flex flex-col gap-16 ">
          <Directors />
          <RegularMembers />
          <AssociateMembers />
          <HonoraryMembers />
          <SilentKeys />
        </div>
      </main>
    </>
  );
}
