import { clearStoredUSer, getStoredUSer, setStoredUser } from '@/features/auth/storages/authUser.storage'
import type { AuthUser } from '@/features/auth/types/dto/auth-dto'
import { createContext, useContext, useState, type ReactNode } from 'react'

// context type
type AuthContextType = {
	isAuthenticated: boolean
	authUser: AuthUser | null
	setAuthUser: (user: AuthUser) => void
	clearAuthUser: () => void
}

//create context
const AuthContext = createContext<AuthContextType | null>(null)

//context provider
export function AuthProvider({ children }: { children: ReactNode }) {
	const [authUser, setAuthUser] = useState<AuthUser | null>(() =>
		getStoredUSer(),
	)
	function setUser(user: AuthUser){
		setStoredUser(user)
		setAuthUser(user)

	}

	function clearUser(){
		clearStoredUSer()
		setAuthUser(null)
	}


	return (
		<AuthContext
			value={{
				isAuthenticated: authUser !== null,
				authUser,
				setAuthUser: setUser,
				clearAuthUser: clearUser

			}}
		>
			{children}
		</AuthContext>
	)
}

//custom hook

export function useAuth(): AuthContextType{
	const context = useContext(AuthContext)

	if(!context) {
		throw Error('O contexto de autenticação não pode ser acessado fora do AuthProvider')
	}
	return context
}
