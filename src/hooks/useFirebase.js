import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState(null)
    const [authError, setAuthError] = useState('');
    const [successMes, setSuccessMes] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const auth = getAuth();

    // create an user with email and password
    const createUser = (email, pass, name) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(data => {
                setAuthError('')
                setSuccessMes(`Thanks for register Mr/Mis ${name} !`)
                setUser(data.user);
                ourUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
            })
            .catch(error => {
                setAuthError(error.message);
            })
    }
    const loginUser = (email, pass, location, history) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(data => {
                setAuthError('')
                setUser(data.user)
                const redirect_uri = location?.state?.from || '/';
                history.push(redirect_uri)
            })
            .catch(error => {
                setAuthError(error.message);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                setIsLoading(false)
            }
            else {
                setUser(null)
                setIsLoading(false)
            }
        })
    }, [])

    const logOutUser = () => {
        signOut(auth)
            .then(() => {
                setAuthError('')
                setUser(null)
            })
            .catch(error => {
                setAuthError(error.message)
            })
    }
    // create an user with registration
    const ourUser = (email, name) => {
        const user = { email, name }
        fetch('https://sleepy-stream-84446.herokuapp.com/users', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(result => {

            })
    }
    // delete an order
    const deleteAnOrder = (id) => {
        const confirm = window.confirm('Are you sure? Want to delete?')
        if (confirm) {
            const url = `https://sleepy-stream-84446.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Deleted successfully !')
                    };
                })
        }
    }
    // verify admin or not 
    useEffect(() => {
        const url = `https://sleepy-stream-84446.herokuapp.com/users/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(user => {
                if (user?.role === 'admin') {
                    setIsAdmin(true)
                    setIsAdminLoading(false)
                }
                else {
                    setIsAdmin(false)
                }
            })
    }, [user])
    // update the order
    const updateTheOrder = id => {
        const user = { status: 'updated' }
        fetch(`https://sleepy-stream-84446.herokuapp.com/update/${id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Successfully updated !')
                }
            })
    }

    return {
        user,
        createUser,
        loginUser,
        authError,
        logOutUser,
        isLoading,
        deleteAnOrder,
        isAdmin,
        updateTheOrder,
        isAdminLoading,
        successMes
    }

}
export default useFirebase;