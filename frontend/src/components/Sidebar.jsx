// import { Link, useLocation } from "react-router";
// import useAuthUser from "../hooks/useAuthUser";
// import { BellIcon, HomeIcon, ShipWheelIcon, UsersIcon } from "lucide-react";

// const Sidebar = () => {
//     const { authUser } = useAuthUser();
//     const location = useLocation();
//     const currentPath = location.pathname;

//     return (
//         <aside className="w-64 bg-base-200 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0">
//             <div className="p-5 border-b border-base-300">
//                 <Link to="/" className="flex items-center gap-2.5">
//                     <ShipWheelIcon className="size-9 text-primary" />
//                     <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  tracking-wider">
//                         TalkSphere
//                     </span>
//                 </Link>
//             </div>

//             <nav className="flex-1 p-4 space-y-1">
//                 <Link
//                     to="/"
//                     className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${currentPath === "/" ? "btn-active" : ""
//                         }`}
//                 >
//                     <HomeIcon className="size-5 text-base-content opacity-70" />
//                     <span>Home</span>
//                 </Link>

//                 <Link
//                     to="/friends"
//                     className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${currentPath === "/friends" ? "btn-active" : ""
//                         }`}
//                 >
//                     <UsersIcon className="size-5 text-base-content opacity-70" />
//                     <span>Friends</span>
//                 </Link>

//                 <Link
//                     to="/notifications"
//                     className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${currentPath === "/notifications" ? "btn-active" : ""
//                         }`}
//                 >
//                     <BellIcon className="size-5 text-base-content opacity-70" />
//                     <span>Notifications</span>
//                 </Link>
//             </nav>

//             {/* USER PROFILE SECTION */}
//             <div className="p-4 border-t border-base-300 mt-auto">
//                 <div className="flex items-center gap-3">
//                     <div className="avatar">
//                         <div className="w-10 rounded-full">
//                             <img src={authUser?.profilePic} alt="User Avatar" />
//                         </div>
//                     </div>
//                     <div className="flex-1">
//                         <p className="font-semibold text-sm">{authUser?.fullName}</p>
//                         <p className="text-xs text-success flex items-center gap-1">
//                             <span className="size-2 rounded-full bg-success inline-block" />
//                             Online
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </aside>
//     );
// };
// export default Sidebar;


import { Link, useLocation } from "react-router-dom"; // Assumed 'react-router-dom' is used for routing
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, HomeIcon, ShipWheelIcon, UsersIcon } from "lucide-react";

const Sidebar = () => {
    const { authUser } = useAuthUser();
    const location = useLocation();
    const currentPath = location.pathname;

    // --- Desktop Sidebar Component (Internal Definition) ---
    const DesktopSidebar = () => (
        // 'hidden lg:flex' hides it on mobile and shows it on large screens (lg)
        <aside className="w-64 bg-base-200 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0">
            <div className="p-5 border-b border-base-300">
                <Link to="/" className="flex items-center gap-2.5">
                    <ShipWheelIcon className="size-9 text-primary" />
                    <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                        TalkSphere
                    </span>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                <Link
                    to="/"
                    className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
                        currentPath === "/" ? "btn-active" : ""
                    }`}
                >
                    <HomeIcon className="size-5 text-base-content opacity-70" />
                    <span>Home</span>
                </Link>

                <Link
                    to="/friends"
                    className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
                        currentPath === "/friends" ? "btn-active" : ""
                    }`}
                >
                    <UsersIcon className="size-5 text-base-content opacity-70" />
                    <span>Friends</span>
                </Link>

                <Link
                    to="/notifications"
                    className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
                        currentPath === "/notifications" ? "btn-active" : ""
                    }`}
                >
                    <BellIcon className="size-5 text-base-content opacity-70" />
                    <span>Notifications</span>
                </Link>
            </nav>

            {/* USER PROFILE SECTION */}
            <div className="p-4 border-t border-base-300 mt-auto">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={authUser?.profilePic} alt="User Avatar" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold text-sm">{authUser?.fullName}</p>
                        <p className="text-xs text-success flex items-center gap-1">
                            <span className="size-2 rounded-full bg-success inline-block" />
                            Online
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );

    // --- Mobile Bottom Bar Component (Internal Definition) ---
    const MobileBottomBar = () => {
        const navItems = [
            { to: "/", icon: HomeIcon, label: "Home" },
            { to: "/friends", icon: UsersIcon, label: "Friends" },
            { to: "/notifications", icon: BellIcon, label: "Notifs" },
        ];

        // 'fixed lg:hidden' shows it on mobile and hides it on large screens (lg)
        return (
            <nav className="fixed bottom-0 left-0 right-0 h-16 bg-base-200 border-t border-base-300 flex justify-around items-center lg:hidden z-50">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentPath === item.to;

                    return (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={`flex flex-col items-center justify-center p-2 rounded-xl h-14 w-1/4 transition-colors ${
                                isActive 
                                    ? "text-primary font-bold bg-base-300" // Active style
                                    : "text-base-content/70 hover:bg-base-300/50" // Inactive style
                            }`}
                        >
                            <Icon className="size-6" />
                            <span className="text-xs mt-0.5">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        );
    };

    return (
        <>
            {/* 1. Desktop Sidebar (Displayed on large screens only) */}
            <DesktopSidebar />

            {/* 2. Mobile Bottom Navigation (Displayed on small screens only) */}
            <MobileBottomBar />
        </>
    );
};

export default Sidebar;