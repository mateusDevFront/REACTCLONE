import React, { useState, createContext } from 'react'

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    async function signUp(email, password, name){
        await auth().createUserWithEmailAndPassword(email, password)
        .then(async(value) => {
            let uid = value.user.uid
            await firestore().collection('users')
            .doc(uid).set({
                nome: name,
                createdAt: new Date(),
                })
                .then(() => {
                    let data = {
                        uid: uid,
                        nome: name,
                        email: value.user.email
                    }
                    setUser(data)
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }
   
    return (
        <AuthContext.Provider value={{ signed: !!user, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider 