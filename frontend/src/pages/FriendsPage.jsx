// src/pages/FriendsPage.jsx
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { UsersIcon, MessageCircleIcon } from "lucide-react";

import { getUserFriends } from "../lib/api";
import NoFriendsFound from "../components/NoFriendsFound.jsx";

const FriendsPage = () => {
    const {
        data: friends = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["friends"],
        queryFn: getUserFriends,
    });

    if (isLoading) {
        return (
            <div className="flex justify-center py-16">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center py-16">
                <p className="text-red-500 font-medium">
                    Failed to load friends: {error.message}
                </p>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="container mx-auto space-y-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        Your Friends
                    </h2>

                    <Link to="/notifications" className="btn btn-outline btn-sm">
                        <UsersIcon className="mr-2 size-4" />
                        Friend Requests
                    </Link>
                </div>

                {/* Friends List */}
                {friends.length === 0 ? (
                    <NoFriendsFound />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {friends.map((friend) => (
                            <div
                                key={friend._id}
                                className="card bg-base-200 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="card-body p-5 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar size-16 rounded-full">
                                            <img src={friend.profilePic} alt={friend.fullName} />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-lg">
                                                {friend.fullName}
                                            </h3>
                                            {friend.location && (
                                                <p className="text-xs opacity-70">{friend.location}</p>
                                            )}
                                        </div>
                                    </div>

                                    {friend.bio && (
                                        <p className="text-sm opacity-70">{friend.bio}</p>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <Link
                                            to={`/chat/${friend._id}`}
                                            className="btn btn-primary btn-sm flex-1"
                                        >
                                            <MessageCircleIcon className="size-4 mr-1" />
                                            Message
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FriendsPage;
