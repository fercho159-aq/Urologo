import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className, ...props }: { className?: string }) {
  return (
    <div className={cn("relative h-12 w-12", className)} {...props}>
      <Image 
        src="/images/logo.png" 
        alt="Urolog Logo" 
        fill
        className="object-contain"
        sizes="48px"
      />
    </div>
  );
}