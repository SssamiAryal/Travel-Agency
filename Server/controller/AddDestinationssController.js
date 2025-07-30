const AddDestinationss = require("../model/AddDestinationss");

exports.createDestination = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image_url = req.file ? req.file.filename : null;

    const newDestination = await AddDestinationss.create({
      name,
      price,
      description,
      image_url,
    });

    res.status(201).json(newDestination);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await AddDestinationss.findAll();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDestination = async (req, res) => {
  try {
    const { id } = req.params;
    await AddDestinationss.destroy({ where: { id } });
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDestination = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description } = req.body;
    const image_url = req.file ? req.file.filename : null;

    await AddDestinationss.update(
      { name, price, description, image_url },
      { where: { id } }
    );

    res.status(200).json({ message: "Updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
