import {createContext, useContext, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext('');
const useLocalStorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(keyName);
            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    });
    const setValue = (newValue) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (err) {
        }
        setStoredValue(newValue);
    };
    return [storedValue, setValue];
};

export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();


    // call this function when you want to authenticate the user
    const login = async (data) => {
        setUser(data);
        navigate("/services");
    };

    // call this function to sign out logged in user
    const logout = () => {
        setUser(null);
        window.localStorage.removeItem('user');
        navigate("/", {replace: true});
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};