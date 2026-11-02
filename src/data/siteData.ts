import { TransportationService, Testimonial, AwardItem, FAQItem } from '../types';

export const COMPANY_PHONE = '(910) 364-1102';
export const COMPANY_PHONE_TEL = 'tel:+19103641102';
export const COMPANY_NAME = 'Country Time Transit';
export const COMPANY_TAGLINE = "We're not on time. We're before time.";

export const SERVICES: TransportationService[] = [
  {
    id: 'nemt',
    slug: 'non-emergency-medical',
    title: 'Non-Emergency Medical Transportation',
    headline: 'Reliable Medical Rides with Over 25 Years of Safe Driving Excellence',
    shortDescription: 'Reliable rides to Cape Fear Valley Medical Center, Womack Army Medical Center, dialysis, therapy, and area clinics with wheelchair-accessible options.',
    fullDescription: 'Missing medical appointments due to transportation barriers shouldn’t compromise your health, especially when you need reliable, comfortable transport across Fayetteville and surrounding areas. Our non-emergency medical transportation ensures you arrive safely and on time for every appointment, with professional drivers who understand the importance of punctual medical care.',
    highlightBanner: 'Country Time Transit brings over 25 years of safe driving experience to every medical transport journey.',
    overviewParagraphs: [
      'Missing medical appointments due to transportation barriers shouldn’t compromise your health, especially when you need reliable, comfortable transport across Fayetteville and surrounding areas. Our non-emergency medical transportation ensures you arrive safely and on time for every appointment, with professional drivers who understand the importance of punctual medical care.',
      'We specialize in wheelchair-accessible vans with fully licensed, trained drivers who prioritize patient comfort and dignity during transport to Cape Fear Valley Medical Center, Womack Army Medical Center, and area clinics throughout Cumberland County.'
    ],
    processTitle: 'How Does Non-Emergency Medical Transportation Work in Fayetteville?',
    processParagraphs: [
      'Our medical transport process begins with careful scheduling that accounts for your appointment time, location, and any special mobility needs you may have. We arrive early to ensure a stress-free departure, help you safely into our wheelchair-accessible vehicle, and provide door-to-door service that eliminates the worry of navigating Fayetteville’s busy medical district traffic or finding parking at major facilities.',
      'During transport, you’ll experience the professionalism that comes from working with Country Time Transit’s trained drivers who understand patient care protocols and maintain a comfortable, clean environment throughout your journey. Our fully licensed patient transport service means you’re in capable hands from pickup to arrival.',
      'We serve the unique medical landscape of Fayetteville, from the major military medical facilities to smaller specialty clinics, ensuring our drivers know the most efficient routes and understand the specific needs of patients traveling for various types of medical care.'
    ],
    iconName: 'HeartPulse',
    benefits: [
      'Punctual arrival before your appointment check-in ("Before time, not just on time")',
      'Over 25 years of safe driving experience with full patient transport licensing',
      'Wheelchair-accessible vans with regular maintenance & trained drivers',
      'Round-trip discounts for veterans and senior passengers'
    ],
    features: [
      'Intimate knowledge of Cape Fear Valley Medical Center & Womack Army Medical Center access points',
      'Door-to-door assistance eliminating medical district parking stress',
      'Clean, temperature-controlled vehicles maintained to strict patient care protocols',
      'Room for an accompanying family member or caregiver'
    ],
    idealFor: [
      'Cape Fear Valley Medical Center & Womack Army Medical Center visits',
      'Dialysis, physical therapy, and specialist consultations',
      'Veteran and senior outpatient medical appointments'
    ],
    faqSectionTitle: 'What Makes Us Different?',
    faqSectionIntro: 'Veterans and seniors receive special recognition through our discount programs, reflecting our commitment to those who’ve served and our community’s elder population.',
    faqs: [
      {
        q: 'How do we ensure quality?',
        a: 'Our wheelchair-accessible vans undergo regular maintenance and our drivers complete specialized patient transport training.'
      },
      {
        q: 'What experience do we bring?',
        a: 'Over 25 years of safe driving experience with full licensing for patient transport throughout the Fayetteville area.'
      },
      {
        q: 'Why choose local?',
        a: 'We know Fayetteville’s medical facilities intimately, from Cape Fear Valley’s campus layout to Womack Army Medical Center’s access points.'
      },
      {
        q: 'What’s our approach?',
        a: 'We arrive before time, not just on time, ensuring you never feel rushed or stressed about making your appointment.'
      },
      {
        q: 'How do we show appreciation?',
        a: 'Round-trip veterans and senior passengers receive discounts, honoring their service and supporting accessible healthcare.'
      }
    ]
  },
  {
    id: 'wheelchair',
    slug: 'wheelchair-accessible',
    title: 'Wheelchair-Accessible Transportation',
    headline: 'Safe, Comfortable Mobility Solutions for Every Journey',
    shortDescription: 'Modern vehicles equipped with hydraulic lifts and certified multi-point tie-downs for smooth, dignified travel across Cumberland County.',
    fullDescription: 'When mobility challenges make transportation difficult, you need reliable wheelchair-accessible service that prioritizes your safety and dignity in Fayetteville. Our modern vehicles accommodate wheelchairs and mobility aids with specialized equipment designed for smooth, secure travel throughout Cumberland County’s varied terrain.',
    highlightBanner: 'Country Time Transit maintains experienced drivers who understand the unique needs of passengers using mobility assistance.',
    overviewParagraphs: [
      'When mobility challenges make transportation difficult, you need reliable wheelchair-accessible service that prioritizes your safety and dignity in Fayetteville. Our modern vehicles accommodate wheelchairs and mobility aids with specialized equipment designed for smooth, secure travel throughout Cumberland County’s varied terrain.',
      'We proudly serve veterans, seniors, and individuals with mobility challenges, providing accessible transport for medical appointments, personal outings, and community events across the greater Fayetteville area.'
    ],
    processTitle: 'How Does Wheelchair-Accessible Transportation Work in Fayetteville?',
    processParagraphs: [
      'Our wheelchair-accessible service begins with modern vehicles specifically equipped for full wheelchair and mobility-aid support, featuring secure tie-down systems and hydraulic lifts that handle Fayetteville’s hills and varied road conditions. Each vehicle undergoes regular safety inspections to ensure reliable operation for passengers with diverse mobility needs.',
      'During your ride, our experienced drivers ensure safety and comfort at every stop, from your pickup location through arrival at medical facilities like Cape Fear Valley Health System or community destinations throughout Spring Lake and Hope Mills. The team provides patient assistance with boarding and securing mobility equipment while maintaining your independence and dignity.',
      'Every trip includes careful attention to timing and route planning, recognizing that medical appointments and therapy sessions require punctual arrival, plus additional considerations for passenger comfort during transport.'
    ],
    iconName: 'Accessibility',
    benefits: [
      'Certified multi-point wheelchair tie-down systems and hydraulic lifts',
      'Patient assistance with boarding and securing mobility equipment',
      'On-time or before-time arrival for medical and social schedules',
      'Dedicated, respectful care for veterans, seniors, and mobility-challenged riders'
    ],
    features: [
      'Accommodates manual wheelchairs, power chairs, scooters, and walkers',
      'Regular vehicle safety and hydraulic lift inspections',
      'Deep familiarity with accessible entrances at Fayetteville medical facilities & businesses',
      'Seating available for an accompanying caregiver or family member'
    ],
    idealFor: [
      'Manual and motorized wheelchair passengers',
      'Cape Fear Valley Health System & therapy appointments',
      'Personal outings and community events in Fayetteville, Spring Lake & Hope Mills'
    ],
    faqSectionTitle: 'What Makes Our Accessible Transport Different?',
    faqSectionIntro: 'Our commitment to serving Fayetteville’s veteran and senior communities drives our specialized approach to accessible transportation.',
    faqs: [
      {
        q: 'How do we ensure passenger safety?',
        a: 'Modern vehicles with certified wheelchair tie-downs and trained drivers experienced in mobility assistance protocols.'
      },
      {
        q: 'What destinations do we serve?',
        a: 'Medical appointments, personal outings, and community events throughout Fayetteville and surrounding areas.'
      },
      {
        q: 'Why choose local accessible transport?',
        a: 'Deep familiarity with Fayetteville medical facilities, veteran services, and accessible entrances at local businesses.'
      },
      {
        q: 'What’s our service commitment?',
        a: 'On time or before time arrival ensures you never miss important appointments or social activities.'
      },
      {
        q: 'How do we support our community?',
        a: 'Dedicated service for veterans, seniors, and individuals facing mobility challenges with respectful, professional care.'
      }
    ]
  },
  {
    id: 'airport',
    slug: 'airport-transfers',
    title: 'Airport Transfers',
    headline: 'Flight Monitoring and Early Arrival Guarantee for Stress-Free Travel',
    shortDescription: 'Timely curb-to-door airport transfers to Fayetteville Regional (FAY) and Raleigh-Durham (RDU) with real-time flight monitoring.',
    fullDescription: 'Airport travel shouldn’t start with transportation stress, whether you’re catching an early flight or arriving after a long journey in Fayetteville. Our airport transfer service provides timely, professional transport with flight monitoring technology that adjusts pickup times based on real-time departure and arrival information, ensuring you’re always ahead of schedule.',
    highlightBanner: 'We’re not on time, we’re before time – that’s the Country Time Transit guarantee for every airport journey.',
    overviewParagraphs: [
      'Airport travel shouldn’t start with transportation stress, whether you’re catching an early flight or arriving after a long journey in Fayetteville. Our airport transfer service provides timely, professional transport with flight monitoring technology that adjusts pickup times based on real-time departure and arrival information, ensuring you’re always ahead of schedule.',
      'Perfect for families, veterans, and business travelers, our licensed and insured drivers deliver smooth curb-to-door transitions that eliminate parking fees, navigation hassles, and the unpredictability of ride-sharing services during peak travel times.'
    ],
    processTitle: 'Why Choose Professional Airport Transfers in Fayetteville?',
    processParagraphs: [
      'Our airport transfer process begins with flight monitoring that tracks your departure or arrival in real-time, automatically adjusting our pickup schedule to accommodate delays, gate changes, or early departures. This technology-enhanced approach means you’ll never wait wondering if your ride will arrive, and you’ll never rush through security because your driver was late.',
      'From booking to destination, you’ll work with experienced drivers who understand that airport timing is critical and that professional service means maintaining clean vehicles, assisting with luggage, and providing the reliability that Country Time Transit has built over years of serving Fayetteville’s traveling community.',
      'Whether you’re heading to Raleigh-Durham International or Fayetteville Regional, our drivers know the most efficient routes from every neighborhood in Spring Lake, Hope Mills, Raeford, and surrounding areas, avoiding construction zones and rush-hour bottlenecks that could jeopardize your travel schedule.'
    ],
    iconName: 'Plane',
    benefits: [
      'Real-time flight monitoring with automatic pickup adjustments for delays',
      'Curb-to-door transport with full luggage assistance',
      '10% military and veteran discount on round-trip airport bookings',
      'Early arrival guarantee so you never rush through security'
    ],
    features: [
      'Direct service to Fayetteville Regional (FAY) and Raleigh-Durham International (RDU)',
      'Alternate route planning around Skibo Road and Fort Liberty traffic bottlenecks',
      'Spacious, clean private vehicles with ample luggage room',
      'Licensed and insured commercial drivers available for early or late flights'
    ],
    idealFor: [
      'Fayetteville Regional (FAY) & Raleigh-Durham (RDU) flights',
      'Fort Liberty military PCS, leave, and TDY travel',
      'Family vacations and corporate business travel'
    ],
    faqSectionTitle: 'What Should Fayetteville Residents Expect?',
    faqSectionIntro: 'Military families and veterans receive special recognition through our discount programs, acknowledging the frequent travel needs of our Fort Liberty community.',
    faqs: [
      {
        q: 'What’s included in the service?',
        a: 'Flight monitoring, luggage assistance, curb-to-door transport, and real-time pickup adjustments for departure delays.'
      },
      {
        q: 'How do we handle flight changes?',
        a: 'Our monitoring system automatically updates your pickup time when airlines adjust schedules or gates.'
      },
      {
        q: 'What makes our approach different?',
        a: 'We arrive before time, not just on time, with professional drivers who understand travel urgency.'
      },
      {
        q: 'Why is local expertise important?',
        a: 'Fayetteville drivers know alternate routes when Skibo Road backs up or when Fort Liberty traffic affects timing.'
      },
      {
        q: 'What discount do we provide?',
        a: 'Military and veteran passengers receive 10% off round-trip airport bookings, honoring those who serve.'
      }
    ]
  },
  {
    id: 'senior',
    slug: 'senior-mobility',
    title: 'Senior Mobility',
    headline: 'Gentle, Respectful Transportation Delivered with Care and Dignity',
    shortDescription: 'Caring door-to-door rides for seniors with patient assistance and 15% off every Wednesday within 8 miles of Fayetteville.',
    fullDescription: 'Independence shouldn’t end when driving becomes challenging, and seniors in Fayetteville deserve transportation that prioritizes comfort, safety, and dignity above all else. Our senior mobility service provides caring, reliable rides with drivers trained in patient assistance and door-to-door support, ensuring every journey feels secure and respectful.',
    highlightBanner: 'Seniors enjoy 15% off rides every Wednesday within 8 miles of Fayetteville, making regular transportation more affordable.',
    overviewParagraphs: [
      'Independence shouldn’t end when driving becomes challenging, and seniors in Fayetteville deserve transportation that prioritizes comfort, safety, and dignity above all else. Our senior mobility service provides caring, reliable rides with drivers trained in patient assistance and door-to-door support, ensuring every journey feels secure and respectful.',
      'We serve community centers, medical clinics, shopping destinations, and senior housing throughout Cumberland County, connecting older adults to the services and social opportunities that enhance their quality of life in our community.'
    ],
    processTitle: 'What’s Included in Our Senior Mobility?',
    processParagraphs: [
      'Our comprehensive senior transportation includes gentle assistance from vehicle to destination, with drivers who take time to ensure you’re comfortable and secure before beginning any journey. We understand that mobility may require extra patience, whether that means waiting while you gather belongings, providing a steady arm for support, or taking preferred routes that avoid busy intersections.',
      'Every aspect of our service prioritizes your comfort and independence, with Country Time Transit drivers who respect the wisdom and experience of Fayetteville’s senior community while providing the practical support that makes transportation accessible and stress-free.',
      'From medical appointments to social gatherings, grocery shopping to community events, our door-to-door service eliminates the barriers that can isolate seniors from the active, engaged lifestyle they deserve throughout Cumberland County.'
    ],
    iconName: 'Smile',
    benefits: [
      '15% off senior rides every Wednesday within 8 miles of Fayetteville',
      'Gentle door-to-door assistance from vehicle to destination',
      'Unhurried boarding with a steady arm for support',
      'Peace of mind for older adults, families, and caregivers'
    ],
    features: [
      'Familiarity with senior housing complexes and community centers across Cumberland County',
      'Senior-friendly route selection avoiding busy intersections when preferred',
      'Extra patience for gathering belongings and comfortable seating adjustments',
      'Easy phone booking directly with our local dispatch team'
    ],
    idealFor: [
      'Senior housing complexes and community center activities',
      'Routine medical clinic visits and pharmacy trips',
      'Social gatherings, church outings, and family visits'
    ],
    faqSectionTitle: 'Fayetteville Senior Mobility Advantages',
    faqSectionIntro: 'Our Wednesday discount program reflects our commitment to making regular transportation affordable for seniors living on fixed incomes.',
    faqs: [
      {
        q: 'Why choose local drivers?',
        a: 'Fayetteville drivers understand senior-friendly routes, know which medical facilities have the easiest access, and respect the pace needed for comfortable travel.'
      },
      {
        q: 'How do we ensure quality?',
        a: 'Drivers provide patient handling assistance and door-to-door support, taking time to ensure safety and comfort at every step.'
      },
      {
        q: 'What sets our service apart?',
        a: 'We deliver gentle, on-time mobility with respect and care, treating every senior passenger as a valued community member.'
      },
      {
        q: 'How do we serve Fayetteville specifically?',
        a: 'We know the locations of senior housing complexes, community centers, and medical facilities throughout Cumberland County’s neighborhoods.'
      },
      {
        q: 'What makes Wednesday special?',
        a: 'Seniors receive 15% off rides within 8 miles of Fayetteville every Wednesday, supporting regular independence and social engagement.'
      }
    ]
  },
  {
    id: 'school',
    slug: 'school-transportation',
    title: 'School Transportation',
    headline: 'Licensed, Background-Checked Drivers Ensuring Student Safety Daily',
    shortDescription: 'Daily and recurring student transport serving Terry Sanford, E.E. Smith, Westover, and area schools with clear parent communication.',
    fullDescription: 'Getting students safely to and from school shouldn’t be a daily worry for busy parents, especially when work schedules conflict with school hours or when reliable transportation makes the difference between consistent attendance and missed opportunities. Our school transportation provides daily and recurring student transport with licensed, background-checked drivers who prioritize safety, punctuality, and clear parent communication.',
    highlightBanner: 'Country Time Transit serves neighborhoods near Terry Sanford, E.E. Smith, and Westover schools with years of safe transport experience.',
    overviewParagraphs: [
      'Getting students safely to and from school shouldn’t be a daily worry for busy parents, especially when work schedules conflict with school hours or when reliable transportation makes the difference between consistent attendance and missed opportunities. Our school transportation provides daily and recurring student transport with licensed, background-checked drivers who prioritize safety, punctuality, and clear parent communication.',
      'We focus on creating reliable routines that parents can count on, ensuring students arrive ready to learn while giving families peace of mind about their children’s daily commute throughout the Fayetteville school district.'
    ],
    processTitle: 'How Does School Transportation Work in Fayetteville?',
    processParagraphs: [
      'Our student transport system begins with establishing consistent pickup and drop-off schedules that align with your family’s needs and your student’s school hours. We work with parents to create reliable routines, whether that means daily transport from home to school, after-school activity pickups, or specialized scheduling for families with multiple children attending different schools in the Fayetteville area.',
      'Safety protocols include background-checked drivers with years of experience in student transport, vehicles maintained specifically for school-age passengers, and communication systems that keep parents informed about pickup times, route changes, or any delays that might affect their child’s schedule.',
      'We understand Fayetteville’s school zones, traffic patterns around major campuses like Terry Sanford and E.E. Smith, and the importance of consistent timing that helps students start their school day calm and prepared rather than rushed or stressed about transportation.'
    ],
    iconName: 'GraduationCap',
    benefits: [
      'Licensed, background-checked drivers with years of safe student transport experience',
      'Consistent morning and afternoon pickup and drop-off routines',
      'Proactive parent communication regarding pickup times and arrival status',
      'Specialized scheduling for multi-school families and after-school activities'
    ],
    features: [
      'Service across Terry Sanford, E.E. Smith, Westover, and Cumberland County campuses',
      'Vehicles maintained specifically for school-age passenger safety',
      'Deep knowledge of Fayetteville school zone timing and campus traffic flow',
      'Daily or recurring semester booking options'
    ],
    idealFor: [
      'Working parents whose schedules conflict with school bell hours',
      'Families with children attending Terry Sanford, E.E. Smith, Westover, or charter schools',
      'After-school activities, tutoring, and student athletic pickups'
    ],
    faqSectionTitle: 'What Should Fayetteville Families Expect?',
    faqSectionIntro: 'Parents receive regular communication about their student’s transport, building the trust that comes from working with experienced, professional drivers.',
    faqs: [
      {
        q: 'What’s included in the service?',
        a: 'Daily or recurring student pickup and drop-off with licensed, background-checked drivers experienced in safe school transport.'
      },
      {
        q: 'How do we handle safety concerns?',
        a: 'All drivers undergo background checks and maintain years of safe transport experience specific to student passengers.'
      },
      {
        q: 'What makes our approach different?',
        a: 'We focus on punctuality and parent communication, ensuring families always know their student’s transport status.'
      },
      {
        q: 'Why is local expertise important?',
        a: 'Fayetteville drivers know school zone timing and understand traffic patterns around Terry Sanford, E.E. Smith, and Westover schools.'
      },
      {
        q: 'How do we serve families specifically?',
        a: 'We create consistent routines that work with family schedules, supporting regular school attendance and reducing daily transportation stress.'
      }
    ]
  },
  {
    id: 'employer',
    slug: 'employer-shuttles',
    title: 'Employer Shuttle Transportation',
    headline: 'Custom Workforce Shuttle Solutions with Early-Arrival Reliability',
    shortDescription: 'Licensed commercial group shuttles serving Fort Liberty, industrial parks, staffing agencies, and retail centers across Fayetteville.',
    fullDescription: 'Workforce attendance directly impacts productivity and morale, especially when transportation barriers prevent reliable team members from reaching Fort Liberty, industrial parks, and retail centers throughout Fayetteville on time. Our employer shuttle transportation provides custom solutions with early-arrival reliability, ensuring your workforce starts each shift ready and present.',
    highlightBanner: 'We’re fully licensed and insured for commercial group transport, serving employers, staffing agencies, and large teams.',
    overviewParagraphs: [
      'Workforce attendance directly impacts productivity and morale, especially when transportation barriers prevent reliable team members from reaching Fort Liberty, industrial parks, and retail centers throughout Fayetteville on time. Our employer shuttle transportation provides custom solutions with early-arrival reliability, ensuring your workforce starts each shift ready and present.',
      'Partner with Country Time Transit for punctual, professional employee shuttles that solve transportation challenges while supporting your business operations and employee satisfaction across Cumberland County’s diverse employment landscape.'
    ],
    processTitle: 'Why Choose Professional Employer Shuttle Transportation in Fayetteville?',
    processParagraphs: [
      'Our custom shuttle solutions begin with understanding your workforce’s specific needs, whether that means shift changes at Fort Liberty, manufacturing schedules at industrial parks, or retail operations requiring reliable team transport throughout Fayetteville’s commercial districts. We design routes and schedules that align with your business operations, ensuring employees arrive before shift start times rather than scrambling to punch in on time.',
      'Professional service means working with fully licensed and insured commercial group transport that meets all regulatory requirements while providing the reliability that Country Time Transit has delivered to Fayetteville businesses for years, supporting both employer needs and employee satisfaction.',
      'We understand the unique transportation challenges in Fayetteville’s employment landscape, from Fort Liberty’s security requirements to the industrial corridor’s shift timing, ensuring our shuttle service integrates seamlessly with your existing operations and human resources procedures.'
    ],
    iconName: 'Building2',
    benefits: [
      'Early-arrival reliability so teams start shifts ready rather than rushed',
      'Fully licensed and insured commercial group transportation',
      'Custom route and shift-change scheduling tailored to your business',
      'Reduced workforce absenteeism and improved employee retention'
    ],
    features: [
      'Familiarity with Fort Liberty access procedures and industrial park corridors',
      'Dedicated partnerships for staffing agencies, manufacturers, and large teams',
      'Scalable recurring shuttle schedules for day, evening, and overnight shifts',
      'Corporate billing and streamlined HR coordination'
    ],
    idealFor: [
      'Fort Liberty contractors and on-post workforce teams',
      'Industrial parks, warehouses, and manufacturing shift changes',
      'Staffing agencies and major retail centers in Cumberland County'
    ],
    faqSectionTitle: 'Fayetteville Employer Shuttle Advantages',
    faqSectionIntro: 'Early-arrival reliability means your teams start shifts focused on work rather than stressed about transportation delays.',
    faqs: [
      {
        q: 'Why choose local shuttle contractors?',
        a: 'Fayetteville shuttle services understand Fort Liberty access procedures, industrial park locations, and retail center logistics throughout Cumberland County.'
      },
      {
        q: 'How do we ensure quality?',
        a: 'Fully licensed and insured commercial group transport with professional drivers experienced in workforce scheduling requirements.'
      },
      {
        q: 'What sets our service apart?',
        a: 'We keep workers on schedule with early-arrival reliability, ensuring your team starts strong rather than rushing to make shift time.'
      },
      {
        q: 'How do we serve employers specifically?',
        a: 'Custom shuttle solutions designed around your business operations, from staffing agencies to large team transport needs.'
      },
      {
        q: 'What makes Fayetteville logistics unique?',
        a: 'We navigate Fort Liberty protocols, industrial park traffic patterns, and retail center access points that affect employee transport timing.'
      }
    ]
  },
  {
    id: 'special-needs',
    slug: 'special-needs',
    title: 'Special Needs Transportation',
    headline: 'Structured, Predictable Travel Built Around Individual Sensory & Behavioral Needs',
    shortDescription: 'Autism-aware, low-stimulation transportation in Fayetteville with consistent drivers, predictable routines, and family intake planning.',
    fullDescription: 'Country Time Transit provides Special Needs Transportation in Fayetteville for individuals with autism and developmental differences who require structured, predictable travel routines and trained drivers who understand sensory sensitivities. This service offers drivers trained in autism awareness and vehicles equipped to support passengers who benefit from visual schedules, reduced sensory input, and consistent routing.',
    highlightBanner: 'The same driver, same vehicle, and same travel path are maintained whenever possible to reduce anxiety and build familiarity for passengers who thrive on routine.',
    overviewParagraphs: [
      'Country Time Transit provides Special Needs Transportation in Fayetteville for individuals with autism who require structured, predictable travel routines and trained drivers who understand sensory sensitivities. Families with children or adults on the autism spectrum often face challenges finding transportation services that accommodate specific behavioral needs, communication styles, and safety requirements. This service addresses those gaps by offering drivers trained in autism awareness and vehicles equipped to support passengers who may need visual schedules, reduced sensory input, or consistent routing.',
      'Special needs transportation for autism involves more than moving someone from one location to another. Drivers receive training on recognizing signs of distress, using clear and simple communication, and maintaining calm environments during transit. Routes are planned with input from families to minimize unexpected changes that can trigger anxiety, and pickup times are scheduled to allow for extra transition time when needed.'
    ],
    processTitle: 'What Proper Special Needs Transportation Requires',
    processParagraphs: [
      'Special needs transportation requires drivers who understand that individuals with autism may process information differently and need additional time to adjust to transitions. Vehicles are maintained as low-stimulation environments, meaning drivers avoid loud music, sudden lane changes, or abrupt stops whenever possible. Visual supports like route maps or picture schedules can be provided when families indicate they help their loved one understand the trip sequence.',
      'After establishing a consistent transportation routine with Country Time Transit, families notice their loved ones show reduced anxiety around travel because the same driver, same vehicle, and same route become familiar and predictable. Communication between drivers and families ensures that any behavioral triggers or preferred calming techniques are documented and followed, creating a safer and more comfortable experience for passengers who thrive on routine.',
      'This service is designed for individuals who attend day programs, therapy appointments, vocational training, or social activities and need transportation that accommodates their specific support requirements. Families receive updates about pickup and drop-off times, and drivers are trained to wait patiently during transitions rather than rushing passengers who need extra time to process changes.'
    ],
    iconName: 'Sparkles',
    benefits: [
      'Drivers trained in autism awareness, sensory sensitivities, and de-escalation',
      'Low-stimulation vehicle interiors (no loud music, smooth braking & lane changes)',
      'Consistent driver, vehicle, and route assignment to minimize travel anxiety',
      'Detailed family intake consultations to document calming strategies and preferences'
    ],
    features: [
      'Support for visual schedules, route maps, and picture sequences',
      'Extra transition time built into pickup and drop-off schedules',
      'Advance family notification if road work requires a route adjustment',
      'Direct pickup and drop-off updates for parents and caregivers'
    ],
    idealFor: [
      'Individuals with autism and developmental or sensory differences',
      'Day programs, ABA/occupational/speech therapy, and vocational training',
      'Passengers who rely on predictable routines and familiar drivers'
    ],
    faqSectionTitle: 'What Families Want to Know Before Scheduling',
    faqSectionIntro: 'Transportation for individuals with autism requires planning that considers sensory needs, communication preferences, and behavioral support strategies.',
    faqs: [
      {
        q: 'What training do drivers receive for working with individuals on the autism spectrum?',
        a: 'Drivers complete autism awareness training that covers communication techniques, sensory sensitivities, de-escalation strategies, and how to recognize signs of distress or discomfort during transit.'
      },
      {
        q: 'How does the service handle changes to the regular route or schedule?',
        a: 'When changes are unavoidable, families are notified in advance so they can prepare their loved one using visual supports or social stories, and drivers are informed to allow extra time for the passenger to adjust to the modification.'
      },
      {
        q: 'What happens if a passenger becomes upset or overwhelmed during a trip?',
        a: 'Drivers are trained to remain calm, use simple and clear language, and follow any specific calming strategies documented by the family, such as offering a preferred item, taking a brief pause, or using a particular tone of voice.'
      },
      {
        q: 'Can family members communicate specific needs or preferences for their loved one?',
        a: 'Yes, intake conversations with families in Fayetteville allow caregivers to share detailed information about communication methods, sensory triggers, preferred seating positions, and any behavioral supports that help their family member feel safe during transportation.'
      },
      {
        q: 'How does the service maintain consistency for passengers who rely on routine?',
        a: 'The same driver is assigned to regular routes whenever possible, and pickup times, vehicle type, and travel paths remain consistent to reduce anxiety and build familiarity for passengers who depend on predictable patterns.'
      }
    ]
  },
  {
    id: 'long-distance',
    slug: 'long-distance',
    title: 'Long-Distance Transportation',
    headline: 'Comfortable Regional Travel Across North Carolina with Experienced Drivers',
    shortDescription: 'Fully licensed regional rides from Fayetteville to Raleigh, Durham, Chapel Hill, Charlotte, and Greensboro medical centers and airports.',
    fullDescription: 'When medical appointments or family events take you beyond Fayetteville, you need reliable long-distance transportation that ensures safe, comfortable travel to destinations across North Carolina. Our experienced drivers navigate regional highways with confidence, providing stress-free transport to major cities while maintaining the personal service Fayetteville residents deserve.',
    highlightBanner: 'We maintain full licensing for in-state and regional trips, ensuring legal compliance and passenger protection across North Carolina.',
    overviewParagraphs: [
      'When medical appointments or family events take you beyond Fayetteville, you need reliable long-distance transportation that ensures safe, comfortable travel to destinations across North Carolina. Our experienced drivers navigate regional highways with confidence, providing stress-free transport to major cities while maintaining the personal service Fayetteville residents deserve.',
      'Our service proves ideal for veterans or families attending medical appointments or events out of town, with common destinations including Raleigh’s medical centers, Durham’s research facilities, Charlotte’s specialized hospitals, and Greensboro’s veteran services.'
    ],
    processTitle: 'How Does Long Distance Transportation Work in Fayetteville?',
    processParagraphs: [
      'Long-distance service begins with careful route planning and timing coordination, ensuring safe, comfortable long-distance rides with experienced drivers who understand regional traffic patterns and optimal travel times between Fayetteville and your destination. Our vehicles undergo thorough pre-trip inspections for extended travel reliability.',
      'During your journey, professional drivers handle highway navigation while you relax in clean, comfortable seating designed for extended trips across North Carolina’s diverse landscape. Country Time Transit maintains communication protocols for family updates and ensures punctual arrival at medical facilities, airports, or special events requiring precise timing.',
      'Every long-distance trip includes contingency planning for weather conditions, traffic delays, and rest stops, with drivers trained to prioritize passenger comfort during extended travel periods while maintaining our commitment to early arrival.'
    ],
    iconName: 'Compass',
    benefits: [
      'Direct, private door-to-door regional travel from Fayetteville across NC',
      'Thorough pre-trip vehicle inspections for extended highway reliability',
      'Planned rest stops, weather contingency routing, and family status updates',
      'Early arrival guarantee for out-of-town specialty medical & VA appointments'
    ],
    features: [
      'Full licensing for in-state and regional passenger transportation',
      'Service to Raleigh, Durham, Chapel Hill, Charlotte, Greensboro & beyond',
      'Clean, climate-controlled vehicles with comfortable seating for long trips',
      'Same-day wait-and-return options for out-of-town hospital visits'
    ],
    idealFor: [
      'Raleigh medical centers, Duke Health (Durham), and UNC Hospitals',
      'Charlotte specialized hospitals & Greensboro veteran facilities',
      'Regional airport connections and out-of-town family gatherings'
    ],
    faqSectionTitle: 'Fayetteville Long Distance Transportation Advantages',
    faqSectionIntro: 'Our regional transportation expertise serves Fayetteville residents who need reliable access to specialized services across North Carolina.',
    faqs: [
      {
        q: 'Why choose local long-distance service?',
        a: 'Familiar departure points in Fayetteville with experienced drivers who know efficient routes to Raleigh, Durham, Charlotte, and beyond.'
      },
      {
        q: 'What destinations do we serve?',
        a: 'Major medical centers, veteran facilities, airports, and family events throughout North Carolina with fully licensed regional transport.'
      },
      {
        q: 'How do we ensure trip quality?',
        a: 'Pre-trip vehicle inspections, experienced highway drivers, and careful scheduling to arrive early at your destination.'
      },
      {
        q: 'What sets our service apart?',
        a: 'Personal attention to veteran and senior passengers with comfortable vehicles designed for extended regional travel.'
      },
      {
        q: 'How do we serve Fayetteville specifically?',
        a: 'Local pickup convenience with deep knowledge of regional medical facilities and veteran services across the state.'
      }
    ]
  },
  {
    id: 'grocery-pharmacy',
    slug: 'grocery-pharmacy-transport',
    title: 'Grocery & Pharmacy Transport',
    headline: 'Essential Errands Made Easy with Professional Package Assistance',
    shortDescription: 'Convenient errand transportation to Food Lion, Harris Teeter, Walmart, CVS, and Walgreens with driver assistance loading bags.',
    fullDescription: 'Maintaining independence with grocery shopping and pharmacy visits becomes effortless when you have a dedicated transportation service that understands the importance of these essential errands in Fayetteville. Our grocery and pharmacy transport connects you safely to major stores and medical facilities while providing thoughtful assistance that makes each trip successful and stress-free.',
    highlightBanner: 'Our drivers help load and unload groceries or packages with care, ensuring your purchases and prescriptions arrive home safely.',
    overviewParagraphs: [
      'Maintaining independence with grocery shopping and pharmacy visits becomes effortless when you have dedicated transportation service that understands the importance of these essential errands in Fayetteville. Our grocery and pharmacy transport connects you safely to major stores and medical facilities while providing thoughtful assistance that makes each trip successful and stress-free.',
      'This service proves especially valuable for seniors, veterans, or anyone needing local errand support, transforming necessary shopping trips into pleasant outings with professional assistance and reliable transportation throughout Fayetteville’s shopping districts.'
    ],
    processTitle: 'What’s Included in Our Errand Transportation Service?',
    processParagraphs: [
      'Grocery and pharmacy transportation includes convenient transport to major stores and pharmacies around Fayetteville, from Food Lion and Harris Teeter locations to CVS, Walgreens, and Walmart pharmacies throughout the area. Our service accommodates shopping trips of various sizes while ensuring comfortable transport for you and your purchases back home.',
      'Professional drivers provide patient assistance with loading and unloading groceries or packages, understanding that heavy items, multiple bags, or fragile pharmacy supplies require careful handling. Country Time Transit maintains vehicles with adequate space for shopping needs while ensuring passenger comfort during trips to multiple locations when necessary.',
      'Each errand trip benefits from our commitment to early arrivals and courteous service, recognizing that pharmacy pickups often involve time-sensitive medications while grocery shopping requires adequate time for thoughtful selection and safe transport of perishable items.'
    ],
    iconName: 'ShoppingBag',
    benefits: [
      'Patient drivers who help load and unload heavy groceries and packages',
      'Flexible scheduling with adequate time for multi-stop shopping trips',
      'Safe, temperature-controlled transport for perishable groceries & prescriptions',
      'Courteous door-to-door support tailored for seniors and veterans'
    ],
    features: [
      'Direct service to Food Lion, Harris Teeter, Walmart, CVS, Walgreens & local retailers',
      'Spacious cargo room for weekly grocery hauls and medical supplies',
      'Knowledge of local store layouts, accessible entrances, and efficient routes',
      'Early-arrival pickup so perishable items get home promptly'
    ],
    idealFor: [
      'Weekly grocery shopping at Food Lion, Harris Teeter, or Walmart',
      'Time-sensitive prescription pickups at CVS, Walgreens, and local pharmacies',
      'Combined multi-stop retail and pharmacy errand trips'
    ],
    faqSectionTitle: 'Fayetteville Grocery & Pharmacy Transportation Advantages',
    faqSectionIntro: 'Our errand transportation service recognizes the essential nature of grocery and pharmacy access for maintaining health and independence.',
    faqs: [
      {
        q: 'Why choose professional errand transport?',
        a: 'Reliable access to Fayetteville’s major shopping centers with patient drivers who assist with loading and understand senior shopping needs.'
      },
      {
        q: 'What stores do we serve?',
        a: 'Major grocery chains, pharmacies, and retail locations throughout Fayetteville with flexible scheduling for multiple stops.'
      },
      {
        q: 'How do we ensure shopping success?',
        a: 'Adequate time allowances for careful shopping, assistance with heavy items, and safe transport of purchases back home.'
      },
      {
        q: 'What sets our service apart?',
        a: 'Personal attention to veterans and seniors who appreciate courteous assistance and understanding of mobility limitations during errands.'
      },
      {
        q: 'How do we serve Fayetteville specifically?',
        a: 'Knowledge of local store layouts, pharmacy locations, and efficient routes between shopping destinations to maximize your errand efficiency.'
      }
    ]
  },
  {
    id: 'recurring-rides',
    slug: 'recurring-ride-packages',
    title: 'Recurring Ride Packages',
    headline: 'Predictable Transportation Packages for Your Regular Schedule',
    shortDescription: 'Pre-scheduled routine transportation packages with guaranteed time slots, consistent drivers, and predictable pricing.',
    fullDescription: 'Regular medical appointments, therapy sessions, dialysis visits, or work commutes require dependable transportation that fits your schedule and budget in Fayetteville. Our recurring ride packages eliminate the stress of daily booking while providing consistent, professional service for your routine travel needs throughout Cumberland County.',
    highlightBanner: 'Recurring bookings offer predictable pricing, preferred time slots, and consistent vehicle assignments for regular clients.',
    overviewParagraphs: [
      'Regular medical appointments, therapy sessions, or work commutes require dependable transportation that fits your schedule and budget in Fayetteville. Our recurring ride packages eliminate the stress of daily booking while providing consistent, professional service for your routine travel needs throughout Cumberland County.',
      'These comprehensive packages reduce scheduling stress and ensure dependable daily mobility, whether you’re traveling to dialysis appointments at local medical centers or maintaining employment with consistent work transportation.'
    ],
    processTitle: 'Why Choose Professional Recurring Transportation in Fayetteville?',
    processParagraphs: [
      'Our recurring package system starts with convenient pre-scheduled rides for work, therapy, or dialysis visits, allowing you to secure your preferred pickup times and routes throughout Fayetteville’s medical district and employment centers. The scheduling process accommodates your specific needs while building familiarity between you and our professional driver team.',
      'Each package includes predictable pricing that helps you budget transportation costs while ensuring quality service standards. Country Time Transit maintains consistent vehicle assignments when possible, creating comfortable routines that reduce travel anxiety and build trusted relationships with drivers familiar with your specific requirements.',
      'Veterans and seniors receive special consideration through discounts that apply to recurring bookings, recognizing the importance of affordable, reliable transportation for ongoing medical care and maintaining independence in the Fayetteville community.'
    ],
    iconName: 'Repeat',
    benefits: [
      'Pre-scheduled rides with guaranteed preferred pickup time slots',
      'Predictable package pricing that simplifies monthly budgeting',
      'Consistent driver and vehicle assignments whenever possible',
      'Special recurring package discounts for veterans and seniors'
    ],
    features: [
      'Priority scheduling for ongoing dialysis, physical therapy, or daily work commutes',
      'Flexible schedule adjustments when medical appointment times shift',
      'Drivers familiar with your preferred Fayetteville routes and mobility needs',
      'Early-arrival guarantee for every scheduled recurring pickup'
    ],
    idealFor: [
      'Weekly dialysis and ongoing physical or occupational therapy sessions',
      'Daily work commutes across Fayetteville and Cumberland County',
      'Seniors and veterans with regular weekly medical or personal routines'
    ],
    faqSectionTitle: 'What Should Fayetteville Residents Expect?',
    faqSectionIntro: 'Our recurring ride service builds lasting relationships with clients who depend on consistent, professional transportation.',
    faqs: [
      {
        q: 'What’s included in recurring packages?',
        a: 'Pre-scheduled rides with preferred time slots, predictable pricing, and priority booking for regular appointments.'
      },
      {
        q: 'How do we handle schedule changes?',
        a: 'Flexible adjustments for medical appointments while maintaining your preferred driver assignments when possible.'
      },
      {
        q: 'What makes our approach different?',
        a: 'Personal familiarity with your routine, preferred routes through Fayetteville, and understanding of your specific mobility needs.'
      },
      {
        q: 'Why is local expertise important?',
        a: 'Knowledge of Fayetteville traffic patterns, medical facility locations, and efficient routes during peak hours.'
      },
      {
        q: 'What savings do we provide?',
        a: 'Special discounts for veterans and seniors with recurring bookings, plus reduced per-trip costs through package pricing.'
      }
    ]
  },
  {
    id: 'short-distance',
    slug: 'short-distance-transportation',
    title: 'Short-Distance Rides',
    headline: 'Quick, Affordable Local Rides Around Your Community',
    shortDescription: 'Convenient short-range rides across Fayetteville, Spring Lake, Hope Mills, and Raeford for daily errands, bank visits, and social calls.',
    fullDescription: 'Daily errands and local appointments become simple when you have reliable short-distance transportation throughout Fayetteville and nearby communities like Spring Lake, Hope Mills, and Raeford. Our local service provides quick, efficient rides for everything from bank visits to social calls, ensuring you maintain independence and community connections without transportation barriers.',
    highlightBanner: 'Wednesdays bring special value with our 15% senior discount for local rides within an 8-mile radius of Fayetteville.',
    overviewParagraphs: [
      'Daily errands and local appointments become simple when you have reliable short-distance transportation throughout Fayetteville and nearby communities like Spring Lake, Hope Mills, and Raeford. Our local service provides quick, efficient rides for everything from bank visits to social calls, ensuring you maintain independence and community connections without transportation barriers.',
      'This affordable, short-range service within Fayetteville and nearby communities proves ideal for quick errands or same-day needs around town, with special consideration for seniors who appreciate reliable local transportation options.'
    ],
    processTitle: 'Why Choose Professional Local Transportation in Fayetteville?',
    processParagraphs: [
      'Short-distance service focuses on efficient routes and flexible scheduling within Fayetteville’s city limits and surrounding communities, utilizing local street knowledge to avoid traffic congestion around Cross Creek Mall, downtown areas, and residential neighborhoods. Our drivers understand the fastest connections between local destinations while prioritizing passenger comfort during brief trips.',
      'Every local ride features clean, well-maintained vehicles operated by courteous drivers who appreciate the importance of friendly service for community members. Country Time Transit builds relationships with regular local passengers, creating familiar faces and trusted service that enhances your daily mobility throughout the greater Fayetteville area.',
      'Wednesdays bring special value with our 15% senior discount for rides within an 8-mile radius, recognizing that fixed incomes benefit from affordable transportation options while encouraging community engagement and independence for Fayetteville’s senior residents.'
    ],
    iconName: 'Navigation',
    benefits: [
      'Quick, affordable short-range rides across Fayetteville and nearby towns',
      '15% Wednesday senior discount for rides within an 8-mile radius',
      'Local street knowledge avoiding Cross Creek Mall and downtown traffic congestion',
      'Responsive scheduling for urgent errands and same-day local trips'
    ],
    features: [
      'Coverage across Fayetteville, Spring Lake, Hope Mills, and Raeford',
      'Clean, well-maintained vehicles with courteous, familiar local drivers',
      'Direct drop-off at accessible entrances for banks, shops, and offices',
      'Early arrival guarantee for every scheduled local appointment'
    ],
    idealFor: [
      'Bank visits, post office errands, hair appointments, and local shopping',
      'Social calls, church services, and visiting friends across town',
      'Quick same-day rides around Fayetteville, Spring Lake, and Hope Mills'
    ],
    faqSectionTitle: 'What Should Fayetteville Residents Expect?',
    faqSectionIntro: 'Our short-distance service emphasizes convenience and community connection for local transportation needs.',
    faqs: [
      {
        q: 'What’s included in local service?',
        a: 'Affordable rides within Fayetteville and nearby communities with clean vehicles and professional drivers.'
      },
      {
        q: 'How do we handle same-day requests?',
        a: 'Quick response for urgent errands with flexible scheduling around Fayetteville’s local destinations.'
      },
      {
        q: 'What makes our approach different?',
        a: 'Personal familiarity with Fayetteville neighborhoods, efficient local routes, and commitment to early arrival for every appointment.'
      },
      {
        q: 'Why is local expertise important?',
        a: 'Deep knowledge of Fayetteville traffic patterns, parking options, and accessible entrances at local businesses and services.'
      },
      {
        q: 'What savings do we provide?',
        a: 'Wednesday senior discount of 15% within 8 miles, plus competitive rates designed for frequent local transportation needs.'
      }
    ]
  }
];

export const SERVICE_AREAS = [
  { name: 'Fayetteville, NC', badge: 'Hub' },
  { name: 'Spring Lake, NC', badge: 'Active' },
  { name: 'Hope Mills, NC', badge: 'Active' },
  { name: 'Raeford, NC', badge: 'Active' },
  { name: 'Lumberton, NC', badge: 'Active' },
  { name: 'Dunn, NC', badge: 'Active' },
  { name: 'Pinehurst, NC', badge: 'Active' },
  { name: 'Fort Liberty, NC', badge: 'Active' },
  { name: 'Southern Pines, NC', badge: 'Active' },
  { name: 'Sanford, NC', badge: 'Active' },
  { name: 'Anderson Creek, NC', badge: 'Active' },
  { name: 'Haymount, NC', badge: 'Active' }
];

export const AWARDS: AwardItem[] = [
  {
    year: '2026',
    organization: 'Community Choice',
    title: 'Airport Transit',
    badgeText: 'Platinum',
    notes: 'Top airport transportation provider'
  },
  {
    year: '2026',
    organization: 'Community Choice',
    title: 'Taxis & Limousines',
    badgeText: 'Platinum',
    notes: 'Premier passenger service'
  },
  {
    year: '2026',
    organization: 'Community Choice',
    title: 'Regular Transit',
    badgeText: 'Platinum',
    notes: 'Dependable community rides'
  },
  {
    year: '2025',
    organization: 'CommunityVotes',
    title: 'Platinum Business',
    badgeText: 'Platinum',
    notes: 'Voted local platinum business'
  },
  {
    year: 'Ranked',
    organization: 'BusinessRate',
    title: '#1 in Fayetteville',
    badgeText: '#1 Rated',
    notes: 'Ranked #1 in Fayetteville'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    author: 'Sybil Lampkins K.',
    quote: 'Impeccable service, excellent customer service, clean vehicle, always on time, never had to wait. Amanda & her team A1.',
    location: 'Fayetteville, NC',
    verifiedTrip: 'Regular Rides'
  },
  {
    author: 'Tanya J.',
    quote: "Ms. Amanda is the best. She's very professional and punctual and most of all she really cares.",
    location: 'Cumberland County, NC',
    verifiedTrip: 'Medical Transit'
  },
  {
    author: 'Patricia S.',
    quote: 'They are polite and very friendly. They are never late. I had used them at the last minute and they always come through.',
    location: 'Fayetteville Area, NC',
    verifiedTrip: 'Flexible Service'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'What areas do you serve?',
    answer: 'Fayetteville, Spring Lake, Hope Mills, Raeford, and 8 other surrounding communities across North Carolina.'
  },
  {
    id: 2,
    question: 'Do you offer wheelchair-accessible vehicles?',
    answer: 'Yes. Accessible vehicles with ramps and multi-point tie-downs are available with advance booking.'
  },
  {
    id: 3,
    question: 'Do you provide airport transfers?',
    answer: 'Yes. We offer scheduled private rides to Fayetteville (FAY), Raleigh-Durham (RDU), and regional airfields.'
  },
  {
    id: 4,
    question: 'Do you offer senior and military discounts?',
    answer: 'Yes. 15% off senior rides on Wednesdays (within 8 miles) and 10% off military and veteran round trips.'
  },
  {
    id: 5,
    question: 'How do I book a ride?',
    answer: 'Call (910) 364-1102 or use our online ride request form.'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    number: '01',
    title: 'Before Time',
    description: 'We plan arrival buffers so you never wait or rush.'
  },
  {
    number: '02',
    title: 'Family Care',
    description: 'Courteous, personal approach from a local team.'
  },
  {
    number: '03',
    title: 'Safe & Insured',
    description: 'Clean vehicles, licensed drivers, commercial coverage.'
  },
  {
    number: '04',
    title: 'Accessible',
    description: 'Wheelchair ramps and respectful mobility support.'
  },
  {
    number: '05',
    title: 'Local Know-How',
    description: 'Serving Fayetteville and Cumberland County daily.'
  },
  {
    number: '06',
    title: 'Service With Purpose',
    description: 'Dedicated support for seniors, veterans, and families.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '1',
    title: 'Choose service',
    description: 'Select medical, airport, wheelchair, or everyday transit.'
  },
  {
    step: '2',
    title: 'Location & time',
    description: 'Tell us where and when you need pickup.'
  },
  {
    step: '3',
    title: 'Ride confirmed',
    description: 'Our dispatch team confirms your vehicle and driver.'
  }
];
