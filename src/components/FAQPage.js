import Accordion from './Accordion';
import Star from '../images/icon-star.svg'; 

export default function FAQPage() {
  const items = [
    {
      id: 'a',
      label: 'What is Frontend Mentor, and how will it help me?',
      content: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.',
    },
    {
      id: 'b',
      label: 'Is Frontend Mentor free?',
      content: 'The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it\'s easy to tell the difference.',
    },
    {
      id: 'c',
      label: 'Can I use Frontend Mentor projects in my portfolio?',
      content: 'Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!',
    },
    {
      id: 'd',
      label: 'How can I get help if I\'m stuck on a challenge?',
      content: 'The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it\'s a great place to ask questions. We even have a dedicated "help" channel! If you haven\'t joined yet, you can get an invite to our Discord server here.',
    },
  ];

  return(
    <div className='main-content'>
      <div className='heading-container flex'>
        <img src={Star} alt="star icon" />
        <h1>FAQs</h1>
      </div>
      <Accordion items={items}/>
    </div>
  );
}