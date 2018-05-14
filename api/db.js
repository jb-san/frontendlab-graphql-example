module.exports = {
  posts: [
    {
      id: 1,
      title: "Lorem Ipsum",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra at lorem vel rhoncus. Praesent quis lacus nisi. Vivamus et risus ex. In hac habitasse platea dictumst. Etiam pharetra diam massa, eget tempus sapien gravida quis. Cras eget neque est. Ut quis arcu nec enim mollis maximus. Phasellus pulvinar sollicitudin dapibus. Curabitur ante felis, auctor et dictum sed, ultricies ac lectus. Proin convallis tortor luctus, venenatis lacus in, pretium tortor. Morbi bibendum, nulla sed fringilla pellentesque, ante dolor tincidunt erat, vel fringilla dolor ligula nec arcu. Ut venenatis lectus at lacus faucibus efficitur. Sed at justo vitae eros iaculis hendrerit. In id nunc urna.",
      views: 254,
      user_id: 1
    },
    {
      id: 2,
      title: "Sic Dolor amet",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra at lorem vel rhoncus. Praesent quis lacus nisi. Vivamus et risus ex. In hac habitasse platea dictumst. Etiam pharetra diam massa, eget tempus sapien gravida quis. Cras eget neque est. Ut quis arcu nec enim mollis maximus. Phasellus pulvinar sollicitudin dapibus. Curabitur ante felis, auctor et dictum sed, ultricies ac lectus. Proin convallis tortor luctus, venenatis lacus in, pretium tortor. Morbi bibendum, nulla sed fringilla pellentesque, ante dolor tincidunt erat, vel fringilla dolor ligula nec arcu. Ut venenatis lectus at lacus faucibus efficitur. Sed at justo vitae eros iaculis hendrerit. In id nunc urna.",
      views: 65,
      user_id: 2
    }
  ],
  users: [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }],
  comments: [
    {
      id: 987,
      post_id: 1,
      body: "Consectetur adipiscing elit",
      date: new Date("2017-07-03")
    },
    {
      id: 995,
      post_id: 1,
      body: "Nam molestie pellentesque dui",
      date: new Date("2017-08-17")
    }
  ]
};
