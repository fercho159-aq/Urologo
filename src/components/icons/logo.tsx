import { cn } from "@/lib/utils";

export default function Logo({ className, ...props }: { className?: string }) {
  return (
    <div className={cn("text-2xl font-bold font-headline text-primary", className)} {...props}>
      UROLOG
    </div>
  );
}
