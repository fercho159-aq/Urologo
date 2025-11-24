import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export default function ProstateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12,2a5,5,0,0,0-5,5c0,4,5,11,5,11s5-7,5-11A5,5,0,0,0,12,2Z"/>
      <path d="M12,7a2,2,0,1,0,0,4,2,2,0,0,0,0-4Z"/>
      <path d="M8 20.948c0-1.05.6-2.003 1.5-2.525C10.22 17.97 11.082 17.5 12 17.5s1.78.47 2.5.923c.9.522 1.5 1.474 1.5 2.525"/>
    </svg>
  );
}
