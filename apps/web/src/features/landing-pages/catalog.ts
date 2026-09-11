import type { LandingPageDefinition } from './types'

// Single content-source boundary. A future CMS adapter can replace these
// definitions without changing routing, validation, metadata, or presentation.
const landingPages: ReadonlyArray<LandingPageDefinition> = [
  {
    id: 'neon-cup-2026',
    slug: 'neon-trading-cup',
    defaultLanguage: 'en',
    regulators: ['int'],
    translations: {
      en: {
        kind: 'neon-trading-cup',
        meta: {
          title: 'Neon Trading Cup 2026 | Enter the Night Circuit',
          description:
            'Race the global markets, climb the live standings, and compete for a $250,000 prize pool in the Neon Trading Cup.',
        },
        nav: { overview: 'Circuit', leaderboard: 'Standings', rewards: 'Prize pool' },
        hero: {
          kicker: 'Global trading competition · Season 06',
          title: 'Own the night.',
          titleAccent: 'Rule the circuit.',
          description:
            'Trade your way through four high-voltage weeks. Precision earns points. Consistency takes the podium.',
          primaryCta: 'Enter the cup',
          secondaryCta: 'View race format',
          season: 'NIGHT CIRCUIT / 06',
        },
        countdown: { value: '12', unit: 'days', label: 'Registration closes' },
        stats: [
          { value: '$250K', label: 'Total prize pool' },
          { value: '04', label: 'Competition weeks' },
          { value: '120', label: 'Rewarded traders' },
          { value: '24/5', label: 'Markets in motion' },
        ],
        steps: [
          {
            number: '01',
            title: 'Claim your grid position',
            description:
              'Register with an eligible live account before the starting lights go out.',
          },
          {
            number: '02',
            title: 'Build clean momentum',
            description:
              'Earn points through return, consistency, and disciplined drawdown control.',
          },
          {
            number: '03',
            title: 'Finish on the podium',
            description:
              'Track your live rank and push through the final week for a share of the pool.',
          },
        ],
        leaderboard: [
          { rank: '01', name: 'ApexVelocity', score: '9,842 PTS', change: '+2' },
          { rank: '02', name: 'NightShift_77', score: '9,610 PTS', change: '—' },
          { rank: '03', name: 'KineticBull', score: '9,204 PTS', change: '+4' },
          { rank: '04', name: 'ZeroLatency', score: '8,991 PTS', change: '-1' },
        ],
        rewards: [
          { place: 'Champion', amount: '$75,000', detail: 'Cash prize + carbon trophy' },
          { place: 'Runner-up', amount: '$40,000', detail: 'Cash prize + paddock kit' },
          { place: 'Third', amount: '$25,000', detail: 'Cash prize + paddock kit' },
        ],
        timeline: [
          { date: '18 SEP', title: 'Registration opens' },
          { date: '02 OCT', title: 'Starting lights' },
          { date: '30 OCT', title: 'Final market close' },
          { date: '03 NOV', title: 'Podium announced' },
        ],
        finalCta: {
          title: 'Your grid is waiting.',
          body: 'One account. Four weeks. Every decision counts.',
          label: 'Secure my position',
        },
        faqTitle: 'Race control',
        faqs: [
          {
            question: 'How is the leaderboard calculated?',
            answer:
              'Rankings combine percentage return, consistency, and drawdown control. Full weighting appears in the competition terms.',
          },
          {
            question: 'Can I use an existing account?',
            answer:
              'Yes. Eligible verified live accounts can be enrolled before registration closes.',
          },
          {
            question: 'When are prizes credited?',
            answer:
              'Winners are verified after the final close and contacted within ten business days.',
          },
        ],
        terms: 'Competition terms · Risk disclosure · Eligibility',
      },
    },
  },
  {
    id: 'golden-market-2026',
    slug: 'golden-market-festival',
    defaultLanguage: 'en',
    regulators: ['th'],
    translations: {
      en: {
        kind: 'golden-market-festival',
        meta: {
          title: 'Golden Market Festival | A Season of Reward',
          description:
            'Celebrate the Golden Market Festival with refined weekly rewards created for traders in Thailand.',
        },
        nav: { story: 'The story', rewards: 'Rewards', participate: 'How to join' },
        hero: {
          edition: 'The festive edition · 2026',
          kicker: 'A season of considered rewards',
          title: 'Golden Market',
          titleAccent: 'Festival',
          description:
            'A month-long celebration where thoughtful trading is met with beautifully chosen rewards.',
          cta: 'Discover the festival',
          date: '1–31 October · Thailand',
        },
        introduction: {
          label: 'The invitation',
          title: 'Good fortune favours a considered approach.',
          paragraphs: [
            'The Golden Market Festival celebrates steady progress—not hurried decisions. Throughout October, eligible trading activity unlocks entries into a curated weekly reward draw.',
            'Each week reveals a new collection, from quiet everyday luxuries to an unforgettable final reward.',
          ],
          pullQuote: 'Trade with intention. Let the season bring the surprise.',
        },
        rewardsTitle: 'A collection worth anticipating',
        rewards: [
          {
            numeral: 'I',
            title: 'The Daily Ritual',
            description:
              'Premium coffee sets and artisan tea collections for slow, considered mornings.',
          },
          {
            numeral: 'II',
            title: 'The Weekend Edit',
            description:
              'Design-led luggage and a two-night retreat selected for effortless escape.',
          },
          {
            numeral: 'III',
            title: 'The Golden Finale',
            description: 'A travel experience for two, created around the destination you choose.',
          },
        ],
        benefits: [
          { label: 'Festival period', value: '31 days' },
          { label: 'Weekly selections', value: '4 collections' },
          { label: 'Every qualified lot', value: '1 entry' },
        ],
        stepsTitle: 'Three simple gestures',
        steps: [
          { number: '01', title: 'Join', description: 'Opt in with an eligible verified account.' },
          {
            number: '02',
            title: 'Participate',
            description: 'Trade qualifying instruments during the festival period.',
          },
          {
            number: '03',
            title: 'Anticipate',
            description: 'Watch for the weekly reveal and final celebration.',
          },
        ],
        banner: {
          overline: 'Your invitation awaits',
          title: 'Make October golden.',
          description: 'Join before 1 October to be ready for the first weekly collection.',
          cta: 'Accept the invitation',
        },
        faqTitle: 'A few thoughtful details',
        faqs: [
          {
            question: 'Who may join the festival?',
            answer:
              'Verified clients registered under the Thailand market who meet the promotion terms.',
          },
          {
            question: 'How are entries collected?',
            answer:
              'Each qualifying lot adds one entry to that week’s draw, subject to the published limits.',
          },
          {
            question: 'How will selected participants be contacted?',
            answer:
              'We will contact selected participants using their registered email and telephone details.',
          },
        ],
        terms: 'Festival terms · Eligibility · Risk disclosure',
      },
      th: {
        kind: 'golden-market-festival',
        meta: {
          title: 'Golden Market Festival | เทศกาลแห่งรางวัล',
          description:
            'ร่วมฉลอง Golden Market Festival กับของรางวัลประจำสัปดาห์สำหรับเทรดเดอร์ในประเทศไทย',
        },
        nav: { story: 'เรื่องราว', rewards: 'ของรางวัล', participate: 'วิธีร่วมกิจกรรม' },
        hero: {
          edition: 'ฉบับเทศกาล · 2569',
          kicker: 'ฤดูกาลแห่งรางวัลที่คัดสรรมาอย่างดี',
          title: 'Golden Market',
          titleAccent: 'Festival',
          description: 'เดือนแห่งการเฉลิมฉลอง ทุกการเทรดอย่างรอบคอบอาจพาคุณไปพบกับรางวัลแสนพิเศษ',
          cta: 'ค้นพบเทศกาล',
          date: '1–31 ตุลาคม · ประเทศไทย',
        },
        introduction: {
          label: 'คำเชิญ',
          title: 'โอกาสที่ดี เริ่มต้นจากการตัดสินใจอย่างรอบคอบ',
          paragraphs: [
            'Golden Market Festival ให้คุณค่ากับทุกก้าวที่มั่นคง ตลอดเดือนตุลาคม กิจกรรมการเทรดที่เข้าเงื่อนไขจะเปลี่ยนเป็นสิทธิ์ลุ้นรับรางวัลประจำสัปดาห์',
            'พบกับคอลเลกชันใหม่ในทุกสัปดาห์ ตั้งแต่ความสุขเล็ก ๆ ในทุกวัน ไปจนถึงรางวัลใหญ่ส่งท้ายเทศกาล',
          ],
          pullQuote: 'เทรดอย่างมีเป้าหมาย แล้วปล่อยให้ฤดูกาลนี้มอบเรื่องน่าประทับใจ',
        },
        rewardsTitle: 'คอลเลกชันที่ควรค่าแก่การรอคอย',
        rewards: [
          {
            numeral: '๑',
            title: 'ความสุขในทุกเช้า',
            description: 'ชุดกาแฟพรีเมียมและชาคัดสรร สำหรับช่วงเวลาเรียบง่ายที่แสนพิเศษ',
          },
          {
            numeral: '๒',
            title: 'วันหยุดในฝัน',
            description: 'กระเป๋าเดินทางดีไซน์สวย พร้อมที่พักสองคืนเพื่อการพักผ่อนอย่างเต็มที่',
          },
          {
            numeral: '๓',
            title: 'รางวัลใหญ่สีทอง',
            description: 'ประสบการณ์ท่องเที่ยวสำหรับสองท่าน ในจุดหมายที่คุณเลือกเอง',
          },
        ],
        benefits: [
          { label: 'ระยะเวลากิจกรรม', value: '31 วัน' },
          { label: 'คอลเลกชันประจำสัปดาห์', value: '4 ชุด' },
          { label: 'ทุกล็อตที่เข้าเงื่อนไข', value: '1 สิทธิ์' },
        ],
        stepsTitle: 'สามขั้นตอนง่าย ๆ',
        steps: [
          { number: '01', title: 'เข้าร่วม', description: 'กดรับสิทธิ์ด้วยบัญชีที่ยืนยันตัวตนแล้ว' },
          { number: '02', title: 'เริ่มต้น', description: 'เทรดผลิตภัณฑ์ที่ร่วมรายการในช่วงเทศกาล' },
          { number: '03', title: 'รอลุ้น', description: 'ติดตามการประกาศรางวัลประจำสัปดาห์และรางวัลใหญ่' },
        ],
        banner: {
          overline: 'คำเชิญของคุณพร้อมแล้ว',
          title: 'เติมเดือนตุลาคมให้เป็นสีทอง',
          description: 'เข้าร่วมก่อนวันที่ 1 ตุลาคม เพื่อเตรียมรับสิทธิ์ในคอลเลกชันแรก',
          cta: 'ตอบรับคำเชิญ',
        },
        faqTitle: 'รายละเอียดเพิ่มเติม',
        faqs: [
          {
            question: 'ใครสามารถเข้าร่วมกิจกรรมได้บ้าง',
            answer: 'ลูกค้าที่ลงทะเบียนภายใต้ตลาดประเทศไทย ยืนยันตัวตนแล้ว และมีคุณสมบัติตามเงื่อนไขกิจกรรม',
          },
          {
            question: 'สิทธิ์ลุ้นรางวัลคำนวณอย่างไร',
            answer: 'ทุกล็อตที่เข้าเงื่อนไขจะได้รับหนึ่งสิทธิ์สำหรับการจับรางวัลในสัปดาห์นั้น ภายใต้ข้อกำหนดที่ประกาศไว้',
          },
          {
            question: 'ผู้ได้รับรางวัลจะได้รับการติดต่ออย่างไร',
            answer: 'เราจะติดต่อผ่านอีเมลและหมายเลขโทรศัพท์ที่ลงทะเบียนไว้ในบัญชีของคุณ',
          },
        ],
        terms: 'เงื่อนไขกิจกรรม · คุณสมบัติผู้เข้าร่วม · คำเตือนความเสี่ยง',
      },
    },
  },
  {
    id: 'desert-edge-2026',
    slug: 'desert-edge-challenge',
    defaultLanguage: 'en',
    regulators: ['za'],
    translations: {
      en: {
        kind: 'desert-edge-challenge',
        meta: {
          title: 'Desert Edge Challenge | Find Your Trading Frontier',
          description:
            'A six-stage trading expedition for South Africa. Complete the mission and claim your share of R1,000,000 in rewards.',
        },
        nav: { mission: 'The mission', fieldNotes: 'Field notes', enter: 'Enter challenge' },
        hero: {
          coordinates: '26.2041° S / 28.0473° E',
          issue: 'FIELD ISSUE 001 — ZA',
          title: 'FIND YOUR',
          titleAccent: 'TRADING EDGE',
          description:
            'Six stages. Unforgiving markets. A challenge built for traders who keep moving when the map runs out.',
          cta: 'Join the expedition',
        },
        statement: {
          label: 'The challenge',
          title: 'THE FRONTIER DOES NOT REWARD THE UNPREPARED.',
          body: 'Build volume across six weekly missions. Hold your discipline. Reach the final checkpoint with enough points and your share of the reward pool is secured.',
        },
        metrics: [
          { value: '06', unit: 'STAGES', label: 'Across the expedition' },
          { value: 'R1M', unit: 'POOL', label: 'Total rewards' },
          { value: '500', unit: 'PLACES', label: 'At the final checkpoint' },
        ],
        missionsTitle: 'FIELD PLAN / SIX STAGES',
        missions: [
          {
            number: '01',
            title: 'SIGN THE MANIFEST',
            description: 'Register an eligible account and receive your field number.',
          },
          {
            number: '02',
            title: 'CROSS THE FIRST LINE',
            description: 'Complete your opening volume target before the weekly cutoff.',
          },
          {
            number: '03',
            title: 'HOLD YOUR BEARING',
            description: 'Return each week and collect consistency markers.',
          },
          {
            number: '04',
            title: 'READ THE TERRAIN',
            description: 'Trade eligible markets while staying inside the risk limits.',
          },
          {
            number: '05',
            title: 'REACH BASE CAMP',
            description: 'Pass the cumulative target to unlock finalist status.',
          },
          {
            number: '06',
            title: 'MAKE THE FINAL PUSH',
            description: 'Complete the last mission and secure your finishing tier.',
          },
        ],
        rewards: {
          label: 'Supply drop',
          title: 'REWARDS FOR THOSE WHO FINISH.',
          items: [
            { name: 'TRAILBLAZER / TOP 10', value: 'R25,000' },
            { name: 'PATHFINDER / TOP 100', value: 'R5,000' },
            { name: 'EXPEDITION / TOP 500', value: 'R750' },
          ],
        },
        requirementsTitle: 'BEFORE YOU DEPART',
        requirements: [
          'A verified live account registered in South Africa',
          'Minimum qualifying deposit maintained through the challenge',
          'Acceptance of the expedition rules and risk disclosure',
          'Six weekly mission windows completed before each cutoff',
        ],
        finalCta: {
          label: '26.2041° S — START HERE',
          title: 'THE EDGE IS OUT THERE.',
          body: 'Registration closes when the first checkpoint opens. Pack light. Trade sharp.',
          cta: 'Get my field number',
        },
        faqTitle: 'FIELD NOTES',
        faqs: [
          {
            question: 'WHAT COUNTS TOWARD A WEEKLY MISSION?',
            answer:
              'Closed eligible trades within the published mission window count toward that stage’s volume target.',
          },
          {
            question: 'WHAT HAPPENS IF I MISS A STAGE?',
            answer:
              'You may continue the expedition, but missed consistency markers can affect your final reward tier.',
          },
          {
            question: 'WHEN IS THE FINAL CHECKPOINT?',
            answer:
              'The sixth stage closes at the published market cutoff. Finalists are verified within ten business days.',
          },
        ],
        terms: 'EXPEDITION RULES / ELIGIBILITY / RISK DISCLOSURE',
      },
    },
  },
]

export async function getLandingPageDefinition(slug: string) {
  return landingPages.find((page) => page.slug === slug)
}

export function getRegisteredLandingPageSlugs() {
  return landingPages.map((page) => page.slug)
}
