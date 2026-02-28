import {
  differenceInDays,
  differenceInMonths,
  eachWeekOfInterval,
  eachMonthOfInterval,
  format,
} from "date-fns";
import moment from "moment/moment";

// const moment =require('moment')



  export class ResponseModel {
    // constructor(responseType:){

    // }
     result
    constructor(data){
        this.result=data
    }
    status = 0;
    message = "";
}



export function calculateCounts(startDate, endDate) {
  // Ensure startDate is before endDate
  if (startDate > endDate) {
    return {
      daily: 0,
      weekly: 0,
      months: 0,
    };
  }

  // Daily count
  const daily = differenceInDays(endDate, startDate) + 1; // Including both start and end dates

  // Weekly count
  const weekly = Math.ceil(daily / 7);

  // Monthly count
  const month = eachMonthOfInterval({ start: startDate, end: endDate });
  const monthly = month.length - 1;

  return {
    daily,
    weekly,
    months: monthly,
  };
}

export const categories = [
  // {
  //   name: "Sport",
  //   id: 1,
  // },
  {
    name: "suv",
    id: 2,
  },
 
  {
    name: "Sedan",
    id: 4,
  },
  // {
  //   name: "Coupe",
  //   id: 5,
  // },
];

export const capacity = [
  {
    capacity: 2,
    id: 1,
  },
  {
    capacity: 4,
    id: 2,
  },
  {
    capacity: 6,
    id: 3,
  },
  {
    capacity: 8,
    id: 4,
  },
  
];


export const profileSectionNames = [
  {
    name: "Profile",
    value: "profile",
  },
  {
    name: "Live Bookings",
    value: "livebooking",
  },
  {
    name: "Booking History",
    value: "bookinghistory",
  },
];

export const getDateMonth=(date)=>{
  const formattedDate = moment(date).format("DD MMM");
  return formattedDate
}

export const get24to12=(time)=>{
  const formattedTime = moment(time, 'HH:mm:ss').format('h:mmA')
  return formattedTime
}

const RENTAL_TYPE={
  1:"Delivery",
  2:"Self Pickup"

}
export const getDeliveryType=(value)=>{
return RENTAL_TYPE[value]
}


export const faq=[
  {
    qua: "What documents do I need to rent a car",
    ans: "You will need a valid driver's license, a credit card in the renter's name, and proof of identification (such as a passport or national ID). International renters may require additional documentation, like an International driving LICENSE."
  },
  {
    qua: "Are there any mileage restrictions on the rental vehicles",
    ans: "Our rentals come with unlimited mileage unless otherwise specified. Certain vehicles or special deals may have mileage caps, which will be clearly outlined in your rental agreement."
  },
  {
    qua: " What happens if I return the car late?",
    ans: "If you return the vehicle after the agreed-upon time, you may be charged a late fee. Our late fee is calculated on an hourly or daily rate, depending on how much the return time exceeds the original agreement."
  },
  {
    qua: "What should I do if the car breaks down or if I’m involved in an accident?",
    ans: " In case of a breakdown, please contact our 24/7 roadside assistance number provided with your rental agreement. For accidents, call local emergency services first, then notify us immediately to guide you through the insurance and reporting process."
  },
  {
    qua: "Can I cancel or modify my reservation?",
    ans: "Yes, you can cancel or modify your reservation up to 24 hours before the pick-up time without a fee. Cancellations within 24 hours may incur a fee, depending on the type of reservation and our policy at the time."
  },
  {
    qua: "Can i smoke in the rental car?",
    ans: "The AutoBreeze fleet is strictly non-smoking. Renters and their passengers are not permitted to smoke in any AutoBreeze rental cars. AutoBreeze takes reports of smoking very seriously. If smoke is detected in a returned vehicle, the renter is subject to a fine of up to AED 500."
  },
  {
    qua: "Is there an age requirement to rent a car from AUTOBREEZE CAR RENTAL?",
    ans: "You must be 21+ to rent a car in the UAE and a valid credit card."
  }
]

export const carBack=[
  {
    car_id: 21,
    title: "BMW X5 M50I",
    img: "second.png",
    category: "luxury",
    capacity: 5,
    daily_price: "650 AED",
    weekly_price: "3675 AED",
    monthly_price: "13500 AED",
    section1_title: "Dynamic Performance and Handling",
    section1_description: "The BMW X5 comes with a choice of powerful engines, including a turbocharged inline-six and a V8 option, paired with an intelligent all-wheel-drive system. Its adaptive M suspension and available Dynamic Handling Package enhance agility and provide a sporty driving experience, whether on winding roads or rough terrain.",
    section1_images: "section1_img",
    section2_title: "Luxurious Interior with Advanced Technology",
    section2_description: "The 2023 X5 offers a sophisticated interior with high-quality materials, including Vernasca leather upholstery and fine-wood trim. It features a 12.3-inch iDrive 7.0 infotainment system with Apple CarPlay and Android Auto integration, a digital instrument cluster, and an array of advanced safety features like active blind-spot detection and lane departure warning.",
    section2_images: "section2_img",
    key_features: "Sleek and athletic BMW design.@Spacious and versatile interior with optional third-row seating.@Advanced driver-assistance systems@Customizable ambient lighting and high-end audio",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 1,
    title: "Mercedes Benz G63",
    img: "g63.png",
    category: "luxury",
    capacity: 5,
    daily_price: "1600 AED",
    weekly_price: "9100 AED",
    monthly_price: "24000 AED",
    section1_title: "High-Performance AMG V8 Biturbo Engine",
    section1_description: "The 4.0L V8 engine delivers an impressive 577 horsepower, enabling the G 63 to go from 0 to 60 mph in just 4.5 seconds. It combines raw power with AMG's precision engineering for exceptional on-road and off-road performance.",
    section1_images: "section1_img",
    section2_title: "Luxurious, Tech-Driven Interior",
    section2_description: "Inside, the G 63 features a handcrafted cabin with Nappa leather upholstery, a dual 12.3-inch widescreen display, and the advanced MBUX infotainment system. It offers a blend of luxury, comfort, and cutting-edge technology to elevate every drive.",
    section2_images: "section2_img",
    key_features: "All-Terrain Capability@Iconic Design",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 5,
    title: "Range Rover P530",
    img: "p530.png",
    category: "luxury",
    capacity: 5,
    daily_price: "1400 AED",
    weekly_price: "8400 AED",
    monthly_price: "22000 AED",
    section1_title: "Refined Luxury and Comfort",
    section1_description: "The Vogue offers an opulent interior with premium leather upholstery, heated and ventilated seats, and advanced air suspension, delivering a smooth and luxurious ride regardless of terrain.",
    section1_images: "section1_images",
    section2_title: "Cutting-Edge Technology",
    section2_description: "Equipped with a Touch Pro Duo infotainment system featuring dual high-definition touchscreens, Apple CarPlay, Android Auto, and a Meridian™ sound system, the Vogue ensures a tech-savvy, connected, and immersive driving experience.",
    section2_images: "section2_images",
    key_features: "Innovative Technology@Powerful Performance@Luxurious Interior@Advanced Off-Road Capability",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 3,
    title: "Range Rover Defender",
    img: "defender.png",
    category: "luxury",
    capacity: 5,
    daily_price: "800 AED",
    weekly_price: "4900 AED",
    monthly_price: "14000 AED",
    section1_title: "Exceptional Off-Road Capability",
    section1_description: "The Defender is engineered with Terrain Response 2 and All-Terrain Progress Control, allowing it to conquer challenging terrains effortlessly. Its high ground clearance, adaptive air suspension, and locking differentials make it an unmatched off-road vehicle.",
    section1_images: "section1_images",
    section2_title: "Durable, Modern Design with Practical Features",
    section2_description: "The Defender combines a rugged yet sophisticated design with practical features like a 3D surround camera, a robust exterior, and configurable storage options, ensuring durability and convenience for adventure enthusiasts",
    section2_images: "section2_images",
    key_features: "Innovative Technology@Customizability@Off-Road Capability@Durable Design",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 6,
    title: "Range Rover Sport (P400)",
    img: "p400.png",
    category: "luxury",
    capacity: 5,
    daily_price: "1000 AED",
    weekly_price: "5600 AED",
    monthly_price: "16000 AED",
    section1_title: "Dynamic Performance",
    section1_description: "The Range Rover Sport offers a range of powerful engines, including a 5.0L supercharged V8, delivering up to 575 horsepower. Paired with Dynamic Response and adaptive air suspension, it provides a sporty and agile driving experience with superb handling on all terrains.",
    section1_images: "section1_images",
    section2_title: "Sleek, Sporty Design",
    section2_description: "With its bold, aerodynamic styling and signature floating roof, the Range Rover Sport combines athletic aesthetics with luxury. The modern, tech-focused interior includes premium materials, a dual touchscreen infotainment system, and configurable ambient lighting.",
    section2_images: "section2_images",
    key_features: "Pivi Pro Infotainment@Mild Hybrid Engine@Dynamic Air Suspension@Terrain Response",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 4,
    title: "Mercedes Benz S580",
    img: "s580.png",
    category: "luxury",
    capacity: 5,
    daily_price: "1400 AED",
    weekly_price: "8400 AED",
    monthly_price: "22000 AED",
    section1_title: "4.0L V8 Biturbo Engine with EQ Boost",
    section1_description: "The S 580 features a powerful 4.0L V8 biturbo engine, enhanced by EQ Boost (mild hybrid system), delivering 496 horsepower and 516 lb-ft of torque. This combination provides exceptional performance with smooth, quick acceleration while maintaining efficiency.",
    section1_images: "section1_images",
    section2_title: "First-Class Cabin with Executive Rear Seating",
    section2_description: "The S 580 offers a luxurious, tech-filled interior, featuring high-end Nappa leather, customizable ambient lighting, and executive rear seating with massage functionality, reclining seats, and a dedicated infotainment system for unmatched passenger comfort.",
    section2_images: "section2_images",
    key_features: "Performance@Safety@Luxury Interior@Advanced Technology",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 11,
    title: "Nissan Patrol",
    img: "patrol.png",
    category: "luxury",
    capacity: 7,
    daily_price: "500 AED",
    weekly_price: "3150 AED",
    monthly_price: "8500 AED",
    section1_title: "Powerful V8 Engine",
    section1_description: "The Patrol is equipped with a 5.6L V8 engine, delivering robust performance with around 400 horsepower and 560 Nm of torque. This engine provides impressive power for both on-road and off-road driving, ensuring strong acceleration and towing capability.",
    section1_images: "section1_images",
    section2_title: "Advanced Off-Road Technology",
    section2_description: "The Patrol features a range of off-road technologies, including the Hydraulic Body Motion Control system and an advanced 4WD system with multiple driving modes. These technologies enhance stability, control, and comfort on various terrains, making the Patrol highly capable for off-road adventures.",
    section2_images: "section2_images",
    key_features: "Luxury Interior@Safety Technology@Premium interior with heated seats.@Advanced 4WD",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 2,
    title: "Mercedes S500",
    img: "s500.png",
    category: "luxury",
    capacity: 5,
    daily_price: "1000 AED",
    weekly_price: "5600 AED",
    monthly_price: "16000 AED",
    section1_title: "3.0L Inline-6 Turbo Engine with EQ Boost",
    section1_description: "The S 500 is powered by a smooth and efficient 3.0L inline-6 turbo engine, enhanced with EQ Boost (mild hybrid technology), delivering 429 horsepower and seamless acceleration while optimizing fuel efficiency and reducing emissions.",
    section1_images: "section1_images",
    section2_title: "Advanced MBUX Hyperscreen and AI-Driven Infotainment",
    section2_description: "The S 500 boasts the cutting-edge MBUX Hyperscreen, a massive curved display that spans the dashboard, integrating AI-driven voice controls, navigation, and personalized driver assistance for a futuristic, user-friendly experience.",
    section2_images: "section2_images",
    key_features: "4.0L V8 Biturbo Engine@Luxury Interior",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 12,
    title: "Chevy Tahoe",
    img: "chevy.png",
    category: "luxury",
    capacity: 7,
    daily_price: "500 AED",
    weekly_price: "3150 AED",
    monthly_price: "8500 AED",
    section1_title: "Powerful Engine Options",
    section1_description: "The Tahoe offers a range of engine choices, including a 5.3L V8 with 355 horsepower and an available 6.2L V8 with 420 horsepower. These engines provide robust performance and towing capability, making the Tahoe well-suited for both daily driving and heavy-duty tasks.",
    section1_images: "section1_images",
    section2_title: "Advanced Infotainment System",
    section2_description: "The Tahoe features a large 10.2-inch Chevrolet Infotainment 3 Plus system with a high-resolution touchscreen, Apple CarPlay, and Android Auto integration. This system offers a user-friendly interface with navigation, voice recognition, and connectivity features, enhancing the overall driving experience.",
    section2_images: "section2_images",
    key_features: "Spacious Interior@Advanced Technology@Powerful Performance@Safety Features",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 7,
    title: "Jeep Wrangler (Sahara)",
    img: "sahara.png",
    category: "suv",
    capacity: 5,
    daily_price: "400 AED",
    weekly_price: "2275 AED",
    monthly_price: "7000 AED",
    section1_title: "Advanced 4x4 System",
    section1_description: "The Sahara comes equipped with Jeep's Command-Trac® 4x4 system, featuring a two-speed transfer case and a 4:1 low-range gear ratio for exceptional off-road capability. This system ensures superior traction and control on rugged terrain, making it ideal for off-road adventures.",
    section1_images: "section1_images",
    section2_title: "Luxurious Interior with Modern Technology",
    section2_description: "The 2023 Sahara features a refined interior with premium cloth or leather-trimmed seats, an 8.4-inch Uconnect® touchscreen infotainment system with Apple CarPlay and Android Auto integration, and available advanced safety features such as blind-spot monitoring and rear cross-path detection.",
    section2_images: "section2_images",
    key_features: "Iconic Jeep Wrangler design@Removable doors, roof, and fold-down windshield.@Advanced safety features@Premium leather-trimmed seats, customizable interior.",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 8,
    title: "Ford Bronco",
    img: "ford.png",
    category: "suv",
    capacity: 5,
    daily_price: "200 AED",
    weekly_price: "1250 AED",
    monthly_price: "4000 AED",
    section1_title: "G.O.A.T. Modes™ (Goes Over Any Terrain)",
    section1_description: "The Bronco Sport is equipped with G.O.A.T. Modes™, which include multiple drive modes such as Sand, Mud/Ruts, and Grass/Gravel/Snow. This feature allows the vehicle to adapt to various off-road conditions, enhancing its capability across different terrains.",
    section1_images: "section1_images",
    section2_title: "Standard 4WD and Terrain Management System",
    section2_description: "The 2023 Bronco Sport comes with standard all-wheel drive (AWD) and an advanced Terrain Management System. This system includes an electronically controlled 4WD and multiple terrain settings to optimize performance and traction, making it well-suited for both rugged trails and everyday driving.",
    section2_images: "section2_images",
    key_features: "Rugged, adventure-ready design.@Terrain Management System@Advanced 4x4 capability for all terrains@Spacious interior with flexible cargo space.",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 9,
    title: "Mazda CX 30",
    img: "cx30.png",
    category: "suv",
    capacity: 5,
    daily_price: "185 AED",
    weekly_price: "1120 AED",
    monthly_price: "3600 AED",
    section1_title: "Mazda i-Activ AWD",
    section1_description: "The CX-30 offers Mazda’s i-Activ All-Wheel Drive® system, which continuously monitors driving conditions and adjusts power distribution to optimize traction and stability. This feature enhances performance and safety across various road conditions.",
    section1_images: "section1_images",
    section2_title: "Premium Interior and Advanced Technology",
    section2_description: "The 2023 Bronco Sport comes with standard all-wheel drive (AWD) and an advanced Terrain Management System. This system includes an electronically controlled 4WD and multiple terrain settings to optimize performance and traction, making it well-suited for both rugged trails and everyday driving.",
    section2_images: "section2_images",
    key_features: "Sleek, premium design.@Advanced safety with i-Activsense® technology.@Luxurious interior with high-quality materials.@Excellent fuel efficiency for its class.",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 10,
    title: "Mazda CX5",
    img: "cx5.png",
    category: "suv",
    capacity: 5,
    daily_price: "185 AED",
    weekly_price: "1120 AED",
    monthly_price: "3600 AED",
    section1_title: "Dynamic Pressure Turbo Engine",
    section1_description: "The CX-5 offers an available 2.5L turbocharged engine, delivering up to 250 horsepower and 320 lb-ft of torque. This engine provides robust performance and smooth acceleration, enhancing the driving experience.",
    section1_images: "section1_images",
    section2_title: "i-Activsense® Safety Features",
    section2_description: "The 2023 CX-5 includes Mazda's i-Activsense® suite of advanced safety technologies, such as Adaptive Cruise Control, Blind Spot Monitoring, and Rear Cross Traffic Alert. These features work together to provide enhanced safety and driver confidence on the road.",
    section2_images: "section2_images",
    key_features: "Refined, stylish exterior@Advanced safety features, including Smart City Brake Support.@Premium interior with heated seats.@Superior handling and driving dynamics.",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 13,
    title: "Cadillac CT5",
    img: "ct5.png",
    category: "sedan",
    capacity: 5,
    daily_price: "225 AED",
    weekly_price: "1260 AED",
    monthly_price: "4200 AED",
    section1_title: "Powerful Engine Options",
    section1_description: "The 2024 Cadillac CTS offers a range of engine choices, including a 3.6L V6 engine producing up to 335 horsepower and an available 6.2L V8 engine in the higher trims. These engines deliver strong performance and acceleration, providing a dynamic driving experience.",
    section1_images: "section1_images",
    section2_title: "Cutting-Edge Technology",
    section2_description: "The CTS features Cadillac’s latest technology, including a 10-inch touchscreen infotainment system with Apple CarPlay and Android Auto, a customizable digital driver display, and advanced driver assistance features like adaptive cruise control and lane-keeping assist. This tech suite ensures connectivity, convenience, and safety on the road.",
    section2_images: "section2_images",
    key_features: "2.0L Turbocharged engine, 237 horsepower.@10-speed automatic transmission@10-inch HD touchscreen with CUE® system.@Magnetic Ride Control for Smooth Driving.",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 14,
    title: "Chevrolet Trailblazer",
    img: "cheverolet.png",
    category: "suv",
    capacity: 5,
    daily_price: "185 AED",
    weekly_price: "1120 AED",
    monthly_price: "3600 AED",
    section1_title: "Turbocharged Engine Options",
    section1_description: "The Trailblazer offers a choice between a 1.2L turbocharged engine with 137 horsepower and a more powerful 1.3L turbocharged engine producing 155 horsepower. These engines provide a balance of performance and fuel efficiency, making the Trailblazer a versatile option for various driving needs.",
    section1_images: "section1_images",
    section2_title: "Advanced Safety Features",
    section2_description: "The 2023 Trailblazer includes standard safety features such as Forward Collision Alert, Automatic Emergency Braking, and Lane Keep Assist with Lane Departure Warning.",
    section2_images: "section2_images",
    key_features: "Compact SUV with sporty design.@Excellent fuel efficiency.@Flexible seating and cargo space.@Standard safety features, including forward collision alert.",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 15,
    title: "Infinity QX 50",
    img: "qx5.png",
    category: "suv",
    capacity: 5,
    daily_price: "185 AED",
    weekly_price: "1120 AED",
    monthly_price: "3600 AED",
    section1_title: "Variable Compression Turbocharged Engine",
    section1_description: "The QX50 is powered by a 2.0L VC-Turbo engine, which uses variable compression technology to adjust the engine's compression ratio on-the-fly. This innovation allows the QX50 to deliver up to 268 horsepower and 280 lb-ft of torque, optimizing performance and fuel efficiency based on driving conditions.",
    section1_images: "section1_images",
    section2_title: "ProPILOT Assist",
    section2_description: "The 2023 QX50 features Infiniti's ProPILOT Assist system, which includes adaptive cruise control, lane centering assist, and traffic sign recognition.",
    section2_images: "section2_images",
    key_features: "Luxurious, spacious interior.@Advanced driver-assistance features.@Unique variable-compression engine technology.@Sleek, aerodynamic design.",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 16,
    title: "Nissan Pathfinder",
    img: "pathfinder.png",
    category: "suv",
    capacity: 7,
    daily_price: "325 AED",
    weekly_price: "2100 AED",
    monthly_price: "5500 AED",
    section1_title: "Powerful V6 Engine",
    section1_description: "The 2023 Pathfinder is powered by a 3.5-liter V6 engine that delivers 284 horsepower, providing strong performance and smooth acceleration.",
    section1_images: "section1_images",
    section2_title: "ProPILOT Assist",
    section2_description: "This advanced driver assistance system helps with highway driving by combining adaptive cruise control and lane-centering technology.",
    section2_images: "section2_images",
    key_features: "3.5L V6 engine, 284 horsepower.@9-speed automatic transmission.@8-inch touchscreen with NissanConnect®.@Intelligent 4x4 with multiple drive modes.",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 17,
    title: "GMC Yukon Denali",
    img: "denali.png",
    category: "suv",
    capacity: 7,
    daily_price: "600 AED",
    weekly_price: "3500 AED",
    monthly_price: "12000 AED",
    section1_title: "6.2L V8 engine, 420 horsepower.",
    section1_description: "The 6.2L V8 engine in the Yukon Denali is part of GMC's premium lineup, offering robust towing capacity and a smooth, powerful driving experience.",
    section1_images: "section1_images",
    section2_title: "Magnetic Ride Control with Adaptive Suspension.",
    section2_description: "The GMC Yukon Denali with Magnetic Ride Control and Adaptive Suspension offers advanced technology designed to enhance ride comfort and handling.",
    section2_images: "section2_images",
    key_features: "Luxurious, spacious full-size SUV.@Powerful V8 engine for impressive performance.@Advanced tech features, including a rear camera mirror.@Premium interior with heated and ventilated seats.",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 18,
    title: "Honda ZR-V",
    img: "zrv.png",
    category: "suv",
    capacity: 5,
    daily_price: "185 AED",
    weekly_price: "1200 AED",
    monthly_price: "3200 AED",
    section1_title: "Honda Sensing® Safety Suite",
    section1_description: "The ZR-V comes equipped with Honda Sensing®, a comprehensive suite of safety and driver-assistive technologies.",
    section1_images: "section1_images",
    section2_title: "Sporty Design and Advanced Infotainment",
    section2_description: "The ZR-V features a sleek, sporty exterior design with a dynamic front grille and LED headlights.",
    section2_images: "section2_images",
    key_features: "Advanced Safety Features@Honda Sensing Safety Suite@Modern Infotainment System@Affordable Maintenance",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 20,
    title: "MG HS Trophy",
    img: "trophy.png",
    category: "suv",
    capacity: 5,
    daily_price: "185 AED",
    weekly_price: "1120 AED",
    monthly_price: "3600 AED",
    section1_title: "Turbocharged Engine",
    section1_description: "The HS Trophy is equipped with a 2.0-liter turbocharged engine that delivers strong performance and acceleration, providing a sporty driving experience.",
    section1_images: "section1_images",
    section2_title: "Premium Interior with Advanced Tech",
    section2_description: "The interior features high-quality materials and a range of advanced technologies, including a 10.1-inch touchscreen infotainment system with Apple CarPlay and Android Auto, a digital driver display, and a panoramic sunroof for a more luxurious and connected driving experience.",
    section2_images: "section2_images",
    key_features: "Turbocharged Engine@Panoramic Sunroof@Advanced Safety Features@Luxurious Interior",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 19,
    title: "Nissan X Trail",
    img: "trial.png",
    category: "suv",
    capacity: 7,
    daily_price: "200 AED",
    weekly_price: "1250 AED",
    monthly_price: "4000 AED",
    section1_title: "Intelligent All-Wheel Drive",
    section1_description: "The X-Trail offers an intelligent all-wheel-drive system that automatically adjusts power distribution to the wheels that need it most, enhancing traction and stability on various road conditions.",
    section1_images: "section1_images",
    section2_title: "ProPILOT Assist",
    section2_description: "This advanced driver assistance system includes adaptive cruise control and lane-keeping assist, providing a more convenient and controlled driving experience by helping with steering, acceleration, and braking on highways.",
    section2_images: "section2_images",
    key_features: "Intelligent 4x4@Advanced Safety Features@Modern Infotainment System@Strong Performance",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 22,
    title: "Jeep Gladiator Sport",
    img: "gladitor.png",
    category: "suv",
    capacity: 5,
    daily_price: "185 AED",
    weekly_price: "1120 AED",
    monthly_price: "3600 AED",
    section1_title: "Trail Rated® 4x4 Capability",
    section1_description: "The Gladiator Sport comes with Jeep’s Trail Rated® 4x4 system, which includes features like the Command-Trac® 4WD system with a 2.72:1 low-range gear ratio. This system enhances the Gladiator's off-road performance, providing excellent traction and control in challenging conditions.",
    section1_images: "section1_images",
    section2_title: "Versatile Cargo Space",
    section2_description: "The Gladiator Sport features a 5-foot truck bed with a high-strength steel construction and a variety of practical storage solutions, including a bed-mounted trail rail system.",
    section2_images: "section2_images",
    key_features: "Rugged, off-road capable pickup@Removable doors and roof for an open-air experience.@7-inch Uconnect® touchscreen.@Best-in-class towing capacity.@Durable steel bed with integrated tie-downs",
    key_feature_img: "key_feature_img"
  },
  {
    car_id: 24,
    title: "Renault Koleos",
    img: "koleos.png",
    category: "suv",
    capacity: 5,
    daily_price: "185 AED",
    weekly_price: "1120 AED",
    monthly_price: "3600 AED",
    section1_title: "Intelligent All-Wheel Drive",
    section1_description: "The Renault Koleos comes with an intelligent AWD system that offers exceptional handling and stability in various driving conditions. This system provides three driving modes—2WD, 4WD Auto, and 4WD Lock—allowing drivers to adapt to different terrains effortlessly. The system automatically adjusts torque distribution between the front and rear wheels to ensure optimal traction and control, making it suitable for both urban and off-road journeys.",
    section1_images: "section1_images",
    section2_title: "Premium and Comfortable Interior",
    section2_description: "The 2023 Koleos offers a spacious and refined interior featuring leather upholstery and soft-touch materials throughout the cabin. It includes a large 8.7-inch R-LINK 2 touchscreen infotainment system with Apple CarPlay and Android Auto integration, offering intuitive control over navigation, multimedia, and vehicle settings. The cabin also features advanced safety and comfort amenities such as dual-zone climate control, heated and ventilated front seats, and a panoramic sunroof.",
    section2_images: "section2_images",
    key_features: "Elegant and robust exterior design with a distinctive front grille.@Spacious interior with ample legroom and cargo space.@Advanced safety features@Customizable ambient lighting",
    key_feature_img: "key_feature_img"
  }
]