import Members from "./members";
import Directors from "./directors";
import Sponsors from "./sponsors";
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
          <Members />
          <HonoraryMembers />
          <SilentKeys />
        </div>
      </main>
    </>
  );
}
