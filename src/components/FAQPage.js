import Accordion from './Accordion';
import Star from '../images/icon-star.svg';

export default function FAQPage() {
  const items = [
    {
      id: '1',
      title: 'General Questions',
      content: [
        {
          label: 'What does this platform do, and how will it help me?',
          answer: 'We provide front-end challenges that include professional web designs. These allow you to practice building websites in a realistic workflow. Taking these challenges will help you improve your skills, gain experience creating websites, and build up an incredible project portfolio. We also have a large community of developers, so it\'s a great way to meet other devs!'
        },
        {
          label: 'Is it free?',
          answer: 'The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it\'s easy to tell the difference.'
        },
        {
          label: 'Can I use these projects in my portfolio?',
          answer: 'Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!'
        },
        {
          label: 'What are points for, and how does the points system work?',
          answer: 'Your "Mentor Score" is a rough gauge of your reputation on the platform. Earning more points can boost your exposure within the community and get you on the Wall of Fame. Click "Learn about our Wall of Fame" on the Wall of Fame for all the information.'
        },
        {
          label: 'Can I use these challenges within my own free or commercial content/tutorials/projects?',
          answer: 'Please visit our License page to learn more about how our challenges can be used within your own content. If you\'re unsure about anything, please feel free to contact us at hi@frontendmentor.io and we\'ll be more than happy to answer your labels.'
        }
      ],
    },
    {
      id: '2',
      title: 'Account Questions',
      content: [
        {
          label: 'Is there any way to sign-up other than GitHub?',
          answer: 'It\'s just GitHub at the moment. We only take the most basic information from your GitHub profile like email, username, profile picture, etc., and don\'t access your repositories. We do have plans to offer more sign-up options, so stay tuned.',
        },
        {
          label: 'How do I delete my account?',
          answer: 'Go to Settings > Account > Delete Account. Be aware that clicking "Delete Account" will delete all your data, including associated data, like solutions, comments, etc., and cannot be undone.',
        },
      ]
    },
    {
      id: '3',
      title: 'Subscription Questions', 
      content: [
        {
          label: 'Can I get my employer to pay for my subscription?',
          answer: 'If you\'re employed as a developer, your employer should be happy to pay for your subscription as part of your training budget. Be sure to ask them first. If they\'re happy to do so, complete the checkout and then send an email to hi@frontendmentor.io with the company\'s name and address, and we\'ll update the invoice.',
        },
        {
          label: 'Do you offer discounts?',
          answer: 'We don\'t offer any discounts on the Pro subscription beyond the regional discounts that we automatically apply. We have lots of free challenges, so we\'d recommend using them. Then, if you feel you\'ll get value from the Pro subscription, you can upgrade.',
        },
        {
          label: 'Do you offer refunds?',
          answer: 'We offer a "fair use" refund policy within 14-days of starting your first subscription. Fair use means that if you download one or two premium assets (designs, premium challenges) and decide it\'s not for you, we\'re happy to process a refund. After all, we want you to be satisfied with your purchase! But if you\'ve downloaded three or more premium assets and then requested a refund, we reserve the right to say no. To request a refund, email hi@frontendmentor.io within 14-days of starting your subscription.',
        },
        {
          label: 'Can I cancel my subscription any time?',
          answer: 'Definitely! We provide easy account management through the Settings page. Click on the Billing tab, and you\'ll be able to manage your subscription without a problem.',
        },
        {
          label: 'I\'m on the monthly subscription option and would like to upgrade to yearly. How can I do this?',
          answer: 'Please email hi@frontendmentor.io and we\'ll happily help you switch your subscription.',
        },
        {
          label: 'Does the subscription auto-renew?',
          answer: 'Our subscriptions do auto-renew at the end of their term. You can easily manage your subscription by going to Settings > Billing. We send you an email reminder a few days before your subscription renews to make sure you don\'t get caught out.',
        },
        {
          label: 'Why are there credits limits on the monthly subscription?',
          answer: 'Due to the downloadable nature of our Pro assets (design files, premium challenges), we need credit limits for monthly subscribers. Otherwise, someone could subscribe for a month, download everything, and immediately cancel. So we need the limits in place so we can function as a business. The limits we\'ve chosen allow a lot of practice on a month-to-month basis. You can download 5x design files for our free challenges, and you can take 2x premium challenges.',
        },
        {
          label: 'Can I buy a subscription as a gift for someone else?',
          answer: 'Yes! We don\'t have an automated process in place for this yet, but please email hi@frontendmentor.io and we\'ll be happy to help you out.',
        },
      ]
    },
    {
      id: '4',
      title: 'Challenge Questions',
      content: [
        {
          label: 'How can I get help if I\'m stuck on a challenge?',
          answer: 'The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it\'s a great place to ask labels. We even have a dedicated "help" channel! If you haven\'t joined yet, you can get an invite to our Discord server here.',
        },
        {
          label: 'Can I use libraries/frameworks on these projects?',
          answer: 'Yes! Our challenges provide professional designs but there are no rules on what tools to use. So feel free to use anything you like to build your projects.',
        },
        {
          label: 'How often are new challenges added?',
          answer: 'We launch a new challenge every two weeks. We alternate between free and premium challenge launches, so we launch one free and one premium challenge each month.',
        },
        {
          label: 'What is the difference between the desktop-design, mobile-design, and desktop-preview images in my starter code?',
          answer: 'The desktop-design and mobile-design images show you how the layout should look at large and small screen sizes. The desktop design is 1440px wide, and the mobile design is 375px. However, try building projects to look good on all screen sizes. The desktop-preview image is a preview image used in the README file. You don’t need to reference this while building the project.',
        },
      ] 
    },
    {
      id: '5',
      title: 'Solution Questions',
      content: [
        {
          label: 'How do I submit my solution?',
          answer: 'We\'d recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask labels in our Discord server, and we\'ll help you submit your project.',
        },
        {
          label: 'How do I edit my solution?',
          answer: 'Go to the solution page and click the vertical ellipsis menu at the top right of the title section. When the menu opens, you\'ll see an option to edit your solution.',
        },
        {
          label: 'How do I delete my solution?',
          answer: 'Go to the solution page and click the vertical ellipsis menu at the top right of the title section. When the menu opens, you\'ll see an option to delete your solution.',
        },
        {
          label: 'How do I generate a new solution screenshot?',
          answer: 'You\'ll see a "Generate Screenshot" button below the design comparison slider on the solution page. Clicking this will create a new screenshot.',
        },
        {
          label: 'Is there an official solution I can take a look at?',
          answer: 'We don\'t provide "official" solutions for the challenges. This is because there is no single perfect way to complete a challenge. Instead, you\'re encouraged to review other people\'s code in the community. You can learn so much by seeing how other people have approached the same challenges and giving them feedback.',
        },
        {
          label: 'Do I get a code review when I post my solution?',
          answer: 'Frontend Mentor is a collaborative learning community where everyone can give feedback to each other. If you\'d like to receive feedback from the community, please be sure to post a label when you submit your solution. The more specific you can be, the better. Being clear with your labels means you\'re much more likely to receive valuable feedback from others.',
        },
        {
          label: 'Why does my solution screenshot look different to the live version?',
          answer: 'We use a headless Chromium browser to take solution screenshots, so check your solution using Chrome to see how it looks. You might need to update your code to improve cross-browser consistency. If the screenshot still looks different, please email us at hi@frontendmentor.io, and we\'ll look into it.',
        },
      ]
    },
    { 
      id: '6',
      title: 'Licensing Questions',
      content: [
        {
          label: 'Can I stream myself completing Frontend Mentor challenges?',
          answer: 'Go for it! We love seeing people use our challenges to help their audience learn how to build projects. We just ask a couple of things: please point your audience to our site instead of distributing the code, and please don\'t distribute the design files. If you\'re on Twitter, feel free to mention our Frontend Mentor Twitter account when promoting your video, and we\'ll happily retweet to help boost your post!',
        },
        {
          label: 'Can I use Frontend Mentor challenges within my free course/tutorial?',
          answer: 'If you\'d like to use our challenges within your course or tutorial content, please get in touch with us at hi@frontendmentor.io. We\'re always open to collaborations and would love to hear about your project and how we can work together. We\'ll happily help promote your project to our community as well!',
        },
        {
          label: 'I want to use Frontend Mentor challenges in a commercial course/tutorial/project. Is this possible?',
          answer: 'We do offer commercial licenses. So if you\'d like to use our challenges in a commercial project with no need for attribution, please get in touch at hi@frontendmentor.io for more information.',
        },
      ]
    },
  ];

  const renderedItems = items.map((section) => {
    return(
        <Accordion key={section.id} section={section} />
    )
  });

  return(
    <div className='container'>
      <div className="background-image">
        <h1>FAQ</h1>
      </div>
      <div className="purple-background"></div>
      <div className='main-content'>
        {renderedItems}
      </div>
    </div>
  )
}