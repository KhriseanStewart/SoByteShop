import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class TeroHomeComponent implements OnInit {
  faqs = [
    {
      question: 'What kind of websites do you build?',
      answer: `We develop all types of applications — from e-commerce platforms and booking systems to educational apps, salon management tools, restaurant ordering apps, and more. Our applications are fully responsive and optimized for all mobile devices, ensuring your business is accessible and seamless across smartphones and tablets. No matter your industry, we can create a custom application tailored to meet your specific needs.`,
      isOpen: false
    },
    {
      question: 'How long does it take to build a website?',
      answer: `Most websites are completed within 2 to 4 weeks, depending on the size and features required.`,
      isOpen: false
    },
    {
      question: 'How long does an Application take to build?',
      answer: `Most applications are completed within 1 to 4 months, depending on the size and features required.`,
      isOpen: false
    },
    {
      question: 'What is the process and timeline for developing a custom application?',
      answer: `Once you request a new application, we will create a mock-up within 2 to 3 weeks. You’ll have the opportunity to review and request edits to ensure it meets your vision. After your approval, we will begin the development phase, during which we will provide bi-weekly updates until the application is completed and ready for launch.`,
      isOpen: false
    },
    {
      question: 'What is the process and timeline for designing a custom website?',
      answer: `After you request a website, we will prepare a mock-up within 2 to 3 weeks. You’ll have the chance to review and suggest edits to ensure it aligns with your vision. Once you approve the mock-up, we will proceed with the development phase, providing updates every two weeks until the website is fully built and ready to go live.`,
      isOpen: false
    },
    {
      question: 'What else do you offer?',
      answer: `In addition to website and application development, we offer database management and maintenance services for both websites and applications developed by SoByte. Need a custom-built computer tailored specifically for your job? We can create a custom PC build to meet your requirements. DM us to find out if we offer any other services or solutions tailored to your needs!`,
      isOpen: false
    },
    {
      question: 'How to Get Started?',
      answer: `We will schedule a free consultation at a time that works best for you. This can be done online or in person, depending on your location. During the consultation, we’ll discuss your project needs and how we can help bring your ideas to life. If you have any questions, feel free to reach out through our <a href="" style="font-weight: 400;">Contact us</a> page.`,
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs.forEach((faq, i) => {
      if (i === index) {
        faq.isOpen = !faq.isOpen;
      } else {
        faq.isOpen = false; // optional: close other FAQs
      }
    });
  }
  constructor(private meta: Meta) { }

  ngOnInit(): void {
this.meta.addTags([
  { name: 'description', content: 'Providing custom software development, web and mobile app solutions to boost your business.' },
  { name: 'keywords', content: 'software development, web apps, mobile apps, digital transformation, custom software, tech solutions, app development' },
  { name: 'author', content: 'TeroBytez' },
  { property: 'og:title', content: 'TeroBytez - Custom Software Development & App Solutions' },
  { property: 'og:description', content: 'Providing custom software development, web and mobile app solutions to boost your business.' },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://terobytez.com' }, // replace with your URL
  // { property: 'og:image', content: 'https://yourwebsite.com/path-to-image.jpg' }, // optional image
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'TeroBytez - Custom Software Development & App Solutions' },
  { name: 'twitter:description', content: 'Providing custom software development, web and mobile app solutions to boost your business.' },
  // { name: 'twitter:image', content: 'https://yourwebsite.com/path-to-image.jpg' } // optional image
]);
  }

}
