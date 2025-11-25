import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className, ...props }: { className?: string }) {
  return (
    <div className={cn("relative h-auto w-auto", className)} {...props}>
      <Image 
        src="/images/logo.png" 
        alt="Urolog Logo" 
        width={80}
        height={10}
        className="object-contain"
      />
    </div>
  );
}
