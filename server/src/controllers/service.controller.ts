import { Request, Response } from "express";
import Service from "../models/service.model";

export const createService = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;

    const newService = new Service({
      name,
      price,
    });

    await newService.save();
    return res.status(201).json(newService);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await Service.find();
    return res.status(200).json(services);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const getServiceById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    return res.status(200).json(service);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const updateService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const updatedService = await Service.findByIdAndUpdate(
      id,
      { name, price },
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    return res.status(200).json(updatedService);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const deleteService = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedService = await Service.findByIdAndDelete(id);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    return res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
