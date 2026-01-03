import { FlowCard } from './FlowCard';
import Image from "next/image";

export default function ProductPreview() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/heroo.png"
        alt="Product preview"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

