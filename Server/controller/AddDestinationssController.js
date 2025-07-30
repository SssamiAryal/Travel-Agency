// AddDestinationssController.js
const AddDestinationss = require("../model/AddDestinationss");

exports.createDestination = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const imageFilename = req.file ? req.file.filename : null;

    const newDestination = await AddDestinationss.create({
      name,
      price,
      description,
      image_url: imageFilename,
    });

    const responseData = {
      ...newDestination.toJSON(),
      image_url: imageFilename ? `/uploads/${imageFilename}` : null,
    };

    res.status(201).json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await AddDestinationss.findAll();

    const destinationsWithPaths = destinations.map((dest) => {
      const destJson = dest.toJSON();
      return {
        ...destJson,
        image_url: destJson.image_url ? `/uploads/${destJson.image_url}` : null,
      };
    });

    res.status(200).json(destinationsWithPaths);
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
    const imageFilename = req.file ? req.file.filename : null;

    const updateData = {
      name,
      price,
      description,
    };
    if (imageFilename) {
      updateData.image_url = imageFilename;
    }

    await AddDestinationss.update(updateData, { where: { id } });

    const updatedDestination = await AddDestinationss.findByPk(id);
    const destJson = updatedDestination.toJSON();

    const responseData = {
      ...destJson,
      image_url: destJson.image_url ? `/uploads/${destJson.image_url}` : null,
    };

    res.status(200).json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
