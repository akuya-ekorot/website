import LightBackground from "./LightBackground";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <LightBackground>
      <div className="flex flex-row justify-center gap-4 underline p-2">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </div>
    </LightBackground>
  );
}
