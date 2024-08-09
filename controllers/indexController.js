const indexController = {
  getRoot: (req, res) => {
    console.log("indexController");
    console.log(`req.url: ${req.url}`);
    res.render("index");
  },
};

export default indexController;
