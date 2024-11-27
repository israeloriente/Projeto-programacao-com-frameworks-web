import { Request, Response } from "express";
import { BarberModel } from "../models/barber.model";

class BarberController {
  public async createBarber(req: Request, res: Response): Promise<void> {
    try {
      const barber = await BarberModel.create(req.body);
      res.status(201).json(barber);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  public async getBarbers(req: Request, res: Response): Promise<void> {
    try {
      const barbers = await BarberModel.find();
      res.status(200).json(barbers);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getBarberById(req: Request, res: Response): Promise<void> {
    try {
      const barber = await BarberModel.findById(req.params.id);
      if (!barber) {
        res.status(404).json({ message: "Barber not found" });
        return;
      }
      res.status(200).json(barber);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async updateBarber(req: Request, res: Response): Promise<void> {
    try {
      const barber = await BarberModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!barber) {
        res.status(404).json({ message: "Barber not found" });
        return;
      }
      res.status(200).json(barber);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  public async deleteBarber(req: Request, res: Response): Promise<void> {
    try {
      const barber = await BarberModel.findByIdAndDelete(req.params.id);
      if (!barber) {
        res.status(404).json({ message: "Barber not found" });
        return;
      }
      res.status(200).json({ message: "Barber deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new BarberController();
