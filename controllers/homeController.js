const homeController = {
  getRoot: (req, res) => {
    console.log("homeController");
    console.log(`req.url: ${req.url}`);
    res.render("home", {
      title: "Home",
    });
  },
};

export default homeController;
