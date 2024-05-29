const products = [
  {
    name: "Airpods",
    images: "/images/airpod.jpg",
    description:
      "The AirPods are wireless earbuds developed by Apple, renowned for their sleek design, ease of use, and seamless integration with Apple devices. Offering high-quality sound and convenient features such as automatic pairing and quick access to Siri, AirPods provide a hassle-free listening experience for users on the go. With their compact charging case and long battery life, they are perfect for everyday use, whether it's for music, calls, or accessing digital assistants.",
    brand: "Apple",
    category: "Electronics",
    price: 20000,
    countInStock: 50,
    rating: 4.8,
    numReviews: 1200,
  },
  {
    name: "Galaxy S23 Ultra",
    images: "/images/s23.jpg",
    description:
      "The Samsung Galaxy S23 Ultra is a top-of-the-line smartphone, boasting premium design, powerful performance, and advanced camera capabilities. With a stunning AMOLED display, cutting-edge processor, and versatile camera system, it offers users an exceptional experience for both productivity and entertainment. The device is expected to feature fast charging, 5G connectivity, and a range of other modern features, making it a flagship contender in the smartphone market.",
    brand: "Samsung",
    category: "Electronics",
    price: 90000,
    countInStock: 0,
    rating: 4.5,
    numReviews: 800,
  },
  {
    name: "MacBook Pro",
    images: "/images/macbook.jpg",
    description:
      "The MacBook Pro is a line of high-performance laptops developed by Apple, designed for professional users and power users who demand top-notch performance, reliability, and versatility. With its sleek aluminum design, stunning Retina display, and powerful hardware, the MacBook Pro is the ultimate tool for creative professionals, developers, and anyone who needs a powerful and portable computing solution. Whether you're editing 4K video, designing graphics, coding software, or simply browsing the web, the MacBook Pro delivers unparalleled performance and efficiency. It features the latest Intel or Apple Silicon processors, high-speed SSD storage, and advanced graphics options for seamless multitasking and graphics-intensive tasks. The MacBook Pro also offers a range of innovative features such as the Touch Bar, Touch ID, and Thunderbolt ports for connecting external devices and accessories. With its long battery life, premium build quality, and macOS operating system, the MacBook Pro is the perfect companion for professionals on the go.",
    brand: "Apple",
    category: "Computers",
    price: 125000,
    countInStock: 20,
    rating: 4.7,
    numReviews: 450,
  },
  {
    name: "Sony WH-1000XM4",
    images: "/images/headset.jpg",
    description:
      "The Sony WH-1000XM4 is a premium wireless noise-cancelling headphone offering an exceptional audio experience and cutting-edge features for audiophiles and travelers alike. Renowned for its industry-leading noise cancellation technology, the WH-1000XM4 creates an immersive listening environment by blocking out ambient noise, allowing you to focus on your music, podcasts, or calls without distractions. With its comfortable and ergonomic design, plush ear cushions, and lightweight build, these headphones are perfect for extended use during long flights, commutes, or work sessions. The WH-1000XM4 features advanced sound quality with powerful, clear, and well-balanced audio reproduction, thanks to Sony's proprietary drivers and digital signal processing. It also offers intuitive touch controls, smart features like Adaptive Sound Control and Speak-to-Chat, and seamless integration with voice assistants such as Google Assistant and Amazon Alexa. With long battery life, quick charging capabilities, and high-quality Bluetooth connectivity, the Sony WH-1000XM4 is the ultimate choice for discerning listeners who demand the best in audio performance, comfort, and convenience.",
    brand: "Sony",
    category: "Audio",
    price: 22900,
    countInStock: 75,
    rating: 4.6,
    numReviews: 1100,
  },
  {
    name: "Nintendo Switch",
    images: "/images/nintedo.jpg",
    description:
      "The Nintendo Switch is a versatile gaming console developed by Nintendo, offering a unique hybrid gaming experience that seamlessly transitions between handheld and home console modes. With its innovative design, the Switch combines the portability of a handheld device with the power of a home gaming system, allowing users to play their favorite games anytime, anywhere. The console features a 6.2-inch touchscreen display with Joy-Con controllers that can be attached to the sides for handheld play or detached for multiplayer gaming. Additionally, the Switch can be docked to a TV for traditional console gaming on the big screen. The Switch offers a diverse library of games, including popular first-party titles like Super Mario, The Legend of Zelda, and Mario Kart, as well as third-party and indie titles. With its modular design, intuitive controls, and multiplayer capabilities, the Nintendo Switch provides endless gaming possibilities for players of all ages and preferences.",
    brand: "Nintendo",
    category: "Gaming",
    price: 31000,
    countInStock: 40,
    rating: 4.9,
    numReviews: 3000,
  },
  {
    name: "Fitbit Charge 4",
    images: "/images/fitness.jpg",
    description:
      "The Fitbit Charge 4 is a feature-rich fitness tracker designed to help users track their health and fitness goals with precision and convenience. Equipped with advanced sensors and technology, the Charge 4 provides accurate tracking of key fitness metrics such as heart rate, steps taken, distance traveled, calories burned, and sleep quality. With built-in GPS, users can accurately track outdoor activities like running, cycling, and hiking without needing to carry a smartphone. The Charge 4 also offers advanced health features such as 24/7 heart rate monitoring, guided breathing sessions, and menstrual health tracking for female users. Additionally, the device provides insights into activity trends, personalized workout recommendations, and motivational challenges to keep users engaged and motivated. With its sleek and water-resistant design, long battery life, and compatibility with the Fitbit app, the Charge 4 is the perfect companion for anyone looking to lead a healthier and more active lifestyle.",
    brand: "Fitbit",
    category: "Wearables",
    price: 30330,
    countInStock: 60,
    rating: 4.3,
    numReviews: 900,
  },
  {
    name: "Dyson V11 Vacuum",
    images: "/images/vacuum.jpg",
    description:
      "The Dyson V11 Vacuum is a cutting-edge cordless vacuum cleaner engineered to deliver powerful suction and exceptional cleaning performance. With its intelligent design and innovative features, the V11 offers a hassle-free cleaning experience for users looking to maintain a pristine home environment. Equipped with Dyson's patented digital motor and advanced cyclone technology, the V11 generates powerful suction to capture dust, dirt, and debris from all floor types, including carpets, hardwood, and tile. The vacuum features multiple cleaning modes and interchangeable brush heads to tackle a variety of cleaning tasks with ease, from deep carpet cleaning to delicate hard floors. The V11 also incorporates intelligent sensors and a high-performance filtration system to capture allergens and expel cleaner air, promoting a healthier home environment. With its lightweight and ergonomic design, long battery life, and convenient docking station, the Dyson V11 Vacuum is the ultimate cleaning solution for busy households.",
    brand: "Dyson",
    category: "Home Appliances",
    price: 46000,
    countInStock: 15,
    rating: 4.8,
    numReviews: 650,
  },
  {
    name: "GoPro HERO9",
    images: "/images/gopro.jpg",
    description:
      "The GoPro HERO9 is a premium action camera designed to capture stunning high-quality videos and photos in any adventure or activity. With its rugged and waterproof construction, the HERO9 is built to withstand the elements and perform reliably in challenging environments. Equipped with a powerful 23.6MP sensor, the HERO9 delivers sharp, detailed 5K video and 20MP photos with vibrant colors and impressive clarity. The camera features advanced stabilization technology to ensure smooth footage, even in fast-paced action scenes or shaky conditions. Additionally, the HERO9 offers a range of creative shooting modes and features, including TimeWarp 3.0 for dynamic time-lapse videos, SuperPhoto for automatically enhanced photos, and HyperSmooth 3.0 for ultra-stabilized video recordings. With its intuitive touchscreen interface, voice control, and convenient mounting options, the GoPro HERO9 is the ultimate companion for adventurers, athletes, and content creators looking to capture their experiences in stunning detail.",

    brand: "GoPro",
    category: "Cameras",
    price: 28000,
    countInStock: 25,
    rating: 4.7,
    numReviews: 550,
  },
  {
    name: "iPad Pro",
    images: "/images/ipad.jpg",
    description:
      "The iPad Pro is Apple's premium line of tablet computers, designed for users seeking powerful performance, versatility, and productivity on the go. With its sleek and lightweight design, the iPad Pro offers the portability of a tablet with the power and capabilities of a laptop. Equipped with Apple's custom-designed A-series chips, the iPad Pro delivers fast and efficient performance for demanding tasks such as gaming, graphic design, video editing, and multitasking. The device features a stunning Liquid Retina display with ProMotion technology, offering a smooth and responsive viewing experience with vivid colors and crisp details. The iPad Pro supports the Apple Pencil and Smart Keyboard, allowing users to sketch, write, and type with precision and ease. With its advanced camera system, Face ID authentication, and support for augmented reality (AR), the iPad Pro is perfect for creative professionals, students, and business users looking to unleash their creativity and productivity anywhere, anytime.",

    brand: "Apple",
    category: "Tablets",
    price: 72000,
    countInStock: 15,
    rating: 4.8,
    numReviews: 700,
  },
  {
    name: "Kindle Paperwhite",
    images: "/images/paperweight.jpg",
    description:
      '"The Kindle Paperwhite is a premium e-reader developed by Amazon, designed to provide users with an exceptional reading experience in any environment. With its high-resolution display, adjustable front light, and glare-free screen, the Paperwhite offers a comfortable reading experience, even in bright sunlight or low-light conditions. The device features a thin and lightweight design, making it easy to hold for extended reading sessions. With access to a vast selection of e-books, audiobooks, and periodicals from the Kindle Store, users can discover and enjoy their favorite titles with ease. The Paperwhite also offers features such as adjustable font sizes, built-in dictionary lookup, and Whispersync technology for seamless syncing of reading progress across devices. With its long battery life and waterproof design, the Kindle Paperwhite is the perfect companion for book lovers, allowing them to enjoy their favorite stories anytime, anywhere."',
    brand: "Amazon",
    category: "E-readers",
    price: 13000,
    countInStock: 0,
    rating: 4.4,
    numReviews: 2000,
  },
];

export default products;
