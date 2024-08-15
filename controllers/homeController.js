const homeController = {
  getRoot: (req, res) => {
    res.render("home", {
      title: "Home",
    });
  },
};

export default homeController;
