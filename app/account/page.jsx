import { auth } from "../../lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] ?? "";

  console.log(session);

  return (
    <h1 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome,
      {firstName}
    </h1>
  );
}
