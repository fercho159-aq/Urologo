import { cn } from "@/lib/utils";
import ProstateIcon from "./prostate-icon";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <ProstateIcon className="h-8 w-8 text-primary" />
      <span className="font-headline text-xl font-bold text-primary">
        Clínica de Próstata
      </span>
    </div>
  );
}
