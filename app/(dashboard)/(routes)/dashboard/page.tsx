import { Button } from '@/components/ui/button' //NO NEEDED
//import Image from 'next/image'
/*
export default function DashboardPage() {
    return (
        <Button variant="warning" size="lg">Click here </Button>
    )
}
*/

"use client";

import {
    ArrowRight,
    Code,
    ImageIcon,
    MessageSquare,
    Music,
    VideoIcon

} from "lucide-react";

import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";


const tools = [
    // {
    //     label: "Conversation",
    //     icon: MessageSquare,
    //     color: "text-green-400",
    //     bgColor: "bg-green-400/10",
    //     href: "/conversation"
    // },
    // {
    //     label: "Image Gen",
    //     icon: ImageIcon,
    //     color: "text-pink-700",
    //     bgColor: "bg-pink-700/10",
    //     href: "/image"
    // },
    // {
    //     label: "Video Gen",
    //     icon: VideoIcon,
    //     color: "text-orange-700",
    //     bgColor: "bg-orange-700/10",
    //     href: "/video"
    // },
    // {
    //     label: "Music Gen",
    //     icon: Music,
    //     color: "text-emerald-700",
    //     bgColor: "bg-emerald-700/10",
    //     href: "/music"
    // },
    {
        label: "Trip Planner",
        icon: ArrowRight,
        color: "text-blue-700",
        bgColor: "bg-blue-700/10",
        href: "/travel" //code
    }
]

const DashboardPage = () => {
    const router = useRouter();
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explore with the Power of Ai.
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    - Generate your own Travel Itinerary -
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card
                        onClick={() => router.push(tool.href)}
                        key={tool.href}
                        className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                    >
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="fond-semibold">
                                {tool.label}
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5" />
                    </Card>
                ))}
            </div>
        </div>
    )
}
export default DashboardPage;

