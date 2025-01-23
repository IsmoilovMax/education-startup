import Image from 'next/image';
import { Fragment } from 'react';
import { Button, Card, Heading, ScrollUp, Text } from '../../components';
import { company, timeLineList } from '../../helpers/constants';
import Navbar from '../../layout/navbar/navbar';
import styles from './home-page-component.module.css';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import Footer from '../../layout/footer/footer';

const HomePageComponent = () => {
	return (
		<div className={styles.home}>
			<Navbar />
			<div className={styles.hero}>
				<div className={styles.heroTitle}>
					<Heading tag='h1'>
						Learn New Skills Online with Education <span>Academy</span>
					</Heading>
					<Text>
					Unlock your potential with Education Academy! Explore free programming courses, hands-on projects, and algorithm exercises. Build your portfolio, craft a professional resume, and master cutting-edge JavaScript technologies like React.js and Vue.js. Learn at your own pace with resources tailored for beginners and experts alike. Join us to kickstart your journey in IT!
					</Text>
					<Button appearance='success' arrow='right'>
						Join For Free
					</Button>
				</div>
				<div className={styles.heroImage}>
					<Image src={'/hero.png'} alt={'hero-image'} width={600} height={500} />
				</div>
			</div>
			<div className={styles.company}>
				<Heading tag='h3'>Trusted by the world's best</Heading>
				<div className={styles.companyIcon}>
					{company.map((icon, idx) => (
						<Fragment key={idx}>{icon}</Fragment>
					))}
				</div>
			</div>
			<div className={styles.timeline}>
				<Heading tag='h3'>What we can teach you</Heading>
				<div className={styles.timelineCard}>
					<Timeline lineColor='#ddddd'>
						{timeLineList.map(({ Icon, title, text }, idx) => (
							<TimelineEvent
								key={idx}
								title={title}
								icon={<Icon />}
								bubbleStyle={{ borderColor: '#140342', backgroundColor: '#fff' }}
								contentStyle={{ border: 'none', boxShadow: 'none', backgroundColor: 'transparent' }}
								titleStyle={{ fontSize: '20px' }}
							>
								<Card color='white' style={{ padding: 20 }}>
									<Text>{text}</Text>
								</Card>
							</TimelineEvent>
						))}
					</Timeline>
				</div>
				<div className={styles.mobileTimeline}>
					{timeLineList.map((data, idx) => (
						<Card color='white' style={{ padding: 20 }} className={styles.card} key={idx}>
							<Heading tag='h3'>{data.title}</Heading>
							<Text>{data.text}</Text>
						</Card>
					))}
				</div>
			</div>
			<ScrollUp />
			<Footer />
		</div>
	);
};

export default HomePageComponent;
