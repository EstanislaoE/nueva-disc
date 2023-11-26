"use client";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

//local
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    MessageSquare,
    MessageCircle,
    ImageIcon,
    VideoIcon,
    Music,
    Code,
    Settings
} from "lucide-react";

const monstserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const routes = [
    // {
    //     label: "Dashboard",
    //     icon: LayoutDashboard,
    //     href: "/dashboard",
    //     color: "text-violet-500",
    // },
    // {
    //     label: "Conversation",
    //     icon: MessageSquare,
    //     href: "/conversation",
    //     color: "text-violet-500",
    // },
    // {
    //     label: "Calendar(IGeneration)",
    //     icon: ImageIcon,
    //     href: "/image", //image
    //     color: "text-pink-700",
    // },
    // {
    //     label: "Video Gen",
    //     icon: VideoIcon,
    //     href: "/video",
    //     color: "text-orange-700",
    // },
    // {
    //     label: "Music Gen",
    //     icon: Music,
    //     href: "/music",
    //     color: "text-emerald-700",
    // },
    {
        label: "Trip Planner",
        icon: MessageCircle,
        href: "/travel", //code
        color: "text-black-500",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#04AC04] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            alt="logo"
                            src="/logo.png"
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold", monstserrat.className)}>
                        Trip Advisor Ai
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justifty-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-sync-400")}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}

                </div>
            </div>

        </div>
    );
}

export default Sidebar;