const homeController = {
  getRoot: (req, res) => {
    console.log("homeController");
    console.log(`req.url: ${req.url}`);
    console.log("homeController");
    res.render("home", {
      title: "Home",
    });
  },
};

export default homeController;
