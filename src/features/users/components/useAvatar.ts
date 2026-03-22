import type { UserDomain } from '@/features/users/types/UserDomain'

export function UseAvatar(firstName?: string, lastName?: string) {
	const getInitials = (): string => {
		if (firstName && lastName) {
			return firstName[0].toUpperCase() + lastName[0].toUpperCase()
		}

		if (firstName) {
			return firstName[0].toUpperCase()
		}

		return '?'
	}
	return {
		getInitials,
	}
}
