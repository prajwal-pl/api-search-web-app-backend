import { Request, RequestHandler, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

export const getYtData: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { query } = req.query;
  const apiKey = process.env.API_KEY;

  if (!query) {
    res.status(400).json({ error: "Query parameter is required" });
    return;
  }

  if (!apiKey) {
    res.status(500).json({ error: "API key is missing" });
    return;
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${query}&type=video&part=snippet&maxResults=50`
    );
    const data = await response.json();
    res.json(data);
  } catch (error: any) {
    console.error("Error fetching data", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getSearchData: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { query } = req.query;
  const apiKey = process.env.API_KEY;
  const cx = process.env.CX_ID;

  if (!cx) {
    res.status(500).json({ error: "CX_ID is missing" });
    return;
  }
  if (!query) {
    res.status(400).json({ error: "Query parameter is required" });
    return;
  }

  if (!apiKey) {
    res.status(500).json({ error: "API key is missing" });
  }
  try {
    const response = await fetch(
      `https://customsearch.googleapis.com/customsearch/v1?cx=${cx}&q=${query}&key=${apiKey}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error: any) {
    console.log("Error fetching data", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getScholarData: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { query } = req.query;
  const apiKey = process.env.SERP_API_KEY;

  if (!query) {
    res.status(400).json({ error: "Query parameter is required" });
    return;
  }

  if (!apiKey) {
    res.status(500).json({ error: "API key is missing" });
    return;
  }

  try {
    const response = await fetch(
      `https://serpapi.com/search?engine=google_scholar&q=${query}&key=${apiKey}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error: any) {
    console.log("Error fetching data", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
