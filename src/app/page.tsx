import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2 px-6 py-8">
        <h2>Mediate</h2>
        <p></p>
      </div>
      <Link
        href="/register"
        className="w-full capitalize flex justify-center bg-blue-600 rounded-md px-3 py-1 text-white"
      >
        continue
      </Link>
    </main>
  );
}
