import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
// Create the context
const RootContext = createContext();


// Create a provider component
export const RootProvider = ({ children }) => {
    const { currentUser } = useSelector((state) => state.user);
    const [socket, setSocket] = useState(null)
    const [message, setMessage] = useState(null)
    const [refetchContact, setRefetchContact] = useState(null)
    const [connection, setConnection] = useState("")
    useEffect(() => {
        if (currentUser) {
            const newSocket = io('http://localhost:4000', {
                query: { userId: currentUser._id },
                autoConnect: false,
            });
            setSocket(newSocket);
            // newSocket.connect();

            return () => {
                newSocket.disconnect();
            };
        }
    }, [currentUser]);

    useEffect(() => {
        if (socket) {
            const handleMessage = (data) => {
                setMessage(data);
            };

            socket.on('message', handleMessage);
            socket.on('userConnected', (data) => {
                setConnection(data)
            })
            // Cleanup
            return () => {
                socket.off('message', handleMessage);
            };
        }
    }, [socket]);
    return (
        <RootContext.Provider
            value={{
                socket,
                message,
                user: currentUser,
                refetchContact,
                setRefetchContact,
                connection
            }}
        >
            {children}
        </RootContext.Provider>
    );
};

// Custom hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
export const useRootContext = () => {
    const context = useContext(RootContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};