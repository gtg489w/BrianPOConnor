import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../../classes/project';

@Injectable()
export class DataService {

	_projects: BehaviorSubject<Project[]>;

	constructor() {
		this._projects = new BehaviorSubject<Project[]>(this.projects);
	}

	getProjects(): Observable<Project[]> {
		return this._projects.asObservable();
	}

	getProject(slug: string) {
		return this.projects.find(p => p.slug == slug);
	}

	// Additional projects to add:
	// 		PERP
	// 		GateMate
	//		eKO cooler
	// 		Delta FSD, Nadex, GS/Clarity, FDIC, LED app, Luci

	projects: Project[] = [{
		image: '/assets/portfolio/biermi.png',
		slug: 'biermi',
		title: 'biermi',
		subtitle: 'Co-Founder & President',
		content: `
			<p>biermi is the first direct-to-consumer platform for breweries (and other craft beverage manufacturers) to allow them to sell dine-in, pick-up, delivery, and shipping to their customers and manage the fulfillment process. biermi was launched on March 16th, 2020 as a proactive response to the COVID-19 outbreak and provides businesses with a storefront and the tools necessary to guide the pick-up, delivery, or shipping fulfillment.</p>
			<p>In the first 8 weeks, biermi brought on over 100 businesses in over 30 states and processed over $1.5MM.</p>
			<p>Craft beverage producers can list their products with multiple package variations (e.g., 4-pack, case), manage inventory and product details such as ABV, host pre-sales for upcoming releases, scan QR codes on orders for quick searching, and plan deliveries with route optimization and pick sheets. biermi sends out notifications to customers when deliveries are on their way and even shares the live location of the delivery vehicle while in-transit. Other features include early access codes to preorders, promo codes, reporting, delivery zone configuration, and much more.</p>
			<p>"biermi is just fantastic! It's so easy to use on both the brewery and customer side. You can choose to have online ordering for pick-up, delivery or both. Seriously one of the most brewery forward and amazing products we've used." --Tyler Kreis, Hysteria, Director of Sales</p>
			<p>"Honestly this app blows away any others out there" --Steven Capelli, Neshaminy Creek Brewing Company, Co-Owner and Operations Manager</p>
			<p>"Biermi is the next best thing to visiting my local taproom. It's my go to for fresh, flavorful beer delivered shockingly fast." --Phil S., Happy Customer</p>
			<p>"I ordered Thursday on Biermi. Website said they would deliver to Annapolis area Saturdays between 5-8. Delivery came on schedule. Website sent me an email when the driver left the shop. He gave me a call when I was his next stop. Driver was "6-feet conscious" (which I appreciated). And excellent beer to boot. 10/10 will order again!" --Kyle B., Huge Fan</p>
		`,
		images: [{
			url: '/assets/projects/biermi/delivery-load.png',
			alt: 'Website Screens',
			inheritSize: true
		}, {
			url: '/assets/projects/biermi/delivery.png',
			alt: 'Neshaminy Creek Delivery Van',
			inheritSize: true
		}, {
			url: '/assets/projects/biermi/presale.png',
			alt: 'Presale',
			inheritSize: true
		}, {
			url: '/assets/projects/biermi/tank-planning.png',
			alt: 'Tank Planning Screenshot',
			inheritSize: true
		}, {
			url: '/assets/projects/biermi/customer-review.png',
			alt: 'Customer Review',
			inheritSize: true
		}, {
			url: '/assets/projects/biermi/screen-search.png',
			alt: 'Digital Menu',
			inheritSize: true
		}, {
			url: '/assets/projects/biermi/mobile-delivery-details.png',
			alt: 'Digital Menu',
			inheritSize: true
		}, {
			url: '/assets/projects/biermi/mobile-delivery-route.png',
			alt: 'Digital Menu',
			inheritSize: true
		}, {
			url: '/assets/projects/biermi/order-details.png',
			alt: 'Digital Menu',
			inheritSize: true
		}, {
			url: '/assets/projects/biermi/delivery-order-select.png',
			alt: 'Digital Menu',
			inheritSize: true
		}, {
			url: '/assets/projects/biermi/biermi-brian-label.jpeg',
			alt: 'Digital Menu',
			inheritSize: true
		}, {
			url: '/assets/projects/biermi/biermi-brian-product-shot.jpg',
			alt: 'Digital Menu',
			inheritSize: true
		}],
		features: [
			{
				title: 'Storefront',
				children: [
					{ title: 'Pick up, delivery, or shipping options' },
					{ title: 'Product listings' },
					{ title: 'Responsive design' },
					{ title: 'Pick up Location selection' },
					{ title: 'Pre-sales' },
					{ title: 'Promotion Codes' },
					{ title: 'Integration with Square and Stripe' },
					{ title: 'Email confirmation' },
					{ title: 'Delivery tracking' }
				]
			},
			{
				title: 'Administration',
				children: [
					{ title: 'Pick up location and hours settings' },
					{ title: 'Pre-sales, release date, and fulfill by date configurations' },
					{ title: 'Dollar and volume limits on orders or items' },
					{ title: 'Inventory management' },
					{ title: 'Order filtering and searching' },
					{ title: 'Refunds' },
					{ title: 'Printing' },
					{ title: 'User/role settings' },
					{ title: 'Delivery creation / route planning' },
					{ title: 'Route optimization' },
					{ title: 'Automated email notifications to customers' },
					{ title: 'Delivery driver location sharing' },
					{ title: 'Reporting' }
				]
			}
		],
		results: [
			{ title: `<a target="_blank" href="https://biermi.com/">https://biermi.com/</a>` },
			{ title: `On boarded over 200 businesses` },
			{ title: `Processed over $11 million` },
			{ title: `Has handled numerous presales that sell over $100,000 within minutes` },
			{ title: `Beer collaboration with True Respite Brewing Company` },
		],
		tags: ['Responsive', 'Google Analytics', 'AWS', 'DynamoDB', 'AWS RDS', 'Google Maps/Places', 'Square', 'Stripe', 'Clover', 'FreedomPay', 'Inventory Management', 'Serverless', 'AWS Lambda', 'AWS API Gateway']
	}, {
		image: '/assets/portfolio/cofisica.png',
		slug: 'cofisica',
		title: 'Cofisica',
		subtitle: 'Owner & Creator',
		content: `
			<p>After a year of running competitive challenges of various formats through Peloton, I carved out some time on the weekend to build out a platform to allow us (and others) to create and run physical fitness challenges. Challenges sync data from Peloton and can be configured to incent high output, more miles, personal best scores, number of rides, etc. The platform is flexible enough to allow for rest days or for participants to work around their schedule by completing tasks within varying time windows.</p>
			<p>Data is synchronized from Peloton to pull in near real-time statistics and display a leaderboard. Leaderboards are shareable so that bragging rights can be redeemed. Challenges can be configured as public where anyone can join the challenge or private to keep it between friends or colleagues.</p>
		`,
		images: [{
			url: '/assets/projects/cofisica/homepage.png',
			alt: 'Home Page',
			inheritSize: true
		}, {
			url: '/assets/projects/cofisica/leaderboard.png',
			alt: 'Leaderboard',
			inheritSize: true
		}],
		features: [
			{ title: 'Shareable leaderboards' },
			{ title: 'Fitness data synchronization' },
			{ title: 'Customizable challenges' },
			{ title: 'Various challenge tasks (e.g., output threshold, total output, miles threshold, total miles)' },
			{ title: 'Challenge bonuses (e.g., personal best score)' },
			{ title: 'Public/private challenges' },
			{ title: 'Integration with Peloton' }
		],
		results: [
			{ title: `<a target="_blank" href="https://cofisica.com/">https://cofisica.com/</a>` },
		],
		tags: ['Responsive', 'AWS', 'AWS RDS', 'AWS S3', 'AWS CloudFront', 'AWS Cloudwatch', 'AWS API Gateway', 'Serverless', 'AWS Lambda', 'Serverless Framework', 'Angular']
	}, {
		image: '/assets/portfolio/baby-brezza-formula-pro-advanced-wifi.png',
		slug: 'baby-brezza-formula-pro-advanced-wifi',
		title: 'Baby Brezza',
		subtitle: 'Sales, Architect, & Lead',
		content: `
			<p>Baby Brezza is a product line that automatically makes a warm formula bottle instantly. The Formula Pro Advance Wi-Fi model allows the bottle to be made from a mobile phone.</p>
			<p>Bresslergroup was engaged to help bring the Wi-Fi connectivity from a proof of concept to production. Baby Brezza had added an ESP32 controller to their device and built out the proof of concept using the IBM cloud. In less than a year, we supported the existing POC at CES, re-wrote the ESP32 firmware, redesigned the cloud infrastructure with a serverless architecture, moved to AWS, built and deploy an administrative web application, built a factory provisioning mobile app, and built a consumer facing mobile app to interact with their device.</p>
			<h4>Firmware</h4>
			<p>Firmware was written in C++ and built in a modular way for future project reuse. The firmware targeted an ESP32 and needed to communicate with another board. The firmware needed to coordinate factory provisioning which was accomplished by initially using Bluetooth to accept connections and the transmission of device certificates that are generated in AWS IoT Core. Once provisioned, the firmware would perform a self test that included verifying that communication with the main control board was working and connecting to the factory's Wi-Fi to report the status to the cloud.</p>
			<p>Once provisioned in the factory, the firmware would allow provisioning to a customer's home Wi-Fi network and connect to the user's account. This would establish an open channel of communication with AWS IoT Core using MQTT.</p>
			<h4>Cloud Infrastructure and Services</h4>
			<p>Cloud infrastructure and the API services were all built using the Serverless Framework. We leveraged IoT Core, Lambda, API Gateway, RDS, DynamoDB, S3, CloudFront, Route53, and CloudWatch to be able to maintain a serverless architecture and use AWS managed services. The API was written in Node and deployed to Lambda for scaling.</p>
			<p>Services were attached to IoT core events and exposed to the factory provisioning mobile app, consumer mobile app, and administration web application. Websockets were also exposed through API Gateway with sessions managed in DynamoDB and authN/authZ handled with a JWT that allows the consumer and administration web application to manage devices with live updates.</p>
			<h4>Administration Web Application</h4>
			<p>To manage the ecosystem, we built a web app that allows a Baby Brezza administrator to manage users, manage devices, manage metadata (e.g., formula settings), manage and release firmware updates, and report out on usage/active devices/bottles made.</p>
			<h4>Consumer Mobile App</h4>
			<p>To give the Baby Brezza a true IoT experience, we built a mobile app using React Native and released it to Google Play and Apple's App Store. The mobile app walks the customer through unboxing of the device, allows them to connect the device to their home network through an orchestration of Bluetooth and Wi-Fi connectivity, configure bottle presets, track formula usage, and quickly make bottles.</p>
			<h4>Factory Provisioning Mobile App</h4>
			<p>Before devices are shipped out directly to customers or to retailers, the devices need to be provisioned with unique certificates and tested at the factory. We built a hybrid mobile app using Ionic and provided the APK to the contract manufacturer. The app allows the CM to connect to devices, create the device metadata in the cloud, fetch the device certificates, transfer device certificates to the device for secure storage, and perform a self test to ensure the device has Wi-Fi connectivity and communication to the main board.</p>

			<div class="center">
				<iframe class="presentation" src="https://www.youtube.com/embed/q0Sv_pjMhNI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		`,
		images: [{
			url: '/assets/projects/baby-brezza-formula-pro-advanced-wifi/baby-brezza-fpa-wifi-scene.jpeg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/baby-brezza-formula-pro-advanced-wifi/baby-brezza-fpa-wifi-display.jpeg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/baby-brezza-formula-pro-advanced-wifi/baby-brezza-fpa-wifi-marketing-video.mp4',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/baby-brezza-formula-pro-advanced-wifi/baby-brezza-fpa-wifi-phone.jpeg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/baby-brezza-formula-pro-advanced-wifi/baby-brezza-fpa-wifi-product-shot.jpeg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/baby-brezza-formula-pro-advanced-wifi/baby-brezza-fpa-wifi-rendering-large-bottle.jpeg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/baby-brezza-formula-pro-advanced-wifi/baby-brezza-fpa-wifi-rendering.jpeg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/baby-brezza-formula-pro-advanced-wifi/baby-brezza-fpa-wifi-staged-counter.jpeg',
			alt: '',
			inheritSize: true
		}],
		features: [
			{
				title: 'Firmware',
				children: [
					{ title: 'C++ with custom common libraries for future reuse' },
					{ title: 'Targeted to run on an ESP32' },
					{ title: 'Provisioning, factory self tests, standard operating mode, and firmware updates' },
					{ title: 'Certificate management' },
					{ title: 'IoT connectivity to AWS IoT Core through MQTT' },
				]
			},
			{
				title: 'Cloud Infrastructure',
				children: [
					{ title: 'Serverless Framework leveraging IoT Core, Lambda, API Gateway, RDS, DynamoDB, S3, CloudFront, CloudWatch' },
					{ title: 'Websockets through API Gateway with sessions managed in DynamoDB and JWT authN/authZ' },
				]
			},
			{
				title: 'Administration',
				children: [
					{ title: 'Angular SPA' },
					{ title: 'User management, device management, metadata management (e.g., Formula Settings), reporting (e.g., usage, active devices), and firmware version management + firmware updates' },
				]
			},
			{
				title: 'Mobile App',
				children: [
					{ title: 'React Native mobile app for Android and iOS' },
				]
			},
			{
				title: 'Factory Provisioning Mobile App',
				children: [
					{ title: 'Hybrid Ionic app for the contract manufacturer' },
					{ title: 'Provision device certificates' },
					{ title: 'Bluetooth communication and data transmission' },
				]
			}
		],
		results: [
			{ title: `More than 60k devices created in the first year` },
			{ title: `More than 28k users registered in the first year` },
			{ title: `More than 30k bottles configured in the first year` },
			{ title: `More than 8.4 million bottles created in the first year` },
		],
		tags: [`Baby Brezza`, `IoT`, `Serverless`, `Factory Provisioning`, `Device Certificates`, `React Native`, `Ionic Hybrid App`, `Angular`, `Websockets`, `MQTT`, `RDS`]
	}, {
		image: '/assets/portfolio/usga-green-instrument.png',
		slug: 'usga-green-instrument',
		title: 'USGA - Green Instrument',
		subtitle: 'Mobile Support',
		content: `
			<p>Bresslergroup was contracted to produce 10 prototype ball units to demonstrate the use of a single device packaged inside the form factor of a golf ball to measure firmness, speed, and trueness of greens. These prototypes were tested both in the lab and field to evaluate their potential.</p>
			<p>Devices incorporated wireless charging, a gyroscope, a low-g accelerometer for higher precision, a high-g accelerometer to measure higher impact, and a bluetooth radio for test configuration and file transmission.</p>
			<p>Alpha prototypes were built to test the concept and perform end to end tests including data transmission to the cloud for analysis. Beta revisions engaged our Mechanical Engineering team to develop a chassis for the PCB, balance all components to ensure smooth rolls, and engage with a contract manufacturer for production ramp-up.</p>
			<p>A mobile app was built to allow agronomists to configure and perform tests with real-time feedback and to allow for data to be retrieved from the device and transmitted to the cloud.</p>
			<div class="center">
				<iframe class="presentation" src="https://www.youtube.com/embed/vcEbhrv3XLg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		`,
		images: [{
			url: '/assets/projects/usga-green-instrument/usga-green-instrument-case.jpg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/usga-green-instrument/usga-green-instrument-boards-and-prototype-shell.png',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/usga-green-instrument/usga-green-instrument-alpha.jpg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/usga-green-instrument/usga-green-instrument-chargers.jpg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/usga-green-instrument/usga-green-instrument-charging.jpg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/usga-green-instrument/usga-green-instrument-home.png',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/usga-green-instrument/usga-green-instrument-connecting.png',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/usga-green-instrument/usga-green-instrument-details.png',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/usga-green-instrument/usga-green-instrument-downloading.png',
			alt: '',
			inheritSize: true
		}],
		features: [
			{ title: 'Bluetooth file transmission' },
			{ title: 'Double-tap to wake the device' },
			{ title: 'Low-g and high-g accelerometers' },
			{ title: 'Gyroscope' },
			{ title: 'Wireless charging' },
		],
		results: [],
		tags: ['Ionic', 'Hybrid App', 'Bluetooth', 'Nordic']
	}, {
		image: '/assets/portfolio/split-flaps.png',
		slug: 'split-flaps',
		title: 'Split Flaps',
		subtitle: 'Intelligence Injector',
		content: `
			<p>In 2019, Nick McGill, Ed Garcia, John Kurcheski, and I set off on an adventure to in inefficient nostalgia. We wanted to bring a new flare to an old mechanism - the split flap display.</p>
			<div class="center">
				<iframe class="presentation" src="https://www.youtube.com/embed/I4ov7oxJ4BM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
			<p>To get started, we used the open-source model to control the rotation of the flaps. Each character has forty flaps and is controlled by a stepper motor and a simple encoder, which is basically a magnet that goes around on a wheel. There's a hall-effect magnet sensor at a fixed position, and that indicates start and stop, or where home is. Unfortunately, the hardware costs add up, even when your time and 3D printing is considered free. We decided to limit our project to four split flaps, and even on that small scale, we still spent a couple hundred dollars on parts.</p>
			<p>One of our first iterations ran perfectly, but it was silent. It didn't make the flip-flap sound that split flaps are known for, and we couldn't have a split flap without the flip flap. With some fiddling and testing, we determined that the interference between the flap and the casework top creates the soothing, uniform flapping sound.</p>
			<p>We asked John Kurcheski, our resident model maker and all-around model citizen, if he'd help us create an enclosure for the split flap, and he jumped onboard immediately. We all collaborated on a sketch, and John got to work creating the box, laser-cutting some brackets, adding LED lighting, and making the final product look pretty. Fitting all the components inside casework wasn't easy, and John showed us why he's the king of cable management — one of the most boring sounding and yet critical pieces of the puzzle.</p>
			<div class="center">
				<iframe class="presentation" src="https://www.youtube.com/embed/uF2WdaeZqto" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
			<p>We designed and built a web application that is open to the public - anyone can access it. The application runs on AWS using a serverless architecture to reduce cost and leverages IoT Core to communicate with the split flaps.</p>
			<p>To prevent anyone in the world from toying with the score, users need to authenticate themselves. When you open the web application, you will be prompted to press the green button on the split flap display proving that you are physically present with the device. You're then authenticated for the rest of the day and can control the scoreboard remotely from wherever you are. This made the display accessible and interactive without having to leave the ends during judging of our shuffle board games.</p>
			<p>The other feature we added was the ability to go into clock mode - the split flap display would become somewhat useful while idle by turning into a clock.</p>
		`,
		images: [{
			url: '/assets/projects/split-flaps/split-flaps-concept-sketch.jpg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/split-flaps/split-flaps-boards.jpg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/split-flaps/split-flaps-wiring.jpg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/split-flaps/split-flaps-wiring2.jpg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/split-flaps/split-flaps-software-development.jpg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/split-flaps/split-flaps-architecture.png',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/split-flaps/split-flaps-web-app.png',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/split-flaps/split-flaps-light-bar.jpg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/split-flaps/split-flaps-test.jpg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/split-flaps/split-flaps-mounted.jpg',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/split-flaps/split-flaps-final.png',
			alt: '',
			inheritSize: true
		},],
		features: [
			{ title: 'Authentication against the physical device' },
			{ title: 'Debouncing in the web application and onboard the device' },
			{ title: 'Live synchronization of score between the split flaps and web application' },
			{ title: 'Clock mode' },
		],
		results: [
			{ title: `<a target="_blank" href="https://www.bresslergroup.com/blog/our-diy-split-flap-an-adventure-in-inefficient-nostalgia/">https://www.bresslergroup.com/blog/our-diy-split-flap-an-adventure-in-inefficient-nostalgia/</a>` },
		],
		tags: ['AWS', 'IoT Core', 'MQTT', 'Websockets', 'Angular', 'AWS S3', 'AWS Lambda', 'AWS API Gateway']
	}, {
		image: '/assets/portfolio/milkcrate-studio.png',
		slug: 'milkcrate-studio',
		title: 'Milkcrate Studio',
		subtitle: 'Creator',
		content: `
			<p>MilkCrate is a Philadelphia-based startup and an award-winning platform that you can use to create affordable and easy to launch mobile apps for your volunteers, students, community members, or human service clients.</p>
			<p>After connecting with the CEO of MilkCrate and moving into an advisory role, we determined that a publicly facing interactive light-version of the MilkCrate app could accomplish two of the business's strategic goals: 1. quickly convey what MilkCrate is and the value prop, 2. collect leads and push them through their sales funnel.</p>
			<p>The MilkCrate studio allowed potential customers to toggle on features and customize their future app with brand colors and logos. The Studio allowed potential customers to share their no-code customizations and would collect contact information along the way to generate leads.</p>
		`,
		images: [{
			url: '/assets/projects/milkcrate-studio/milkcrate-studio-getting-started.png',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/milkcrate-studio/milkcrate-studio-profile.png',
			alt: '',
			inheritSize: true
		}, {
			url: '/assets/projects/milkcrate-studio/milkcrate-studio-activity.png',
			alt: '',
			inheritSize: true
		}],
		features: [
			{ title: 'Logo and brand color customization' },
			{ title: 'Share URL generation' },
			{ title: 'Lead generation and collection of user data' },
			{ title: 'Configuration/settings store to help seed MilkCrate mobile app' },
		],
		results: [],
		tags: ['Responsive', 'Google Analytics', 'AWS', 'Angular', 'Lead Generation']
	}, {
		image: '/assets/portfolio/bresslergroup-design-defined.png',
		slug: 'bresslergroup-design-defined',
		title: 'Design Defined',
		subtitle: 'Accessible Technology',
		content: `
			<div class="center">
				<iframe class="presentation" src="https://www.youtube.com/embed/h5XtGoTFDk4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
			<p>We've all had the experience of walking into a room and realizing we've forgotten what we came for. Imagine if this happened to you ALL the time. This is what life is like for people with short-term memory loss, a cognitive impairment that's often forgotten when it comes to building accessible applications. It's just one of a range of visual, hearing, motor, cognitive, and other limitations for which we can design.</p>
			<p>With technology central to everything we do, it's vital to make it accessible to people with ALL types of abilities. Thanks to an uptick in regulations and lawsuits, legal incentives for accessibility are growing. But we believe that designers and developers should ALWAYS consider accessibility, because it's the right thing to do. And it turns out to be better for everybody.</p>
			<p>There are a lot of potential Accessible Technology solutions that software engineers and designers can use to bake accessibility into their products. Learn more about this design principle from Brian O'Connor, Bresslergroup's Software Engineering Manager.</p>
			<p>Read "Making Tech Accessible: How To Bake Accessibility into Software Development": <a target="_blank" href="https://www.bresslergroup.com/blog/making-tech-accessible/">https://www.bresslergroup.com/blog/making-tech-accessible/</a></p>
			<h4>ABOUT DESIGN DEFINED</h4>
			<p>Our Design Defined series consists of quick takes on our favorite product design principles with a Bresslergroup strategist, researcher, designer, or engineer as your guide.</p>
			<p>For more design principles, download the FREE Design Defined, vols. 1 and 2, eBooks: <a target="_blank" href="https://www.bresslergroup.com/design-defined-ebook/">https://www.bresslergroup.com/design-defined-ebook/</a></p>
			<h4>ABOUT BRESSLERGROUP</h4>
			<p>Bresslergroup is an insight-driven product innovation firm whose strategists, researchers, engineers & designers are trusted to solve inspiring product design and development challenges.</p>
		`,
		images: [],
		features: [],
		results: [
			{ title: 'Bresslergroup eBooks & YouTube Video Series' },
			{ title: 'Series of blog posts to drive SEO/SEM and promote subject matter expertise' },
		],
		tags: ['Accessibility', 'A11y', 'WCAG']
	}, {
		image: '/assets/portfolio/wireless-account-management.png',
		slug: 'wireless-account-management',
		title: 'Wireless Account Management',
		subtitle: 'Architect | Development Lead',
		content: `
			<p>A large prepaid mobile carrier in Atlanta needed to redesign, build, test, and deploy new native iOS and Android mobile apps requiring complex and strict accessibility compliance. The mobile apps needed to work with native mobile operating system features including screen readers and switch controls. Additionally, color contrast ratios, click affordances, and font-resizing standards needed to be met. My team provided expertise in designing and building the compliant apps as well as recommending other improvements that could be made in the tangential technology and processes.</p>
			<p>We deployed the mobile apps to iTunes and Google Play stores and they have since been installed on millions of devices. We transitioned the code, accessibility framework and lessons learned, and the continuous build/delivery pipeline to the client. This enabled the client to rapidly iterate on the mobile apps and push out subsequent releases.</p>
			<p>I was brought into the sales process and oversaw the design and development process. I worked closely with our client's technical team, our client's project stakeholders, my design team, team of engineers, our account representation, and our practice leadership to make sure the project was delivered on-time and we were satisfying our client. The project was viewed as a huge success by all parties as the path to accessibility compliance approval with the client was looked at as near impossible.</p>
		`,
		images: [{
			url: '/assets/projects/wireless-account-management/screens.png',
			alt: 'App Screens'
		}],
		features: [
			{
				title: 'Dynamic account management features',
				children: [
					{ title: 'Add a line' },
					{ title: 'International features' }
				]
			},
			{ title: 'Accept payments' },
			{ title: 'Manage settings' },
			{ title: 'Data and voice usage history' },
			{ title: 'Analytics + crash reporting' },
			{ title: 'Development pipeline with Git Workflow branching' },
			{ title: 'Integration with existing APIs' },
			{ title: 'Live chat with support' },
			{
				title: 'FCC accessibility standards',
				children: [
					{ title: 'Native font settings' },
					{ title: 'Accessible with native screen readers' },
					{ title: 'Accessible with native switch control' },
					{ title: 'Flesch-Kincaid maximum grade reading level' },
					{ title: 'Maximum color contrast ratios' }
				]
			}
		],
		results: [
		{ title: `Design to Play Store and iTunes in 5 months` },
		{ title: `Over 75% of users upgraded within 3 months` },
		{ title: `After only 10 days, 1.6 million devices installed the update` },
		{ title: `Over 10 million downloads` },
		{ title: `Led to additional work with client` }
		],
		tags: ['iOS', 'Swift', 'Android', 'Java', 'Axure', 'InVision', 'Crashlytics', 'Woopra', 'Mockable', 'Jira', 'Git', 'Flesch-Kincaid', 'bitrise.io', 'TestFlight', 'Appium', 'AWS Device Farm', 'Checkmarx']
	}, {
		image: '/assets/portfolio/true-respite.png',
		slug: 'true-respite',
		title: 'True Respite',
		subtitle: 'Owner | IT Lead',
		content: `
			<p>True Respite Brewing Company (<a href="https://truerespite.com" target="_blank">https://truerespite.com</a>) is a craft brewery located in Rockville, MD that opened for business in April of 2018. As the IT Lead and a shareholder, I have provided technical leadership and support throughout the entire process from the initial business plan through current operations.</p>

			<h3>Website</h3>
			<p>The TRBC website has undergone several iterations as the business has grown. Initially, a simple splash page with investor information was built to support the founders during their fundraising efforts. As the business continued towards breaking ground, additional features were added including more information about the brewery as well as a blog. The website continues to evolve as customers need/want more information about the business.</p>

			<h3>Menu</h3>
			<p>The taproom does not have any physical menus and relies solely on a completely custom digital menu. The menu displays a list of current beers on tap along with various other bits of information including ABV and style. If the number of brews drops below a threshold, the menu will display a list of upcoming brews. The footer of the menu shows check-in information pulled from Uptappd. The digital menu also has the ability to display the level of beer remaining in the kegs located in the cooler based on weight. All updates happen in near real-time.</p>
			<p>Along with the menu, a tap management application was built that allows managers to keep the menu up-to-date with what brews are available, sold out, and coming soon.</p>

			<h3>Keg Monitoring</h3>
			<p>We want to give customers some insight into how much of each beer style is remaining so they don't miss out on some of the special batches. There are a few options to monitor the remaining beer of a keg. The first is a flow meter that tracks the amount of beer dispensed. Since we're dealing with consumed liquid, the flow meter needs to be food grade and that becomes incredibly pricey especially when there are 16 taps.</p>
			<p>We opted for the alternative solution which is to weigh each keg to get an estimate of the beer remaining. To do this, we leveraged Wii Fit Boards because they're already equipped with a scale, Bluetooth, power supplies, and are encased. This ensured minimal disruption to the current business processes.</p>
		`,
		images: [{
			url: '/assets/projects/true-respite/screen-website.png',
			alt: 'Website Screens'
		}, {
			url: '/assets/projects/true-respite/photo-menu.png',
			alt: 'Digital Menu'
		}, {
			url: '/assets/projects/true-respite/photo-scales.png',
			alt: 'Keg Scales'
		}],
		features: [
			{ title: `Website with content management capabilities` },
			{ title: `Custom digital menu with tap management` },
			{ title: `Keg scales to provide customers with an estimate on remaining beer` },
			{ title: `Integration with Square's APIs to manage inventory and process online orders` },
			{ title: `Integration with Uptappd` }
		],
		results: [
			{ title: `Digital menu has worked smoothly since opening day` },
			{ title: `Website engages over 2k customers a month` },
			{ title: `True Respite received the most awards of any brewery in the Maryland beer competition` },
		],
		tags: [ `Website`, `Angular`, `Digital Signage`, `Raspberry Pi`, `Hardware`, `Keg Scales`, `Bluetooth`, `Python`, `PHP`, `TypeScript`, `Uptappd API`, `Square API`, `Google Calendar API`, `Adobe Photoshop`, `Adobe Illustrator`, `Google Analytics` ]
	}, {
		image: '/assets/portfolio/taliscape.png',
		slug: 'taliscape',
		title: 'Taliscape',
		subtitle: 'Owner | Designer | Developer',
		content: `
			<p><a href="https://taliscape.com" target="_blank">https://taliscape.com</a> is a SaaS product that provides estimation, staffing forecasting, time entry, and billing capabilities for a monthly subscription. The solution is targeting a need in small to medium sized consulting agencies where staffing forecasts are typically estimated in weeks and company sizes between 10 and 100.</p>
		`,
		images: [{
			url: '/assets/projects/taliscape/screen-staffing.png',
			alt: 'Taliscape Staffing Screen'
		}, {
			url: '/assets/projects/taliscape/screen-login.png',
			alt: 'Taliscape Login Screen'
		}, {
			url: '/assets/projects/taliscape/screen-projects.png',
			alt: 'Taliscape Projects Screen'
		}, {
			url: '/assets/projects/taliscape/screen-project.png',
			alt: 'Taliscape Project Screen'
		}, {
			url: '/assets/projects/taliscape/screen-time-entry.png',
			alt: 'Taliscape Time Entry Screen'
		}],
		features: [
			{ title: `Basic Customer Relationship Management (CRM)` },
			{ title: `Project estimation` },
			{ title: `Project staffing forecast` },
			{ title: `Time entry` },
			{ title: `Billing` },
			{ title: `Monthly subscriptions` },
		],
		results: [],
		tags: [ `Website`, `Angular`, `SaaS`, `NodeJS`, `Serverless`, `AWS Lambda`, `AWS SES`, `AWS S3`, `AWS CloudWatch`, `AWS Cloud Front`, `MySQL`, `Stripe Integration`, `Adobe Photoshop`, `Adobe Illustrator`, `SEO`, `Google Analytics` ]
	}, {
		image: '/assets/portfolio/distillio.png',
		slug: 'distillio',
		title: 'DISTILLIO',
		subtitle: 'Owner | Team Lead | Developer',
		content: `
			<p>DISTILLIO makes the moments that demonstrate goal progress easy to search, track, manage, and transition. Our case manager dashboard brings your entire caseload into one simple view, so you stay on top of multiple students and different deadlines with ease.</p>
			<p>DISTILLIO keeps the entire team engaged and focused on goal progress so everyone feels confident and prepared when creating, discussing, and implementing IEPs.</p>
			<p>By enabling parents, educators, therapy providers, coaches, and others to easily collaborate, DISTILLIO transforms IEP creation from a yearly meeting to a consistent conversation supported by teamwork.</p>

			<h3>Involvement</h3>
			<p>I was the development lead for the build out of our flagship product, DISTILLIO, while at Avenir Education. I worked closely with our design and engineering teams to make sure that we focused on delivering as much value to our end users as we collected feedback each week from teachers and case managers. I made sure that the team was focused on building out the features needed by our end users and made sure that we were able to deliver and meet the company's expectations of product.</p>
			<p>I also served as the front end engineer for the core of the product until we were able to hire another engineer to continue the build.</p>

			<h3>Features</h3>
			<ul>
				<li>Student profile creation
					<ul>
						<li>Manage accommodations</li>
						<li>Manage modifications</li>
						<li>Basic student details</li>
						<li>Custom student avatar</li>
					</ul>
				</li>
				<li>User settings
					<ul>
						<li>Profile photo</li>
						<li>User details</li>
						<li>Email distribution/frequency settings</li>
					</ul>
				</li>
				<li>Collaboration
					<ul>
						<li>Team member invitations</li>
						<li>Student-centric timeline</li>
						<li>File upload</li>
						<li>File OCR and document categorization</li>
						<li>Comments</li>
					</ul>
				</li>
				<li>Goal management
					<ul>
						<li>Goal creation</li>
						<li>Track progress with several measurement options</li>
						<li>Associate files to goal progress</li>
						<li>Goal trends</li>
						<li>Short term objectives</li>
						<li>Goal themes</li>
						<li>Goal standards (e.g., Common Core)</li>
						<li>Measurement reminder notifications</li>
					</ul>
				</li>
				<li>Service tracking
					<ul>
						<li>Manage related service providers</li>
						<li>Time reporting</li>
						<li>Track related service sessions</li>
					</ul>
				</li>
				<li>Administration features
					<ul>
						<li>Bulk actions</li>
						<li>User management</li>
						<li>Student management</li>
						<li>Reporting / Custom exports</li>
					</ul>
				</li>
				<li>Application features
					<ul>
						<li>User feedback on all pages</li>
						<li>Search</li>
						<li>Legal documentation</li>
						<li>Analytics</li>
						<li>Responsive</li>
						<li>Error reporting/notifications</li>
					</ul>
				</li>
			</ul>
		`,
		images: [{
			url: '/assets/projects/distillio/screen-goal.png',
			alt: 'Goal Screen'
		}, {
			url: '/assets/projects/distillio/screen-list.png',
			alt: 'List Screen'
		}, {
			url: '/assets/projects/distillio/screen-cards.png',
			alt: 'Cards Screen'
		}, {
			url: '/assets/projects/distillio/screen-timeline.png',
			alt: 'Timeline Screen'
		}, {
			url: '/assets/projects/distillio/screen-avatar.png',
			alt: 'Avatar Screen'
		}, {
			url: '/assets/projects/distillio/screen-file.png',
			alt: 'File Screen'
		}],
		features: [],
		results: [{ title: `https://distillio.com/ (no longer maintained)` }],
		tags: [ `Angular`, `OCR`, `Google Vision`, `Kotlin`, `Microservices`, `AWS`, `AWS SNS`, `AWS Route53`, `AWS Lambda`, `AWS S3`, `AWS CloudFront`, `AWS Elastic Beanstalk`, `AWS Certificate Manager`, `AWS Credentials Store`, `AWS Code Pipeline`, `AWS Cognito`, `AWS RDS`, `Adobe Photoshop`, `Adobe Illustrator`, `SEO`, `Google Analytics` ]
	}, {
		image: '/assets/portfolio/talentwise.png',
		slug: 'talentwise',
		title: 'Talentwise',
		subtitle: 'Product Owner | Developer',
		content: `
			<p>Talentwise was used to manage staffing of Slalom consultants for 6 offices and over 600 consultants. The application was born from the need to move practice leadership from managing ongoing projects' staffing in spreadsheets to a centralized application. Talentwise provided office leadership with a view into practice staffing, utilization, and future availability.</p>
			<p>Talentwise was initially used by the Atlanta Custom Development practice as was built by myself and a colleague. Once we had the initial application productionalized, we were approached by several other practices who also had a need for a centralized staffing management tool. The application was eventually adopted by the entire Atlanta office before spreading to more offices.</p>
			<p>I continued to own the product, push out enhancements, complete redesign, and manage a few other engineers when they had availability to work on the product.</p>
			<p>Talentwise was in use from December of 2013 through 2017.</p>
		`,
		images: [{
			url: '/assets/projects/talentwise/screen-staffing-grid.png',
			alt: 'Staffing Grid Screen'
		}, {
			url: '/assets/projects/talentwise/screen-dashboard.png',
			alt: 'Dashboard Screen'
		}, {
			url: '/assets/projects/talentwise/screen-consultants.png',
			alt: 'Consultants Screen'
		}, {
			url: '/assets/projects/talentwise/screen-clients.png',
			alt: 'Clients Screen'
		}, {
			url: '/assets/projects/talentwise/screen-client.png',
			alt: 'Client Screen'
		}],
		features: [],
		results: [
			{ title: `Completely custom application built with AngularJS 1.x and later updated to Angular 2` },
			{ title: `Single Sign On leveraging Office 365` },
			{ title: `Used to manage over 600 staffing assignments across 6 offices` },
			{ title: `In production for 4 years and relied upon by practice/office leadership for management and visibility into staffing` },
		],
		tags: [ `AngularJS`, `Angular`, `.NET`, `Web API`, `AWS`, `SSO`, `PPM`, `Utilization`, `Reporting`, `SaaS`, `Adobe Photoshop`, `Adobe Illustrator`, `SEO`, `Google Analytics` ]
	}, {
		image: '/assets/portfolio/fantasy-wiffle.png',
		slug: 'fantasy-wiffle',
		title: 'Fantasy Wiffle',
		subtitle: 'Sole Owner | Designer | Developer',
		content: `
			<p>The annual Travis Roy Foundation WIFFLE Ball Tournament at Little Fenway in Essex, Vermont, has raised over $4.7 Million to benefit spinal cord injured survivors and research into a cure for paralysis. This unique community event, where players from around the country can enjoy playing America's #1 backyard game on replicas of Fenway Park, Wrigley Field, and Field of Dreams, has captured the attention of major media sources, sports enthusiasts, and friends of Travis Roy.</p>
			<p>We pulled together WIFFLE ball player statistics across 28 teams from over 15 years to create a fantasy game that lets you draft your fantasy WIFFLE ball team and compete against others for bragging rights. All proceeds go directly to the Travis Roy Foundation.</p>
			<p>Since the WIFFLE ball tournament is annual, the application is shutdown and replaced with a splash screen during the months of no activity.</p>
		`,
		images: [{
			url: '/assets/projects/fantasy-wiffle/screen-phone.png',
			alt: 'Phone Screens',
			inheritSize: true
		}],
		features: [
			{ title: `Accepts donations to charity for team entries` },
			{ title: `Draft players using fantasy budget` },
			{ title: `Watch live scores throughout the tournament` },
			{ title: `Tournament administration` },
		],
		results: [
			{ title: `<a href="https://fantasywiffle.com/" target="_blank">https://fantasywiffle.com/</a>` },
			{ title: `Raised more than $5,700 for the Travis Roy Foundation over 3 years` },
		],
		tags: [  `Angular`, `Fantasy`, `PHP`, `Stripe`, `Charity`, `AWS S3`, `AWS RDS`, `Adobe Photoshop`, `Adobe Illustrator`, `SEO`, `Google Analytics` ]
	}, {
		image: '/assets/portfolio/spedx.png',
		slug: 'spedx',
		title: 'SPEDx',
		subtitle: 'Owner | Developer',
		content: `
			<p>SPEDx was the original d/b/a of Avenir Education and our brand.</p>
			<p>I worked closely with our design lead and our chief communications officer to develop and iterate on a visual brand for our public website. The goal was to develop a look that was friendly and approachable but not too childish. We needed to design for trust as parents, teachers, and school districts would need to be comfortable with granting us access to their students' data. The submarine theme was based on a story involving a student in special education who went on to become a captain of a submarine.</p>
			<p>Once we landed on a design, my role was to build out the functioning website. This process was iterative as we wanted to make sure the animations were smooth and worked on devices of all sizes. We also needed the animations and interactions to help reinforce the story and brand we were targeting.</p>
			<p>The result was a responsive website containing a number of subtle animations - the waves moved, the clouds blew in the breeze, the seagulls flapped their wings, and the submarine followed you through the adventure. All of the fish had their own subtle animations as well.</p>
		`,
		images: [{
			url: '/assets/projects/spedx/screen-website.png',
			alt: 'Website Screen'
		}, {
			url: '/assets/projects/spedx/screen-product.png',
			alt: 'Website Product Screen'
		}, {
			url: '/assets/projects/spedx/screen-services.png',
			alt: 'Website Services Screen'
		}, {
			url: '/assets/projects/spedx/screen-contact.png',
			alt: 'Website Contact Screen'
		}, {
			url: '/assets/projects/spedx/screen-privacy.png',
			alt: 'Website Privacy Screen'
		}, {
			url: '/assets/projects/spedx/screen-404.png',
			alt: 'Website 404 Screen'
		}],
		features: [],
		results: [{ title: `<a href="https://brianpoconnor.com/static/projects/spedx/" target="_blank">Website</a> launched at https://spedx.com/` }],
		tags: [ `Angular`, `CSS Animation`, `SVG`, `AWS`, `AWS Lambda`, `AWS S3`, `AWS CloudFront`, `Adobe Photoshop`, `Adobe Illustrator`, `SEO`, `Google Analytics` ]
	}, {
		image: '/assets/portfolio/game-mechanics.png',
		slug: 'game-mechanics',
		title: 'Game Mechanics',
		subtitle: 'Architect | Development Lead',
		content: `
			<p>The Game Mechanics project was for a large home improvement retailer that needed to improve the training for their seasonal employees and kicked off in 2015. The goal was to create a mobile application that employees in the stores could use on the company devices they carried through the store when they had downtime. The mobile app would be gamified and allow employees and store locations to compete against each other for top scores taking advantage of company culture that was already very competitive. Various metrics were also tracked and used to compare against stores/employees receiving the traditional method of training at a computer located in the back room.</p>
			<p>The app featured campaigns of content that could be managed by an administrator. Campaigns contained a few types of questions as well as tasks that would lead the employees to certain aisles of the store to view or compare products.</p>
		`,
		images: [{
			url: '/assets/projects/game-mechanics/screen-select-campaign.png',
			alt: 'Campaign Selection Screen',
			inheritSize: true
		}, {
			url: '/assets/projects/game-mechanics/screen-question.png',
			alt: 'Question Screen',
			inheritSize: true
		}],
		features: [],
		results: [
			{ title: `The pilot of the app was successful and was continued to roll out throughout the entire region` },
			{ title: `Resulted in additional work on the app and with the client` },
			{ title: `As of November, 2018, the app still engages 600 weekly active users` },
		],
		tags: [ `Angular`, `Gamification`, `Java`, `Android`, `Mobile App`, `Retail`, `Google Analytics` ]
	}, {
		image: '/assets/portfolio/impulse.png',
		slug: 'impulse',
		title: 'Impulse',
		subtitle: 'Hackathon | 1<sup>st</sup> Place',
		content: `
			<p><a href="https://www.hackatl.org/" target="_blank">HackATL</a> is a 48-hour business hackathon hosted by Emory's Goizueta Business School with the goal to "Build a business in 48 hours".</p>
			<h3>Concept Overview</h3>
			<ul>
				<li>Platform that pushes impulse buying to the next level – seconds</li>
				<li>Curates the best deals across the internet and pulls from our own stock to give users the ultimate lowest price</li>
				<li>Forces users to make an impulsive decision to buy; if not then another user will be offered the deal of a lifetime</li>
				<li>Mobile app and wearable app with a simple, intuitive interface for making fast purchasing decisions</li>
				<li>Allows customizable alert settings</li>
			</ul>
			<div class="center">
				<iframe class="presentation" src="https://www.youtube.com/embed/q0e-GSF5nkk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		`,
		images: [{
			url: '/assets/projects/impulse/screens-phone.png',
			alt: 'Mobile Screens'
		}, {
			url: '/assets/projects/impulse/screen-watch.png',
			alt: 'Watch Screens'
		}],
		features: [],
		results: [
			{ title: `Competed against hundreds of teams` },
			{ title: `Finished in first place` },
		],
		tags: [ `Microsoft IIS`, `Microsoft .NET Entity Framework`, `SQL Server 2012`, `PhoneGap`, `JQuery`, `Android Wear` ]
	}, {
		image: '/assets/portfolio/almost-legendary.png',
		slug: 'almost-legendary',
		title: 'Almost Legendary',
		subtitle: 'Manager | Member',
		content: `
			<p>Almost Legendary was a self-managed, Atlanta-based pop-punk band that toured the US, played on the Warped Tour, and had song placements on Keeping Up with the Kardashians. As a manager and member of the band, I worked with the other members on all aspects of the band, social presence, image, and media.</p>
			<h3>Involvement</h3>
			<ul>
				<li>Managed ASCAP membership</li>
				<li>File for copyrights</li>
				<li>Brand/image design - occasionally worked with another artist</li>
				<li>Website development, maintenance, and content management</li>
				<li>Developed methods for fan engagement</li>
				<li>Built and employed social messaging tool for fan notifications</li>
				<li>Created a social bot system to perform various data tasks</li>
				<li>Coordinated song placements (e.g., Keeping Up with the Kardashians)</li>
				<li>Obtained a play on 93.3 in Denver, CO</li>
				<li>Managed merchandise inventory during tour</li>
				<li>Financial management</li>
				<li>Video production for music videos and fan engagement</li>
				<li>Demo audio production</li>
				<li>Tour management</li>
				<li>Assembled digital press kit and other promotional material</li>
				<li>Promoted to various bloggers and other media</li>
			</ul>
			<div class="center">
				<iframe class="presentation" src="https://www.youtube.com/embed/n7w7Crlp9L8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		`,
		images: [{
			url: '/assets/projects/almost-legendary/logo.png',
			alt: 'Almost Legendary Logo'
		}, {
			url: '/assets/projects/almost-legendary/album-cover.jpg',
			alt: 'Live Photo',
			cover: true
		}, {
			url: '/assets/projects/almost-legendary/tour-poster.jpg',
			alt: 'Live Photo',
			cover: true
		}, {
			url: '/assets/projects/almost-legendary/photo-live-1.jpg',
			alt: 'Live Photo',
			cover: true
		}, {
			url: '/assets/projects/almost-legendary/photo-live-2.jpg',
			alt: 'Live Photo',
			cover: true
		}, {
			url: '/assets/projects/almost-legendary/photo-live-3.jpg',
			alt: 'Live Photo',
			cover: true
		}, {
			url: '/assets/projects/almost-legendary/photo-live-4.jpg',
			alt: 'Live Photo',
			cover: true
		}, {
			url: '/assets/projects/almost-legendary/photo-live-5.jpg',
			alt: 'Live Photo',
			cover: true
		}, {
			url: '/assets/projects/almost-legendary/photo-live-6.jpg',
			alt: 'Live Photo',
			cover: true
		}],
		features: [],
		results: [
			{ title: `<a href="http://almostlegendarymusic.com" target="_blank">http://almostlegendarymusic.com</a>` },
			{ title: `<a href="https://open.spotify.com/artist/19d42OyOaeXiUjmcbbbAQY" target="_blank">Spotify</a>` },
			{ title: `<a href="https://www.pandora.com/artist/almost-legendary/ARhZt5P4Kb5llj6" target="_blank">Pandora</a>` },
			{ title: `<a href="https://en.wikipedia.org/wiki/Almost_Legendary" target="_blank">Wikipedia</a>` },
			{ title: `Several song placements on Keeping Up with the Kardashians` },
			{ title: `Played on the Warped Tour` },
			{ title: `East coast and national tours` },
		],
		tags: [ `Almost Legendary`, `Video Production`, `Band Management`, `Brand Management`, `Public Relations`, `Tour Management`, `Website Development`, `Fan Engagement`, `Copyrighting`, `Music Placement` ]
	}, {
		image: '/assets/portfolio/wiffle-ball-broadcast.png',
		slug: 'wiffle-ball-broadcast',
		title: 'WIFFLE Ball Broadcast',
		subtitle: 'Broadcast Producer',
		content: `
			<p>The annual Travis Roy Foundation WIFFLE® Ball Tournament at Little Fenway in Essex, Vermont, has raised over $4 Million to benefit spinal cord injured survivors and research into a cure for paralysis. This unique community event, where players from around the country can enjoy playing America's #1 backyard game on replicas of Fenway Park, Wrigley Field, and Field of Dreams, has captured the attention of major media sources, sports enthusiasts, and friends of Travis Roy.</p>
			<h3>Involvement</h3>
			<p>I have been volunteering at the annual WIFFLE ball tournament for many years in various capacities. Since 2014, I have been working with the Pack Network to produce the online stream of the games throughout the weekend. During the weekend of my first year, I identified a way to streamline the visual overlaid components (e.g., live scoreboard, batter identification and statistics) and built out a custom web application. This application allowed us to easily update the scoreboard and overlay that visual on the live feed.</p>
			<p>The live broadcast is done in Wirecast with a layer dedicated to a green screen. The software I wrote (as seen in the previews on this page) enables the broadcasting team to set lineups, easily manage the scoreboard and current batter with a live keyboard feature, display scores of other games throughout the weekend, show a rotating graphic with our sponsors, and show pre-canned or custom infographics. These components are arranged on a green screen output and captured with wirecast.</p>
			<p>The 2018 Facebook Live stream brought in over 47 thousand viewing minutes and tremendously increased the engagement and awareness of the Travis Roy Foundation.</p>
			<div>
				<a href="https://www.facebook.com/travisroyfoundation/videos/10156773296976052/?t=5367" target="_blank">
					<img src="/assets/projects/wiffle-ball-broadcast/screen-facebook-stream.png" alt="Facebook Live Broadcast" class="screens-left" />
				</a>
			</div>
		`,
		images: [{
			url: '/assets/projects/wiffle-ball-broadcast/screen-metrics.png',
			alt: 'Broadcast Metrics Screen'
		}, {
			url: '/assets/projects/wiffle-ball-broadcast/screen-controller.png',
			alt: 'Broadcast Controller Screen'
		}, {
			url: '/assets/projects/wiffle-ball-broadcast/screen-view.png',
			alt: 'Broadcast View Screen'
		}],
		features: [],
		results: [
			{ title: `Over 47,000 minutes viewed over the 2018 weekend` },
			{ title: `Promoted tournament sponsors between games and between innings` },
			{ title: `Instant replays cost the challenging team a $50 donation bringing in additional donations during the weekend` },
		],
		tags: [ `Video Streaming`, `Broadcast`, `Angular`, `Web Sockets`, `Social Media`, `Facebook`, `Wirecast` ]
	}, {
		image: '/assets/portfolio/level-up.png',
		slug: 'level-up',
		title: 'LevelUp',
		subtitle: 'Hackathon | 2<sup>nd</sup> Place',
		content: `
			<p>The AT&T Developer Summit was an annual conference hosted in Las Vegas, NV. The summit included a 24-hour hackathon between hundreds of teams to develop applications leveraging AT&T APIs. The top three finalists then presented during the keynote.</p>
			<h3>Concept Overview</h3>
			<p>LevelUp gamifies the connected home with a points system and controlled access to rooms, devices, and networks. It connects parents to their children and allows them to engage in a rules-based reward system with well defined rules. LevelUp also empowers parents, giving them the ability to remotely reward desired behaviors like chores, homework, and exercise.</p>
			<div>
				<iframe class="presentation" src="https://www.youtube.com/embed/dHJQ9z6dzGs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		`,
		images: [{
			url: '/assets/projects/level-up/screen.png',
			alt: 'App Screen'
		}],
		features: [],
		results: [
			{ title: `Competed against hundreds of teams` },
			{ title: `Finished in top 3 finalists and presented during the AT&T keynote` },
			{ title: `Placed 2nd overall` },
		],
		tags: [ `Cisco sensors`, `AT&T M2X`, `AT&T Digital Life`, `AT&T WebRTC API`, `WebRTC`, `NodeJS`, `JavaScript`, `AngularJS` ]
	}, {
		image: '/assets/portfolio/sitter.png',
		slug: 'sitter',
		title: 'Sitter',
		subtitle: 'Hackathon | 2<sup>nd</sup> Place',
		content: `
			<p>The AT&T Developer Summit was an annual conference hosted in Las Vegas, NV. The summit included a 24-hour hackathon between hundreds of teams to develop applications leveraging AT&T APIs. The top three finalists then presented during the keynote.</p>

			<h3>Concept Overview</h3>
			<p>Finding caregivers for your children, pets, and/or house is a tedious and stressful process. Sitter streamlines that process by giving parents/homeowners and caregivers a platform to connect.</p>
			<p>Leveraging bleeding edge technology from Digital Life, the AT&T API team (Payments, WebRTC, M2X), ESRI, just to name a few, we are able to manage the entire care process from end-to-end providing both parents and caregivers with an elegant, delightful, experience.</p>

			<p>Parents are able to:</p>
			<ol>
				<li>Research and identify local, potential caregivers and feel safe that the caregivers are who they say they are with White Pages identity verification</li>
				<li>Interview caregivers using WebRTC</li>
				<li>Schedule caregivers and give those caregivers temporary access to components of their smart homes</li>
				<li>Allow caregivers automatic access to their house via the Sitter powered caregiver app combined with technology from Digital Life</li>
				<li>Pay for caregiver services using the AT&T Payments API</li>
				<li>Leave reviews of the caregiver</li>
			</ol>

			<p>Caregivers are able to:</p>
			<ol>
				<li>Manage personal availability and interview schedules</li>
				<li>Interview with potential parents</li>
				<li>Get detailed maps of the area around the parent's home. This is especially useful for pet sitters to identify safe walking paths</li>
				<li>Lock/unlock doors and enable/disable alarms based on the schedule outlined by the parent</li>
			</ol>
			<div>
				<iframe class="presentation" src="https://www.youtube.com/embed/utvmpZEIGyw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		`,
		images: [{
			url: '/assets/projects/sitter/screens-selection.png',
			alt: 'App Screens'
		}, {
			url: '/assets/projects/sitter/screens-booked.png',
			alt: 'App Screens',
			inheritSize: true
		}],
		features: [],
		results: [
			{ title: `Competed against 700 developers and over 100 teams` },
			{ title: `Finished in top 3 finalists and presented during the AT&T keynote` },
			{ title: `Placed 2nd overall` },
		],
		tags: [ `Phonegap`, `ESRI`, `Whitepages Pro API`, `WebRTC`, `AT&T M2X`, `AT&T WebRTC`, `AT&T Payments`, `AT&T Digital Life`, `AT&T Sponsored Data` ]
	}, {
		image: '/assets/portfolio/cruise-communication.png',
		slug: 'cruise-communication',
		title: 'Cruise Communication',
		subtitle: 'Architect | Development Lead',
		content: `
			<p>The Cruise Communication project was a green-field application built in 2014 to provide a seamless mobile experience from shore to ship for customers during their cruise voyage. The platform consisted of customer facing mobile applications, cruise employee mobile applications, a management portal onboard the ship, and a management portal that aggregated all data and provided fleet management. The platform was focused on delivering onboard communication, increasing customer engagement through content and messaging, and serviced as a commerce platform.</p>
			<p>The Cruise Communication platform needed to enable communication onboard a cruise ship with no internet connection. Additionally, integration was built into the Fidelio room management system to enable financial transactions and passenger/manifest synchronization.</p>

			<h3>Features</h3>
			<ul>
				<li>Registration</li>
				<li>Voice Chat</li>
				<li>Video Chat</li>
				<li>Text Chat</li>
				<li>Chat Rooms</li>
				<li>Online concierge</li>
				<li>Advertising</li>
				<li>Friends List</li>
				<li>Status</li>
				<li>Notifications</li>
				<li>Informational Videos</li>
				<li>Analytics</li>
			</ul>
		`,
		images: [{
			url: '/assets/projects/cruise-communication/screens-mobile.png',
			alt: 'App Screens'
		}],
		features: [],
		results: [
			{ title: `Deployed iOS and Android apps to the iTunes and Google Play stores` },
			{ title: `Transitioned functional platform to client` },
			{ title: `Resulted in additional work with client` },
		],
		tags: [ `Phonegap`, `Angular`, `WebRTC`, `Websockets`, `.NET`, `Web API`, `Offline Communication` ]
	}, {
		image: '/assets/portfolio/garcon.png',
		slug: 'garcon',
		title: 'Garcon',
		subtitle: 'Hackathon | 1<sup>st</sup> Place',
		content: `
			<p>Global Payments hosted a 24-hour hackathon aimed at solving some of the hardest challenges of the payments industry in 2015.</p>
			<h3>Concept Overview</h3>
			<ul>
				<li>Identified the most painful checkout experiences in restaurants and streamlined the process</li>
				<li>Provided users with a wallet on their wrist, using the Samsung Gear smart watch</li>
				<li>Leveraged beacons and Bluetooth Low Energy to identify the user's table and associate the user with the appropriate check</li>
				<li>Secured payments behind a second level of authentication - a directional passcode</li>
				<li>Provided a view of payment history and provided a live chat support to dispute any charges</li>
			</ul>
		`,
		images: [{
			url: '/assets/projects/garcon/screen-watch.png',
			alt: 'Watch Screen'
		}],
		features: [],
		results: [
			{ title: `1st place` },
			{ title: `Received $30k from Global Payments` }
		],
		tags: [ `.NET`, `Web API`, `AWS`, `POS`, `Wearable`, `Samsung Gear`, `Watch App`, `Android`, `Java`, `WebRTC`, `Beacons` ]
	}, {
		image: '/assets/portfolio/torch-products.png',
		slug: 'torch-products',
		title: 'Torch Products',
		subtitle: 'Owner | Designer',
		content: `
			<p><a href="https://torchproducts.com" target="_blank">https://torchproducts.com</a> is software product company that provides SaaS solutions as well as simple tools.</p>
		`,
		images: [{
			url: '/assets/portfolio/torch-products.png',
			alt: 'Torch Products'
		}],
		features: [],
		results: [
			{ title: `<a href="https://taliscape.com/">Taliscape</a>` },
			{ title: `Several tools that I find useful` }
		],
		tags: []
	}];
}
