import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/mobile-sidebar";

//added 
import dynamic from "next/dynamic";

const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSidebar />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>

        </div>
    );
}

//export default Navbar;

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })