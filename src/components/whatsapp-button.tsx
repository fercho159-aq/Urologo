'use client';

import Link from 'next/link';
import { contactInfo } from '@/lib/data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" {...props}>
        <path
            d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.543-.572-1.49-.972-1.49-.402 0-1.49.57-1.662.57-.173 0-.42.03-.663.03s-.42-.03-.545-.03c-.172 0-.42-.03-.662-.03-.243 0-1.38.33-2.016 1.39a5.132 5.132 0 0 0-1.612 4.162c0 3.203 3.05 5.79 3.472 5.79.42 0 .84-.03 1.143-.03.303 0 .42-.03.662-.03.243 0 .84-.03 1.38-.63.545-.6 1.49-1.962 1.49-1.962a.426.426 0 0 1 .144-.136.19.19 0 0 1 .12-.04zM16.002 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16z"
            fill="currentColor"
        />
    </svg>
);


export default function WhatsAppButton() {
    const phoneNumber = contactInfo.phone.replace(/\s/g, '');
    const whatsappLink = `https://wa.me/521${phoneNumber}`;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
                        aria-label="Contactar por WhatsApp"
                    >
                        <WhatsAppIcon className="h-8 w-8" />
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-background text-foreground border-border">
                    <p>Contactar por WhatsApp</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
