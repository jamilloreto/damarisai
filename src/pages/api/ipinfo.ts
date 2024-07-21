import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    /*
    const ip = requestIp.getClientIp(req);
    if (!ip) return res.status(500).json({});

    const fetching = await fetch(
      `https://api-bdc.net/data/ip-geolocation?ip=${ip}&localityLanguage=es&key=${process.env.BIG_DATA_CLOUD_API_KEY}`
    );

    const geo = await fetching.json();
    if (!geo) return res.status(500).json({});

    const country = geo.country.name;
    const region = geo.location.principalSubdivision;
    const city = geo.location.city;

   */
    return res
      .status(200)
      .json({ country: "Peru", region: "Ancash", city: "Chimbote" });
  } catch (err) {
    return res.status(500).json({});
  }
}
