import RecommendationsCard from '@/features/follow/components/recommendations-card'
import ProfileCard from '@/features/users/components/profile-card'

function FeedPage() {
	return (
		//flex-1 flex justify-center items-center
		<section className="flex-1 flex justify-center items-start gap-10 mt-10">
			<ProfileCard />

			<RecommendationsCard />
		</section>
	)
}

export default FeedPage
