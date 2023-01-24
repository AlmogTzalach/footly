import GithubLogo from '../UI/icons/GithubLogo';
import FacebookLogo from '../UI/icons/FacebookLogo';
import LinkedinLogo from '../UI/icons/LinkedinLogo';

const MainFooter = () => {
	return (
		<footer className='static bottom-0 bg-orange-400 w-full text-center flex flex-col'>
			<p className='mb-2'>
				Made by{' '}
				<a
					className='underline'
					href='https://www.linkedin.com/in/almog-tzalach-ba6234235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvUBULJoeR3WC4EDJr7R2%2Bw%3D%3D'
				>
					Almog Tzalach
				</a>
			</p>
			<section className='flex justify-center items-center mb-3'>
				<a href='https://github.com/AlmogTzalach'>
					<GithubLogo className='w-10 h-10 sm:opacity-50 sm:hover:opacity-100 mx-3' />
				</a>
				<a href='https://www.facebook.com/almog.tzalach'>
					<FacebookLogo className='w-10 h-10 sm:opacity-50 sm:hover:opacity-100 mx-3' />
				</a>
				<a href='https://www.linkedin.com/in/almog-tzalach-ba6234235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5GkrCFMrRoGuB1YhhPdXLg%3D%3D'>
					<LinkedinLogo className='w-[52px] h-[52px] sm:opacity-50 sm:hover:opacity-100 mx-2' />
				</a>
			</section>
		</footer>
	);
};

export default MainFooter;
