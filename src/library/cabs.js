const cabsData = [
  {
    id: 1,
    manufacturer: 'Honda',
    model: 'Honda City',
    transmission: 'Automatic',
    rental_price: 100,
    discount: 5,
    engine_type: '3.5L V6',
    image_url:
      'https://images.unsplash.com/photo-1600259828526-77f8617ceec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZGElMjBjaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    seating_capacity: 4,
    body_ype: 'Sedan',
    description:
      'The Honda City is a stylish and fuel-efficient sedan perfect for your daily commutes or longer trips. It features a sleek silver exterior that turns heads wherever you go. The interior offers comfortable seating for up to five passengers, with ample legroom and headspace. The trunk provides generous storage space, accommodating multiple suitcases or bags.',
  },
  {
    id: 2,
    manufacturer: 'Ford',
    model: 'Ford Mustang',
    transmission: 'Automatic',
    rental_price: 100,
    discount: 5,
    engine_type: '2L V4',
    image_url:
      'https://images.unsplash.com/photo-1603553329474-99f95f35394f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9yZCUyME11c3Rhbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    seating_capacity: 4,
    body_ype: 'Coupe',
    description:
      "The Ford Mustang is an iconic sports car known for its powerful performance and striking design. This automatic transmission coupe offers an exhilarating driving experience combined with modern comfort features. With a seating capacity of four, it's an ideal choice for those seeking a blend of style and performance.",
  },
  {
    id: 3,
    manufacturer: 'BMW',
    model: 'BMW 3 Series',
    transmission: 'Automatic',
    rental_price: 100,
    discount: 5,
    engine_type: '5L V8',
    image_url:
      'https://images.unsplash.com/photo-1613027570801-5d2fe8f5e15d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qk1XJTIwMyUyMFNlcmllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    seating_capacity: 5,
    body_ype: 'Sedan',
    description:
      'The BMW 3 Series is a luxury sedan that combines elegance, performance, and cutting-edge technology. With its automatic transmission, you can experience a smooth and dynamic driving experience. The spacious interior provides comfortable seating for up to five passengers, making it suitable for both business and leisure travel.',
  },
  {
    id: 4,
    manufacturer: 'Toyota',
    model: 'Toyota Highlander',
    transmission: 'Automatic',
    rental_price: 100,
    discount: 5,
    engine_type: '3L V6',
    image_url:
      'https://images.unsplash.com/photo-1610855143470-0967a7348972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VG95b3RhJTIwSGlnaGxhbmRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    seating_capacity: 7,
    body_ype: 'SUV',
    description:
      "The Toyota Highlander is a versatile SUV that offers ample space for both passengers and cargo. With its automatic transmission, you can enjoy a comfortable and convenient driving experience. The Highlander's seating capacity of seven makes it an excellent choice for family trips or group outings.",
  },
  {
    id: 5,
    manufacturer: 'Chevrolet',
    model: 'Chevrolet Tahoe',
    transmission: 'Automatic',
    rental_price: 100,
    discount: 5,
    engine_type: '3L V6',
    image_url:
      'https://images.unsplash.com/photo-1564422426545-8a43cd6598ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hldnJvbGV0JTIwVGFob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    seating_capacity: 8,
    body_ype: 'SUV',
    description:
      "The Chevrolet Tahoe is a spacious and powerful SUV that combines style, comfort, and capability. With its automatic transmission, you can effortlessly navigate various terrains. The Tahoe's seating capacity of eight ensures there's room for everyone, making it ideal for larger families or groups.",
  },
  {
    id: 6,
    manufacturer: 'Nissan',
    model: 'Nissan Altima',
    transmission: 'Automatic',
    rental_price: 100,
    discount: 5,
    engine_type: '2.5L V4',
    image_url:
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Tmlzc2FuJTIwQWx0aW1hfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    seating_capacity: 5,
    body_type: 'Sedan',
    description:
      'The Nissan Altima is a reliable and fuel-efficient sedan that offers a comfortable and smooth ride. With its automatic transmission, driving becomes effortless. The Altima provides seating for up to five passengers, making it a practical choice for both daily commutes and longer trips.',
  },
  {
    id: 7,
    manufacturer: 'Mercedes-Benz',
    model: 'Mercedes-Benz C-Class',
    transmission: 'Automatic',
    rental_price: 100,
    discount: 5,
    engine_type: '5L V8',
    image_url:
      'https://images.unsplash.com/photo-1681170368080-f240d1216904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1lcmNlZGVzJTIwQmVueiUyMEMlMjBDbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    seating_capacity: 5,
    body_ype: 'Sedan',
    description:
      'The Mercedes-Benz C-Class is a luxury sedan that combines elegance, performance, and advanced technology. With its automatic transmission, you can enjoy a refined and comfortable driving experience. The C-Class offers seating for up to five passengers, providing a luxurious travel experience.',
  },
];

export default cabsData;
