
import { MenuItem } from './types';

export const RESTAURANT_DETAILS = {
  name: "Madina Hotel",
  address: "Pathergatti, Hyderabad, Telangana 500002, India",
  gps: { lat: 17.3713, lng: 78.4746 },
  contact: "+91 40 2452 4444",
  email: "contact@madinahotel.com"
};

export const GALLERY_IMAGES = [
  { id: 'g1', src: 'https://source.unsplash.com/800x600/?hyderabadi-mutton-biryani-platter', alt: 'Aromatic Mutton Biryani' },
  { id: 'g2', src: 'https://source.unsplash.com/800x600/?haleem-stew-bowl', alt: 'Rich and flavorful Haleem' },
  { id: 'g3', src: 'https://source.unsplash.com/800x600/?indian-kebab-platter-dark', alt: 'Assortment of grilled kebabs' },
  { id: 'g4', src: 'https://source.unsplash.com/800x600/?shahi-tukda-dessert-royal', alt: 'Decadent Shahi Tukda dessert' },
  { id: 'g5', src: 'https://source.unsplash.com/800x600/?elegant-indian-restaurant-interior-dark', alt: 'Elegant dining interior of Madina Hotel' },
  { id: 'g6', src: 'https://source.unsplash.com/800x600/?paya-soup-hyderabadi', alt: 'Hearty Paya soup breakfast' },
  { id: 'g7', src: 'https://source.unsplash.com/800x600/?historic-indian-restaurant-exterior-night', alt: 'Madina Hotel historic exterior at night' },
  { id: 'g8', src: 'https://source.unsplash.com/800x600/?mutton-rogan-josh-bowl-dark', alt: 'Spicy Mutton Rogan Josh' },
  { id: 'g9', src: 'https://source.unsplash.com/800x600/?indian-chef-cooking-tandoor-fire', alt: 'Chef preparing food in a traditional tandoor' },
  { id: 'g10', src: 'https://source.unsplash.com/800x600/?indian-naan-bread-stack-dark', alt: 'Freshly baked Tandoori Naan' },
  { id: 'g11', src: 'https://source.unsplash.com/800x600/?butter-chicken-curry-rich', alt: 'Creamy Butter Chicken' },
  { id: 'g12', src: 'https://source.unsplash.com/800x600/?hyderabad-charminar-evening', alt: 'The ambiance of old Hyderabad' },
];

export const TESTIMONIALS = [
    {
      id: 't1',
      name: 'Sameer K.',
      review: "An absolute institution! The mutton biryani is exactly as I remember it from my childhood. The flavor is timeless. A must-visit in Hyderabad.",
      stars: 5,
    },
    {
      id: 't2',
      name: 'Ayesha S.',
      review: "Visited during Ramzan and their Haleem was out of this world. Rich, flavorful, and authentic. The service was quick despite the huge crowd. 10/10.",
      stars: 5,
    },
    {
      id: 't3',
      name: 'Vikram R.',
      review: "Madina Hotel is not just a restaurant, it's an experience. The Paya soup for breakfast is a tradition for my family. The quality has never dropped in 20 years.",
      stars: 5,
    },
     {
      id: 't4',
      name: 'Priya M.',
      review: "The best Shahi Tukda I have ever had. The perfect end to a perfect meal. The ambiance feels historic and takes you back in time. Highly recommended.",
      stars: 5,
    },
    {
      id: 't5',
      name: 'Farhan A.',
      review: "We ordered the family biryani pack and it was more than enough for five of us. Each bite was full of flavor. This place lives up to its legendary status.",
      stars: 5,
    }
];

export const MENU_ITEMS: MenuItem[] = [
  // Biryani
  { id: 'b1', name: 'Chicken Biryani Plate', description: 'Fragrant basmati rice with succulent chicken pieces, cooked in traditional dum style.', detailedDescription: 'Our legendary Chicken Biryani is a culinary masterpiece. We use only the finest, long-grain Basmati rice, slow-cooked in a sealed handi with tender, marinated chicken pieces. A secret blend of over 20 spices, including saffron and cardamom, infuses every grain with an aroma that tells a story of royal Hyderabadi kitchens. Garnished with crispy fried onions and fresh mint, this is not just a dish, but an experience.', price: 400, category: 'Biryani', imageUrl: 'https://source.unsplash.com/400x300/?chicken-biryani' },
  { id: 'b2', name: 'Chicken Biryani Family (5 Pieces)', description: 'A generous family portion of our signature chicken biryani, perfect for sharing.', price: 940, category: 'Biryani', imageUrl: 'https://source.unsplash.com/400x300/?biryani-family-pack' },
  { id: 'b3', name: 'Mutton Biryani Plate', description: 'Tender mutton and aromatic rice, slow-cooked to perfection with exotic spices.', price: 460, category: 'Biryani', imageUrl: 'https://source.unsplash.com/400x300/?mutton-biryani' },
  { id: 'b4', name: 'Mutton Biryani Family', description: 'A hearty family pack of our rich and flavorful mutton biryani.', price: 1000, category: 'Biryani', imageUrl: 'https://source.unsplash.com/400x300/?mutton-biryani-large' },
  { id: 'b5', name: 'Egg Biryani', description: 'Aromatic basmati rice layered with flavorful spices and boiled eggs.', price: 260, category: 'Biryani', imageUrl: 'https://source.unsplash.com/400x300/?egg-biryani' },
  { id: 'b6', name: 'Veg Biryani Family', description: 'A delightful mix of fresh vegetables and fragrant rice, a treat for vegetarians.', price: 740, category: 'Biryani', imageUrl: 'https://source.unsplash.com/400x300/?veg-biryani' },
  { id: 'b7', name: 'Fish Biryani', description: 'Succulent fish fillets cooked with fragrant basmati rice and a blend of coastal spices.', price: 480, category: 'Biryani', imageUrl: 'https://source.unsplash.com/400x300/?fish-biryani' },
  { id: 'b8', name: 'Prawns Biryani', description: 'Juicy prawns marinated and cooked with long-grain basmati rice.', price: 480, category: 'Biryani', imageUrl: 'https://source.unsplash.com/400x300/?prawn-biryani' },
  { id: 'b9', name: 'Biryani Rice', description: 'Plain, aromatic basmati rice cooked with whole spices, a perfect side.', price: 240, category: 'Biryani', imageUrl: 'https://source.unsplash.com/400x300/?biryani-rice' },
  // Mutton Gravies
  { id: 'mg1', name: 'Mutton Masala', description: 'Tender mutton pieces in a thick, spicy, and flavorful onion-tomato gravy.', price: 480, category: 'Mutton Gravies', imageUrl: 'https://source.unsplash.com/400x300/?mutton-masala' },
  { id: 'mg2', name: 'Mutton Curry', description: 'A classic, homestyle mutton curry with a rich and aromatic sauce.', price: 480, category: 'Mutton Gravies', imageUrl: 'https://source.unsplash.com/400x300/?mutton-curry' },
  { id: 'mg3', name: 'Mutton Chatpata', description: 'A tangy and spicy mutton preparation that will tantalize your taste buds.', price: 480, category: 'Mutton Gravies', imageUrl: 'https://source.unsplash.com/400x300/?spicy-mutton' },
  { id: 'mg4', name: 'Kadai Mutton', description: 'Mutton cooked with bell peppers and freshly ground spices in a traditional kadai.', price: 480, category: 'Mutton Gravies', imageUrl: 'https://source.unsplash.com/400x300/?kadai-mutton' },
  { id: 'mg5', name: 'Achari Mutton', description: 'Mutton cooked in a tangy, pickled gravy for a unique burst of flavor.', price: 480, category: 'Mutton Gravies', imageUrl: 'https://source.unsplash.com/400x300/?achari-mutton' },
  { id: 'mg6', name: 'Afghani Mutton', description: 'A creamy and mild mutton curry with a rich, nutty flavor profile.', price: 480, category: 'Mutton Gravies', imageUrl: 'https://source.unsplash.com/400x300/?afghani-mutton' },
  { id: 'mg7', name: 'Dum ka Mutton', description: 'Mutton slow-cooked in its own juices, resulting in incredibly tender meat.', price: 480, category: 'Mutton Gravies', imageUrl: 'https://source.unsplash.com/400x300/?dum-mutton' },
  { id: 'mg8', name: 'Palak Mutton', description: 'A wholesome combination of tender mutton and nutritious spinach gravy.', price: 480, category: 'Mutton Gravies', imageUrl: 'https://source.unsplash.com/400x300/?palak-mutton' },
  { id: 'mg9', name: 'Hyderabadi Mutton', description: 'A regal, spicy mutton curry straight from the kitchens of Hyderabad.', price: 480, category: 'Mutton Gravies', imageUrl: 'https://source.unsplash.com/400x300/?hyderabadi-mutton' },
  { id: 'mg10', name: 'Kashmir Mutton Rogan Josh', description: 'A signature Kashmiri dish with tender mutton in a rich, aromatic red gravy.', detailedDescription: 'A true taste of the valleys, our Rogan Josh is a culinary icon. Succulent pieces of mutton are braised in a gravy colored and flavored primarily by alkanet flower and Kashmiri chilies. The aromatic curry is a symphony of flavors, with notes of ginger, bay leaves, and cardamom, creating a warming, medium-spicy dish that is both complex and comforting. Served best with a hot Naan Roti.', price: 480, category: 'Mutton Gravies', imageUrl: 'https://source.unsplash.com/400x300/?rogan-josh' },
  { id: 'mg11', name: 'Nawabi Gosht', description: 'A royal mutton preparation with a rich, creamy, and mildly spiced gravy.', price: 480, category: 'Mutton Gravies', imageUrl: 'https://source.unsplash.com/400x300/?nawabi-mutton' },
  // Chicken Gravies
  { id: 'cg1', name: 'Chicken Curry', description: 'A simple yet delicious chicken curry, perfect for a comforting meal.', price: 460, category: 'Chicken Gravies', imageUrl: 'https://source.unsplash.com/400x300/?chicken-curry' },
  { id: 'cg2', name: 'Chicken Masala', description: 'Juicy chicken pieces simmered in a classic, spiced onion-tomato masala.', price: 460, category: 'Chicken Gravies', imageUrl: 'https://source.unsplash.com/400x300/?chicken-masala' },
  { id: 'cg3', name: 'Kadai Chicken', description: 'Chicken cooked with bell peppers and spices in a traditional Indian wok.', price: 460, category: 'Chicken Gravies', imageUrl: 'https://source.unsplash.com/400x300/?kadai-chicken' },
  { id: 'cg4', name: 'Butter Chicken', description: 'A crowd-favorite, tender chicken in a creamy, buttery tomato sauce.', price: 460, category: 'Chicken Gravies', imageUrl: 'https://source.unsplash.com/400x300/?butter-chicken' },
  { id: 'cg5', name: 'Chicken Tikka Masala', description: 'Grilled chicken tikka pieces in a rich, creamy, and flavorful gravy.', price: 460, category: 'Chicken Gravies', imageUrl: 'https://source.unsplash.com/400x300/?chicken-tikka-masala' },
  { id: 'cg6', name: 'Madina Special Chicken Curry', description: 'Our secret house special chicken curry, a must-try for all.', price: 520, category: 'Chicken Gravies', imageUrl: 'https://source.unsplash.com/400x300/?special-chicken-curry' },
  // Kebabs
  { id: 'k1', name: 'Tandoori Chicken (Half)', description: 'Chicken marinated in yogurt and spices, grilled to perfection in a tandoor.', price: 360, category: 'Kebabs', imageUrl: 'https://source.unsplash.com/400x300/?tandoori-chicken' },
  { id: 'k2', name: 'Tandoori Chicken (Full)', description: 'A whole chicken marinated and grilled in a traditional tandoor.', price: 680, category: 'Kebabs', imageUrl: 'https://source.unsplash.com/400x300/?full-tandoori-chicken' },
  { id: 'k3', name: 'Tangri Kabab (Half)', description: 'Juicy chicken drumsticks marinated and grilled to smoky perfection.', price: 360, category: 'Kebabs', imageUrl: 'https://source.unsplash.com/400x300/?tangri-kabab' },
  { id: 'k4', name: 'Chicken Tikka', description: 'Boneless chicken chunks marinated in spices and grilled on skewers.', price: 460, category: 'Kebabs', imageUrl: 'https://source.unsplash.com/400x300/?chicken-tikka' },
  { id: 'k5', name: 'Mutton Tikka', description: 'Tender mutton pieces marinated and grilled to create a smoky appetizer.', price: 460, category: 'Kebabs', imageUrl: 'https://source.unsplash.com/400x300/?mutton-tikka' },
  { id: 'k6', name: 'Kashmiri Mutton Sheek Kabab', description: 'Minced mutton blended with Kashmiri spices, skewered and grilled.', price: 460, category: 'Kebabs', imageUrl: 'https://source.unsplash.com/400x300/?seekh-kebab' },
  // Rotis
  { id: 'r1', name: 'Naan Roti', description: 'Soft, leavened flatbread freshly baked in a tandoor.', price: 30, category: 'Rotis', imageUrl: 'https://source.unsplash.com/400x300/?naan-bread' },
  { id: 'r2', name: 'Rumali Roti', description: 'A thin, soft flatbread, folded like a handkerchief.', price: 30, category: 'Rotis', imageUrl: 'https://source.unsplash.com/400x300/?rumali-roti' },
  { id: 'r3', name: 'Tandoori Roti', description: 'Whole wheat flatbread baked in a traditional clay tandoor.', price: 30, category: 'Rotis', imageUrl: 'https://source.unsplash.com/400x300/?tandoori-roti' },
  { id: 'r4', name: 'Butter Naan', description: 'Soft naan bread brushed with a generous layer of butter.', price: 35, category: 'Rotis', imageUrl: 'https://source.unsplash.com/400x300/?butter-naan' },
  // Chicken Chinese
  { id: 'cc1', name: 'Chilli Chicken Dry', description: 'A spicy and tangy Indo-Chinese appetizer with crispy chicken.', price: 460, category: 'Chicken Chinese', imageUrl: 'https://source.unsplash.com/400x300/?chilli-chicken' },
  { id: 'cc2', name: 'Chicken 65', description: 'A popular spicy, deep-fried chicken dish originating from Chennai.', price: 460, category: 'Chicken Chinese', imageUrl: 'https://source.unsplash.com/400x300/?chicken-65' },
  { id: 'cc3', name: 'Chicken Lollypop', description: 'Frenched chicken winglets, marinated and deep-fried until crisp.', price: 460, category: 'Chicken Chinese', imageUrl: 'https://source.unsplash.com/400x300/?chicken-lollipop' },
  { id: 'cc4', name: 'Chicken Manchuria', description: 'Crispy chicken pieces tossed in a savory and tangy Manchurian sauce.', price: 460, category: 'Chicken Chinese', imageUrl: 'https://source.unsplash.com/400x300/?chicken-manchurian' },
  // Desserts
  { id: 'd1', name: 'Shahi Tukda', description: 'A royal dessert of fried bread slices soaked in rich, saffron-infused milk.', detailedDescription: 'A dessert truly fit for royalty, Shahi Tukda translates to "royal piece". We prepare it the traditional way: thick slices of bread are deep-fried in pure ghee until golden and crisp, then soaked in a fragrant syrup. Finally, they are drenched in a luscious, saffron-infused rabri (thickened sweet milk) and garnished with slivered almonds and pistachios. It\'s a decadent, unforgettable end to any meal.', price: 100, category: 'Desserts', imageUrl: 'https://source.unsplash.com/400x300/?shahi-tukda' },
  { id: 'd2', name: 'Qubani Ka Meetha', description: 'A classic Hyderabadi dessert made from dried apricots and cream.', price: 100, category: 'Desserts', imageUrl: 'https://source.unsplash.com/400x300/?qubani-ka-meetha' },
  { id: 'd3', name: 'Kaddu Ki Kheer', description: 'A unique and delicious pudding made from bottle gourd, milk, and sugar.', price: 100, category: 'Desserts', imageUrl: 'https://source.unsplash.com/400x300/?kaddu-kheer' },
  // Soups
  { id: 's1', name: 'Veg Sweet Corn Soup', description: 'A creamy and comforting soup made with sweet corn and assorted vegetables.', price: 220, category: 'Soups', imageUrl: 'https://source.unsplash.com/400x300/?sweet-corn-soup' },
  { id: 's2', name: 'Chicken Sweet Corn Soup', description: 'A classic sweet corn soup enriched with tender pieces of chicken.', price: 240, category: 'Soups', imageUrl: 'https://source.unsplash.com/400x300/?chicken-corn-soup' },
  { id: 's3', name: 'Mutton Hot & Sour Soup', description: 'A spicy and sour soup with tender mutton pieces, a perfect appetizer.', price: 240, category: 'Soups', imageUrl: 'https://source.unsplash.com/400x300/?mutton-soup' },
  // Noodles
  { id: 'n1', name: 'Veg Noodles', description: 'Stir-fried noodles tossed with a variety of fresh, crunchy vegetables.', price: 320, category: 'Noodles', imageUrl: 'https://source.unsplash.com/400x300/?veg-noodles' },
  { id: 'n2', name: 'Chicken Noodles', description: 'A classic dish of stir-fried noodles with chicken and vegetables.', price: 320, category: 'Noodles', imageUrl: 'https://source.unsplash.com/400x300/?chicken-noodles' },
  // Breakfast
  { id: 'bf1', name: 'Khichdi Khaffa Kheema', description: 'A hearty breakfast of rice and lentils served with spicy minced meat.', price: 140, category: 'Breakfast', imageUrl: 'https://source.unsplash.com/400x300/?kheema-khichdi' },
  { id: 'bf2', name: 'Paya', description: 'A slow-cooked, spicy soup of lamb trotters, a true Hyderabadi delicacy.', price: 220, category: 'Breakfast', imageUrl: 'https://source.unsplash.com/400x300/?paya-soup' },
  // Vegetarian Curries
  { id: 'vc1', name: 'Dal Fry', description: 'Yellow lentils cooked and tempered with aromatic spices.', price: 290, category: 'Vegetarian Curries', imageUrl: 'https://source.unsplash.com/400x300/?dal-fry' },
  { id: 'vc2', name: 'Paneer Butter Masala', description: 'Cottage cheese cubes in a rich, creamy, and buttery tomato gravy.', price: 360, category: 'Vegetarian Curries', imageUrl: 'https://source.unsplash.com/400x300/?paneer-butter-masala' },
  { id: 'vc3', name: 'Kadai Paneer', description: 'Paneer and bell peppers cooked in a spicy masala in a traditional kadai.', price: 360, category: 'Vegetarian Curries', imageUrl: 'https://source.unsplash.com/400x300/?kadai-paneer' },
  { id: 'vc4', name: 'Palak Paneer', description: 'Soft paneer cubes in a smooth, creamy spinach gravy.', price: 360, category: 'Vegetarian Curries', imageUrl: 'https://source.unsplash.com/400x300/?palak-paneer' },
  // Ramzan Special
  { id: 'rs1', name: 'Haleem Plate', description: 'A rich, slow-cooked stew of meat, lentils, and wheat—a Ramzan essential.', price: 350, category: 'Ramzan Special', imageUrl: 'https://source.unsplash.com/400x300/?haleem' },
  // Platters
  { id: 'p1', name: 'Madina Special Platter (Non-Veg)', description: 'A grand assortment of our best non-vegetarian kebabs and tikkas.', price: 1399, category: 'Platters', imageUrl: 'https://source.unsplash.com/400x300/?kebab-platter' },
];

export const RAPIDO_API_ENDPOINT = '/book'; // Mock endpoint