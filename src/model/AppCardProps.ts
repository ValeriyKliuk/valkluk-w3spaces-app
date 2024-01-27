export interface AppCardProps {
  title: string
  description: string
  appStoreUrl: string
  imageUrl: string
}

export const apps: AppCardProps[] = [
  {
    title: 'NBC mobile application',
    description:
      'National Bank helps keep track of your personal and professional finances.-ALL YOUR FINANCES IN ONE APP.-Accept a transfer on the train, transfer money at a restaurant, pay employees from the cottage and so much more. It’s a great way to manage your accounts separately in one unique app!',
    appStoreUrl:
      'https://apps.apple.com/ca/app/nbc-mobile-application/id476651878',
    imageUrl: 'https://valkluk.w3spaces.com/assets/images/nbc.png'
  },
  {
    title: 'Société des alcools du Québec',
    description:
      'The SAQ, always at your fingertips-With this application, you can add your Inspire card, view your points balance and your exclusive Inspire offers, buy products, synchronize your favourites with your SAQ.COM account and check out the opening hours of the nearest SAQ!',
    appStoreUrl:
      'https://apps.apple.com/ca/app/soci%C3%A9t%C3%A9-des-alcools-du-qu%C3%A9bec/id382431661?l=en-CA',
    imageUrl: 'https://valkluk.w3spaces.com/assets/images/saq.png'
  },
  {
    title: 'BDC Mobile',
    description:
      'BDC Mobile, the smart app for entrepreneurs-Access your account at any time, bank from anywhere-With BDC Mobile, you have all the info you need to manage your account and keep an eye on your BDC activity on the go. You can also monitor your business’s financial health and get actionable tips to reach your goals.',
    appStoreUrl: 'https://apps.apple.com/ca/app/bdc-mobile/id1489622115',
    imageUrl: 'https://valkluk.w3spaces.com/assets/images/bdc.png'
  }
]
