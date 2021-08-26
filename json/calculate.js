const caluclate = {
  slider: [
    {
      name: "t_car",
      question:
        "In a typical week, how many hours do you spend travelling by car?",
      image: require("../assets/car.png"),
      value: 0.02,
    },
    {
      name: "t_bus",
      question:
        "In a typical week, how many hours do you spend travelling by bus?",
      image: require("../assets/bus.png"),
      value: 0.004,
    },

    {
      name: "t_train",
      question:
        "In a typical week, how many hours do you spend travelling by train?",
      image: require("../assets/train.png"),
      value: 0.003,
    },
    {
      name: "t_carpool",
      question: "In a typical week, how many hours do you spend carpooling?",
      image: require("../assets/carpool.png"),
      value: 0.005,
    },
    {
      name: "t_bicycle",
      question: "In a typical week, how many hours do you spend bicyling?",
      image: require("../assets/bicycle.png"),
      value: 0,
    },
  ],
  mcq: [
    {
      name: "Food",
      goTo: "Clothes",
      question: "Which of the following best represents your food habits?",
      image: require("../assets/food.png"),
      options: [
        { key: "vegan", title: "🥑 Vegan" },
        { key: "vegi", title: "🥗 Vegetarian" },
        { key: "nonveg", title: "🍗 Big on the meat!" },
        { key: "veginonveg", title: "🥑 I try to avoid meat, sometimes" },
      ],
    },

    {
      name: "Transport",
      goTo: "",
      question: "What is your primary mode of transport?",
      image: require("../assets/road.png"),
      options: [
        { key: "Car", title: "🚗 Car", push: "t_car" },
        { key: "Bus", title: "🚌 Bus", push: "t_bus" },
        { key: "Carpool", title: "🚙 Carpool", push: "t_carpool" },
        { key: "Train", title: "🚈 Train", push: "t_train" },
        { key: "Bicycle", title: "🚴🚲 Bicycle", push: "t_bicycle" },
      ],
    },
    {
      name: "Clothes",
      goTo: "Waste",
      question: "In a typical month, how much do you spend on clothes",
      image: require("../assets/shop.png"),
      options: [
        { key: "Thrifty", title: "👕 Thrifty" },
        { key: "Basic", title: "🛍 Basic" },
        { key: "Luxury", title: "💸 Luxury" },
      ],
    },
    {
      name: "Waste",
      goTo: "Transport",
      question: "On average, how much food do you waste?",
      image: require("../assets/waste.png"),
      options: [
        { key: "zero", title: "0%" },
        { key: "ten", title: "0% -10%" },
        { key: "thirty", title: "10%-30%" },
        { key: "more", title: "More than 30%" },
      ],
    },
  ],
};

export default caluclate;
