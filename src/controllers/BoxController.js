const Box = require("../models/Box");

class BoxController {
  async store(req, res) {
    const box = await Box.create(req.body);

    return res.json(box);
  }

  async list(req, res) {
    Box.findOne({ title: "Box do Andre" }, function(err, box) {
      if (err) return res.send("erro");

      return res.json(box);
    });
  }

  async listAll(req, res) {
    Box.find(function(err, boxes) {
      if (err) return res.send("Erro");

      return res.json(boxes);
    });
  }

  async delete(req, res) {
    const box = await Box.findByIdAndDelete(req.params.id);

    return res.send("sucesso");
  }

  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: "files",
      options: { sort: { createdAt: -1 } }
    });

    return res.json(box);
  }
}

module.exports = new BoxController();
