import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-24">
      <div>
        <h2 className="font-medium text-2xl">ようこそ！プログラミングチュートリアルへ🚀</h2>
        <p className="py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sint maxime reiciendis, suscipit hic modi? Quisquam facilis et sit neque ducimus, aliquid repudiandae, maxime, esse tempore cupiditate optio accusantium sint.</p>
      </div>
      <div className="flex gap-4 items-center">
        <Button>Click Here</Button>
        <Button>Click Here</Button>
      </div>

    </main>
  );
}
